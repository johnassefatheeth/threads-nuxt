// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages:true,
  modules:[
    'nuxt-icon',
    '@nuxTjs/tailwindcss',
    // '@nuxrjs/supabase',
    '@pinia/nuxt',
    '@vite-pwa/nuxt'
  ],
  runtimeConfig:{
    public:{
      bucketUrl:process.env.BUCKET_URL
    }
  },
  devtools: { enabled: true }
})
