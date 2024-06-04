<template>
    <h2>Spendings last 7 days</h2>
    <div class="graph">
      <Graph :chartdata="getChartData" :options="chartOptions"/>
    </div>
    <div class="graph-summary">
      <GraphSummary />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from "pinia";
import { useGraphStore } from "@/stores/graphStore";
import Graph from './Graph.vue';
import GraphSummary from "./GraphSummary.vue";

const graphStore = useGraphStore();
const { getChartData } = storeToRefs(graphStore);

const chartOptions = ref({
  plugins: {
    tooltip: {
      events: ['click'],
      callbacks: {
        title: function (context) {
          return ''
        },
        label: function (context) {
          return `$ ${context.formattedValue}`
        },
      }
    },

  }
});

</script>

<style scoped>
.graph {
  padding-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid var(--cream);
}
</style>