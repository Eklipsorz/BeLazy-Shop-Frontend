<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/image/logo.png" alt="" width="30" height="30">
      BeLazySloth
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <i class="fa-solid fa-cart-shopping"></i>
      <!-- <div class="d-flex justify-content-end"> -->
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <i class="fa-solid fa-user"></i>
          <!-- <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
  </div>
</nav>
</template>


<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.navbar {
  position: relative;
  .navbar-toggler {
    position: absolute;
    right: 20px;
  }
}
</style>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>