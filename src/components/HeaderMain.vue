<template>
  <div class="header_nav">
    <b-button size="sm" class="my-2 my-sm-0 mx-3 sign_up_button">Sign Up</b-button>
    <b-button size="sm" class="my-2 my-sm-0 mr-5 login_button">Login</b-button>
  </div>
</template>
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
button {
  width: 120px;
  font-weight: 600;
}
.login_button {
  background: white;
  color: black;
}
.sign_up_button {
  background-color: black;
  color: white;
}
</style>