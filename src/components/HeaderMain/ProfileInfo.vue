<template>
  <div class="profile_header">
    <button
      id="tooltip-target-1"
      class="profile_info_button"
      @click="$bvToast.show('example-toast')"
    >
      <b-avatar src="https://placekitten.com/300/300"></b-avatar>
    </button>
    <b-tooltip target="tooltip-target-1" triggers="click" placement="left">
      <p v-for="(value, key) in getProfile" :key="key">
        {{ key | uppercase }}: {{ value }}
      </p>
    </b-tooltip>
    <button class="my-2 my-sm-0 mr-5 sign_up_button" @click="logout">
      Logout
    </button>
  </div>
</template>
<script>
export default {
  name: "ProfileInfo",
  props: {
    getProfile: {
      type: Object,
    },
  },
  mounted() {
    this.makeToast();
  },
  filters: {
    uppercase(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
  },
  methods: {
    makeToast(variant = "secondary", userName) {
      this.$bvToast.toast("We are glad to see you", {
        title: `Hello ${$cookies.get("access_user_login")}`,
        noAutoHide: false,
        autoHideDelay: 3000,
        variant: variant,
        solid: true,
      });
    },
    logout() {
      let localStorageUsers = JSON.parse(localStorage.getItem("form"));
      if (localStorageUsers) {
        let idx = localStorageUsers.findIndex(
          (formUser) => formUser.login === $cookies.get("access_user_login")
        );
        if (idx !== -1) {
          localStorage.setItem(
            "form",
            JSON.stringify([
              ...localStorageUsers.slice(0, idx),
              ...localStorageUsers.slice(idx + 1),
            ])
          );
        }
      }
      this.$store.commit("updateProfile", {});
      $cookies.remove("access_user_login");
    },
  },
};
</script>
