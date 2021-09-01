<template>
 <section id="clients" class="section-bg">
    <div class="container">
        <div class="section-title">
            <h2 class="h1-responsive font-weight-bold my-5" style="color: #616161;">Our clients</h2>
        </div>
        <div class="row no-gutters clients-wrap clearfix wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://fineteklabs.com/buruk.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://fineteklabs.com/falconsigns.jpg" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://fineteklabs.com/hhour.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://fineteklabs.com/papcon.jpg" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://fineteklabs.com/perfectpics.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 povo">
                <div class="client-logo"> <img src="http://fineteklabs.com/sucafina.svg" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://fineteklabs.com/ktb.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://fineteklabs.com/newnham.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://fineteklabs.com/mnc.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 povo">
                <div class="client-logo"> <img src="http://fineteklabs.com/povo.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://fineteklabs.com/canopy.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://fineteklabs.com/ideas.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo"> <img src="http://medilaballied.com/img/cologo.13171d88.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 povo">
                <div class="client-logo"> <img src="https://solidlaunch.co.ke/wp-content/uploads/2020/08/solidlogo3.png" class="img-fluid" alt=""> </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 povo">
                <div class="client-logo"> <img src="http://arctis.co.ke/images/New/arctisLogo.png" class="img-fluid" alt=""> </div>
            </div>

        </div>
    </div>
</section>
</template>



<script>
export default {
  name: "Clients",
};

</script>

<style scoped>
#clients {
    max-height: 880px;
}
 .section-title { 
  display: flex;   
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

 .section-header p {
     text-align: center;
     margin: auto;
     font-size: 15px;
     padding-bottom: 60px;
     color: #556877;
     width: 50%
 }
 .col-lg-3{
    margin-bottom: 15px;
    transition: transform .5s;
 }
 .col-lg-3:hover{
     transform: scale(1.3);
 }

 #clients {
     padding: 60px 0
 }

 #clients .clients-wrap {
     
     margin-bottom: 30px
 }

 #clients .client-logo {
     padding: 64px;
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-pack: center;
     -webkit-justify-content: center;
     -ms-flex-pack: center;
     justify-content: center;
     -webkit-box-align: center;
     -webkit-align-items: center;
     -ms-flex-align: center;
     align-items: center;
     overflow: hidden;
     background: #fff;
     height: 160px
 }

 #clients img {
     transition: all 0.4s ease-in-out
 }
 @media (width: 1024px) {
  .povo{
    width: 400px;
    height: 150px;
    margin-left: 120px;
    object-fit: contain;
    display: flex;
    display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     -webkit-box-pack: center;
     -webkit-justify-content: center;
     -ms-flex-pack: center;
     justify-content: center;
     -webkit-box-align: center;
     -webkit-align-items: center;
     -ms-flex-align: center;
     align-items: center;
  }
  
}
</style>