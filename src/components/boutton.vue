<template>
  <div
    class="relative flex items-center justify-center gap-2 rounded-lg border-2 border-indigo-200 px-4 py-2.5"
    :class="{ 'text-indigo-500': principal, 'border-none bg-indigo-500 text-white': !principal }"
  >
    <p class="flex-shrink-0 flex-grow-0 text-center text-sm font-bold"><slot /></p>
  </div>
</template>

<script>
export default {
  props: {
    principal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
