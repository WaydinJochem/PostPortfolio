<template>
    <nav class="naviagtion">
        <input type="checkbox" id="post" class="active" />
        <label for="post" class="postBtn"></label>
        <ul>
            <li class="home"><router-link to="/"><img src="https://i.postimg.cc/9fKccWBK/icons8-home-64.png"
                        alt=""></router-link></li>
            <li class="about"><router-link to="/about"><img src="https://i.postimg.cc/kXmZV9x0/icons8-contact-50.png"
                        alt=""></router-link></li>
            <li class="projects"><img src="https://i.postimg.cc/4xvzFkqT/icons8-files-50.png" alt=""></li>
            <li class="skills"><a href="#"><img src="https://i.postimg.cc/zXssFKZc/icons8-product-knowledge-50.png"
                        alt=""></a></li>
            <li class="contact"><a href="#"><img src="https://i.postimg.cc/K8VC8TQN/icons8-form-50.png" alt=""></a></li>
        </ul>
    </nav>
</template>
<script>
export default {

}
</script>
<style scoped>
.navigation{
    position: fixed;
    bottom: 0;
    right: 20px;
    z-index: 2;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
}
</style>