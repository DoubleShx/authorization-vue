<template>
  <div>
    <b-button
      size="sm"
      class="my-2 my-sm-0 mx-3 sign_up_button"
      v-b-modal.modal-1
      >Sign Up</b-button
    >
    <b-modal id="modal-1" title="Sign Up Form" hide-footer>
      <form-register
        :formsArray="formsArray"
        :form="form"
        @modal-ok="toggleModal"
        @modal-cancel="hideModal"
      />
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
        { title: "login", text: "This is a required field, minLength=6, only alphabet letters (example)", type: "text" },
        { title: "email", text: "This is a required field, email type (example@mail.ru)", type: "email" },
        {
          title: "password",
          text: "This is a required field, minLength=8, must contain [0-9] && [A-Z].",
          type: "password",
          checkbox: "password",
        },
        { title: "phone", text: "This is a required field, length=12, start of phone number = 998", type: "number" },
        { title: "name", text: "This is a required field, minLength=2, only alphabet letters (example)", type: "text" },
        { title: "birthday", text: "This is a required field, registerer age must be 18+", type: "date" },
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
  methods: {
    hideModal() {
      this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
    },
    toggleModal(form, currentForm) {
      let checkOnError = Object.keys(form).reduce(
        (prevResult, property) => {
          if (prevResult) {
            return true;
          } else return currentForm[property].$anyError;
        },
        false
      );
      if (!checkOnError) {
        let currentForm = JSON.parse(localStorage.getItem("form"));
        let newForms;
        if (Array.isArray(currentForm)) {
          newForms = [...currentForm, form];
        } else newForms = [form];
        localStorage.setItem("form", JSON.stringify(newForms));
        this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
      }
    },
  },
};
</script>