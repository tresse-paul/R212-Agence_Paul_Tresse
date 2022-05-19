<template>
  <div class="flex h-4,5 w-full items-center justify-between border-b border-indigo-100 bg-white bg-opacity-40 px-6">
    <!-- Logo et nom -->
    <div class="flex items-center gap-12">
      <div class="flex items-center gap-1">
        <logo class="fill-indigo-500" />
        <h1 class="text-xl font-bold">Estatery</h1>
      </div>

      <!-- Liste navigation xl >= -->
      <ul class="hidden gap-12 xl:flex">
        <li>Rent</li>
        <li>Buy</li>
        <li>Sell</li>
        <div class="flex items-center gap-2">
          <li>Manage Property</li>
          <chevronDown class="bg-inherit stroke-gray-900" />
        </div>
        <div class="flex items-center gap-2">
          <li>Resources</li>
          <chevronDown class="bg-inherit stroke-gray-900" />
        </div>
      </ul>
    </div>
    <ul class="hidden gap-4 xl:flex">
      <boutton principal>Login</boutton>
      <boutton>Sign up</boutton>
    </ul>

    <!-- Icone menu hamburger < xl -->
    <button class="xl:hidden" aria-haspopup="true" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
      <menuBoutton />
    </button>
  </div>
</template>

<script>
import logo from "./icons/logo.vue";
import menuBoutton from "./icons/menuBoutton.vue";
import boutton from "./boutton.vue";
import chevronDown from "./icons/chevronDown.vue";

export default {
  components: { logo, menuBoutton, boutton, chevronDown },
  data() {
    return {
      menuOuvert: false,
    };
  },
};
</script>