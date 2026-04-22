import { supabase } from "../services/Supabase.js";
import {ref, } from 'vue';

// export const: cos its a reusable var
// write comments for pagination at work tomorrow...
export const getTotalStudents = async ({ page, itemsPerPage, classId }) => {
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  let query = supabase
    .from("students")
    .select(`id, firstname, lastname, gender, dob, classes(name)`, { count: "exact" })
    .range(from, to);

  //     // optional sorting
  //     if (sortBy?.length) {
  //     const { key, order } = sortBy[0]
  //     query = query.order(key, { ascending: order === 'asc' })
  //   }

  if (classId) {
    query = query.eq("class_id", classId)
  }
  const { data, error, count } = await query;
  console.log("data is success: ", data)
  console.log("data is error: ", error)

  return { data, error, count };
};


