<!--自选页面-->
<template>
  <div class="over">
    <div >
      <div class="flex align-center justify-center nav">
        <span v-for="(tab,index) in tabs"
              :class="{cur:iscur===index,curcolor:iscur===index}"
              @click="tabChange('Home' + '0'+(index + 1),index)"
              style="padding: 5px 10px">{{tab.tabName}}</span>
        <img :src="imgUrl" width="25px" style="margin-left: 35%;position: absolute">
      </div>
      <keep-alive>
        <component :is="tabView" style="margin-bottom: 50px"></component>
      </keep-alive>
    </div>
    <v-footer></v-footer>
  </div>

</template>

<script>
  import Home01 from "../../components/Home01";
  import Home02 from "../../components/Home02";

  export default {
    name: "Home",
    components: {Home01, Home02},
    data() {
      return {
        iscur: 0,
        tabView: 'Home01',
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
