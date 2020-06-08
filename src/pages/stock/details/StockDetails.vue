<template>
  <!--1. root view-->
  <div class="stock_details">
    <!--1.1 top bar-->
    <div class="universal_top_bar">
      <img v-bind:src="backIcon"/><span>{{stockInfo.name}}</span><img v-bind:src="searchIcon"/>
    </div>
    <!--1.2 stock_base_info-->
    <div>
      <div>
        <span>{{stockInfo.price}}</span>
        <div>
          <span>{{stockInfo.unknown1}}</span>
          <span>{{stockInfo.unknown2}}</span>
        </div>
        <span>交易时间: {{stockInfo.tradeFreeTime}}</span>
      </div>
      <div>
        <span>今升</span><span>昨收</span>
        <span>{{stockInfo.todayStartPrice}}</span><span>{{stockInfo.yesterdayEndPrice}}</span>
        <span>成交量</span><span>持仓图</span>
        <span>{{stockInfo.tradeCount}}</span><span>{{stockInfo.holdingCount}}</span>
      </div>
    </div>
    <!--1.3 stock_price_info-->
    <div>
      <span>最高</span><span>{{stockInfo.highest}}</span>
      <span>涨停价</span><span>{{stockInfo.topLimit}}</span>
      <span>外盘</span><span>{{stockInfo.outer}}</span>
      <span>最低</span><span>{{stockInfo.lowest}}</span>
      <span>跌停价</span><span>{{stockInfo.bottomLimit}}</span>
      <span>内盘</span><span>{{stockInfo.inner}}</span>
    </div>
    <!--1.4 stock_graphs-->
    <div>
      block1.4
    </div>
    <!--1.5 stock_tables-->
    <div>
      <span>买盘档</span><span>卖盘档</span>
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
  </div>
</template>

<script>
  export default {
    name: "StockDetails",
    mounted() {
      document.body.style.position = 'absolute';
      document.body.style.height = '100%';
      document.body.style.width = '100%';
      document.body.style.margin = '0';
      document.getElementById('app').style.position = 'absolute';
      document.getElementById('app').style.height = '100%';
      document.getElementById('app').style.width = '100%';
      document.getElementById('app').style.margin = '0';
    },
    data() {
      return {
        //1. view data
        backIcon: require('../../../assets/search.png'),
        searchIcon: require('../../../assets/search.png'),

        //2. model data
        stockInfo: {
          //2.1 base info
          name: "中国平安",
          price: "2.6800",
          unknown1: "-0.0290",
          unknown2: "-1.07%",
          tradeFreeTime: "09:30-11:30 13:00-14:57",
          yesterdayEndPrice: "0.6600",
          todayStartPrice: "0.6900",
          tradeCount: "313",
          holdingCount: "123",
          //2.2 price info
          highest: "0.6606",
          lowest: "0.6606",
          topLimit: "34天？",
          bottomLimit: "0.6606",
          outer: "0.6606",
          inner: "0.6606",
          //2.3 order price list
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
          //2.4 sale price list
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
      }
    }
  }
</script>

<style scoped>
  /*1 initialize page_universal style*/
  /*1.1 initialize page_root styles*/
  .stock_details {
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
  .stock_details > * {
    color: #F5F5F5;
    background: #1f1f1f;
    box-sizing: border-box;
  }

  /*2 universal component styles*/
  /*2.1 universal_top_bar*/
  /*2.1.1 universal_top_bar container*/
  .universal_top_bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  /*2.1.2 universal_top_bar icons in left/right*/
  .universal_top_bar > img:nth-child(1),
  .universal_top_bar > img:nth-child(3) {
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
  }

  /*2.1.2 universal_top_bar title in middle*/
  .universal_top_bar > span:nth-child(2) {
    font-size: 1.2rem;
  }

  /*3. page_special styles*/
  /*3.1 stock_base_info styles*/
  .stock_details > div:nth-child(2) {
    padding: 0.6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }

  /*3.1.1 stock_base_info price styles*/
  .stock_details > div:nth-child(2) span {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }

  .stock_details > div:nth-child(2) > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: start;
    width: 55%;
  }

  .stock_details > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) {
    line-height: 100%;
    width: 60%;
    font-size: 2.4rem;
    color: #1a9f0c;
  }

  .stock_details > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;
    width: 40%;
    font-size: 1rem;
  }

  .stock_details > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) {
    width: 100%;
    font-size: 1rem;
    word-break: break-all;
    line-height: 1.6rem;
    vertical-align: center;
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
  }

  .stock_details > div:nth-child(2) > div:nth-child(2) {
    display: flex;
    width: 40%;
    flex-direction: row;
    justify-content: flex-start;
    align-content: stretch;
    flex-wrap: wrap;
  }

  .stock_details > div:nth-child(2) > div:nth-child(2) > span {
    width: 50%;
  }

  /*3.2 stock_price_info styles*/
  .stock_details > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .stock_details > div:nth-child(3) > span {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    width: 18%;
    text-align: left;
  }

  .stock_details > div:nth-child(3) > span:nth-child(1),
  .stock_details > div:nth-child(3) > span:nth-child(5),
  .stock_details > div:nth-child(3) > span:nth-child(7),
  .stock_details > div:nth-child(3) > span:nth-child(11) {
    width: 11%;
  }

  .stock_details > div:nth-child(3) > span:nth-child(3),
  .stock_details > div:nth-child(3) > span:nth-child(9) {
    width: 17%;
  }

  .stock_details > div:nth-child(3) > span:nth-child(3),
  .stock_details > div:nth-child(3) > span:nth-child(5),
  .stock_details > div:nth-child(3) > span:nth-child(9),
  .stock_details > div:nth-child(3) > span:nth-child(11) {
    background: #F5F5F5;
    color: #1f1f1f;
    text-align: center;
  }

  /*3.3 stock_graphs styles*/
  .stock_details > div:nth-child(4) {
    height: 16rem;
    background: #818181;
  }

  /*3.4 stock_tables styles*/
  .stock_details > div:nth-child(5) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
  }

  .stock_details > div:nth-child(5) > span {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    width: 16%;
    color: #1a9f0c;
  }

  .stock_details > div:nth-child(5) > span:nth-child(1),
  .stock_details > div:nth-child(5) > span:nth-child(2),
  .stock_details > div:nth-child(5) > span:nth-child(3),
  .stock_details > div:nth-child(5) > span:nth-child(6),
  .stock_details > div:nth-child(5) > span:nth-child(9),
  .stock_details > div:nth-child(5) > span:nth-child(12),
  .stock_details > div:nth-child(5) > span:nth-child(15),
  .stock_details > div:nth-child(5) > span:nth-child(18),
  .stock_details > div:nth-child(5) > span:nth-child(21),
  .stock_details > div:nth-child(5) > span:nth-child(24),
  .stock_details > div:nth-child(5) > span:nth-child(27),
  .stock_details > div:nth-child(5) > span:nth-child(30) {
    color: #F5F5F5;
  }

  .stock_details > div:nth-child(5) > span:nth-child(1),
  .stock_details > div:nth-child(5) > span:nth-child(2) {
    width: 50%;
  }
</style>
