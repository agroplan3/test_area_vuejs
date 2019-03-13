<template>
  <div id="home" class="uk-container uk-container-center uk-text-center">
    <h1 class="uk-animation-slide-top uk-text-primary">{{ msg }}</h1>

    <ul class="uk-subnav uk-flex-center">

      <button style="padding:0px" class="uk-button uk-button-secondary uk-animation-slide-top">
          <a href="https://google.com">
            <img style="width:100px; height:100px" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg">
          </a>
          <span class="uk-label">Go To Google.com</span>
      </button>

      <button style="padding:0px" class="uk-button uk-button-secondary uk-animation-slide-top">
          <a href="https://github.com">
            <img style="width:100px; height:100px" src="https://image.flaticon.com/icons/png/512/25/25231.png">
          </a>
          <span class="uk-label">Go To Github.com</span>
      </button>

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