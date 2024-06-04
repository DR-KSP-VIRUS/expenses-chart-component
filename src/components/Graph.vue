<template>
    <Bar :data="chartdata" :options="options"/>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import { Chart as Chartjs, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { onUnmounted } from 'vue';

Chartjs.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

const props = defineProps({
  chartdata: {
    type: Object,
  },
  options: {
    type:Object
  },
});


onUnmounted(() => {
  
  Chartjs.unregister()
})

// const dailyChartData = ref(
//   {
//     chartdata: {
//       labels: props.transactions.map(d=>d.day),
//       datasets: [
//         {
//           backgroundColor: [
//             '#1963a3',
//             '#a34019',
//             '#1ea319',
//             '#19a391',
//             '#9719a3',
//           ],
//           // label: 'Daily Expense',
//           data: props.transactions.map(d=>d.amount)
//         }
//       ]
//     },
//     options: {
//       plugins: {
//         tooltip: {
//           events: ['click'],
//           callbacks: {
//             title: function (context) {
//               return ''
//             },
//             label: function (context) {
//               return `$ ${context.formattedValue}`
//             },
//           }
//         },

//       }
//     }
// });


</script>

<style scoped>
.d {
  background-color: #f87979;
}
</style>