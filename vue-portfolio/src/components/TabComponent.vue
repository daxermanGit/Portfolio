<template>
    <div class="ml-0 button-column">
        <button type="button" class="btn btn-link column-button" @click="setSelectedLeft('About')">About</button>
        <button type="button" class="btn btn-link column-button" @click="setSelectedLeft('Resume')">Resume</button>
        <button type="button" class="btn btn-link column-button" @click="setSelectedLeft('Projects')">Projects</button>
    </div>
</template>

<script>
//import {leftSelected} from '../stores/ButtonsStore.js';
import { useStore } from 'vuex';
    export default {
        name:'TabComponent',
        data(){
        },
        computed:{
            options(){
                return this.$store.state.options;
            },
        },
        methods:{
            setDefaultRight(value){
                this.$store.commit("setOptionRight", this.options[value][0]);
                console.log(this.options[value][0]);
            },
            setSelectedLeft(value){

                value = value[0].toUpperCase() + value.substring(1);
                //console.log(this.$store);
                // const store = useStore();
                this.$store.commit("setOptionLeft", value);
                //leftSelected.setOption(value);
                this.setDefaultRight(value);
            }
            
        }
        }
</script>

<style scoped>
.button-column {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }
.column-button {
    margin-bottom: 10px; /* Add some spacing between buttons */
  }
</style>