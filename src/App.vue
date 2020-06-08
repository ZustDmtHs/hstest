<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  body {
    margin: 0 8px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  /*公共样式*/

  .nav {
    top: 0;
    position: sticky;
    height: 50px;
    background-color: white
  }

  .flex {
    display: flex;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-around {
    justify-content: space-around;
  }

  .align-center {
    align-items: center;
  }

  .padding {
    padding: 10px;
  }

  .flex-direction {
    flex-direction: column;
  }

  .color-green {
    color: green;
  }

  .color-red {
    color: red;
  }

  .color-blue {
    color: cornflowerblue;
  }

  .font-mini {
    font-size: small;
  }

  .font-large {
    font-size: large;
  }

  .font-medium {
    font-size: 14px;
  }

  .font-bold {
    font-weight: bold;
  }
</style>
