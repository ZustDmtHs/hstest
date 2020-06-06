<!--科创板-->
<template>
  <div style="display: flex;justify-content: center;align-items: center;margin-top: 15px">
    <table style="width: 100%;">
      <thead>
      <tr>
        <th>名称代码</th>
        <th>最新</th>
        <th>涨幅</th>
        <th>涨跌</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in homeList02" class="home_tr">
        <td >
          {{item.name}}
          <div>
            <span style="background-color: sandybrown">{{item.mark}}</span>
            <span>{{item.lable}}</span>
          </div>
        </td>
        <td :style="{color:(item.update_condition>0?'red':'green')}">{{item.update_condition}}</td>
        <td :style="{color:(item.range_increase>0?'red':'green')}">{{item.range_increase}}%</td>
        <td :style="{color:(item.range_fail>0?'red':'green')}">{{item.range_fail}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Home02",
    data(){
      return{
        homeList02:[{
          name:'东方国信',
          lable:'300166',
          update_condition:'12.40',
          range_increase:'+1.72',
          range_fail:'0.21'
        },{
          name:'科锐国际',
          mark:'优',
          lable:'300166',
          update_condition:'-884.96',
          range_increase:'-2.41',
          range_fail:'-21.83'
        },{
          name:'贵州茅台',
          mark:'优',
          lable:'300166',
          update_condition:'12.40',
          range_increase:'+1.72',
          range_fail:'0.21'
        },{
          name:'中国平安',
          mark:'优',
          lable:'300166',
          update_condition:'77.87',
          range_increase:'-1.55',
          range_fail:'-1.23'
        },{
          name:'宁波银行',
          lable:'300166',
          update_condition:'12.40',
          range_increase:'+1.72',
          range_fail:'0.21'
        },{
          name:'工商银行',
          lable:'300166',
          update_condition:'34.51',
          range_increase:'-2.38',
          range_fail:'-0.84'
        },{
          name:'平治信息',
          lable:'300166',
          update_condition:'34.51',
          range_increase:'-2.38',
          range_fail:'-0.84'
        },{
          name:'欧派家居',
          lable:'300166',
          update_condition:'34.51',
          range_increase:'-2.38',
          range_fail:'-0.84'
        },{
          name:'尚品宅家',
          lable:'300166',
          update_condition:'34.51',
          range_increase:'-2.38',
          range_fail:'-0.84'
        },]
      }
    }
  }
</script>

<style scoped>
  table{
    border-collapse: collapse;
  }
  thead{
    border: black 1px solid;
    text-align: center;
  }
  .home_tr{
    height: 50px;
    font-size: 16px;
    border-bottom: rgba(129,129,129,0.3) 1px solid;
    text-align: left;
  }
  span{
    font-size: 14px;
    /*display: block;*/
  }

</style>
