<template>
  <div id="app">
    <h1>Problema de Monty Hall 🚪</h1>
    <!-- hasGift consigo passar como boolean por causa dos dois pontos, sem eles, seria string -->
    <DoorHere number="1" :hasGift="false"/>
  </div>
</template>

<script>
import DoorHere from "./components/DoorHere.vue";
export default {
  name: "App",
  components: {
    DoorHere
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
}

body {
  color: #fff;
  background: linear-gradient(#1e3c72, #2a5298);
  min-height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
  margin-top: 60px;
}
</style>