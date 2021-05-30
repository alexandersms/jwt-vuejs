<template>
  <div>
    <h1>Login Form</h1>
    <form @submit.prevent="login()">
      <div class="form-group">
        <label for="txtUserName">UserName</label>
        <input
          type="text"
          class="form-control"
          id="txtUserName"
          aria-describedby="userNameHelp"
          placeholder="Enter your username"
          v-model="user.username"
        />
      </div>
      <div class="form-group">
        <label for="txtPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="txtPassword"
          placeholder="Enter your password"
          v-model="user.password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", {
      gettersLoginApiStatus: "getLoginApiStatus",
    }),
  },
  methods: {
    ...mapActions("auth", {
      actionLogin: "login",
    }),
    async login() {
      await this.actionLogin(this.user);
      if (this.gettersLoginApiStatus === "success") {
        alert("login success");
      } else {
        alert("failed to login");
      }
    },
  },
};
</script>

<style scoped></style>
