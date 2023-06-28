<template>
    <div class="d-flex justify-content-center">
        <component :is="this.optionRight" />
    </div>
</template>

<script>
import Overview from './Overview.vue';
import Skills from './Skills.vue';
    export default {
        name: 'ContentComponent',
        computed: {
            optionRight(){
                return this.$store.state.optionRight;
            }
        },
        components:{
            Overview, Skills
        }
    }
</script>

<style scoped>

</style>