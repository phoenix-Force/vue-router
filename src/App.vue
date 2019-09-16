<template>
    <div class="container">
      <nav-link></nav-link>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

              <router-view></router-view>
            </div>
          </div>
      </div>
</template>
<script>
import header from "./components/shared/Header.vue"
export default {
  components:{
    navLink:header
  }

}
</script>
<style scoped>

</style>
