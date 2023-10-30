<template>
    <div class="">
        <section id="img" class="py-3 px-5 row " v-if="skills">
            <Card v-for="skill in skills" :key="skill.id" :skills="skill" id="skills" class="col-4"/>
        </section>
    </div>
</template>
<script>
import Card from './Card.vue'
export default {
    components: {
        Card
    },
    data() {
        return {
            Descr: false,
        }
    },
    methods: {
      
    },
    computed: {
        skills() {
            return this.$store.state.skills;
        },
    },
    mounted() {
        this.$store.dispatch("fetchSkills");
    },
}
</script>
<style scoped>
section {
    height: 666px;
    color: #FBF7F7;
}

</style>