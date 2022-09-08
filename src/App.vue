<template>
  <div id="app">
    <div id="nav">
      <vue-particles
        color="#555"
        :particleOpacity="0.7"
        :particlesNumber="150"
        shapeType="circle"
        :particleSize="4"
        linesColor="#555"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
        class="lizi"
      />
    </div>
    <!-- <router-link to="/home">home</router-link> -->
    <!-- <router-link to="/login">login</router-link> -->

    <router-view/>
  </div>
</template>

<style>
  body{
    width: 100%;
    background-color: rgb(239, 239, 239);
  }
  .lizi{
    position:fixed;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    width:100%;
    z-index: -1;
  }
</style>
