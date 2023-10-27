<template>
    <div>
        <h1>This is the skills page</h1>
        <Skills/>
    </div>
</template>
<script>
import Skills from '@/components/SkillsComp.vue';


export default {
    name: 'SkillsView',
    components: {
        Skills
    }
}
</script>
<style scoped>
h1 {
    font-family: 'Alfa Slab One', serif;
    color: #FBF7F7;
}
</style>