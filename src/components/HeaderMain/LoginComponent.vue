<template>
  <div>
    <b-button size="sm" class="my-2 my-sm-0 mr-5 login_button" v-b-modal.modal-2
      >Login</b-button
    >

    <b-modal id="modal-2" title="Login Form">
      <form-register :formsArray="formsArray" :form="form" />
    </b-modal>
  </div>
</template>

<script>
import FormRegister from "@/components/FormRegister.vue";

export default {
  components: { FormRegister },
  data() {
    return {
      formsArray: [
        { title: "login", text: "This is a required field" },
        {
          title: "password",
          text: "This is a required field and must be at least 3 characters.",
          type: "password",
          checkbox: "password",
        },
      ],
      form: {
        login: null,
        password: null,
      },
    };
  }
};
</script>
