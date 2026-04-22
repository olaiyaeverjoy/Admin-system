<script setup>
import MainLayout from "../layout/MainLayout.vue";
import { ref } from "vue";
import { getTotalSubjects } from "../composables/useSubject.js";

const items = ref([]);
const totalItems = ref(0);
const loading = ref(false);

const headers = [
  { title: "SubjectID", key: "id" },
  { title: "Subject", key: "name" },
];

const loadSubjects = async (options = {}) => {
  loading.value = true;
  const { page = 1, itemsPerPage = 10 } = options;
  const { data, error, count } = await getTotalSubjects({
    page,
    itemsPerPage,
    // classId: selectedClass.value, //this is the connection
  });

  if (!error) {
    items.value = data;
    totalItems.value = count;
  }

  loading.value = false;
};
</script>

<template>
  <MainLayout>
    <v-card>
      <v-data-table-server
        :headers="headers"
        :items="items"
        :items-length="totalItems"
        :loading="loading"
        item-value="id"
        @update:options="loadSubjects"
      />
    </v-card>
  </MainLayout>
</template>
