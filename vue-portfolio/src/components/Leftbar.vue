<template>
    <blockquote class="blockquote">
        <span class="mb-0 font-weight-bold name">{{ name }}</span><span id="cursor" v-show="showCursor"></span>
        <p class=" title_ocupation">Python developer</p>
      </blockquote>
    <p class=" description">I build great automatized apps with pyrhon and datasicence libraries</p>
      <TabComponent/>
      
</template>

<script>
import TabComponent from './TabComponent.vue'
export default {
    name: 'Leftbar',
  data() {
    return {
      name_fill: "David Castro",
      name: "",
      showCursor: true,
      typingSpeed: 200, // Adjust the typing speed (in milliseconds)
      cursorBlinkSpeed: 500, // Adjust the cursor blink speed (in milliseconds)
    };
  },
  components:{
    TabComponent
  },
  mounted() {
    this.typeText();
    
  },
  methods: {
    typeText() {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        this.name += this.name_fill[currentIndex];
        currentIndex++;
        if (currentIndex >= this.name_fill.length) {
          clearInterval(typingInterval);
          this.blinkCursor();
        }
      }, this.typingSpeed);
    },
    blinkCursor() {
      setInterval(() => {
        this.showCursor = !this.showCursor;
      }, this.cursorBlinkSpeed);
    },
  },
};
</script>

<style scoped>
#cursor {
    display: inline-block;
    width: 5px;
    height: 40px;
    background-color: #0F1C37;
    vertical-align: text-bottom;
  }
.name{
    font-size: 40px;
}
.title_ocupation{
    font-size: 15px;
    color: gray;
}
</style>