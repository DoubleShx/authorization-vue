<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-form-group
      v-for="(item, index) in formsArray"
      :key="item.title"
      :id="'example-input-group' + index"
      :label="item.title | uppercase"
      :label-for="'example-input-' + index"
    >
      <b-form-input
        :id="'example-input-' + index"
        :name="'example-input-' + index"
        v-model="$v.form[item.title].$model"
        :state="validateState(item.title)"
        :aria-describedby="'input-'+ index + '-live-feedback'"
        class="mt-1"
      ></b-form-input>
      <b-form-invalid-feedback :id="'input-'+ index + '-live-feedback'"
        >{{item.text}}</b-form-invalid-feedback
      >
    </b-form-group>
  </b-form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, helpers } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      formsArray: [
        {
          title: "name",
          text: "This is a required field and must be at least 3 characters.",
        },
        { title: "test", text: "This is a required field" },
      ],
      foods: [
        { value: null, text: "Choose..." },
        { value: "apple", text: "Apple" },
        { value: "orange", text: "Orange" },
      ],
      form: {
        name: null,
        test: null,
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        strongPassword(password1) {
          return (
            /[a-z]/.test(password1) && //checks for a-z
            /[0-9]/.test(password1) && //checks for 0-9
            /\W|_/.test(password1) && //checks for special char
            password1.length >= 8
          );
        },
      },
      test: {
        required,
        minLength: 0,
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
    resetForm() {
      this.form = {
        name: null,
        test: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    },
  },
};
</script>