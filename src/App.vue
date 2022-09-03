<template>
  <div id="app">
    <header-main />
    <div class="content">
      <div class="card visitor_greeting__card">
        <div class="login_wrapper">
          <div class="left_side" v-if="!getProfile.login">
            <h2>Brand Name</h2>
            <p>Our Product helps a lot at</p>
            <p v-for="index in 3" :key="index">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              vero ab sed dolores nemo alias blanditiis! Aspernatur quisquam
              expedita harum nostrum quod similique adipisci eius!
            </p>
          </div>
          <div class="left_side" v-else>
            <h2>Hello dear User!</h2>
            <p v-for="(value, key) in getProfile" :key="key">
              {{ key | uppercase }}: {{ value }}
            </p>
          </div>
          <div class="right_side">
            <h2 class="my-3">Welcome to our application</h2>
            <p v-if="!getProfile.login">Please login to use our application</p>
            <p v-else>We glad to see you {{ getProfile.login }}</p>
            <p class="small_size_text my-1">All rights reserved</p>
            <p class="small_size_text">Provided by ___ Company</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain/HeaderMain.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { HeaderMain },
  data() {
    return {
      userInfo: false,
    };
  },
  computed: mapGetters(["getProfile"]),
  filters: {
    uppercase(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
  },
  mounted() {
    let userLogin = $cookies.get("access_user_login");
    if (userLogin) {
      let localStorageUsers = localStorage.getItem("form");
      if (localStorageUsers) {
        let userInfoArray = JSON.parse(localStorageUsers).filter(
          (formUser) => formUser.login === userLogin
        );
        if (userInfoArray.length) {
          let { password, ...currentUserInfo } = userInfoArray[0];
          this.userInfo = currentUserInfo;
          this.$store.commit("updateProfile", currentUserInfo);
        }
      }
    }
  },
};
</script>

<style>
</style>
