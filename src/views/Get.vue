<template>
<div class="popup">
  <v-toolbar
          color="#ECEFF1"
          class="tool-get"
        >
          
          <v-toolbar-title>FinetekLabs</v-toolbar-title>
          <v-spacer></v-spacer>
          <router-link :to="{ name: 'Home' }">Back to home<v-icon>mdi-menu-right</v-icon></router-link>
          
        </v-toolbar>
<br>
         <v-card 
         class="mx-auto"
         max-width="700px"
         style="margin-bottom: 50px;">
        <v-card-title>
          <span class="text-h5">Request Quote</span>
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-row>
            <v-col
                cols="12"
              >
                <v-select
                  :items="items"
                  v-model="service"
                  :rules="[v => !!v || 'Item is required']"
                  label="Select Service"
                  prepend-icon="mdi-chart-bubble"
  
                ></v-select>
              </v-col>

             <v-col
                cols="12"
             >
             <v-text-field
             v-model="company"
             label="Company Name"
             required
             prepend-icon="mdi-folder"
             :rules="inputRules"
             >
             </v-text-field>
             </v-col>
              
              <v-col
                cols="12"
              >
                <v-textarea
                  label="Request*"
                  required
                  prepend-icon="mdi-pencil"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  label="Telephone"
                  required
                  prepend-icon="mdi-pencil"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                  prepend-icon="mdi-email"
                ></v-text-field>
              </v-col>             
            </v-row>
          </v-container>
          <v-btn
            color="blue darken-1"
            
          >
            request quote
          </v-btn>
          </v-card-text>
        
      </v-card>
      <br>
      <div id="get">
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
            <h4>Our Services</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right">Payments</i> <a href="#"></a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a>Business</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a>Commerce</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">AgriTech</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a>Finance</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a>Custom</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a>Augmented Reality</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a>Artificial Intelligence</a>
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
      </div>
</div>
</template>

<script>
import  Footer from "@/components/Footer"
export default {
  components : { Footer },
  data: () => ({
      items: ['E-commerce solution', 'Financial services', 'Mobile application', 'Application'],
      company: null,
      phone: null,
      services: null,
      email: null,
      emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
      inputRules: [
           v => v.length >=3 || 'Minimum length is 3 characters',
          ],    
  }),
}
</script>

<style>
@media (max-width: 991px) {
  #get{
    display: none;
  }
  .tool-get{
    display: flex;
    justify-content: space-between;
  }
}
</style>