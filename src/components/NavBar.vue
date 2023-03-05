<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="/">
      <img
        src="../assets/cas.webp"
        class="me-2"
        alt="CAS Logo"
        loading="lazy"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse  navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/" @click="setActiveButton">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#solutions" @click="setActiveButton" >Solutions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#team" @click="setActiveButton">Our Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#products" @click="setActiveButton">Our Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about" @click="setActiveButton">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/files" @click="setActiveButton">Certificates</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact" @click="setActiveButton">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  name: 'NavBar',
  methods:{
    setActiveButton: function(event){
      //Eliminar la clase avtiva de todos los botones de navegacion
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => link.classList.remove('active'))

      //Agrega la clase activa al boton de navegacion selecionado
      event.target.classList.add('active')
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media (max-width: 768px) {
  .navbar-nav {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
.navbar{
  height: 78px;
  font-weight: 500;
  font-size: 1.1rem;
  gap: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999999;
}

.navbar-nav{
  gap: 40px;
  margin-right: 7.5rem;
}

.navbar-brand img{
  height: 3.3rem;
}

.nav-link.active {
  color: black;
}



</style>
