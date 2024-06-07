<template>
    <Bar :data="chartdata" :options="chartOptions"/>
</template>

<script setup>
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as Chartjs, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { onUnmounted } from 'vue';


Chartjs.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);


const props = defineProps({
  chartdata: {
    type: Object,
  },
  colors: {
    type:Array,
  }
});


onUnmounted(() => {

  Chartjs.unregister()
});


const chartOptions = ref({
  plugins: {
    tooltip: {
      events: ['mousemove'],
      backgroundColor: 'black',
      position: 'nearest',
      xAlign: 'center',
      yAlign: 'bottom',
      callbacks: {
        title: function (context) {
          return ''
        },
        label: function (context) {
          return `$ ${context.formattedValue}`
        },
        labelColor:function (context) {
          return { 
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(0, 0, 0)',
            borderWidth: 'none',
            borderRadius: 0,
          }
        }
      }
    },
  },
  scales: {
    y: {
      display:false,
      grid: {
        display:false
      }
    },
    x: {
      grid: {
        display:false
      }
    }
  },
  onHover: function (e) {
    let element = this.getElementsAtEventForMode(e, 'nearest',
      { intersect: true }, true);
    this.data.datasets[0].backgroundColor = [...props.colors];
    if (element[0]) {
      this.data.datasets[element[0].datasetIndex].backgroundColor[element[0].index] = '#fdc6bb';
    }
    this.update();
  },
});

</script>