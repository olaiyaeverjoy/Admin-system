<script setup>
import { supabase } from "../services/Supabase.js";
import { ref } from "vue";
import { useClasses } from "../composables/useClasses.js";

import MainLayout from "../layout/MainLayout.vue";


const { classes, selectedClass } = useClasses();



//this is calling the form as empty
const form = ref({
  firstname: "",
  lastname: "",
  gender: "",
  dob: "",
  class_id: "",
  admission_number: "",
  parent_name: "",
  parent_phone: "",
  parent_email: "",
  address: "",
});

//first ever rpc:remote procedure call... I'm calling this func here but its also running somewhere else
//it'll check rpc enroll_student and send the data for student into it and also for student_contact and also send data there
//js func sends request to supabase
//supabase finds it in postgreSQL
//postgre runs the func
//results is returned to ui

const submit = async () => {
  try {
    const { error } = await supabase.rpc('enroll_student', {
      p_firstname: form.value.firstname,
      p_lastname: form.value.lastname,
      p_gender: form.value.gender,
      p_dob: form.value.dob,
      p_class_id: form.value.class_id,
      p_admission_number: form.value.admission_number,
      p_parent_name: form.value.parent_name,
      p_parent_phone: form.value.parent_phone,
      p_parent_email: form.value.parent_email,
      p_address: form.value.address,
    })

    if (error) throw error

    console.log('✅ Student enrolled')
  } catch (err) {
    console.error(err)
  }
}

</script>

<template>
  <MainLayout>
    <v-form @submit.prevent="submit">
      <!-- Personal Info -->
      <v-text-field v-model="form.firstname" label="First Name" />
      <v-text-field v-model="form.lastname" label="Last Name" />

      <v-select
        v-model="form.gender"
        :items="['Male', 'Female']"
        label="Gender"
      />

      <v-text-field v-model="form.dob" label="Date of Birth" type="date" />

      <!-- Academic -->
      <v-select
        v-model="form.class_id"
        :items="classes"
        item-title="name"
        item-value="id"
        label="Class"
      />

      <v-text-field v-model="form.admission_number" label="Admission Number" />

      <!-- Parent -->
      <v-text-field v-model="form.parent_name" label="Parent Name" />
      <v-text-field v-model="form.parent_phone" label="Parent Phone" />
      <v-text-field v-model="form.parent_email" label="Parent Email" />

      <!-- Address -->
      <v-textarea v-model="form.address" label="Address" />

      <v-btn type="submit">Enroll Student</v-btn>
    </v-form>
  </MainLayout>
</template>
