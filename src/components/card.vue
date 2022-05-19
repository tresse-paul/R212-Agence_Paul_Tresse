<template>
  <figure>
    <img class="h-48 w-full rounded-t-lg object-cover" :src="image" alt="" />
    <figcaption class="relative flex flex-col rounded-b-lg border-2 border-t-0 px-5 py-7">
      <h3 class="text-2xl text-gray-900">{{ nom }}</h3>
      <address class="not-italic text-gray-500">
        {{ location }}
      </address>
      <div class="order-first flex items-center">
        <div class="text-2xl text-indigo-500">${{ price }}</div>
        <div class="text-gray-500">/months</div>
      </div>
      <hr class="my-4 border-t-2 border-indigo-100" />
      <div class="flex justify-between text-sm">
        <div><bed class="inline-block align-top" />{{ nbrC }} Beds</div>
        <div><bath class="inline-block align-top" />{{ nbrSdb }} Bathrooms</div>
        <div><size class="inline-block align-top" />{{ surface }} m2</div>
      </div>
      <div class="absolute top-7 right-5 grid h-12 w-12 place-items-center rounded-full border-2 border-indigo-100">
        <heart :class="{ 'fill-indigo-500': favori }" />
      </div>
    </figcaption>
  </figure>
</template>

<script>
import bed from "./icons/bed.vue";
import bath from "./icons/bath.vue";
import size from "./icons/size.vue";
import heart from "./icons/heart.vue";

export default {
  props: {
    nom: String,
    price: Number,
    favori: Boolean,
    image: String,
    nbrC: Number,
    nbrSdb: Number,
    surface: String,
    location: String,
  },
  components: { bed, bath, size, heart },
};
</script>