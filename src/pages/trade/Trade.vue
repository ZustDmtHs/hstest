<!--交易页面-->
<template>
  <div>
    <h4>交易</h4>
    <div class="tabla_div">
      <div id="table_01" style="height: 400px;width: 100%">
        <table  class="case_01">
          <tr>
            <td>{{data11}}</td>
            <td>{{data12}}</td>
            <td>{{data13}}</td>
          </tr>
          <tr>
            <td>{{data21}}</td>
            <td>{{data22}}</td>
            <td>{{data23}}</td>
          </tr>
          <tr>
            <td>{{data31}}</td>
            <td>{{data32}}</td>
            <td>{{data33}}</td>
          </tr>
          <tr>
            <td>{{data41}}</td>
            <td>{{data42}}</td>
            <td>{{data43}}</td>
          </tr>
        </table>
        <table class="case_02">
          <tr>
            <td>{{t2_data11}}</td>
            <td>{{t2_data12}}</td>
            <td>{{t2_data13}}</td>
            <td>{{t2_data14}}</td>
          </tr>
        </table>
        <table id="table_03" class="case_03">
          <thead>
          <tr>
            <th>{{t3_data11}}</th>
            <th>{{t3_data12}}</th>
            <th>{{t3_data13}}</th>
            <th>{{t3_data14}}</th>
            <th>{{t3_data15}}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                    {{t3_data21_t}}
                  </td>
                </tr>
                <tr>
                  <td>
                    {{t3_data21_d}}
                  </td>
                </tr>
              </table>
            </td>
            <td>{{t3_data22}}</td>
            <td>{{t3_data23}}</td>
            <td>{{t3_data24}}</td>
            <td>{{t3_data25}}</td>
          </tr>
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                    {{t3_data31_t}}
                  </td>
                </tr>
                <tr>
                  <td>
                    {{t3_data31_d}}
                  </td>
                </tr>
              </table>
            </td>
            <td>{{t3_data32}}</td>
            <td>{{t3_data33}}</td>
            <td>{{t3_data34}}</td>
            <td>{{t3_data35}}</td>
          </tr>
          </tbody>
        </table>
        <div class="background">
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  export default {
    name: "Trade",
    // el:"#table_01",
    data(){
      return{
        //table1
        data11: "-376.00",
        data12: "45203.22",
        data13: "593.00",

        data21: "浮动盈亏",
        data22: "总权益",
        data23: "期权市场",

        data31: "0.00",
        data32: "44610.22",
        data33: "0.00",

        data41: "冻结资产",
        data42: "可用资金",
        data43: "股票市场",

        //table2
        t2_data11:"下单",
        t2_data12:"当日委托",
        t2_data13:"当日成交",
        t2_data14:"查询",

        //table3
        t3_data11: "名称代码",
        t3_data12: "持仓数量",
        t3_data13: "成交价格",
        t3_data14: "市值",
        t3_data15: "盈亏",

        t3_data21_t: "50ETF购5月2700",
        t3_data21_d: "10002233",
        t3_data22: "30",
        t3_data23: "0.0023",
        t3_data24: "660.00",
        t3_data25: "-30.00",

        t3_data31_t: "50ETF购",
        t3_data31_d: "603833",
        t3_data31: "欧派家具",
        t3_data32: "100000",
        t3_data33: "109.40",
        t3_data34: "12000.00",
        t3_data35: "2100.00",
      }
    }
  }
</script>

<style scoped>
  .case_01
  {
    font-size: 14px;
    width: 100%;
    height: 20%;
    text-align: center;
    border: 1px solid black;
  }
  .case_01 tr:first-of-type td:first-of-type
  {
    color: green;
  }
  .case_02
  {
    font-size: 16px;
    width: 100%;
    height: 20%;
    text-align: center;
    border: 1px solid rgb(235,235,235);
    border-bottom: 15px solid rgb(235,235,235);
  }
  .case_03
  {
    font-size: 14px;
    width: 100%;
    height: 30%;
  }
  .case_03 td
  {
    width: 20%;
  }
  .case_03 th
  {
    color: rgb(200,200,200);
    text-align: left;
  }
  .case_03 tr:nth-of-type(2) td:nth-of-type(5)
  {
    color: green;
  }
  .case_03 tr:nth-of-type(3) td:nth-of-type(5)
  {
    color: red;
  }
  .case_03 table tr:nth-of-type(2) td
  {
    color: rgb(200,200,200);
  }
  .background
  {
    margin-top: -110px;
    width: 100%;
    height: 60%;
    background-color: rgb(242,242,242)
  }
</style>

