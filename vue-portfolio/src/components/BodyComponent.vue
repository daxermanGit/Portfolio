<template>

        <div class=" bodyframe">
            <div class="container">
                <div class="row">
                    <div class="col-9">
                        <div class="top d-flex ">
                            <img class="frame-border top-left" src="../assets/top-left.svg" alt="Top Left SVG" />
                            <blockquote class=" mx-1 mt-3 blockquote">
                                <span class="mb-0 font-weight-bold name">{{this.optionLeft}}</span><span id="cursor" v-show="showCursor"></span>
                                <p class=" title_ocupation">{{this.optionRight}}</p>
                            </blockquote>
                        </div>
                        <ContentComponent />
                        <img class="frame-border bottom-right" src="../assets/bottom-right.svg" alt="Bottom Right SVG" />
                    </div>
                    <div class="col">
                        <Rightbar />
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import ContentComponent from './ContentComponent.vue';
import Rightbar from './Rightbar.vue';
    export default {
       name:'BodyComponent',
       computed:{
        //obtain from vuex optionLeft and optionRight states
            optionLeft(){
            return this.$store.state.optionLeft;
            },
            optionRight(){
            return this.$store.state.optionRight;
            },
        },
       components:{
        ContentComponent,
        Rightbar
        }
    }
</script>

<style scoped>
.tittle{
    font-size: 45px;
    display: inline;
}
.frame-border{
    width: 50px;
    height: 50px;
}
.bottom-right{
    position: absolute;
    bottom: 0;
    right: 0;
}
.name{
    font-size: 40px;
}
.title_ocupation{
    font-size: 15px;
    color: gray;
}
</style>