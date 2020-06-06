<!--自选页面-->
<template>
  <div>
    <div style="margin-bottom: 15px">
        <span v-for="(tab,index) in tabs"
              :class="{cur:iscur===index,curcolor:iscur===index}"
              @click="tabChange('home' + '0'+(index + 1),index)">{{tab.tabName}}</span>
    </div>
    <div>
      <keep-alive>
        <component :is="tabView"></component>
      </keep-alive>
    </div>
    <v-footer></v-footer>
  </div>

</template>

<script>
  /*添加组件*/
  import Home01 from "../../components/Home01";
  import Home02 from "../../components/Home02";

  export default {
    name: "Home",
    components: {Home01, Home02},
    data() {
      return {
        iscur: 0,
        tabView: 'Home01',
        /*顶部标签切换*/
        tabs: [{
          tabName: "场内期权"
        }, {
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
  a:active {
    color: green;
  }
  span {
    border: #818181 1px solid;
    padding: 5px;
  }

  .curcolor {
    background-color: #cccccc;
  }
</style>
