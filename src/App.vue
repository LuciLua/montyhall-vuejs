<template>
  <div id="app">
    <h1>Problema de Monty Hall 🚪</h1>
    <!-- hasGift consigo passar como boolean por causa dos dois pontos, sem eles, seria string -->
    <div class="form">
      <!-- só vai aparecer aqui se nao estiver startado -->
      <div v-if="!started">
        <label for="portsAmount">Quantas Portas?</label>
        <input
          type="text"
          id="portsAmount"
          size="3"
          v-model.number="portsAmount"
        />
        <!-- v-model causa um two way data binding -->
        <!-- Two-way binding gives components in your application a way to share data -->
        <!-- atualizacao de acordo com o que o usuario digitar -->
      </div>
      <div v-if="!started">
        <label for="selectedPort">Qual a porta premiada?</label>
        <input
          type="text"
          id="selectedPort"
          size="3"
          v-model.number="selectedPort"
        />
      </div>

      <button v-if="!started" @click="started = true">Iniciar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>
    <div class="doors" v-if="started">
      <!-- percorre i para cada porta determinado pela portsAmount -->
      <div v-for="i in portsAmount" :key="i">
        <DoorHere :hasGift="i == selectedPort" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>
import DoorHere from "./components/DoorHere.vue";
export default {
  name: "App",
  components: {
    DoorHere,
  },
  data: function () {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: null,
    };
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

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 1.5rem;

  border-radius: 10px;
  border: none;
  padding: 5px 7px;
}

.form input{
    margin-left: 10px;
}

.form button{
    width: 100%;
    margin-top: 20px;
    background: rgb(11, 161, 255);
    color: #fff;
    cursor: pointer;
}
.form button:hover{
    background: rgb(10, 140, 221);
}

.form button:active{
    background: rgb(9, 131, 207);
}

.doors {
  display: flex;
  align-self: stretch;
  flex-wrap: wrap;

  justify-content: space-around;
}
</style>