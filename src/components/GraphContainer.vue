<template>
    <h2>Spendings last 7 days</h2>
    <div class="graph">
      <Graph />
    </div>
    <div class="graph-summary">
      <GraphSummary />
    </div>
</template>

<script setup>
import Graph from "./Graph.vue";
import GraphSummary from "./GraphSummary.vue";
</script>

<style scoped>
.graph {
  padding-block: 2rem;
  border-bottom: 3px solid var(--cream);
}
</style>