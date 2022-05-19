<template>
  <div class="grid grid-flow-row gap-10 bg-indigo-25">
    <div class="flex flex-col gap-20">
      <navigation />
      <heroMobile />
    </div>

    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10 p-4">
      <card
        nom="Beverly Springfield"
        :price="2700"
        :favori="true"
        :nbrSdb="2"
        :nbrC="4"
        surface="6x7.5"
        image="/src/assets/Image.jpg"
        location="2821 Lake Sevilla, Palm Harbor, TX"
      />
      <card
        nom="Palm Harbor"
        :price="2095"
        :nbrSdb="2"
        :nbrC="4"
        surface="6x7"
        image="/src/assets/Image3.jpg"
        location="2699 Green Valley, Highland Lake"
      />
      <card
        nom="Tarpon Bay"
        :price="4800"
        :nbrSdb="2"
        :nbrC="4"
        surface="6x7.5"
        image="/src/assets/Image2.jpg.jpg"
        location="103 Lake Shores, Michigan, IN"
      />
    </div>
  </div>
</template>

<script >
import card from "../components/card.vue";
import navigation from "../components/navigation.vue";
import heroMobile from "../components/heroMobile.vue";

export default {
  name: "App",
  components: { card, navigation, heroMobile },
};
</script>