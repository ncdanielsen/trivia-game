<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-menu">
    <div class="navbar-start">
        <router-link class="navbar-item" to='/'>
            Home
        </router-link>
    </div>
  </div>
</nav>
    
</template>
<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
.navbar{
    background: gray;
}

.navbar-item{
    color: white;
}

.navbar-menu {
    margin-left: 9em;
    margin-right: 9em;
}
</style>