<template>
    <div>
        <section id="img" class="row py-3 px-5" v-if="skills">
            <Card v-for="skill in skills" :key="skill.id" :skills="skill" class="col-4" />
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
                pic.style.display = "flex"
                pic.style.flexDirection = "column"
            }
            else {
                pic.style.display = "grid"
                pic.style.gridTemplateColumns = "auto auto auto"
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
    display: grid;
    grid-template-columns: auto auto auto;
}
</style>