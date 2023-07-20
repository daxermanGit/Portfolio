<template>

        <div class=" bodyframe">
            <div class="container">
                <div class="row">
                    <div class="col-9">
                        <div class="top d-flex ">
                            <img class="frame-border top-left" src="../assets/top-left.svg" alt="Top Left SVG" />
                            <blockquote class=" m-4 blockquote">
                                <span class="mb-0 font-weight-bold name">Tittle</span><span id="cursor" v-show="showCursor"></span>
                                <p class=" title_ocupation">subtittle</p>
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