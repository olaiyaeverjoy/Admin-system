<template>
  <v-card
    class="flex-[1] bg-white p-4"
    
  >
    <!-- Header -->
    <div class="d-flex justify-space-between align-center mb-2">
      <span class="text-subtitle-2 font-weight-medium">Students</span>
      <v-icon size="18">mdi-dots-vertical</v-icon>
    </div>

    <!-- Chart -->
    <div class="d-flex justify-center">
      <apexchart
        type="radialBar"
        
        :options="chartOptions"
        :series="series"
      />
    </div>

    <!-- Legend -->
    <div class="d-flex justify-center mt-2" style="gap: 16px;">
      <div class="d-flex align-center" style="gap: 6px;">
        <span class="dot purple"></span>
        <span class="text-caption">Male</span>
      </div>
      <div class="d-flex align-center" style="gap: 6px;">
        <span class="dot orange"></span>
        <span class="text-caption">Female</span>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import ApexChart from "vue3-apexcharts"

const series = [60, 40] // Male, Female %

const chartOptions = {
  chart: {
    type: "radialBar",
    sparkline: { enabled: true },
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
      hollow: {
        size: "55%",
      },
      track: {
        background: "#f2f2f2",
        strokeWidth: "100%",
      },
      dataLabels: {
        name: { show: false },
        value: {
          show: true,
          fontSize: "28px",
          fontWeight: 600,
          offsetY: 8,
          formatter: () => "15000",
        },
        total: {
          show: true,
          label: "Total",
          fontSize: "14px",
          formatter: () => "15000",
        },
      },
    },
  },
  colors: ["#6A0DAD", "#FF8C00"], // Purple, Orange
  stroke: {
    lineCap: "round",
  },
  labels: ["Male", "Female"],
}
</script>

<style scoped>
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.purple {
  background: #6a0dad;
}

.orange {
  background: #ff8c00;
}

.gap-2 {
  gap: 6px;
}

.gap-6 {
  gap: 20px;
}
</style>