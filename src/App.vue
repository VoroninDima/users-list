<template>
  <div id="app">
    <div class="routers-wrapper">
      <nav class="navbar">
        <router-link class="navbar__logo" to="/">UsersList</router-link>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: 'App',
    methods: mapActions(['FETCH_USERS_INFO']),
    mounted () {
      this.FETCH_USERS_INFO()
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: linear-gradient(0deg, rgba(87,56,94,1) 0%, rgba(152,78,98,1) 100%);
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body, h1, h2, span, p, a, ul, li {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .routers-wrapper {
    min-width: 400px;
    background-color: #fff;
    min-height: 500px;
  }

  .navbar {
    padding: 30px 0;
    background-color: #593a5b;
    color: white;
    text-align: center;
  }

  .navbar__logo {
    color: #fff;
    font-size: 22px;
    text-decoration: none;
  }

  @media only screen and (max-width: 500px) {
    .routers-wrapper {
      width: 100%;
      min-width: auto;
      min-height: auto;
      height: 100vh;
    }
  }
</style>
