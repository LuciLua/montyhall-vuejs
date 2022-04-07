<template>
  <div class="credits">
    <a href="https://github.com/LuciLua/montyhall-vuejs" target="_blank">
      <div class="github">{{ user }}</div>
      <img src="gh.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "CreditsHere",
  props: {
    user: { type: String },
  },
  data: function () {
    return {};
  },
};
</script>

<style>
.credits img {
  width: 40px;
  height: 40px;

  filter: invert(10);
  -webkit-filter: invert(10);
}

.credits .github {
  display: none;
  position: absolute;
  bottom: 40px;
  left: -10px;
}
.credits:hover .github {
  display: flex;
  position: absolute;
  bottom: -1px;
  left: 15px;
  font-size: 0.8rem;
}

.credits a{
  color: rgba(255, 255, 255, 0.174);
}
</style>