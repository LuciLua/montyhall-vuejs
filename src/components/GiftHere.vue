<template>
  <div class="gift">
      <!-- fitas do presente -->
    <div class="gift-tie-1"></div>
    <div class="gift-tie-2"></div>
      <!-- resto do presente -->
    <div class="gift-top"></div>
    <div class="gift-body">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "GiftHere"
};
</script>

<style>
.gift{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

}

.gift-top{
  width: 100px;
  height: 25px;
  background: #7aa944;
}

.gift-body{
  width: 90px;
  height: 60px;

  background: #5c7e32;
}

.gift-tie-1{
  position: absolute;
  width: 15px;
  height: 85px;
  background: rgb(174, 3, 3);
}
.gift-tie-2{
  position: absolute;
  top: 40px;
  width: 90px;
  height:  15px;
  background: rgb(174, 3, 3);
}
</style>