<template>
  <div>
    <nav class="navbar has-shadow navbar-blue" role="navigation" aria-label="main navigation">
      <a class="logo-link" href="/">
        <img class="logo" src="https://static.bfmtv.com/ressources/img/logo/header/BFMTV.svg" alt="" />
      </a>
    </nav>

    <section class="main-content">
      <nuxt />
    </section>
  </div>
</template>

<style scoped>
.navbar-blue {
  background-color: #00447a;
  display: flex;
  align-items: center;
  height: 84px;
}
.logo-link {
  margin: auto;
}
.logo {
  height: 84px;
}

@media (max-width: 991px) {
  .navbar-blue,
  .logo {
    height: 64px;
  }
}
</style>
