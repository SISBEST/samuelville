<template>
  <div id="app">
    <div id="nav">
      <router-link to="/blm" style="background-color:black; color:white; padding: 10px;">#BlackLivesMatter</router-link>
      <h1>SamuelVille</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/safety">Safety</router-link> |
      <router-link to="/transit">Transit</router-link> |
      <router-link to="/voting">Voting</router-link> |
      <router-link to="/taxes">Taxes</router-link> |
      <router-link to="/health">Health</router-link> |
      <router-link to="/education">Education</router-link> |
      <a href="https://laws.samuelville.tk">Laws</a> |
      <a href="https://guide.samuelville.tk">Guide</a> |
      <a href="https://help.samuelville.tk">Help</a> |
      <a href="https://blog.samuelville.tk">Blog</a>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@600&display=swap');

#app {
  font-family: 'Catamaran', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00a1de;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #f9461c;
}
</style>
