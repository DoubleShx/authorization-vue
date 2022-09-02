<template>
  <div class="header_nav">
    <signup-component />
    <login-component />
  </div>
</template>
<script>
import LoginComponent from "@/components/HeaderMain/LoginComponent";
import SignupComponent from "@/components/HeaderMain/SignupComponent";

export default {
  components: { LoginComponent, SignupComponent },
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