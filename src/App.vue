<template>
  <div id="app">
    <nav>
      <router-link to="/">Domek</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import AppComponent from './components/AppComponent.vue'

export default {
  name: 'app',
  components: {
    AppComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
  padding-top: 50px;

}
  body{
    background: #0F2027;
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027);

  }
  nav{
    padding: 20px 20px 20px 0;
  }
  nav a{
    padding: 10px;
    text-decoration: none;
    background-color: #6a787f;
    border-radius: 3px;
    color: #3c2f63;
    font-weight: bold;
    margin-right: 15px;
  }
</style>
