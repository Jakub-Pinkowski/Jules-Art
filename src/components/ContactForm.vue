<template>
    <div class="contact-form">
        <div class="form-container">
            <form @submit.prevent="submitForm">
                <div class="input-container">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        v-model="name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        v-model="email"
                        required
                    />
                </div>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="6"
                    placeholder="Message"
                    v-model="message"
                    required
                ></textarea>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import Button from '@/composables/Button.vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = async () => {
    const formData = new FormData()

    const url = 'https://formspree.io/f/xgejepyk'

    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('message', message.value)

    try {
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        if (response.status === 200) {
            alert('Your message has been sent!')
            resetForm()
        } else {
            alert('Something went wrong. Please try again later.')
        }
    } catch (error) {
        alert('Something went wrong. Please try again later.')
    }
}

const resetForm = () => {
    name.value = ''
    email.value = ''
    message.value = ''
}
</script>

<style scoped lang="scss">
.form-container {
    margin: 1em 0;
}

form {
    display: flex;
    flex-direction: column;

    .input-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    input {
        width: 48%;
    }

    textarea {
        width: 100%;
    }

    input,
    textarea {
        margin: 1rem 0;
        padding: 0.5em;
        border: 1px solid var(--dark-accent);
        border-radius: 5px;
    }

    button {
        width: 90px;
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
