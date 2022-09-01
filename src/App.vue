<template>
  <div id="app">
    <header-main />
    <div class="content">
      <div class="card visitor_greeting__card">
        <div class="login_wrapper">
          <div class="left_side">
            <form-register />
          </div>
          <div class="right_side">
            <h2 class="my-3">Welcome to our application</h2>
            <p>Please login to use our application</p>
            <p class="small_size_text">All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain.vue";
import FormRegister from "@/components/FormRegister.vue";

export default {
  name: "App",
  components: { HeaderMain, FormRegister },
};
</script>

<style>
</style>
