<template>
  <div class="door-area">
    <!-- classe: valor -->
    <!-- so aplica a classe css se a porta nao estiver aberta -->
    <div class="door-frame" :class="{ selected: selected && !open }">
      <GiftHere v-if="open && hasGift" />
    </div>
    <div class="door" @click="selected = !selected" :class="{ open }">
      <div class="number" :class="{ selected }">
        {{ number }}
      </div>
      <!-- .stop faz o evento click nao se propagar para a door  -->
      <div class="knob" :class="{ selected }" @click.stop="open=true"></div>
    </div>
  </div>
</template>

<script>
import GiftHere from "./GiftHere.vue";
export default {
  name: "DoorHere",
  components: { GiftHere },
  props: {
    number: {},
    hasGift: { type: Boolean },
  },
  data: function () {
    return {
      open: false,
      selected: false,
    };
  },
};
</script>

<style>
:root {
  --door-border: 5px brown solid;
  --selected-border: 5px yellow solid;
}

.door-area {
  position: relative;
  width: 200px;
  height: 310px;
  border-bottom: 10px solid #aaa;
  margin-bottom: 20px;

  font-size: 3rem;

  display: flex;
  justify-content: center;

  /* background: rgba(0, 255, 42, 0.094); */
}

.door-frame {
  position: absolute;
  height: 300px;
  width: 180px;

  border-left: var(--door-border);
  border-top: var(--door-border);
  border-right: var(--door-border);

  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.door {
  position: absolute;
  top: 5px;
  height: 295px;
  width: 170px;

  background: chocolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}


.door:hover{
    background: rgb(224, 111, 30);
    cursor: pointer;
}

/* maçaneta */
.door .knob {
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: brown;

  align-self: flex-start;
  margin-top: 60px;
}

.door-frame.selected {
  border-left: var(--selected-border);
  border-right: var(--selected-border);
  border-top: var(--selected-border);
}

.door .number.selected {
  color: yellow;
}
.door > .knob.selected {
  background-color: yellow;
}

.door.open{
    background: #0002;
}

.door.open .knob{
    display: none;
}

.door.open .number{
    display: none;
}
</style>