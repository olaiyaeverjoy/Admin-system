import { ref } from 'vue'
import {supabase} from '../services/Supabase.js'

export function useAuth() {
  const user = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Sign Up
  async function signUp(email, password) {
    loading.value = true
    error.value = null
    const { data, error: err } = await supabase.auth.signUp({ email, password })
    if (err) error.value = err.message
    else user.value = data.user
    loading.value = false
  }

  // Login
//   async function signIn(email, password) {
//     loading.value = true
//     error.value = null
//     const { data, error: err } = await supabase.auth.signInWithPassword({ email, password })
//     if (err) error.value = err.message
//     else user.value = data.user
//     loading.value = false
//   }

  // Logout
//   async function signOut() {
//     await supabase.auth.signOut()
//     user.value = null
//   }

  // Get current session on load
//   async function getSession() {
//     const { data } = await supabase.auth.getSession()
//     user.value = data?.session?.user ?? null
//   }

//   // Listen for auth state changes
//   function onAuthChange(callback) {
//     supabase.auth.onAuthStateChange((_event, session) => {
//       user.value = session?.user ?? null
//       callback?.(session?.user)
//     })
//   }

  return { user, loading, error, signUp, signIn, signOut, getSession, onAuthChange }
}