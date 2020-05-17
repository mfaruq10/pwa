<template>
<div id="app">
      <Navbar />
      <Register/>
</div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Register from '~/components/Register.vue'

export default {
  name : 'register',
  components: {
    Navbar,
    Register
    
  }
}
</script>
