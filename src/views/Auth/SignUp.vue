<script setup>
import { ref } from "vue";
import { useAuth } from "../../composables/useAuth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const loading = ref(false);

const router = useRouter();

const auth = useAuth();

const submit = async () => {
  loading.value = true;

  //   const { data, error } = await supabase.auth.signUp({
  //     email: email.value,
  //     password: password.value,

  //   });
  try {
    const payload = {
      email: email.value,
      password: password.value,
    };
    console.log(payload)
    const { data, error } = await auth.signUp(payload);
    console.log(data);
    router.push("/login");
    
  } catch (error) {
    console.error("❌ Login error:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section
    class="min-h-screen bg-stone-100 flex items-center justify-center px-4"
  >
    <div
      class="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
    >
      <!-- LEFT SIDE -->
      <div
        class="hidden lg:flex flex-col justify-between bg-stone-900 text-white p-10 relative overflow-hidden"
      >
        <div>
          <p class="uppercase tracking-[0.3em] text-sm text-stone-400 mb-6">
            School Admin Portal
          </p>

          <h1 class="text-4xl font-bold leading-tight">
            Manage your school operations effortlessly.
          </h1>

          <p class="text-stone-300 mt-6 leading-relaxed">
            Track students, attendance, classes, reports, and academic
            activities from one centralized dashboard.
          </p>
        </div>

        <div
          class="border border-stone-700 rounded-xl p-5 bg-white/5 backdrop-blur-sm"
        >
          <p class="text-sm text-stone-300">
            Secure administrative system powered by Vue.js and Supabase.
          </p>
        </div>

        <!-- background accent -->
        <div
          class="absolute -bottom-20 -right-20 w-72 h-72 bg-stone-700 rounded-full blur-3xl opacity-30"
        ></div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="p-8 sm:p-12 flex flex-col justify-center">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-stone-800">Welcome</h2>

          <p class="text-stone-500 mt-2">
            Sign up to your admin dashboard.
          </p>
        </div>

        <form @submit.prevent="login" class="space-y-5">
          <!-- EMAIL -->
          <div>
            <label class="block text-sm font-medium text-stone-700 mb-2">
              Email Address
            </label>

            <input
              v-model="email"
              type="email"
              placeholder="admin@school.com"
              class="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-stone-700 transition"
            />
          </div>

          <!-- PASSWORD -->
          <div>
            <label class="block text-sm font-medium text-stone-700 mb-2">
              Password
            </label>

            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-stone-700 transition"
            />
          </div>

          <!-- ERROR -->
          <!-- <div
            v-if="error"
            class="bg-red-100 text-red-600 text-sm rounded-lg p-3"
          >
            {{ error }}
          </div> -->

          <!-- BUTTON -->
          <button
            @click="submit"
            type="submit"
            :disabled="loading"
            class="w-full bg-stone-800 hover:bg-stone-900 text-white py-3 rounded-xl transition duration-300 font-medium disabled:opacity-50"
          >
            {{ loading ? "Signing Up..." : "Sign Up" }}
          </button>
        </form>

        <!-- FOOTER -->
        <div class="mt-8 text-center">
          <p class="text-sm text-stone-500">© 2026 School Management System</p>
        </div>
      </div>
    </div>
  </section>
</template>
