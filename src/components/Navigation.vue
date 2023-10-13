<template>
    <nav role='navHeader' class="navigation">
        <input type="checkbox" id="post" class="active" />
        <label for="post" class="postBtn"></label>
        <ul>
            <li class="home"><router-link to="/"><img src="https://i.postimg.cc/9fKccWBK/icons8-home-64.png" alt=""></router-link></li>
            <li class="about"><router-link to="/about"><img src="https://i.postimg.cc/kXmZV9x0/icons8-contact-50.png" alt=""></router-link></li>
            <li class="link"><img src="https://i.postimg.cc/4xvzFkqT/icons8-files-50.png" alt=""></li>
            <li class="chat"><a href="#"><img src="https://i.postimg.cc/zXssFKZc/icons8-product-knowledge-50.png" alt=""></a></li>
            <li class="video"><a href="#"><img src="https://i.postimg.cc/K8VC8TQN/icons8-form-50.png" alt=""></a></li>
        </ul>
    </nav>
    <div class="overlay"></div>
</template>
<script>
export default {

}
</script>
<style scoped>
.navigation {
    position: absolute;
    left: 15px;
    top: 50%;
    z-index: 2;
}

/* Experimental code */


.postBtn {
    animation: glow 2s infinite ease-in-out;
    height: 60px;
    width: 50px;
    display: block;
    background: #262626;
    position: absolute;
    z-index: 1;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}
@keyframes glow{
    0%{
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.468);
    }
    25%{
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.468);
    }
    50%{
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.468);
    }
    75%{
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.468);
    }
    100%{
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.468);
    }
}
.postBtn:hover{
    background: #0f0f0f;
}
.postBtn:after {
    content: '+';
    width: 100%;
    position: relative;
    line-height: 60px;
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
    color: #575757;
    font-weight: 100;
    font-size: 3em;
    transform: translate3d(0, 0, 0);
}


.active {
    display: none;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
}

li {
    position: absolute;
    overflow: hidden;
    height: 50px;
    width: 50px;
    background: #d6d6d6;
    border-radius: 50%;
    box-shadow:2px 2px #0f0f0f;
    opacity: 0;
    border: 1px solid white;
    background-clip: padding-box;
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s cubic-bezier(0.48, 0.13, 0.42, 1.45), opacity 0.2s ease-in;
}
li img {
    width: 45px;
    transition: 0.5s ease-in;
}
.router-link-exact-active{
    background: #85080A;
    transform: scale(1.25);
}
li:nth-child(2) {
    transition-delay: 0.1s;
}

li:nth-child(3) {
    transition-delay: 0.2s;
}

li:nth-child(4) {
    transition-delay: 0.3s;
}

li:nth-child(5) {
    transition-delay: 0.4s;
}

li a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

li {
    background: #363636;
}
li:hover {
    background: #85080A;
}
img:hover{
    transform: scale(1.25);
}

.active:checked~.postBtn {
    background: #0f0f0f;
    transform: scale(0.85);
    animation: glow-stop 3s ease;
}

@keyframes glow-stop{
    from {
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.468);
    }
    to {
        box-shadow: none;
    }
}

.active:checked~ul li {
    opacity: 1;
}

.active:checked~ul .home {
    transform: translate(0, -175%);
}

.active:checked~ul .home:hover {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.1);
}

.active:checked~ul .about {
    transform: translate(125%, -130%);
}

.active:checked~ul .about:hover {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.1);
}

.active:checked~ul .link {
    transform: translate(175%, 0);
}

.active:checked~ul .link:hover {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.1);
}

.active:checked~ul .chat {
    transform: translate(125%, 130%);
}

.active:checked~ul .chat:hover {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.1);
}

.active:checked~ul .video {
    transform: translate(0, 100px);
}

.active:checked~ul .video:hover {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.1);
}
</style>