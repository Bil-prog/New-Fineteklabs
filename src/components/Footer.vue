<template>
<div class="foot">
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 footer-contact">
            <h3>FinetekLabs</h3>
            <p>
              Nairobi <br />
              Kenya <br /><br />
              <strong>Phone:</strong>+254 734 34 1962<br />
              <strong>Email:</strong>info@fineteklabs.com<br />
            </p>
          </div>

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Our Services</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Projects</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Clients</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right">Payments</i> <a href="#"></a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Business</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Commerce</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">AgriTech</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Finance</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Custom</a>
              </li>
            </ul>
          </div>
          
      </div>
    </div>
  </div>  

    <div class="container d-md-flex py-4">
      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} — Copyright <strong><span>FinetekLabs</span></strong
          >. All Rights Reserved
        </div>
       
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="http://fineteklabs.com/twitter.com/fineteklabs" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="http://fineteklabs.com/facebook.com/fineteklabs" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="http://fineteklabs.com/linkedin.com/fineteklabs" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
  </div>
</template>


<script>
export default {
  name: "Footer",
};
</script>

<style>
/*.links{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}*/
.foote{
  display: flex;
}
#footer {
  color: #414c64;
  font-size: 14px;
  background: #f4f5f8;
}
#footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  color: #444444;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #ffc107;
  font-size: 18px;
  line-height: 1;
}

#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}


#footer .footer-top {
  padding: 60px 0 30px 0;
  background: #fafafc;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact h4 {
  font-size: 22px;
  margin: 0 0 30px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 700;
}

#footer .footer-top .footer-contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  color: #777777;
}


#footer .footer-top .footer-links ul a {
  color: #777777;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

#footer .footer-top .footer-links ul a:hover {
  text-decoration: none;
  color: #ffc107;
}


#footer .credits {
  padding-top: 5px;
  font-size: 13px;
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #e1e4ec;
  color: #5f6f92;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: #ffce3a;
  text-decoration: none;
}
@media (max-width: 991px) {
  #footer{
    margin-top: 1500px;
  }
  
}
@media (min-width: 1024px) {
  #footer{
    margin-top: 100px;
  }
  
}

</style>