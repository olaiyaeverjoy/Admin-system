// composables/useClasses.js
import { ref, onMounted } from 'vue'
import { supabase } from "../services/Supabase.js";

export function useClasses() {
  const classes = ref([])
  const selectedClass = ref(null)
  const loading = ref(false)

  const fetchClasses = async () => {
    loading.value = true

    const { data, error } = await supabase
      .from('classes')
      .select('*')

    if (!error) classes.value = data

    loading.value = false
  }

  onMounted(fetchClasses)

  return {
    classes,
    selectedClass,
    fetchClasses,
    loading
  }
}