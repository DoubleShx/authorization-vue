<template>
  <div id="app">
    <header-main />
    <div class="content">
      <div class="card visitor_greeting__card">
        <div class="login_wrapper">
          <div class="left_side">
            <h2>Brand Name</h2>
            <p>Our Product helps a lot at</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              vero ab sed dolores nemo alias blanditiis! Aspernatur quisquam
              expedita harum nostrum quod similique adipisci eius!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              vero ab sed dolores nemo alias blanditiis! Aspernatur quisquam
              expedita harum nostrum quod similique adipisci eius!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              vero ab sed dolores nemo alias blanditiis! Aspernatur quisquam
              expedita harum nostrum quod similique adipisci eius!
            </p>
          </div>
          <div class="right_side">
            <h2 class="my-3">Welcome to our application</h2>
            <p>Please login to use our application</p>
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

export default {
  name: "App",
  components: { HeaderMain },
};
</script>

<style>
</style>
