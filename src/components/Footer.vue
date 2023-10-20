<template>
    <section class="pt-3">
        <div class="sub-menu">
            <button @click="copyclip()">
                <img src="https://i.postimg.cc/t45rgL6L/icons8-phone-80.png" alt="">
                <div class="hover">
                    <span> Contact Number</span>
                </div>
            </button>
            <a href="https://github.com/WaydinJochem?tab=repositories" target="blank">
                <img src="https://i.postimg.cc/pT5rHD1q/icons8-github-80.png" alt="">
                <div class="hover">
                    <span>Github</span>
                </div>
            </a>
            <a href="https://console.firebase.google.com/" target="blank">
                <img src="https://i.postimg.cc/QN23wLDL/icons8-firebase-80.png" alt="">
                <div class="hover">
                    <span>Firebase</span>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/waydin-jochem-11838622a/" target="blank">
                <img src="https://i.postimg.cc/yxf4R1Xr/icons8-linked-in-80.png" alt="">
                <div class="hover">
                    <span>LinkedIn</span>
                </div>
            </a>
        </div>
        <div class="copy">&copy;Waydin Jochem {{ new Date().getFullYear() }}</div>
        <p class="m-0">All rights reserved by NeglectedNPC.Ltd</p>
    </section>
</template>
<script>
import swal from 'sweetalert2'
export default {
    data() {
        return {
            text: '0605066178',
        }
    },
    methods: {
        copyclip() {
            var TempText = document.createElement("input");
            TempText.value = this.text;
            document.body.appendChild(TempText);
            TempText.select();
            document.execCommand("copy");
            document.body.removeChild(TempText);

            let timerInterval
            swal.fire({
                title: (' Phone Number Successfully Copied To Clipboard!'),
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    swal.showLoading()
                    const b = swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        },
    }
}
</script>
<style scoped>
section {
    background: linear-gradient(#262626, grey);
    color: aliceblue;
    position: absolute;
    z-index: -1;
    width: 100%;
}

.sub-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}


div p {
    text-decoration: underline;
}

ul {
    list-style: none;
}

ul div {
    display: grid;
    grid-template-columns: auto auto;
    gap: 0;
}

a {
    position: relative;
    text-decoration: none;
}

button {
    background: none;
    border: none;
    position: relative;
}

.hover {
    /* transition: .5s ease; */
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: aliceblue;
}

.hover:hover {
    opacity: 1;
}

/* li{
    text-align: center;
} */
/* .sub-menu {
    display: grid;
    grid-template-columns: auto auto auto auto;
} */

@media only screen and (max-width: 420px) {
    section {
        font-size: xx-small;
    }

}

@media only screen and (max-width: 400px) {
    img {
        width: 60px;
    }

}
</style>