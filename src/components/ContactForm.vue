<template>
    <form @submit.prevent="confirmForm()" class="container my-5">
        <div class="form-body row">
            <div class="form-data col-sm-6">
                <div class="form-name">
                    <label for="email">Email:</label>
                </div>
                <div class="form-input">
                    <input type="email" name="email" placeholder="Input Email Address" v-model="contact.email" id="email"
                        spellcheck="false" autocomplete="on">
                </div>
            </div>
            <div class="form-data col-sm-6">
                <div class="form-name">
                    <label for="name">Name:</label>
                </div>
                <div class="form-input">
                    <input type="text" name="name" placeholder="Input fullname" v-model="contact.name" id="name"
                        spellcheck="false" autocomplete="on">
                </div>
            </div>
            <div class="form-data col">
                <div class="form-name">
                    <label for="message">Reason for contact/query:</label>
                </div>
                <div class="form-msg">
                    <!-- <textarea name="" id="" cols="30"></textarea> -->
                    <textarea name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
                        v-model="contact.query" id="message">
                    </textarea>

                </div>
            </div>
        </div>

        <!-- your other form fields go here -->
        <button type="submit" class="mb-2" id="btn">Send</button>
    </form>
</template>
<script>
import swal from 'sweetalert2';
import 'animate.css';
export default {
    data() {
        return {
            contact: {
                email: "",
                name: "",
                query: ""
            },
        }
    },
    methods: {
        confirmForm() {
            if (this.contact.email && this.contact.name && this.contact.query) {
                swal.fire({
                    title: 'Are you sure?',
                    text: 'By clicking "Confirm" you are agreeing to send your message',
                    icon: 'warning',
                    backdrop: `#333`,
                    showCancelButton: true,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirm'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.submitToFormspree();
                    }
                    else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === swal.DismissReason.cancel
                    ) {
                        swal.fire({
                            title: 'Cancelled',
                            text: 'Message delivery cancelled',
                            icon: 'error',
                            showConfirmButton: false,
                            showCloseButton: true,
                            backdrop: `#333`
                        }
                        )
                    }
                })
            } else {
                swal.fire({
                    title: "Umm...",
                    text: "Seems that not all fields were filled in, please fill in all form fields to continue",
                    icon: "question",
                    showConfirmButton: false,
                    showCloseButton: true,
                    backdrop: `#333`
                });
            }
        },
        async submitToFormspree() {
            try {
                const formSpreeEndpoint = "https://formspree.io/f/xjvqjrjg";

                const response = await fetch(formSpreeEndpoint, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(this.contact),
                });
                if (response.ok) {
                    swal.fire({ title: 'Thank you!', text: 'Message has been successfully submitted', icon: 'success', backdrop: `#333` });
                    this.clearForm();
                } else {
                    swal.fire('Error!', 'Form submission failed', 'error');
                }
            } catch (error) {
                swal.fire('Error!', 'An error occurred while submitting the form', 'error');
            }
        },
        clearForm() {
            this.contact.email = "";
            this.contact.name = "";
            this.contact.query = "";
        },
    }
}
</script>
<style scoped>
form {
    border: 5px black ridge;
    box-shadow: 0 0 0 3px rgba(62, 61, 61, 0.59);
    z-index: -1;
    margin-bottom: 20em;
}

.form-data {
    margin: 20px 0;
}

input {
    outline: none;
    border: none;
    width: 3rem;
    transition: 0.7s ease-in-out;
    text-overflow: ellipsis;
    background: transparent;
}

input:-webkit-autofill:focus{
    -webkit-box-shadow: 0 0 0 30px white inset;
}

input:focus {
    width: 10rem;
    text-align: center;
    border-bottom: 2px #FFFFFF solid;
}

textarea {
    padding: 4px 1em;
    resize: none;
    overflow: hidden;
    width: 20rem;
    outline: none;
}
button {
    box-shadow:inset #333 -2px -2px;
    border-radius: 10px;
}

label {
    color: #FBF7F7;
}

@media only screen and (max-width: 350px) {
    textarea {
        width: 15rem;
    }
}

@media only screen and (max-width: 330px) {
    textarea {
        width: 14rem;
    }
}
</style>