<!--底部导航栏组件-->
<template>
  <div>
    <ul>
      <li>
        <router-link to="/home" tag="a" active-class="curtab">自选</router-link>
      </li>
      <li>
        <router-link to="/market" tag="a" active-class="curtab">行情</router-link>
      </li>
      <li>
        <router-link to="/trade" tag="a" active-class="curtab">交易</router-link>
      </li>
      <li>
        <router-link to="" tag="a" active-class="">我的</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "v-footer",
    data() {
      return {
        navBarFixed: false,
      }
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white
  }

  ul {
    padding-left: 0px;
    width: 100%;
    display: flex;
  }

  li {
    display: inline;
    height: 100%;
    width: calc((100%) / 4);
  }

  a {
    cursor: pointer; /*光标移上去变成小手*/
    padding-top: 28px;
    text-decoration: none;
    color: black;
  }

  .curtab {
    font-weight: bold;
    text-decoration: underline black;
  }
</style>
