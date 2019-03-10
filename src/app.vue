<template>
  <div id="app" class="uk-container uk-container-center uk-text-center uk-margin-large-top">
    <h1>{{ msg }}</h1>
    <ul class="uk-subnav uk-flex-center">
      
    

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