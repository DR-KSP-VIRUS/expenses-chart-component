<template>

  <main>
    <header class="title">
      <GraphHeader />
    </header>
    <section class="container">
      <GraphContainer />
    </section>
  </main>
  
</template>


<script setup>
import GraphHeader from "./components/GraphHeader.vue";
import GraphContainer from './components/GraphContainer.vue';
</script>

<style scoped>
  .title {
    display: flex;
    background: var(--soft-red);
    padding: .5rem 1rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    color: var(--very-pale-orange);
    place-content: space-between;
  }



  .container {
    background: var(--very-pale-orange);
    padding: 1.5rem;
    border-radius: 8px;
  }


  .graph-summary {
    display: flex;
    padding-top: 1rem;
  }
</style>