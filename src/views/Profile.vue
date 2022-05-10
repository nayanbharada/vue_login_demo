<template>
    <h1>Hello, my name is {{ user.name }}</h1>
    <!-- <p>{{$store.getters.postsCount}} posts available</p> -->
    <p>{{ postsCount }}posts available </p>
</template>
<script>
import {mapState, mapGetters} from 'vuex';
export default{
  name: "profile",  
  computed:{
    ...mapState(['user']),
    ...mapGetters(['postsCount'])
  }
}
</script>
