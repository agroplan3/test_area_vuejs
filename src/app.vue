<template>
  <div id="app" class="uk-container uk-container-center uk-text-center uk-margin-large-top">
    <h1>{{ msg }}</h1>
    <ul class="uk-subnav uk-flex-center">
      
      <li>
        <a href="https://google.com" target="_blank">
          <img style="width:100px; height:100px" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg">
          <p style="margin:0px">Go to Google.com</p>
        </a>
      </li>
      
      <li>
        <a href="https://github.com" target="_blank">
          <img style="width:100px; height:100px" src="https://image.flaticon.com/icons/png/512/25/25231.png">
          <p style="margin:0px">Go to Github.com</p>
          </a>
      </li>

    </ul>
    <vk-button v-on:click="customFunc">Vuikit Button</vk-button>
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
      msg: 'Test Vue Vuikit App'
    }
  }
}
</script>