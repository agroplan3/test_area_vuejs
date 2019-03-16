<template>
  <div id="home" class="uk-container uk-container-center uk-text-center">
    <h1 class="uk-animation-slide-top uk-text-danger">{{ msg }}</h1>

    <ul class="uk-subnav uk-flex-center">

    <div class="uk-margin-small">
      <div class="uk-button-group">
        <router-link :to="{name: 'login'}">
          <button id="goToLogin_btn" class="uk-button uk-button-primary uk-animation-slide-top">Login</button>
        </router-link>

        <router-link :to="{name: 'signUp'}">
          <button id="goToSignUp_btn" class="uk-button uk-button-primary uk-animation-slide-top uk-margin-small-left">SignUp</button>
        </router-link>           
      </div>
    </div>

    </ul>

  <button v-on:click="customFunc" style="padding:0px" class="uk-button uk-button-secondary uk-animation-slide-top">Uikit Button</button>
  </div>
</template>

<script>
export default {
  name: 'app',
    methods: {
    customFunc: function () {
      alert("Yes, this is working!")
    }
  },
  data () {
    return {
      msg: 'Test Vue Uikit App'
    }
  }
}
</script>