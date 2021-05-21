<template>
  <div>
    <div class="card is-half">
      <h1>
        <strong>Register</strong>
      </h1>
      <div class="card-content">
        <b-field label="Email"
                 placeholder="Enter your email">
          <b-input v-model="email" type="email"
                   placeholder="Enter your email"
                   maxlength="30">
          </b-input>
        </b-field>
        <b-field label="Password">
          <b-input type="password"
                   v-model="password"
                   placeholder="Enter your password"
                   maxlength="30"
                   minlength="8"
                   password-reveal>
          </b-input>
        </b-field>
        <div>
          <b-button type="submit" class="is-success" @click="pressed">
            Sign up
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.replace('/')
          })
          .catch(error => {
            this.error = error
            console.log('error')
          })
    }
  }
};
</script>
