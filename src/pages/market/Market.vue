<!--行情页面-->
<template>
  <div>
    <div>
      <div>
        <span v-for="(tab,index) in tabs"
              :class="{cur:iscur===index,curcolor:iscur===index}"
              @click="tabChange('tab' + '0'+(index + 1),index)">{{tab.tabName}}</span>
      </div>
      <keep-alive>
        <component :is="tabView"></component>
      </keep-alive>
    </div>
    <v-footer></v-footer>
  </div>

</template>

<script>
  import Tab01 from "../../components/Home01";
  import Tab02 from "../../components/Home02";

  export default {
    name: "Market",
    components: {Tab01, Tab02},
    data() {
      return {
        iscur: 0,
        tabView: 'Tab01',
        tabs: [
          {
            tabName: "场内期权"
          },
          {
            tabName: "科创板"
          }]
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
  span {
    border: #818181 1px solid;
    padding: 5px;
  }
  .curcolor{
    background-color: #cccccc;
  }
</style>
