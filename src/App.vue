<template>
    <div id="app">
        <RegForm></RegForm>
    </div>
</template>

<script>
  import Vue from "vue";
  import Vuelidate from  'vuelidate';
  Vue.use(Vuelidate)
    import RegForm from "./components/RegForm";
    export default {
    name: "App",
      validations: {},
    components: {RegForm}
  };
</script>

<style lang="sass" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap')
    *
        margin: 0
        padding: 0
        border: 0
        font-size: 100%
        font-family: 'Roboto', sans-serif
        vertical-align: baseline

    #app


    /*#app {*/

    /*}*/

</style>
