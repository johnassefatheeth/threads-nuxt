<template>
    <div id="AuthPage" class="w-full h-screen flex flex-col items-center justify-center pt-32">
      <div class="w-full justify-center items-center flex flex-col">
        <div class="w-full flex items-center justify-center gap-2.5 p-2">
          <img src="/public/threads-logo.png" alt="threads" class="w-[35px]">
          <span class="font-bold text-2xl text-white">Threads</span>
        </div>
        <div class="max-w-[350px] mx-auto px-2 text-white">
          <div class="text-center mb-6 mt-4">Login / Register</div>
        </div>
        <button class="flex items-center justify-center border rounded-full text-lg font-semibold" style="width: 300px;">
          <div class="flex items-center gap-2 justify-center text-white">
            <img src="/public/github-logo.png" class="w-[35px] rounded-full">
            Github
          </div>
        </button>
      </div>
    </div>
  </template>

<script setup>
// import { watchEffect } from 'vue';

    // const user=useSupabaseUser()
    // const client=useSupabaseClient()

    // watchEffect(()=>{
    //     if(user.value){
    //         return navigateTo("/")
    //     }
    // })

    // const login=async (Prov)=>{
    //     const {data,error}=await client.auth.signInWithAuth({
    //         provider:prov,
    //         redirectTo:window.location.origin
    //     })

    //     if (error) console.log(error)
    // }

</script>