<template>
    
</template>

<script setup>
import { ref, computed } from 'vue';
const responseData = ref([]);


const balance = computed(() => {
  return responseData.value.reduce((acc, current) => {
    acc += current.amount
  }, 0);
});

</script>

<style scoped>
</style>