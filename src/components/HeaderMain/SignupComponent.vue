<template>
  <div>
    <b-button
      size="sm"
      class="my-2 my-sm-0 mx-3 sign_up_button"
      v-b-modal.modal-1
      >Sign Up</b-button
    >
    <b-modal id="modal-1" title="Sign Up Form">
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
        { title: "login", text: "This is a required field", type: "text" },
        { title: "email", text: "This is a required field", type: "email" },
        {
          title: "password",
          text: "This is a required field and must be at least 3 characters.",
          type: "password",
        },
        { title: "phone", text: "This is a required field", type: "number" },
        { title: "name", text: "This is a required field", type: "text" },
        { title: "birthday", text: "This is a required field", type: 'date' },
      ],
      form: {
        login: null,
        email: null,
        password: null,
        phone: 998,
        name: null,
        birthday: null,
      },
    };
  },
};
</script>