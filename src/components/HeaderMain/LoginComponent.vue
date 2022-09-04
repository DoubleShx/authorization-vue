<template>
  <div>
    <b-button size="sm" class="my-2 my-sm-0 mr-5 login_button" v-b-modal.modal-2
      >Login</b-button
    >

    <b-modal id="modal-2" title="Login Form" hide-footer>
      <form-register
        :formsArray="formsArray"
        :form="form"
        :loginError="loginError"
        @reset-form="resetForm"
        @modal-ok="toggleModal"
        @modal-cancel="hideModal"
        @toggle-to-signup="toggleToSignUp"
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
        {
          title: "login",
          text: "This is a required field, minLength=6, only alphabet letters (example)",
          type: "text",
        },
        {
          title: "password",
          text: "This is a required field, minLength=8, must contain [0-9] && [A-Z].",
          type: "password",
          checkbox: "password",
        },
      ],
      form: {
        login: null,
        password: null,
      },
      loginError: "",
    };
  },
  methods: {
    hideModal() {
      this.loginError = "";
      this.$root.$emit("bv::toggle::modal", "modal-2", "#btnToggle");
    },
    toggleToSignUp() {
      this.$root.$emit("bv::toggle::modal", "modal-2", "#btnToggle");
      this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
    },
    resetForm(form, loginError="") {
      this.form = form,
      this.loginError = loginError
    },
    toggleModal(form, currentForm) {
      let checkOnError = Object.keys(form).reduce((prevResult, property) => {
        if (prevResult) {
          return true;
        } else return currentForm[property].$anyError;
      }, false);
      if (!checkOnError) {
        let currentForm = JSON.parse(localStorage.getItem("form"));
        if (currentForm === null) {
          this.loginError =
            "There are no users with this login, please sign up";
        } else if (Array.isArray(currentForm)) {
          let neccessaryForm = currentForm.filter((formEl) => {
            return formEl.login === form.login;
          });
          if (
            neccessaryForm &&
            neccessaryForm.length &&
            neccessaryForm[0].password === form.password
          ) {
            $cookies.set("access_user_login", neccessaryForm[0].login);
            this.$root.$emit("bv::toggle::modal", "modal-2", "#btnToggle");
            let { password, ...currentUserProfile } = neccessaryForm[0];
            this.$store.commit("updateProfile", currentUserProfile);
          } else {
            this.loginError =
              "There are no users with this combination of login and password, please sign up";
          }
        }
      }
    },
  },
};
</script>
