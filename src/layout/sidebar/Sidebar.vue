<template>
  <div class="dash-sidebar mt-0">
    <ul class="dash-menu mt-0">
      <li
        v-for="item in menuItems"
        class="mt-4"
        :key="item.nav"
        :class="{ active: isActive(item) }"
        @click="router.push(item.route)"
      >
        <i :class="item.icon"></i>
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const activeNav = ref("home");
const isActive = (item) => {
  return route.path === item.route || route.path.startsWith(item.route + "/");
};

const setView = (nav: string, e: Event) => {
  activeNav.value = nav;
  showDashView(nav);
};

const showDashView = (nav: string) => {
  // replace with your real view logic
  console.log("switch view:", nav);
};

const signOut = () => {
  router.push("/");
};

/**
 * EXACT SVG STRINGS from your original HTML
 * (kept minimal for clarity but still identical usage)
 */
const menuItems = [
  {
    nav: "dashboard",
    label: "Dashboard",
    icon: "mdi mdi-view-dashboard-outline",
    route: "/",
  },
  {
    nav: "students",
    label: "students",
    icon: "mdi mdi-domain",
    route: "/student",
  },

  {
    nav: "Teachers",
    label: "Teachers",
    icon: "mdi mdi-domain",
    route: "/teachers",
  },

  {
    nav: "Subjects",
    label: "Subjects",
    icon: "mdi mdi-domain",
    route: "/subjects",
  },

  {
    nav: "Enrollments",
    label: "Enrollments",
    icon: "mdi mdi-domain",
    route: "/enroll",
  },
];
</script>

<style scoped>
.dash-menu {
  margin-top: 40px; /* pushes menu items down */
  display: flex;
  flex-direction: column;
  gap: 18px; /* consistent spacing between items */
}
.dash-menu li i {
  font-size: 18px;
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.dash-sidebar {
  /* instead of 260px */
  width: 100%;
  min-height: 100vh; /* fill full viewport height */
  box-sizing: border-box;
  padding: 32px 18px;
  background: #0d1b3e;
}

/* SECTION LABEL */
.dash-menu-section {
  font-size: 11px;
  font-weight: 600;
  color: #9aa0a6;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 16px 8px 10px;
}

/* MENU LIST */

/* MENU ITEM */
.dash-menu li {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;

  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);

  transition: all 0.2s ease;
}

/* ICON */
.dash-menu li svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* HOVER */
.dash-menu li:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

/* ACTIVE STATE (THIS IS THE BIG ONE) */
.dash-menu li.active {
  background: rgba(59, 130, 246, 0.18);
  color: #93c5fd;
  font-weight: 600;
}

.dash-menu li.active i {
  color: #fff;
}

/* ACTIVE ICON COLOR */
.dash-menu li.active svg {
  color: #0b749e;
}

/* CREDIT CARD MATCHING IMAGE STYLE */
.dash-sidebar > div[style*="var(--grad)"] {
  border-radius: 16px;
  margin-top: 24px;
}

.icon-wrap {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
}
.dash-menu li.active .icon-wrap {
  background: rgba(59, 130, 246, 0.25);
}
</style>
