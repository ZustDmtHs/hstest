<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  /*公共样式*/

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
