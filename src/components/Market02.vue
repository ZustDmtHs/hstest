<!--行情页面科创板模块-->
<template>
  <div class="bg-color2">
    <!--数据概括栏-->
    <div class="flex justify-between bg-color1" style="padding: 5px 20px 5px 20px;margin:15px 0 10px 0">
      <div class="flex flex-direction align-center" v-for="item in indicator">
        <span class="font-medium">{{item.name}}</span>
        <span class="font-large color-green font-bold">{{item.number}}</span>
        <div class="flex">
          <span :class="['font-mini',item.range_bottom>0? 'color-red':'color-green']"
                style="margin-right: 5px">{{item.range_bottom}}</span>
          <span :class="['font-mini',item.range_top>0? 'color-red':'color-green']">{{item.range_top}}%</span>
        </div>
      </div>
    </div>
    <!--详细数据表单  -->
    <div class="bg-color1" style="padding: 5px">
      <table width="100%" style="border-collapse: collapse;">
        <thead>
        <tr>
          <th style="text-align: left">
            <img :src="iconsrc" width="10px" @click="sort()"/>
            <span>全部</span>
            <span class="font-mini">(排序)</span>
          </th>
          <th>最新价</th>
          <th style="text-align:right">涨跌幅</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in MarketList02">
          <td class="flex flex-direction" style="text-align: left">
            <span>{{item.name}}</span>
            <span class="font-mini">{{item.number}}</span>
          </td>
          <td :class="['font-bold',item.price>0? 'color-red':'color-green']">{{item.price}}
          </td>
          <td :class="['font-bold',item.range>0? 'color-red':'color-green']"
              style="text-align:right">{{item.range}}%
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Market02",
    data() {
      return {
        iconsrc: require("@/assets/arrow-down.png"),
        indicator: [
          {
            name: '上证指数',
            number: '2870.60',
            range_bottom: '-11.70',
            range_top: '-0.41'
          },
          {
            name: '深证成指',
            number: '8916.11',
            range_bottom: '-84.08',
            range_top: '-0.93'
          },
          {
            name: '创业扳指',
            number: '1469.31',
            range_bottom: '-9.44',
            range_top: '-0.64'
          }],
        MarketList02: [
          {
            name: '三川智慧',
            number: '300066',
            price: '5.34',
            range: '10.10'
          },
          {
            name: '东材科技',
            number: '601208',
            price: '5.02',
            range: '10.09'
          },
          {
            name: '迪威迅',
            number: '300167',
            price: '7.43',
            range: '10.07'
          },
          {
            name: '天龙光电',
            number: '300029',
            price: '7.43',
            range: '10.07'
          },
          {
            name: '宁波韵升',
            number: '600366',
            price: '8.53',
            range: '10.06'
          },
          {
            name: '正海磁材',
            number: '300224',
            price: '7.00',
            range: '10.06'
          },
          {
            name: '华虹计通',
            number: '300330',
            price: '9.08',
            range: '10.06'
          },
          {
            name: '兴森科技',
            number: '002436',
            price: '5.80',
            range: '10.06'
          }
        ]
      }
    },
    methods: {
      sort() {
        if (this.iconsrc === require("@/assets/arrow-down.png")) this.iconsrc = require("@/assets/arrow-up.png");
        else this.iconsrc = require("@/assets/arrow-down.png");
      }
    }
  }
</script>

<style scoped>
  span {
    margin: 2px;
  }

  tr {
    border-bottom: rgba(129, 129, 129, 0.3) 1px solid;
  }

  th {
    padding: 5px;
    font-weight: normal;
  }

  .bg-color1 {
    background-color: #F5F5F5;
  }

  .bg-color2 {
    background-color: #eeeeee;
  }
</style>
