<template>
    <h2>Spendings last 7 days</h2>
    <div class="graph">
      <Graph :chartdata="getChartData" :colors="getBgGenerator"/>
    </div>
    <div class="graph-summary">
      <GraphSummary />
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useGraphStore } from "@/stores/graphStore";
import Graph from './Graph.vue';
import GraphSummary from "./GraphSummary.vue";

const graphStore = useGraphStore();
const { getChartData, getBgGenerator } = storeToRefs(graphStore);


</script>

<style scoped>
.graph {
  padding-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid var(--cream);
}
</style>