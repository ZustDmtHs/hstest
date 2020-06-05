<!--底部导航栏组件-->
<template>
  <div style="display: flex;justify-content: center">
    <ul>
      <li><router-link to="/home" tag="a" active-class="curtab">自选</router-link></li>
      <li><router-link to="/market" tag="a" active-class="curtab">行值</router-link></li>
      <li><router-link to="/trade" tag="a" active-class="curtab">交易</router-link></li>
      <li><router-link to="" tag="a" active-class="">我的</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "v-footer",
    data(){
      return{
        navBarFixed:false,
      }
    }
  }
</script>

<style scoped>
  ul {
    padding-left: 0px;
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
  }

  li {
    display: inline;
    height: 100%;
    width: calc((100%) / 4);
  }

  a{
    cursor: pointer;/*光标移上去变成小手*/
    padding-top: 28px;
    text-decoration: none;
    color: black;
  }
  .curtab{
    font-weight: bold;
    text-decoration: underline black;
  }
</style>
