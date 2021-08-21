<template>
    <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative ">
      <h1>Welcome to FinetekLabs</h1>
      <h2 class="pt-5">We make your Ideas come back to life</h2>
      <router-link :to="{ name: 'Get' }"><button class="btn-get-started">
            Get started  
            </button></router-link>
      </div>
    
    
  </section>
</template>

<script>
import Popup from '../components/Popup.vue';
export default {
  components: { Popup },
    name: "Hero",
    data () {
      return {
        //
      }
    }
}
</script>

<style scoped>
 .btn-get-started {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  position: relative;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  padding: 9px 35px;
  border-radius: 50px;
  transition: 0.5s;
  margin-top: 40px;
  border: 2px solid #ffc107;
  color: #fff;
}

.btn-get-started:hover {
  background: #ffc107;
}

#hero {
  width: 100%;
  height: 100vh;
  background: url('../assets/bulbs.jpg');
  object-fit: contain;
  background-size: cover;
  position: relative;
}

#hero:before {
  content: "";
  background: rgba(45, 53, 69, 0.7);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#hero .container {
  text-align: center;
  padding-top: 50px;
}

@media (max-width: 992px) {
  #hero .container {
    padding-top: 0;
  }
  #hero {
  width: 100%;
  height: 60vh;
  background: url('../assets/bulbs.jpg');
  object-fit: contain;
  background-size: cover;
  position: relative;
}

}

#hero h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
}

#hero h2 {
  color: #eee;
  margin: 15px 0 0 0;
  font-size: 22px;
}

#hero .btn-get-started {
  position: relative;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 9px 35px;
  border-radius: 50px;
  transition: 0.5s;
  margin-top: 40px;
  border: 2px solid #ffc107;
  color: #fff;
}

#hero .btn-get-started:hover {
  background: #ffc107;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  #hero {
    height: 100vh;
  }
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
  }
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
/*section {
  padding: 60px 0;
}

.section-bg {
  background-color: #f7f8fa;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.section-title h2::after {
  content: '';
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #ffc107;
  bottom: 0;
  left: calc(50% - 25px);
}

.section-title p {
  margin-bottom: 0;
  font-size: 14px;
  color: #aab3c7;
}*/

</style>