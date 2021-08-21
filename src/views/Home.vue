<template>
<div class="app">
  <NavBar />
  <Hero />
  <Services />
  <NewsLetter />
  <Project />
  <Clients />
  <Footer />
</div> 
</template>

<script>
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import NewsLetter from "@/components/NewsLetter";
import Project from "@/components/Project";
import Clients from "@/components/Clients";
import  Footer from "@/components/Footer"
export default {
  name: "App",
  components: {
    NavBar,
    Hero,
    Services,
    NewsLetter,
    Project,
    Clients,
    Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}
a {
  color: #ffc107;
  text-decoration: none;
}
a:hover {
  color: #ffce3a;
  text-decoration: none;
}
h1, h2, h3, h4, h5, h6 {
  font-family: "Raleway", sans-serif;
}
#section-title {
  display: flex;  
  text-align: center; 
  justify-content: center; 
  padding-top: 30px;
  padding-bottom: 30px;
  color: white;
}
h2 {
  margin-top: 12px;
  font-weight: 600;
  padding-bottom: 10px;
  letter-spacing: 2px;
  font-family: "Poppins", sans-serif;
  position: relative;
}
h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 100px;
  height: 6px;
  background: #ffc107;
  bottom: 0;
  left: calc(50% - 60px);
}
#space {
  height: 300px;
}
</style>
