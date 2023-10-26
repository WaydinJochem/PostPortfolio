<template>
    <img src="" alt="Logo" class="logo">
    <div class="home row container-fluid p-5">
        <div class="col my-auto px-5">
            <h2 class="px-5 " id="myself">Hi, my Name's Waydin Jochem.
                Wanna get to know more about me <router-link to="/about"><img
                        src="https://i.postimg.cc/5tMQHhB8/icons8-question-80.png" alt=""><span class="tooltiptext"> About
                        Page</span></router-link> Well why not have a
                look through my projects <router-link to=""><img src="https://i.postimg.cc/5tMQHhB8/icons8-question-80.png"
                        alt=""><span class="tooltiptext">Projects Page</span></router-link> or maybe just get in contact
                with me <router-link to="/contact"><img src="https://i.postimg.cc/5tMQHhB8/icons8-question-80.png"
                        alt=""><span class="tooltiptext">Contact Page</span></router-link> perhaps my skill
                might be of use to you <router-link to="/skills"><img
                        src="https://i.postimg.cc/5tMQHhB8/icons8-question-80.png" alt=""><span class="tooltiptext">Skills
                        Page</span></router-link>
            </h2>
            <div class="row px-5 mt-5">
                <button class="col"><a href='../assets/CV of Waydin Jochem.docx' download>CV</a></button>
                <button class="col">Explore More</button>
            </div>
        </div>
        <div class="col">
            <img src="https://i.postimg.cc/sgvMG72r/Pic.jpg" alt="" class="img-fluid">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        download() {
            const url = '../assets/CV of Waydin Jochem.docx';
            window.location.href = url
        }
    }
}
</script>

<style scoped>
.home {
    font-family: 'Alfa Slab One', serif;
    color: #FBF7F7;
}

.logo {
    text-align: left !important;
}

img {
    border-radius: 50%;
    height: 661px;
    width: 567px;
}

button {
    padding: 30px;
    transition: 1s ease;
}

button:nth-child() {
    word-spacing: 200px;
}

button:nth-child(1):hover::after {
    content: '\2913';
}

button:nth-child(2):hover::after {
    content: '\279C';
}

button:hover {
    color: #FF1A1A;
    z-index: 10;
    transform: scale(1.25);
    font-size: medium;
    text-decoration: underline;
    text-underline-offset: 5px;
    background: black;
}

a img {
    width: 30px;
    height: 30px;
    transition: 0.3s ease;
}

a img:hover {
    background: #FF1A1A;
    transform: scale(1.5);
}

a {
    position: relative;
}

a .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    text-decoration: none;
    font-size: medium;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
}

a:hover .tooltiptext {
    visibility: visible;

}

h2 {
    animation: 3s ease pop-out infinite;
}

@keyframes pop-out {
    0% {
        text-shadow: 0 0 black;
    }

    25% {
        text-shadow: 1px 0 black, 2px 0 black, 3px 0 black, 4px 0 black, 5px 0 black;
    }

    50% {
        text-shadow: 0 0 black;
    }

    75% {
        text-shadow: -1px 0 black, -2px 0 black, -3px 0 black, -4px 0 black,
            -5px 0 black;
    }

    100% {
        text-shadow: 0 0 black;
    }
}</style>