<template>
    <form @submit.prevent="submitForm" class="container my-5">
        <div class="form-body row">
            <div class="form-data col-sm-6">
                <div class="form-name">
                    <label for="email">Email:</label>
                </div>
                <div class="form-input">
                    <input type="email" name="email" placeholder="Input Email Address" v-model="contact.email">
                </div>
            </div>
            <div class="form-data col-sm-6">
                <div class="form-name">
                    <label for="name">Name:</label>
                </div>
                <div class="form-input">
                    <input type="text" name="name" placeholder="Input fullname" v-model="contact.name">
                </div>
            </div>
            <div class="form-data col">
                <div class="form-name">
                    <label for="message">Reason for contact/query:</label>
                </div>
                <div class="form-msg">
                    <!-- <textarea name="" id="" cols="30"></textarea> -->
                    <textarea name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
                        v-model="contact.query">
                    </textarea>

                </div>
            </div>
        </div>

        <!-- your other form fields go here -->
        <button type="submit" class="mb-2">Send</button>
    </form>
</template>
<script>
import swal from 'sweetalert2';
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
        async submitToFormspree() {
            try {
                const formSpreeEndpoint = "https://formspree.io/f/xjvqjrjg";

                const response = await fetch(formSpreeEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.contact),
                });

                if (response.ok) {
                    swal.fire('Good job!', 'Form has been successfully submitted', 'success');
                    this.clearForm();
                } else {
                    swal.fire('Error!', 'Form submission failed', 'error');
                }
            } catch (error) {
                swal.fire('Error!', 'An error occurred while submitting the form', 'error');
            }
        },
        async submitForm() {
            if (!this.contact.email || !this.contact.email || !this.contact.query) {
                swal.fire({
                    title: "Umm...",
                    text: "Seems that not all fields were filled in, please fill in all form fields to continue",
                    icon: "question"
                })
                return;
            }
            else {
                this.submitToFormspree();
            }

        }
    }
}
</script>
<style scoped>
form {
    border: 1px black ridge;
    box-shadow: 0 0 0 3px rgba(43, 42, 42, 0.59);
}

.form-data {
    margin: 20px 0;
}

input {
    outline: none;
    border: none;
    border-bottom: 2px black solid;
    width: 3rem;
    transition: 0.7s ease-in-out;
    text-overflow: ellipsis;
    background: none;
}

input:focus {
    width: 10rem;
    text-align: center;
    background: #ddd;
}

textarea {
    padding: 4px 1em;
    resize: none;
    overflow: hidden;
    width: 20rem;
    outline: none;
}

@media only screen and (max-width: 330px) {
    textarea {
        width: 15rem;
    }
}

</style>