<template>
 <div class="container sizing-to-90 mx-3 my-2 mx-sm-5 my-sm-4 ">
    <div class="row mx-0">
      <div class="col-10 col-md-5 col-lg-4 mx-0">
      <Leftbar/>
    </div>
    <div class="col align-self-center m-0">
      <BodyComponent/>
    </div>
    </div>
  </div>
  
</template>

<script>
import Leftbar from "./components/Leftbar.vue"
import BodyComponent from "./components/BodyComponent.vue"
export default {
  name: "App",
  data(){
    return{
    };
  },
  components:{
    Leftbar,
    BodyComponent,
  }
}
</script>

<style scoped>
.custom-grid-margin {
  margin-top: 20px;
  margin-left: 20px; 
}
.sizing-to-90{
  max-width: 90%;
}
</style>
