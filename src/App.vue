<template>
  <div id="app">
    <div class="phone-viewport" style="z-index: 25">
      <md-tabs md-sync-route class="md-primary" md-alignment="centered">
        <md-tab id="tab-home" md-icon="home" to="/">
        </md-tab>
        <md-tab id="tab-pages" md-icon="info" to="/about">
        </md-tab>
      </md-tabs>
    </div>
    <router-view />
    <div class="icon">
      <md-speed-dial class="md-bottom-left">
        <md-speed-dial-target>
          <md-icon>add</md-icon>
        </md-speed-dial-target>

        <md-speed-dial-content style="z-index: 26">
          <md-button class="md-icon-button" to="/" style="background-color: #448aff">
            <md-icon >home</md-icon>
          </md-button>

          <md-button class="md-icon-button" to="about" style="background-color: #448aff" >
            <md-icon>info</md-icon>
          </md-button>
        </md-speed-dial-content>
      </md-speed-dial>
    </div>
  </div>
</template>

<script>
import AppComponent from './components/AppComponent.vue'
import About from "./components/About";
import NoFound from "./components/NoFound";

export default {
  name: 'app',
  components: {
      NoFound,
      About,
    AppComponent
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Acme');
  #app {
      font-family: 'Acme', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
  padding-top: 50px;

}
  body{
    overflow-x: hidden;
    background: #0F2027;
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
    height: 2000px;
    margin: 0px;
    padding: 0px;
      font-family: 'Acme', sans-serif;
  }
  html, #app {
    margin: 0px;
    padding: 0px;
    padding-top: 40px;
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
  .icon {
    position: fixed;
    top: 0px;
    width: 10vh;
    height: 100vh;
    left: 0px;
  }
  .phone-viewport{
    position: fixed;
    top: 0px;
    width: 100vw;
  }
</style>
