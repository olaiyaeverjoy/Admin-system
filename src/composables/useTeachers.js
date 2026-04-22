import { supabase } from "../services/Supabase.js";
import {ref, } from 'vue';




export const getTotalTeachers = async ({ page, itemsPerPage, classId }) => {
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  let query = supabase
    .from("teachers")
    .select("*", { count: "exact" })
    .range(from, to);

  //     // optional sorting
  //     if (sortBy?.length) {
  //     const { key, order } = sortBy[0]
  //     query = query.order(key, { ascending: order === 'asc' })
  //   }
  if (classId) {
    query = query.eq("class_id", classId);
  }
  const { data, error, count } = await query;

  return { data, error, count };
};
