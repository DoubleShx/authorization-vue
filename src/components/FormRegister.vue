<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group
        v-for="(item, index) in formsArray"
        :key="item.title"
        :id="'example-input-group' + index"
        :label="item.title | uppercase"
        :label-for="'example-input-' + index"
      >
        <b-form-input
          v-if="item.type !== 'date'"
          :id="'example-input-' + index"
          :name="'example-input-' + index"
          v-model="$v.form[item.title].$model"
          :state="validateState(item.title)"
          :aria-describedby="'input-' + index + '-live-feedback'"
          class="mt-1"
          :type="item.type"
        ></b-form-input>
        <b-form-datepicker
          v-else
          :id="'example-input-' + index"
          :name="'example-input-' + index"
          locale="Finnish"
          date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          v-model="$v.form[item.title].$model"
          :state="validateState(item.title)"
          :aria-describedby="'input-' + index + '-live-feedback'"
          class="mt-1"
          :type="item.type"
        ></b-form-datepicker>

        <b-form-invalid-feedback :id="'input-' + index + '-live-feedback'">{{
          item.text
        }}</b-form-invalid-feedback>
        <input
          v-if="item.checkbox === 'password'"
          :name="item.title"
          type="checkbox"
          @change="passwordShow($event)"
        />
      </b-form-group>
      <h4 v-if="loginError" class="text-danger login_error_message">{{loginError}}</h4>
    </b-form>
    <footer>
      <b-button @click="handleHideModal">Cancel</b-button>
      <b-button @click="onSubmit" :disabled="loadingForm"
        >Ok <b-spinner v-if="loadingForm" variant="success" label=""></b-spinner
      ></b-button>
    </footer>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  alpha,
  numeric,
  alphaNum,
  email,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      loadingForm: false,
    };
  },
  mounted() {
    this.resetForm()
  },
  props: {
    formsArray: {
      type: Array,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    },
    loginError: {
      type: String,
    }
  },
  validations: {
    form: {
      login: {
        required,
        alphaNum,
        minLength: minLength(6),
      },
      email: {
        email,
        required,
      },
      phone: {
        numeric,
        checkPhone(phone) {
          return (
            /^998/.test(phone) && //checks for a-z
            phone.length === 12 //checks for 0-9
          );
        },
      },
      name: {
        minLength: minLength(2),
        alpha,
        required,
      },
      birthday: {
        isAdultCheck(date) {
          let selectedDate = new Date(date);
          let eighteenYearsAgo = new Date(
            new Date().setFullYear(new Date().getFullYear() - 18)
          );
          return selectedDate <= eighteenYearsAgo;
        },
      },
      password: {
        required,
        alphaNum,
        minLength: minLength(8),
        strongPassword(password) {
          return (
            /[A-Z]/.test(password) && //checks for a-z
            /[0-9]/.test(password) //checks for 0-9
          );
        },
      },
    },
  },
  filters: {
    uppercase(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    passwordShow(e) {
      let idx = this.formsArray.findIndex(
        (item) => item.title === e.target.name
      );
      let changedElement = {
        ...this.formsArray[idx],
        type: this.formsArray[idx].type === "password" ? "text" : "password",
      };
      this.formsArray = [
        ...this.formsArray.slice(0, idx),
        changedElement,
        ...this.formsArray.slice(idx + 1),
      ];
    },
    resetForm() {
      this.form = {...Object.keys(this.form).reduce((prevResult, property) => {
        if (property === 'phone') {
          return {...prevResult, [property]: '998'}
        }
        else {
          return {...prevResult, [property]: null}
        }
      }, {})}

      this.loginError=""

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    handleHideModal() {
      this.$emit("modal-cancel")
    },
    onSubmit() {
      this.loadingForm = true;
      setTimeout(() => {
        this.loadingForm = false;
        this.$v.form.$touch();
        this.$emit("modal-ok", this.form, this.$v.form);
      }, 1000);
    },
  },
};
</script>