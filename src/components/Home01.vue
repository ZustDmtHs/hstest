<!--场内期权-->
<template>
    <div class="tabla_div">
      <table style="width: 100%;">
        <thead>
          <tr style="height: 40px">
            <th>名称代码</th>
            <th>最新</th>
            <th>涨幅</th>
            <th>涨跌</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in homeList01" class="home_tr">
            <td>
              {{item.name}}
              <span>{{item.lable}}</span>
            </td>
            <td>{{item.update_condition}}</td>
            <td>{{item.range_increase}}%</td>
            <td>{{item.range_fail}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        name: "Home01",
      data(){
          return{
            homeList01:[{
              name:'50ETF的5月2750',
              lable:'10001203',
              update_condition:'0.0066',
              range_increase:'-66.47',
              range_fail:'2.7500'
            },{
              name:'50ETF的5月2750',
              lable:'10001204',
              update_condition:'0.0066',
              range_increase:'0.47',
              range_fail:'-2.7500'
            },{
              name:'50ETF的5月2750',
              lable:'10001203',
              update_condition:'-0.0099',
              range_increase:'-6.47',
              range_fail:'-2.7500'
            },{
              name:'50ETF的5月2750',
              lable:'10001204',
              update_condition:'0.678',
              range_increase:'-47.47',
              range_fail:'2.7500'
            }]
          }
      }
    }
</script>

<style scoped>
  .tabla_div{
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px
  }
  table{
    border-collapse: collapse;
  }
  thead{
    border-bottom: rgba(129,129,129,0.3) 1px solid;
    text-align: center;
  }
  td{

  }
  .home_tr{
    height: 60px;
    font-size: 16px;
    border-bottom: rgba(129,129,129,0.3) 1px solid;
    text-align: left;
  }
  span{
    font-size: 14px;
    display: block;
  }
  td:nth-child(2),td:nth-child(3){
    color: green;
  }
  td:nth-child(4){
    color: skyblue;
  }

</style>
