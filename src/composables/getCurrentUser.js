import { ref, computed } from "vue";

function useCurrentUser() {
  const user = ref(JSON.parse(localStorage.getItem("activeUser")));

  const isLoggedIn = computed(() => {
    return !!user.value;
  });

  return {
    user,
    isLoggedIn,
  };
}
