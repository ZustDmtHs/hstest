<!--行情页面场内期权模块子模块1-->
<template>
  <div>
    <!--按钮栏-->
    <div class="flex justify-around" style="margin-bottom: 10px">
      <button style="background-color: red;" class="btnstyle">认购</button>
      <button style="background-color: #1a9f0c;" class="btnstyle">认沽</button>
    </div>
    <!--详细数据表单-->
    <table width="100%" style="border-collapse: collapse;">
      <thead>
      <tr class="bgcolor font-medium" style="height: 30px">
        <th>涨跌幅(%)</th>
        <th>现价</th>
        <th>行权价</th>
        <th>现价</th>
        <th>涨跌幅(%)</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list" style="height: 50px" class="font-medium">
        <td :class="[item.range1>0? 'color-red':'color-green']">{{item.range1}}</td>
        <td :class="[item.range1>0? 'color-red':'color-green']">{{item.curprice1}}</td>
        <td :class="['bgcolor','font-bold',item.price>0? 'color-red':'color-green']"
            style="color: #1b81ed;">{{item.price}}
        </td>
        <td :class="[item.range2>0? 'color-red':'color-green']">{{item.curprice2}}</td>
        <td :class="[item.range2>0? 'color-red':'color-green']">{{item.range2}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Market01_1",
    data() {
      return {
        list: [
          {
            range1: '-12.66',
            curprice1: '0.2000',
            price: '2.5000',
            curprice2: '0.0004',
            range2: '-20.00'
          },
          {
            range1: '-13.96',
            curprice1: '0.1510',
            price: '2.5500',
            curprice2: '0.0003',
            range2: '-70.00'
          },
          {
            range1: '-18.28',
            curprice1: '0.1028',
            price: '2.6000',
            curprice2: '0.0013',
            range2: '-43.48'
          },
          {
            range1: '-29.82',
            curprice1: '0.0560',
            price: '2.6500',
            curprice2: '0.0048',
            range2: '-25.00'
          },
          {
            range1: '-49.68',
            curprice1: '0.0206',
            price: '2.7000',
            curprice2: '0.0189',
            range2: '9.25'
          },
          {
            range1: '-66.47',
            curprice1: '0.0056',
            price: '2.7500',
            curprice2: '0.0534',
            range2: '25.35'
          },
          {
            range1: '-80.95',
            curprice1: '0.0012',
            price: '2.8000',
            curprice2: '0.1000',
            range2: '24.69'
          },
          {
            range1: '-68.42',
            curprice1: '0.0006',
            price: '2.8500',
            curprice2: '0.1480',
            range2: '16.17'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  th {
    font-weight: normal;
  }

  .bgcolor {
    background-color: #d6d3ce;
  }

  .btnstyle {
    color: white;
    border: none;
    width: 40%;
    height: 30px
  }
</style>
