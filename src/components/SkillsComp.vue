<template>
    <div class="">
        <section id="img" class="py-3 px-5 row " v-if="skills">
            <Card v-for="skill in skills" :key="skill.id" :skills="skill" id="skills" @click="showDescr()" class="col-4"/>
        </section>
        <section v-if="Descr" class="border-white border-start">
            <div v-for="skill in skills" :key="skill">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex modi deserunt earum? Repellat officiis eaque incidunt officia! Vitae doloremque, porro consectetur delectus at beatae odit voluptate praesentium pariatur aut.
            </div>
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
        showDescr() {
            this.Descr = !this.Descr
            const pic = document.getElementById("skills")
            if (this.Descr) {
                pic.style.display = "grid"
                pic.style.gridTemplateColumns = "auto auto auto"
            }
            else {
                pic.style.display = "flex"
                pic.style.flexDirection = "column"
            }
        }
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

img {
    width: 8rem;
}

.crd {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 20px;
}

.crd:hover {
    box-shadow: 0 8px 16px 0 white;
    transform: scale(1.25);
}

.ctn {
    padding: 2px 16px;
}


#skills {
    /* display: grid;
    grid-template-columns: auto auto auto; */
    /* display: flex;
    flex-direction: row; */
}
</style>