<script setup>
import { ref, watch } from "vue";
import { getTotalTeachers } from "../composables/useTeachers.js";
import { useClasses } from "../composables/useClasses.js";

import MainLayout from "../layout/MainLayout.vue";

const items = ref([]);

const totalItems = ref(0);
const loading = ref(false);

const { classes, selectedClass } = useClasses();

const headers = [
  { title: "First Name", key: "firstname" },
  { title: "Last Name", key: "lastname" },
  { title: "Gender", key: "gender" },
  { title: "Email", key: "email" },
  { title: "ClassID", key: "id" },
];

const loadItems = async (options = {}) => {
  loading.value = true;
  const { page = 1, itemsPerPage = 10 } = options;
  const { data, error, count } = await getTotalTeachers({
    page,
    itemsPerPage,
    classId: selectedClass.value,
  });

  if (!error) {
    items.value = data;
    totalItems.value = count;
  }

  watch(selectedClass, () => {
    loadItems({
      page: 1,
      itemsPerPage: 10,
    });
  });

  loading.value = false;
};
</script>

<template>
  <MainLayout>
    <div class="w-64">
      <v-select
        v-model="selectedClass"
        :items="classes"
        item-title="name"
        item-value="id"
        label="Select Class"
        variant="outlined"
        density="comfortable"
        clearable
      />
    </div>
    <v-card>
      <v-data-table-server
        :headers="headers"
        :items="items"
        :items-length="totalItems"
        :loading="loading"
        item-value="id"
        @update:options="loadItems"
      />
    </v-card>
  </MainLayout>
</template>
