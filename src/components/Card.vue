
<template>
    <div class="skills">
        <div class="crd py-3" style="width: 18rem;" :key="skills.id">
            <img :src="skills.img" :alt="skills.title">
            <div class="ctn" id="ctn">
                <h4><b>{{ skills.title }}</b></h4>
                <button @click="showDescr()">Description</button>
            </div>
            <section v-if="Descr"  @click="showDescr()" id="status" class="animate__animated animate__fadeInUp">
                <div :key="skills.id" class="my-4" style="text-align: center;">
                    {{ skills.descr }}
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        skills: Object
    },
    data() {
        return {
            Descr: false,
        }
    },
    methods: {
        showDescr() {
            this.Descr = !this.Descr
        }
    },

}
</script>
<style scoped>
.crd {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 20px;
    position: relative;
}

.crd:hover {
    box-shadow: 0 8px 16px 0 white;
    transform: scale(1.05);
}

.ctn {
    padding: 2px 16px;
    position: relative;
}

img {
    width: 8rem;
}

section {
    display: inline;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #008CBA;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 #ddd;
}

/* .crd:hover section {
    opacity: 1;
} */

button {
    display: none;
}



.crd:hover button {
    display: inline;

}
@keyframes appear {
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>