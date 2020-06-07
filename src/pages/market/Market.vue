<!--行情页面-->
<template>
  <div>
    <div>
      <div class="flex align-center justify-center nav">
        <span v-for="(tab,index) in tabs"
              :class="{cur:iscur===index,curcolor:iscur===index}"
              @click="tabChange('Market' + '0'+(index + 1),index)"
              style="padding: 5px 10px">{{tab.tabName}}</span>
        <img :src="imgUrl" width="25px" style="margin-left:35%;position: absolute">
      </div>
      <keep-alive>
        <component :is="tabView" style="margin-bottom: 50px"></component>
      </keep-alive>
    </div>
    <v-footer></v-footer>
  </div>

</template>

<script>
  import Market01 from "../../components/Market01";
  import Market02 from "../../components/Market02";

  export default {
    name: "Market",
    components: {Market01, Market02},
    data() {
      return {
        iscur: 0,
        tabView: 'Market01',
        imgUrl: require("@/assets/search.png"),
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

  .curcolor {
    background-color: #cccccc;
  }
</style>
