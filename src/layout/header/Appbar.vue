<script setup>
import { ref } from "vue";

const menu = ref(false);
</script>

<template>
  <v-app-bar class="bg-white">
    <!-- <v-app-bar-title class="font-bold text-purple-600 text-sm"
      >ia Academy</v-app-bar-title
    > -->

    <!-- <div>
      <input type="text" class="rounded-full" placeholder="what do you want to find">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div> -->
    <!-- <v-text-field
      placeholder="What do you want to find"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      rounded="pill"
      density="comfortable"
      hide-details
      class="max-w-[200px]"
    ></v-text-field> -->
    <v-spacer></v-spacer>

    <!-- <v-btn flat color="grey">
      <i class="fa-regular fa-bell"></i>
      <i class="fa-regular fa-message"></i>
      <span>Sign Out</span>

      <v-icon icon="mdi-exit-to-app" />
    </v-btn> -->

    <v-menu v-model="menu" location="bottom end">
      <!-- Activator -->
      <template #activator="{ props }">
        <div
          v-bind="props"
          class="d-flex align-center cursor-pointer px-2 py-1 rounded-lg"
          style="gap: 8px"
        >
          <v-avatar size="36">
            <v-img src="https://randomuser.me/api/portraits/women/44.jpg" />
          </v-avatar>

          <div class="d-flex flex-column">
            <span class="text-subtitle-2 font-weight-medium">
              Priscilla Lily
            </span>
            <span class="text-caption text-grey"> Admin </span>
          </div>

          <v-icon size="18">mdi-chevron-down</v-icon>
        </div>
      </template>

      <!-- Dropdown -->
      <v-list>
        <v-list-item title="Profile" prepend-icon="mdi-account" />
        <v-list-item title="Settings" prepend-icon="mdi-cog" />
        <v-divider />
        <v-list-item title="Logout" prepend-icon="mdi-logout" />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
