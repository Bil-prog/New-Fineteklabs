<template>
<div id="panel">
  <div class="section-title">
            <h2 class="h1-responsive font-weight-bold my-5" style="color: #616161;">Why us?</h2>
        </div>
  <div class="NewsLetter">
      <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        class="expansion"
        v-for="(item,i) in items"
         :key="i"
         :title="item.title"
         :icon="item.icon"
         :content="item.content"
      >
        <v-expansion-panel-header class="font-weight-bold" style="font-size: 20px;">{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-icon :style="{right: '1%'}" style="color: #ffc107;">{{ item.icon }}</v-icon>{{ item.content }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
  </div>

  </div>
</template>

<script>
export default {
  name: "NewsLetter",
  data: () => ({
      items: [
        { 
          title: 'Innovative process',  
          content: 'We offer an innovative approach to doing our system design and implementation',
          icon: 'mdi-rocket-launch',
        },
        {
           title: 'High experience',  
           content: 'Our team comprises of highly experienced professionals with know how of modern tech landscape',
           icon: 'mdi-check-decagram',
          
        },
        {
          title: 'Decisiveness',  
          content: 'You give us your problem, we offer you a lasting solution',
          icon: 'mdi-pin',
        },
        {
         title: 'Going beyond',  
         content: 'We ensure as we go beyond our boundaries of innovation, research and development, we grow beyond our limits',
         icon: 'mdi-lightbulb-on',
        },
       
      ],
    }),
};
</script>

<style scoped>
.NewsLetter {
  height: 450px;
  background-color: rgba(45, 53, 69, 0.7);
  margin-top: 35px;
  padding: 55px 65px;
  padding-top: 85px;
}
 .section-title { 
  display: flex;   
  justify-content: center; 
  padding-top: 30px;
  padding-bottom: 30px;
  color: white;
}
.expansion:hover{
  box-shadow: 3px 3px #ffc107;
}

</style>