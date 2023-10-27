<template>
    <div class="skills">
        <div class="crd py-3" style="width: 18rem;" :key="skills.id">
            <img :src="skills.img" :alt="skills.title">
            <div class="ctn">
                <h4><b>{{ skills.title }}</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        skills: Object
    },

}
</script>
<style scoped>
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

img {
    width: 8rem;
}
</style>