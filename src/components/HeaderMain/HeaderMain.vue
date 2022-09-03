<template>
  <div>
    <div class="header_nav" v-if="!getProfile.login">
      <signup-component />
      <login-component />
    </div>
    <div v-else class="header_nav">
      <profile-info :getProfile="getProfile" />
    </div>
  </div>
</template>
<script>
import LoginComponent from "@/components/HeaderMain/LoginComponent";
import SignupComponent from "@/components/HeaderMain/SignupComponent";
import { mapGetters } from "vuex";
import ProfileInfo from "./ProfileInfo.vue";

export default {
  components: { LoginComponent, SignupComponent, ProfileInfo },
  computed: mapGetters(["getProfile"]),
};
</script>


<style scoped>
.header_nav {
  width: 100%;
  display: flex;
  justify-content: right;
  padding: 15px;
  position: fixed;
  top: 0;
  height: 70px;
}
</style>