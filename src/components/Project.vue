<template>
<div id="projects">

<div class="container pb-5">
 <!-- Section heading -->
 <div class="section-title">
  <h2 class="h1-responsive font-weight-bold my-5">Our best projects</h2>
 </div> 
  <!-- Section description -->
  <p class="grey-text w-responsive mx-auto mb-5">
     Finetek is a software development company based in Nairobi Kenya, established in 2016, Finetek has had a remarkable experience in development of innovative software solutions to cater for various client needs
  </p>

  <!-- Grid row -->
  <div class="row text-center">

      
    <!-- Grid column -->
    <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
      <!--Featured image-->
      <div class="view overlay rounded z-depth-1">
        <img
          src="http://fineteklabs.com/zaweb01.jpg"
          class="img-fluid"
          alt="Sample project image"
        />
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <!--Excerpt-->
      <div class="card-body pb-0">
        <h5 class="font-weight-bold my-3">agritech solution with markets and finance</h5>
        
        <a class="btn btn-success btn-lg" href="https://www.zalishafrica.com/"
          > View project</a
        >
      </div>
    </div>
   

    
    

    <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
      <!--Featured image-->
      <div class="view overlay rounded z-depth-1">
        <img
          src="http://fineteklabs.com/nakkei%20final.png"
          class="img-fluid"
          alt="Sample project image"
          style="height: 245px;"
        />
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <!--Excerpt-->
      <div class="card-body pb-0">
        <h5 class="font-weight-bold my-3">digital e-commerce and  finance solution</h5>
       
        <a class="btn btn-success btn-lg"
          > View project</a
        >
      </div>
    </div>

     <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
      <!--Featured image-->
      <div class="view overlay rounded z-depth-1">
        <img
          src="http://fineteklabs.com/zafoods.jpg"
          class="img-fluid"
          alt="Sample project image"
          style="height: 265px;"
        />
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <!--Excerpt-->
      <div class="card-body pb-0">
        <h5 class="font-weight-bold my-3">e-grocery store</h5>
       
        <a class="btn btn-success btn-lg"
          >View project</a
        >
      </div>
    </div>
  </div>

</div>
 
</div>  
</template>


<script>
export default {
  name: "Project",
};
</script>

<style scoped>
#projects{
  margin-top: 60px;
}
.section-title{
  display: flex;
  justify-content: center;
}
</style>