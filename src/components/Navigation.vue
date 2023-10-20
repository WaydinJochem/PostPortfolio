<template>
    <nav role='navHeader' class="navigation" v-if="showNavbar">
        <input type="checkbox" id="post" class="active" />
        <label for="post" class="postBtn"></label>
        <ul>
            <li class="home">
                <router-link to="/home">
                    <img src="https://i.postimg.cc/9fKccWBK/icons8-home-64.png" alt="">
                </router-link>
            </li>
            <li class="about">
                <router-link to="/about">
                    <img src="https://i.postimg.cc/kXmZV9x0/icons8-contact-50.png" alt="">
                </router-link>
            </li>
            <li class="projects">
                <img src="https://i.postimg.cc/4xvzFkqT/icons8-files-50.png" alt="">
            </li>
            <li class="skills">
                <router-link to="/skills">
                    <img src="https://i.postimg.cc/zXssFKZc/icons8-product-knowledge-50.png" alt="">
                </router-link>
            </li>
            <li class="contact">
                <router-link to="/contact">
                    <img src="https://i.postimg.cc/K8VC8TQN/icons8-form-50.png" alt="">
                </router-link>
                <div class="hover">
                </div>
            </li>
        </ul>
    </nav>
    <span @click="toggleNavbar()"><img src="https://i.postimg.cc/X79Hf1FQ/icons8-eye-50.png" alt="" id="eye"
            class="img-fluid"></span>
</template>
<script>
export default {
    data() {
        return {
            showNavbar: true, // Initially, the navbar is visible
        };
    },
    methods: {
        toggleNavbar() {
            const eye = document.getElementById("eye");
            this.showNavbar = !this.showNavbar;
            if (!this.showNavbar) {
                eye.style.background = "rgba(255, 255, 255, 0.1)"
                eye.style.borderRadius = "50%"
                eye.style.transform = "rotate(180deg)"
            }
            else {
                eye.style = "none"
            }
        },
    },
}
</script>
<style scoped>
/* Navigation main body */
.navigation {
    position: fixed;
    left: 15px;
    top: 50%;
    z-index: 3;
}

span {
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 3px;
    background: none;
}


/* Open & Close Navigation Code Start */
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

.postBtn:hover {
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

.active:checked~.postBtn {
    background: #0f0f0f;
    transform: scale(0.85);
    animation: glow-stop 3s ease;
}

.active.active:checked~.postBtn::after {
    content: 'x';
}



/* Open & Close navigation End */

/* Check input */
.active {
    display: none;
}

/* Naviagtion Links Start */
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
    background: #FF1A1A;
    border-radius: 50%;
    box-shadow: 2px 2px #0f0f0f;
    opacity: 0;
    background-clip: padding-box;
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s cubic-bezier(0.48, 0.13, 0.42, 1.45), opacity 0.2s ease-in;
}

li img {
    width: 45px;
    transition: 0.5s ease-in;
}

.router-link-exact-active {
    background: #85080A;
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
    background: #FF1A1A;
}

img:hover:not() {
    transform: scale(1.25);
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

.active:checked~ul .projects {
    transform: translate(175%, 0);
}

.active:checked~ul .projects:hover {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.1);
}

.active:checked~ul .skills {
    transform: translate(125%, 130%);
}

.active:checked~ul .skills:hover {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.1);
}

.active:checked~ul .contact {
    transform: translate(0, 100px);
}

.active:checked~ul .contact:hover {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.1);
}

/* Navigation Links End */

/* Animation and keyframes Start */
@keyframes glow {
    0% {
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.468);
        background: #363636;
    }

    25% {
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.468);
        background: #0f0f0f;
    }

    50% {
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.468);
        background: #363636;
    }

    75% {
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.468);
        background: #0f0f0f;
    }

    100% {
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.468);
        background: #363636;
    }
}

@keyframes glow-stop {
    from {
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.468);
    }

    to {
        box-shadow: none;
    }
}

/* Animation and keyframes End */
</style>