<script setup>
import MainLayout from "../layout/MainLayout.vue";
import Cards from "../components/Cards.vue";
import ApexCharts from "../components/ApexCharts.vue";
import StudentCharts from "../components/StudentCharts.vue";
import useSchoolDate from "../composables/useSchoolDate.js";

const { dayName, dateString, termInfo } = useSchoolDate();
</script>

<template>
  <MainLayout>
    <div
      class="bg-white flex flex-col sm:flex-row rounded shadow justify-between items-start sm:items-center border-b p-4 mb-4"
    >
      <div class="mb-4 sm:mb-0">
        <p class="text-sm text-gray-500">
          {{ dayName }}, {{ dateString }} &nbsp;·&nbsp; {{ termInfo }}
        </p>
        <p class="text-md font-bold">Welcome back, Admin</p>
        <p class="text-gray-500 text-sm mt-1">
          Your school at a glance. Review attendance, pending approvals, and
          today's activities below.
        </p>
      </div>
    </div>
    <div class="bg-white w-full flex flex-col sm:flex-row flex-wrap gap-4">
      <ApexCharts />
      <StudentCharts />
    </div>
  </MainLayout>
</template>
