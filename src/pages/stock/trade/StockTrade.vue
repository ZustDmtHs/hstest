<template>
  <!--1. root view-->
  <div class="stock_trade">
    <!--1.1 top bar-->
    <div class="universal_top_bar">
      <img v-bind:src="backIcon"/><span>下单</span><img v-bind:src="searchIcon"/>
    </div>
    <!--1.2 stock_base_info-->
    <div>
      <span>{{stockInfo.code}}</span><span>{{stockInfo.name}}</span>
      <span>{{stockInfo.unknown1}}</span><span>{{stockInfo.unknown2}}</span>
    </div>
    <!--1.3 stock_tables-->
    <div>
      <span>周一</span><span>{{stockInfo.orderPriceList[0].price}}</span>
      <span>{{stockInfo.orderPriceList[0].count}}</span>
      <span>周一</span><span>{{stockInfo.salePriceList[0].price}}</span>
      <span>{{stockInfo.salePriceList[0].count}}</span>
      <span>周二</span><span>{{stockInfo.orderPriceList[1].price}}</span>
      <span>{{stockInfo.orderPriceList[1].count}}</span>
      <span>周二</span><span>{{stockInfo.salePriceList[1].price}}</span>
      <span>{{stockInfo.salePriceList[1].count}}</span>
      <span>周三</span><span>{{stockInfo.orderPriceList[2].price}}</span>
      <span>{{stockInfo.orderPriceList[2].count}}</span>
      <span>周三</span><span>{{stockInfo.salePriceList[2].price}}</span>
      <span>{{stockInfo.salePriceList[2].count}}</span>
      <span>周四</span><span>{{stockInfo.orderPriceList[3].price}}</span>
      <span>{{stockInfo.orderPriceList[3].count}}</span>
      <span>周四</span><span>{{stockInfo.salePriceList[3].price}}</span>
      <span>{{stockInfo.salePriceList[3].count}}</span>
      <span>周五</span><span>{{stockInfo.orderPriceList[4].price}}</span>
      <span>{{stockInfo.orderPriceList[4].count}}</span>
      <span>周五</span><span>{{stockInfo.salePriceList[4].price}}</span>
      <span>{{stockInfo.salePriceList[4].count}}</span>
    </div>
    <!--1.4 purchase_block-->
    <div>
      <div>
        <span>价格类型</span>
        <input type="radio" name="stock_trade_purchase_type" value="对手价" v-model="purchaseInfo.type">
        <span>对手价</span>
        <input type="radio" name="stock_trade_purchase_type" value="跟价" v-model="purchaseInfo.type">
        <span>跟价</span>
      </div>
      <div>
        <span>委托价格</span>
        <img v-bind:src="minusIcon" @click="minusPrice()"/>
        <span ref="purchasePrice">{{purchaseInfo.price}}</span>
        <img v-bind:src="plusIcon" @click="plusPrice()"/>
      </div>
      <div>
        <span>委托数量</span>
        <img v-bind:src="minusIcon" @click="minusCount()"/>
        <span>{{purchaseInfo.count}}</span><img v-bind:src="plusIcon" @click="plusCount()"/>
      </div>
      <span ref="maxOrderText">最大可买：{{purchaseInfo.maxOrder}}</span>
      <span ref="maxSaleText">最大可卖：{{purchaseInfo.maxSale}}</span>
      <div>
        <span ref="orderButton">买入</span><span ref="saleButton">卖出</span>
      </div>
      <span>提示：委托后90秒内未成交，系统将自动撤单</span>
    </div>
    <!--1.5 conform_dialog-->
    <div v-show="popup">
      <div>
        <span>委托确认</span>
        <span>股票名称：{{stockInfo.name}}</span><span>代码：{{stockInfo.code}}</span>
        <span ref="finalPrice">委托价格：{{purchaseInfo.price}}</span>
        <span>方向：{{purchaseInfo.direction}}</span>
        <span>委托数量：{{purchaseInfo.count}}</span>
        <span>确定</span><span @click="popup=0">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StockTrade",
    mounted() {
      document.body.style.position = 'absolute';
      document.body.style.height = '100%';
      document.body.style.width = '100%';
      document.body.style.margin = '0';
      document.getElementById('app').style.position = 'absolute';
      document.getElementById('app').style.height = '100%';
      document.getElementById('app').style.width = '100%';
      document.getElementById('app').style.margin = '0';
      this.checkCount();
      this.checkPriceType();
    },
    methods: {
      minusPrice: function () {
        if (String(this.purchaseInfo.type) === String('跟价')) {
          const temp = this.purchaseInfo.price - 0.0001;
          Number(temp).toFixed(4);
          if (temp > 0) {
            this.purchaseInfo.price = temp;
          } else {
            alert("价格必须大于0！");
          }
        }
      },
      plusPrice: function () {
        if (String(this.purchaseInfo.type) === String('跟价')) {
          const temp = this.purchaseInfo.price + 0.0001;
          Number(temp).toFixed(4);
          this.purchaseInfo.price = temp;
        }
      },
      minusCount: function () {
        const temp = this.purchaseInfo.count - 100;
        if (temp > 0) {
          this.purchaseInfo.count = temp;
        } else {
          alert("数量必须大于0！");
        }
      },
      plusCount: function () {
        const temp = Number(this.purchaseInfo.count) + 100;
        if (Number(temp) > Number(this.purchaseInfo.maxSale)
          && Number(temp) > Number(this.purchaseInfo.maxOrder)) {
          alert("数量不能同时大于最大可买数和最大可卖数！");
        } else {
          this.purchaseInfo.count = temp;
        }
      },
      checkCount: function () {
        if (Number(this.purchaseInfo.count) > Number(this.purchaseInfo.maxOrder)) {
          this.$refs.maxOrderText.style.color = '#ff0000';
          this.$refs.orderButton.style.background = '#ff0000';
          this.$refs.orderButton.onclick = null;
        } else {
          this.$refs.maxOrderText.style.color = '#1a9f0c';
          this.$refs.orderButton.style.background = '#1a9f0c';
          this.$refs.orderButton.onclick = this.showOrderDialog;
        }
        if (Number(this.purchaseInfo.count) > Number(this.purchaseInfo.maxSale)) {
          this.$refs.maxSaleText.style.color = '#ff0000';
          this.$refs.saleButton.style.background = '#ff0000';
          this.$refs.saleButton.onclick = null;
        } else {
          this.$refs.maxSaleText.style.color = '#1a9f0c';
          this.$refs.saleButton.style.background = '#1a9f0c';
          this.$refs.saleButton.onclick = this.showSaleDialog;
        }
      },
      checkPriceType: function () {
        if (String(this.purchaseInfo.type) === String('对手价')) {
          this.$refs.purchasePrice.innerHTML = '对手价';
        } else if (String(this.purchaseInfo.type) === String('跟价')) {
          this.$refs.purchasePrice.innerHTML = this.purchaseInfo.price;
        }
      },
      showOrderDialog: function () {
        this.purchaseInfo.direction = '买入';
        this.showConfirmDialog();
      },
      showSaleDialog: function () {
        this.purchaseInfo.direction = '卖出';
        this.showConfirmDialog();
      },
      showConfirmDialog: function () {
        this.popup = 1;
        if (String(this.purchaseInfo.type) === String('对手价')) {
          this.$refs.finalPrice.innerHTML = '对手价';
        } else if (String(this.purchaseInfo.type) === String('跟价')) {
          this.$refs.finalPrice.innerHTML = this.purchaseInfo.price;
        }
      }
    },
    watch: {
      'purchaseInfo.count': 'checkCount',
      'purchaseInfo.type': 'checkPriceType'

    },
    data() {
      return {
        //1. view data
        backIcon: require('../../../assets/search.png'),
        searchIcon: require('../../../assets/search.png'),
        minusIcon: require('../../../assets/search.png'),
        plusIcon: require('../../../assets/search.png'),
        popup: 0,

        //2. model data
        stockInfo: {
          //2.1 base info
          code: "601318",
          name: "中国平安",
          unknown1: "0.6038",
          unknown2: "-5.09",
          //2.2 order price list
          orderPriceList: [
            {
              price: 0.6306,
              count: 20
            },
            {
              price: 0.6306,
              count: 20
            },
            {
              price: 0.6306,
              count: 20
            },
            {
              price: 0.6306,
              count: 20
            },
            {
              price: 0.6306,
              count: 20
            }
          ],
          //2.3 sale price list
          salePriceList: [
            {
              price: 0.6306,
              count: 20
            },
            {
              price: 0.6306,
              count: 20
            },
            {
              price: 0.6306,
              count: 20
            },
            {
              price: 0.6306,
              count: 20
            },
            {
              price: 0.6306,
              count: 20
            }
          ]
        },

        //3. purchase_info
        purchaseInfo: {
          type: '对手价',
          price: 0.6306,
          count: 4800,
          maxOrder: 5000,
          maxSale: 6000,
          direction: '买入'
        },
      }
    }
  }
</script>

<style scoped>
  /*1 initialize page_universal style*/
  /*1.1 initialize page_root styles*/
  .stock_trade {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background: #1f1f1f;
    width: 100%;
    height: 100%;
  }

  /*1.2 initialize page_universal styles*/
  .stock_trade > * {
    color: #F5F5F5;
    background: #1f1f1f;
    box-sizing: border-box;
  }

  /*2 page-special styles*/
  /*2.1 stock_trade_top_bar*/
  .universal_top_bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .universal_top_bar > img:nth-child(1),
  .universal_top_bar > img:nth-child(3) {
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
  }

  .universal_top_bar > span:nth-child(2) {
    font-size: 1rem;
    padding: 0.3rem 3rem;
    background: #F5F5F5;
    color: black;
  }

  /*2.2 stock_base_info styles*/
  .stock_trade > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .stock_trade > div:nth-child(2) > span {
    text-align: center;
  }

  .stock_trade > div:nth-child(2) > span:nth-child(1),
  .stock_trade > div:nth-child(2) > span:nth-child(2) {
    font-size: 1.6rem;
    width: 30%;
  }

  .stock_trade > div:nth-child(2) > span:nth-child(3),
  .stock_trade > div:nth-child(2) > span:nth-child(4) {
    width: 20%;
    color: #1a9f0c;
  }

  /*2.3 stock_tables styles*/
  .stock_trade > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
  }

  .stock_trade > div:nth-child(3) > span {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    width: 16%;
    color: #1a9f0c;
  }

  .stock_trade > div:nth-child(3) > span:nth-child(1),
  .stock_trade > div:nth-child(3) > span:nth-child(4),
  .stock_trade > div:nth-child(3) > span:nth-child(7),
  .stock_trade > div:nth-child(3) > span:nth-child(10),
  .stock_trade > div:nth-child(3) > span:nth-child(13),
  .stock_trade > div:nth-child(3) > span:nth-child(16),
  .stock_trade > div:nth-child(3) > span:nth-child(19),
  .stock_trade > div:nth-child(3) > span:nth-child(22),
  .stock_trade > div:nth-child(3) > span:nth-child(25),
  .stock_trade > div:nth-child(3) > span:nth-child(28) {
    color: #F5F5F5;
  }

  /*2.4 purchase_block styles*/
  .stock_trade > div:nth-child(4) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(1) {
    display: flex;
    padding-top: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(1) > span:nth-child(1) {
    width: 60%;
    text-align: left;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(2) {
    display: flex;
    padding-top: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(2) > span:nth-child(1) {
    width: 60%;
    text-align: left;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(2) > span:nth-child(3) {
    width: 16%;
    text-align: left;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(2) > img {
    height: 1rem;
    width: 1rem;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(3) {
    display: flex;
    padding-top: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(3) > span:nth-child(3) {
    width: 16%;
    text-align: left;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(3) > span:nth-child(1) {
    width: 60%;
    text-align: left;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(3) > img {
    height: 1rem;
    width: 1rem;
  }

  .stock_trade > div:nth-child(4) > span:nth-child(4),
  .stock_trade > div:nth-child(4) > span:nth-child(5) {
    padding-top: 0.5rem;
    width: 40%;
    text-align: left;
    align-self: flex-end;
    color: #1a9f0c;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(6) {
    display: flex;
    padding-top: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(6) > span:nth-child(1),
  .stock_trade > div:nth-child(4) > div:nth-child(6) > span:nth-child(2) {
    width: 40%;
    text-align: center;
    vertical-align: center;
    padding: 0.5rem;
  }

  .stock_trade > div:nth-child(4) > div:nth-child(6) > span:nth-child(2),
  .stock_trade > div:nth-child(4) > div:nth-child(6) > span:nth-child(1) {
    background: #1a9f0c;
    color: #F5F5F5;
  }

  .stock_trade > div:nth-child(4) > span:nth-child(7) {
    padding-top: 0.5rem;
    width: 100%;
    text-align: left;
    align-self: flex-start;
  }

  /*2.5 confirm_dialog styles*/
  .stock_trade > div:nth-child(5) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: rgba(129, 129, 129, 0.5);
    width: 100%;
    height: 100%;
  }

  .stock_trade > div:nth-child(5) > div:nth-child(1) {
    position: absolute;
    width: 100%;
    background: #F5F5F5;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding-bottom: 1rem;
  }

  .stock_trade > div:nth-child(5) > div:nth-child(1) > span {
    margin-top: 0.6rem;
    color: #1f1f1f;
  }

  .stock_trade > div:nth-child(5) > div:nth-child(1) > span:nth-child(1) {
    font-size: 1.4rem;
    width: 100%;
  }

  .stock_trade > div:nth-child(5) > div:nth-child(1) > span:nth-child(2),
  .stock_trade > div:nth-child(5) > div:nth-child(1) > span:nth-child(3),
  .stock_trade > div:nth-child(5) > div:nth-child(1) > span:nth-child(4),
  .stock_trade > div:nth-child(5) > div:nth-child(1) > span:nth-child(5) {
    width: 45%;
    text-align: left;
  }

  .stock_trade > div:nth-child(5) > div:nth-child(1) > span:nth-child(6) {
    width: 90%;
    text-align: left;
  }

  .stock_trade > div:nth-child(5) > div:nth-child(1) > span:nth-child(7) {
    background: #1a9f0c;
    position: relative;
    right: 1rem;
    width: 36%;
    text-align: center;
    line-height: 2rem;
    color: #F5F5F5;
  }

  .stock_trade > div:nth-child(5) > div:nth-child(1) > span:nth-child(8) {
    background: #818181;
    position: relative;
    left: 1rem;
    width: 36%;
    text-align: center;
    line-height: 2rem;
    color: #F5F5F5;
  }
</style>
