<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
      >
        <img
          src="../assets/image/logo.png"
          alt=""
          width="30"
          height="30"
        >
        BeLazySloth
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <i class="fa-solid fa-cart-shopping" />
      <!-- <div class="d-flex justify-content-end"> -->

      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <i class="fa-solid fa-user" />
        <!-- <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.navbar {
  position: relative;

  .navbar-toggler {
    position: absolute;
    right: 20px;
  }
}

.navbar {
  display: block;
}
</style>
