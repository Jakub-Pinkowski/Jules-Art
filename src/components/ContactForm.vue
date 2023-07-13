<template>
    <div class="contact-form">
        <div class="social-media">
            <a target="_blank" :href="link_fb"><img :src="icon_fb" class="icon" alt="Facebook icon" /></a>
            <a target="_blank" :href="link_insta"><img :src="icon_insta" class="icon" alt="Instagram icon" /></a>
        </div>
        <div class="form-container">
            <form @submit.prevent="submitForm">
                <div class="input-container">
                    <input type="text" name="name" id="name" placeholder="Name" required v-model="name">
                    <input type="email" name="email" id="email" placeholder="E-mail" required v-model="email">
                </div>
                <textarea name="message" id="message" cols="20" rows="5" placeholder="Message" required
                    v-model="message"></textarea>
                <button class="btn btn-sm" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import icon_fb from '../assets/icons/fb_icon.svg'
import icon_insta from '../assets/icons/insta_icon.svg'

const link_fb = 'https://www.facebook.com/julesmatiasart'
const link_insta = 'https://www.instagram.com/jules_matias/?hl=en'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
    const formData = new FormData();

    const url = 'https://formspree.io/f/xgejepyk';

    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('message', message.value);

    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent!');
                resetForm();
            } else {
                alert('Something went wrong. Please try again later.');
            }
        })
        .catch(error => {
            alert('Your message has been sent!');
            console.log(error);
            resetForm();
        });
};

const resetForm = () => {
    name.value = ''
    email.value = ''
    message.value = ''
};

</script>

<style scoped lang="scss"  >
.form-container {
    margin: 1em 0;
}

.icon {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
}

form {
    display: flex;
    flex-direction: column;

    .input-container {
        width: 70%;
        display: flex;
        justify-content: space-between;
    }

    input {
        width: 48%;
    }

    textarea {
        width: 70%;
    }

    input,
    textarea {
        margin: 1rem 0;
        padding: 0.5em;
        border: 1px solid var(--dark-accent);
        border-radius: 5px;
    }


    button {
        margin: 1rem 0;
        width: 90px;
        border: 1px solid var(--dark-accent);
        color: var(--main-bg-color);
        transition: background-color 0.5s ease;
    }

    button:hover {
        border: 1px solid var(--dark-accent);
        background-color: var(--light-accent);
    }


}

@media screen and (max-width: 768px) {

    .input-container {
        width: 100% !important;
        align-items: center;
        justify-content: center;
    }

    textarea {
        width: 100% !important;
    }

}
</style>
