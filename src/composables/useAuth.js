import { ref } from "vue";
import { supabase } from "../services/Supabase.js";

export function useAuth() {
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Sign Up
  async function signUp(payload) {
    loading.value = true;
    try {
      const { data, error: err } = await supabase.auth.signUp(payload);
      if (error) error.value = error;
      console.log("login data:", data);

      loading.value = false;
      return data;
    } catch (error) {
      throw error;
    } finally {
    }
  }

  // Login
  async function signIn(payload) {
    loading.value = true;
    try {
      const { data, error: err } =
        await supabase.auth.signInWithPassword(payload);
      if (error) error.value = error;

      loading.value = false;
      return data;
    } catch (error) {
      throw error;
    } finally {
    }
  }

  // Logout
  async function signOut() {
    await supabase.auth.signOut();
    user.value = null;
  }

  // Get current session on load
  async function getSession() {
    const { data } = await supabase.auth.getSession();
    user.value = data?.session?.user ?? null;
  }

  // Listen for auth state changes
  function onAuthChange(callback) {
    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user ?? null;
      callback?.(session?.user);
    });
  }

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    getSession,
    onAuthChange,
  };
}
