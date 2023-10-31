<template>
    <section class="services main_section">
        <section class="text">
            <h3>Skills</h3>
            <p>
                {{ description }}
            </p>
            <ul class="services_list">
                <li v-for="item in services">
                    <div class="service-item">
                        <i class="fa-solid fa-caret-right"></i>
                        <h4>{{ item.title }}</h4>
                    </div>
                    <p>{{ item.description }}</p>
                </li>
            </ul>
        </section>
        <section class="photos">
            <img :src="service_photo_1" alt="service photo 1" />
            <img :src="service_photo_2" alt="service photo 2" />
        </section>
    </section>
</template>

<script setup lang="ts">
// TODO: Update photos with some real ones from Julia's gallery
import service_photo_1 from '@/assets/images/services_1.jpg'
import service_photo_2 from '@/assets/images/services_2.jpg'

const description =
    'Looking for a videographer for your next project? I offer a range of services, including:'

const services = [
    {
        title: 'Short Film Production',
        description: 'from concept to post-production.',
    },
    {
        title: 'Promotional Videos',
        description:
            'creation of promotional videos for products like: cosmetics, clothes, books, and all you can think about!',
    },
    {
        title: 'Video Editing',
        description:
            'if you have existing footage, I can edit it into a polished, professional video.',
    },
    {
        title: 'Scenario writing',
        description: 'scenarios for short films 2-3 min. ',
    },
]
</script>

<style scoped lang="scss">
.services {
    margin: 5rem 2rem;
    display: flex;
    text-align: justify;

    .text {
        ul {
            list-style: none;
            margin-top: 2rem;
            margin-right: 2rem;
            padding: 0;

            li {
                margin-right: 1rem;
                margin-top: 2rem;
                align-items: center;

                .service-item {
                    display: flex;
                    align-items: center;
                    margin-right: 1rem;
                    margin-top: 2rem;
                    margin-bottom: 0.5rem;

                    i {
                        font-size: 1.5rem;
                        margin-right: 1rem;
                    }

                    h4 {
                        margin: 0;
                    }

                    p {
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }

    .photos {
        width: 50%;
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        img {
            width: 48%;
            height: auto;
            border-radius: 5%;
            object-fit: cover;
        }
    }
}

/* Mobile */
@media screen and (max-width: 768px) {
    .services {
        margin-top: 2rem;
        margin-bottom: 2rem;
        flex-direction: column;

        .text {
            ul {
                margin-right: 0;
            }
        }

        .photos {
            width: 100%;
            margin-top: 2rem;
            margin-bottom: 2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            img {
                width: 45%;
                height: auto;
                border-radius: 5%;
                object-fit: cover;
            }
        }
    }
}
</style>
