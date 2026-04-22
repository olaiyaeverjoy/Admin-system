<script setup>
import MainLayout from '../layout/MainLayout.vue'
import Cards from '../components/Cards.vue';
import ApexCharts from '../components/ApexCharts.vue';
import StudentCharts from '../components/StudentCharts.vue';
</script>

<template>

    <MainLayout>
        
        <div class="bg-white w-full flex flex-col sm:flex-row flex-wrap gap-4">
            <ApexCharts />
            <StudentCharts />
        </div>
        
    </MainLayout>
</template>