<template>
   <div id="MainLayout" class="h-screen w-full ">
        <div class="w-full max-w-[500px] mx-auto ">
            <div id="TopMenu" class="w-full flex items-center justify-center px-2 my-2 h-10 ">
                <img src="/public/threads-logo.png" alt="threads logo" class="w-[35px] h-10">

            </div>

        </div>
        <div class="flex w-full max-w-[500px] mx-auto h-screen">
            <slot/>

        </div>
        <div id="bottomNav " class="fixed z-50 bottom-0 w-full h-[70px] border-t border-t-gray-700 bg-black">
            <div class="flex w-full max-w-[500px] mx-auto items-center justify-around">
                <button @click="navigateTo('/')" class="w-full h-full">
                    <Icon name="material-symbols:home-outline" size="35" color="#ffffff"/>
                </button>
                <button @click="userStore.isMenuOverlay=true" class="w-full h-full">
                    <Icon class="mb-1" name="material-symbols:edit-square-outline-rounded" size="32" color="white"/>

                </button>
                
                <button @click="userStore.isLogoutOverlay=true" class="w-full h-full">
                    <Icon class="mb-1" name="ph:sign-out" size="32" color="white"/>

                </button>

            </div>
        </div>

    </div>
</template>

<script setup>
import{useUserStore} from '~/stores/user'
const userStore=useUserStore()

</script>