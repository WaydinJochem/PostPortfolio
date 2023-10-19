<template>
    <section class="pt-3">
        <div class="sub-menu">
            <button href="" @click="copyclip()">
                <img src="https://i.postimg.cc/t45rgL6L/icons8-phone-80.png" alt="">
            </button>
            <a href="">
                <img src="https://i.postimg.cc/zG5t8JyC/icons8-send-80.png" alt="">
            </a>
            <a href="">
                <img src="https://i.postimg.cc/JhYPNZPx/icons8-twitterx-80.png" alt="">
            </a>
            <a href="">
                <img src="https://i.postimg.cc/yxf4R1Xr/icons8-linked-in-80.png" alt="">
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
                title: (TempText.value +' Successfully Copied To Clipboard!'),
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

button {
    background: none;
    border: none;
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