<template>
  <div class="mx-4 hidden items-center justify-between lg:flex">
    <h2 class="justify-center text-4xl font-bold">Search properties to rent</h2>
    <div class="relative pt-2">
      <input
        class="h-12 w-80 rounded-lg border-2 border-indigo-100 bg-white px-4 focus:outline-none"
        type="search"
        name="selectSearch"
        placeholder="Search with Search Bar"
      />
      <button type="submit" class="absolute right-0 top-auto my-4 mr-4">
        <chevronDown class="stroke-indigo-500" />
      </button>
    </div>
  </div>
  <div class="mx-4 hidden h-24 w-auto items-center gap-8 bg-white px-8 py-6 lg:flex">
    <div class="flex w-full flex-col gap-1">
      <p class="opacity-50">Location</p>
      <p class="text-lg font-bold">New York, USA</p>
    </div>
    <span class="h-11 w-px bg-indigo-100"></span>
    <div class="flex w-full flex-col gap-1">
      <p class="opacity-50">When</p>
      <p class="text-lg font-bold">Select Move-in Date</p>
    </div>
    <span class="h-11 w-px bg-indigo-100"></span>
    <div class="flex w-full flex-col gap-1">
      <p class="opacity-50">Price</p>
      <p class="text-lg font-bold">$500-$2,500</p>
    </div>
    <span class="h-11 w-px bg-indigo-100"></span>
    <boutton class="h-full w-28">Search</boutton>
  </div>

  <div class="mx-4 flex flex-col gap-10 lg:hidden">
    <h2 class="flex justify-center text-4xl font-bold">Search properties to rent</h2>
    <div class="relative pt-2">
      <input
        class="h-12 w-full rounded-lg border-2 border-indigo-100 bg-white px-4 focus:outline-none"
        type="search"
        name="selectSearch"
        placeholder="Search with Search Bar"
      />
      <button type="submit" class="absolute right-0 top-auto my-4 mr-4">
        <chevronDown class="stroke-indigo-500" />
      </button>
    </div>
    <div class="relative">
      <input type="search" name="search" placeholder="Search location" class="h-16 w-full rounded-lg px-4" />
      <button class="absolute right-4 top-2 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500">
        <search />
      </button>
    </div>
  </div>
</template>

<script>
import chevronDown from "./icons/chevronDown.vue";
import search from "./icons/search.vue";
import boutton from "./boutton.vue";

export default {
  components: { chevronDown, search, boutton },
};
</script>