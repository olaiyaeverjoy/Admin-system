<script setup lang="ts">
const barChartSeries = [
  {
    name: "Male",
    data: [40, 60, 75, 50, 60, 80, 90],
  },
  {
    name: "Female",
    data: [20, 40, 45, 30, 40, 60, 70],
  }
];


const barChartOptions = {
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  colors: ["#6A0DAD", "#FF8C00"], // Purple, Orange
};


</script>

<template>
    <div class="flex-[2] bg-white rounded-xl p-4">
        <h2 class="text-lg font-semibold">Bar Chart</h2>
        <apexchart
        type="bar"
        :series="barChartSeries"
        :options="barChartOptions"
        
        />
    </div>
</template>
