<template>
    <div class="amount">
      <p>Total this month</p>
      <h2>${{ graphStore.getBalance }}</h2>
    </div>
    <div class="rate">
      <h3>+2.4%</h3>
      <p>from last month</p>
    </div>
</template>

<script setup>
import { useGraphStore } from '@/stores/graphStore';

const graphStore = useGraphStore();
</script>

<style scoped>
.amount {
  margin-right: 2rem;
  align-self: center;
}
.amount h2 {
  font-size: 2rem;
}
  
.amount p {
  line-height: 1.4rem;
  color: var(--medium-brown);
}
.rate {
  display: flex;
  flex-direction: column;
  align-items: end;
  align-self:end;
}
.rate p {
  color: var(--medium-brown);
}
</style>