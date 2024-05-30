<template>
    <div id="AuthPAge" class="w-full h-[100vh] pt-32 bg-slate-500">
        <div class="w-full justify-center items-center flex flex-col">
            <div class="w-full flex items-center justify-center gap-2.5  p-2 bg-slate-600">
                <img src="/public/threads-logo.png" alt="threads" class="w-[35px]">
                <span class="font-bold text-2xl text-white">Threads</span>
            </div>
            <div class="max-w-[350px] mx-auto px-2 text-white ">
                <div class="text-center mb-6 mt-4">Login / register</div>
            </div>
            <!-- <button class="flex items-center justify-center gap-3 p-1.5 w-full border rounded-full text-lg font-semibold ">
                <div class="flex items-center gap-2 justify-center"> -->
                    <!-- <img src="/public/github-logo.png" class="w-[30px] rounded-full"> -->
                    <!-- Github
                </div>
            </button> -->

        </div>

    </div>
</template>

<script setup>
import { watchEffect } from 'vue';

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