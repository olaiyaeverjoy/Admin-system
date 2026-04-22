<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <v-container class="bg-white" fluid>
    <v-row>
      <v-col cols="12" md="3">
        <v-card class="bg-white pa-4 d-flex justify-space-between align-center">
          <RouterLink to="/student">
            <div>Students</div>
            <div>15.00K</div>
          </RouterLink>

          <v-icon size="40" color="purple"> mdi-school </v-icon>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="pa-4 d-flex justify-space-between align-center">
          <RouterLink to="/teachers">
            <div>Teachers</div>
            <div>2.00K</div>
          </RouterLink>

          <v-icon size="40" color="purple"> mdi-school </v-icon>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="pa-4 d-flex justify-space-between align-center">
          <RouterLink to="/enroll">
            <div>Enrollment</div>
            <div>5.6K</div>
          </RouterLink>

          <v-icon size="40" color="purple"> mdi-school </v-icon>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="pa-4 d-flex justify-space-between align-center">
          <div>
            <div>Earnings</div>
            <div>$19.3K</div>
          </div>

          <v-icon size="40" color="purple"> mdi-school </v-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
