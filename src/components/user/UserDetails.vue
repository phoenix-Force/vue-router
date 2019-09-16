<template>
<div class="container">
  <h3>User DEetails</h3>
  <button class="btn btn-primary" @click="goToHome">Home</button>
  <div>
    <h2>{{id}}</h2>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      id:this.$route.params.id
    }
  },
  watch:{
    '$route'(to,form){
      this.id = to.params.id
    }
  },
  methods:{
    goToHome(){
      this.$router.push("/")
    }
  }

}
</script>
