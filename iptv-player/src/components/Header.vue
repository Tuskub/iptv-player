<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item>
        <router-link to="/"><strong>Home</strong></router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="/about"><strong>About</strong></router-link>
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div v-if="!loggedIn" class="buttons">
          <b-button class="is-primary" @click="signUp">
            <strong>Sign up</strong>
          </b-button>
          <b-button class="" @click="signIn">
            <strong>Log in</strong>
          </b-button>
        </div>
        <div v-else>
          <b-button class="is-primary" @click="signOut">
            <strong>Log out</strong>
          </b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log("signed in");
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace("/login");
          });
    },
    signIn() {
      this.$router.replace('/login');
    },
    signUp() {
      this.$router.replace('/register');
    }
  },
  data() {
    return {
      loggedIn: false,
      userEmail: firebase.auth().currentUser
    };
  },
};
</script>

<style scoped>
div {
  color: inherit;
}

</style>
