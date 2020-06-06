<!--行情页面场内期权模块-->
<template>
  <div>
    <div class="flex justify-around align-center" style="border:rgba(129, 129, 129, 0.3) 1px solid;padding: 5px">
      <select class="font-medium">
        <option value="1">50ETF</option>
        <option value="2">...</option>
      </select>
      <span class="color-green">2.6990</span>
      <span class="color-green">-0.0240</span>
      <span class="color-green">-0.88%</span>
    </div>
    <div class="flex justify-between padding">
      <div v-for="(tab,index) in tabs"
           :class="{cur:iscur===index,curstyle:iscur===index}"
           @click="tabChange('Market01_1',index)"
           style="width: 25%;height: 20px;font-size: 14px;">{{tab.tabName}}
      </div>
    </div>
    <keep-alive>
      <component :is="tabView"></component>
    </keep-alive>
  </div>
</template>

<script>
  import Market01_1 from "../components/Market01_1";

  export default {
    name: "Market01",
    components: {Market01_1},
    data() {
      return {
        iscur: 0,
        tabView: 'Market01_1',
        tabs: [
          {
            tabName: '1905(2)'
          },
          {
            tabName: '1906(37)'
          },
          {
            tabName: '1909(128)'
          },
          {
            tabName: '1912(219)'
          }
        ]
      }
    },
    methods: {
      //标签切换
      tabChange: function (tab, index) {
        this.iscur = index;
        this.tabView = tab;
      }
    }
  }
</script>

<style scoped>
  .curstyle {
    border-bottom: #2196f3 2px solid;
    color: #2196f3;
  }
</style>
