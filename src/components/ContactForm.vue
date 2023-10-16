<template>
    <form action="https://formspree.io/f/xjvqjrjg" method="POST" class="container my-5">
        <div class="form-body row">
            <div class="form-data col-sm-6">
                <div class="form-name">
                    <label for="email">Email:</label>
                </div>
                <div class="form-input">
                    <input type="email" name="email" placeholder="Input Email Address">
                </div>
            </div>
            <div class="form-data col-sm-6">
                <div class="form-name">
                    <label for="name">Name:</label>
                </div>
                <div class="form-input">
                    <input type="text" name="name" placeholder="Input fullname">
                </div>
            </div>
            <div class="form-data col">
                <div class="form-name">
                    <label for="message">Reason for contact/query:</label>
                </div>
                <div class="form-msg">
                    <!-- <textarea name="" id="" cols="30"></textarea> -->
                    <textarea name="text"
                        oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'>
                    </textarea>

                </div>
            </div>
        </div>

        <!-- your other form fields go here -->
        <button type="submit" class="mb-2">Send</button>
    </form>
</template>
<script>
export default {

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
}

input:focus {
    width: 10rem;
    text-align: center;
}
textarea{
    padding: 4px 1em;
    resize: none;
    overflow: hidden;
    width: 20rem;
}

@media only screen and (max-width: 330px) {
    textarea{
        width: 15rem;
    }
}
</style>