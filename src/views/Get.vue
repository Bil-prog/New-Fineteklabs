<template>
<div class="popup">
  <v-toolbar
          color="#ECEFF1"
        >
          
          <v-toolbar-title>FinetekLabs</v-toolbar-title>
          
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
          <v-container>
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
      <Footer /></div>
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
      services: "",
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
}
</style>