<template>
    <div class="balance-text">
      <p>My Balance</p>
      <h1> ${{ graphStore.getBalance }}</h1>
    </div>
    <img src="/images/logo.svg" alt="logo">
</template>

<script setup>
import { useGraphStore } from '@/stores/graphStore';

const graphStore = useGraphStore();

</script>

<style scoped>
    .balance-text {
      line-height: 2rem;
    }
</style>