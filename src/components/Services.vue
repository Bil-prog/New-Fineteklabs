<template>
<div class="serv">
  <section class="services" id="services">
    <div class="section-title">
            <h2 class="h1-responsive font-weight-bold my-5" style="color: #616161;">Our Services</h2>
        </div>
    <div class="container">
      <div class="row">
        
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up">
            <div class="icon-box icon-box-pink">
              <div class="icon"><i class="bx bxs-coin-stack"></i></div>
              <h4 class="title"><a href="">Payments</a></h4>
              <p class="description">We offer financial services integration and management for e-commerce and other businesses</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box icon-box-cyan">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Business</a></h4>
              <p class="description">We offer varied business management solutions for businesses such as ERP systems,POS systems,Payroll systems</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-green">
              <div class="icon"><i class="bx bx-cart-alt"></i></div>
              <h4 class="title"><a href="">Commerce</a></h4>
              <p class="description">We help you put your business up and running through development of e-commerce solutions on the go , depending on your industry</p>
            </div>
          </div>
          
           
         
      </div>
    </div>
  </section>
  <section class="services">
    <div class="container">
      <div class="row">
       <div class="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-blue">
              <div class="icon"><i class="bx bxs-component"></i></div>
              <h4 class="title"><a href="">Agritech</a></h4>
              <p class="description">Through our innovative approach, we help customise agritech solutions to meet the industry needs for growth</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box icon-box-orange">
              <div class="icon"><i class="bx bxs-bank"></i></div>
              <h4 class="title"><a href="">Finance</a></h4>
              <p class="description">We customise financial solutions to enable traditional businesses and informal sector persons access banking solutions</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-purple">
              <div class="icon"><i class="bx bxs-devices"></i></div>
              <h4 class="title"><a href="">Custom</a></h4>
              <p class="description">We develop custom software solutions, android apps , IoT solutions to cater our customer needs</p>
            </div>
          </div>
          
          
           
         
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
.container{
  max-width: 1500px;
}
.section-title { 
  display: flex;   
  justify-content: center; 
  padding-top: 30px;
  padding-bottom: 30px;
  color: white;
}
.services {
  padding-bottom: 20px;

}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.services .icon-box {
  padding: 30px;
  position: relative;
  overflow: hidden;
  margin: 0  0 40px 0;
  background: #fff;
  box-shadow: 0 5px 26px 0 rgba(68, 88, 144, 0.14);
  transition: all 0.3s ease-in-out;
  text-align: center;
  border: 1px solid #fff;
  height: 400px;
  width: 500px;
}

.services .icon {
  margin: 0 auto 20px auto;
  padding-top: 17px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  width: 82px;
  height: 82px;
}

.services .icon i {
  font-size: 46px;
  line-height: 1;
}

.services .title {
  font-weight: 700;
  margin-bottom: 25px;
  font-size: 18px;
}

.services .title a {
  color: #111;
}

.services .description {
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 0;
}

.services .icon-box-pink .icon {
  background: #fceef3;
}

.services .icon-box-pink .icon i {
  color: #ff689b;
}

.services .icon-box-pink:hover {
  border-color: #ff689b;
}

.services .icon-box-cyan .icon {
  background: #e6fdfc;
}

.services .icon-box-cyan .icon i {
  color: #3fcdc7;
}

.services .icon-box-cyan:hover {
  border-color: #3fcdc7;
}

.services .icon-box-green .icon {
  background: #eafde7;
}

.services .icon-box-green .icon i {
  color: #41cf2e;
}

.services .icon-box-green:hover {
  border-color: #41cf2e;
}

.services .icon-box-blue .icon {
  background: #e1eeff;
}

.services .icon-box-blue .icon i {
  color: #2282ff;
}

.services .icon-box-blue:hover {
  border-color: #2282ff;
}

.services .icon-box-orange .icon {
  background: #FFE0B2;
}

.services .icon-box-orange .icon i {
  color: #FF9800;
}

.services .icon-box-orange:hover {
  border-color: #FF9800;
}

.services .icon-box-purple .icon {
  background: #D1C4E9;
}

.services .icon-box-purple .icon i {
  color: #5E35B1;
}

.services .icon-box-purple:hover {
  border-color: #5E35B1;
}
@media (max-width: 991px) {
  .serv {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
  .services .icon-box {
    height: 300px;
    width: 300px;
  }
  .services .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
}
.services .icon{
  padding-top: 5px;
  width: 40px;
  height: 40px;
}
.services .icon i{
  font-size: 30px;
  padding-top: 2px;
}
.services .title {
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 16px;
}
.serv{
  margin-left: 30px;

}

}
@media (width: 768px) {
  .row{
    margin-left: 200px;
  }
  
}
   
</style>