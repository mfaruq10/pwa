<template>
<div id="app">
      <Navbar />
      <Login/>
</div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Login from '~/components/Login.vue'

export default {
  name : 'login',
  components: {
    Navbar,
    Login
    
  }
}
</script>
