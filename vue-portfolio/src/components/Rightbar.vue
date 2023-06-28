<template>
    <div>
        <!-- buttons for about -->
        <button class="btn" v-show="this.optionLeft === 'About'" @click="setSelectedRight('Overview')"> Overview </button>
        <button class="btn" v-show="this.optionLeft === 'About'" @click="setSelectedRight('Personal_interests')"> Personal interests </button>
        <button class="btn" v-show="this.optionLeft === 'About'" @click="setSelectedRight('Video_Presentation')"> Video presentation </button>
        <button class="btn" v-show="this.optionLeft === 'Resume'" @click="setSelectedRight('Skills')"> Skills </button>
        <button class="btn" v-show="this.optionLeft === 'Resume'" @click="setSelectedRight('Experience')"> Experience </button>
        <button class="btn" v-show="this.optionLeft === 'Resume'" @click="setSelectedRight('Academic')"> Academic </button>
        <button class="btn" v-show="this.optionLeft === 'Projects'" @click="setSelectedRight('Real-world_projects')"> Real-world projects </button>
        <button class="btn" v-show="this.optionLeft === 'Projects'" @click="setSelectedRight('Përsonal_projects')"> personal projects </button>
    </div>
</template>

<script>
//import leftSelected from '../stores/ButtonsStore.js';

    export default {
        name: "Rightbar",
        computed:{
            optionLeft(){
            return this.$store.state.optionLeft;
            },
        },
        methods:{
            setSelectedRight(value){

                value = value[0].toUpperCase() + value.substring(1);
                this.$store.commit("setOptionRight", value);

            }
        }
    }

</script>

<style scoped>

</style>