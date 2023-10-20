<template>
    <img src="" alt="Logo" class="logo">
    <div class="home row container-fluid p-5">
        <div class="col my-auto px-5">
            <h2 class="px-5 ">Hi, my Name's Waydin Jochem.
                Wanna get to know more <strong><router-link to="">about</router-link></strong> me <span><img
                        src="https://i.postimg.cc/5tMQHhB8/icons8-question-80.png" alt=""></span> Well why not have a look
                through my <strong><router-link to="">projects</router-link></strong> or maybe just get in
                <strong><router-link to="/contact">contact</router-link></strong> with me <span><img
                        src="https://i.postimg.cc/5tMQHhB8/icons8-question-80.png" alt=""></span> perhaps my
                <strong><router-link to="">skills</router-link></strong>
                might
                be of use to you
            </h2>
            <div class="row px-5 mt-5">
                <button class="col">CV</button>
                <button class="col">More</button>
            </div>
        </div>
        <div class="col">
            <img src="https://i.postimg.cc/sgvMG72r/Pic.jpg" alt="" class="img-fluid">
        </div>
    </div>
</template>

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
    height: 761px;
    width: 617px;
}

a {
    text-decoration: none;
    color: #FF1A1A;
    transition: all 1s ease;
}

a:hover {
    color: #FBF7F7;
    text-decoration: underline;
}

button {
    padding: 30px;

}

strong {
    color: #FF1A1A;
    font-weight: lighter;
}

span img {
    width: 30px;
    height: 30px;
}
</style>