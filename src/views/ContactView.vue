<template>
    <div>
        <h1>Let's Get in Touch</h1>
        <img src="https://i.postimg.cc/x8PbMvL0/Emoji-removebg.png" alt="" class="img-fluid contact">
        <contact />
        <FootComp />
    </div>
</template>
<script>
import contact from '@/components/ContactForm.vue';
import FootComp from '@/components/Footer.vue';
export default {
    name: "ContactView",
    components: {
        contact,
        FootComp
    }
}
</script>
<style scoped>
.contact {
    width: 200px;
}

h1 {
    font-family: 'Alfa Slab One', serif;
    color: #FBF7F7;
}

@media only screen and (max-width: 400px) {
    .contact {
        width: 175px;
    }
}
</style>