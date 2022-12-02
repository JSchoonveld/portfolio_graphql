import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo'],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'http://127.0.0.1:8000/graphql'
            }
        },
    },
})
