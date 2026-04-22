<script setup>
import { ref, watch } from "vue";
import { getTotalStudents } from "../composables/useStudent.js";
import { useClasses } from "../composables/useClasses.js";
import MainLayout from "../layout/MainLayout.vue";

const items = ref([]);
const totalItems = ref(0);
const loading = ref(false);

// const selectedClass = ref(null);

const { classes, selectedClass } = useClasses();

// const classes = [
//   { id: "17d132a0-c5c6-47aa-a5f6-8f13b460d28c", name: "JSS1" },
//   { id: "uuid-2", name: "JSS2" },
//   { id: "uuid-3", name: "JSS3" },
//   { id: "uuid-4", name: "SS1" },
//   { id: "uuid-5", name: "SS2" },
//   { id: "uuid-6", name: "SS3" }
// ];

//easy to understand.. headers for the table
const headers = [
  { title: "ClassID", key: "id" },
  { title: "First Name", key: "firstname" },
  { title: "Last Name", key: "lastname" },
  { title: "Gender", key: "gender" },
  { title: "DOB", key: "dob" },
];

// give this block function a var name.. must declare options first..
// call options by setting the page and itemsPerPage
// use the var from composables: (reusable) = await supabase var then list page and ..
const loadItems = async (options = {}) => {
  loading.value = true;

  const { page = 1, itemsPerPage = 10 } = options;
  const { data, error, count } = await getTotalStudents({
    page,
    itemsPerPage,
    classId: selectedClass.value, //this is the connection
  });
  // ✅ filter by selected class
  //   if (selectedClass.value) {
  //     query = query.eq("class_id", selectedClass.value);
  //   }
  console.log("data: ", data)
  if (!error) {
    items.value = data;
    totalItems.value = count;
  }

  loading.value = false;

  watch(selectedClass, () => {
    loadItems({
      page: 1,
      itemsPerPage: 10,
    });
    console.log(selectedClass);
  });
};
</script>

<template>
  <MainLayout>
    <div
      class="bg-white flex flex-col sm:flex-row rounded shadow justify-between items-start sm:items-center border-b p-4 mb-4"
    >
      <div class="mb-4 sm:mb-0">
        <p class="text-md font-bold">Students</p>
        <p class="text-gray-500 text-sm mt-1">
          View and Manage your student records
        </p>
      </div>
    </div>
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
