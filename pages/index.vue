<template>
    <MainLayout>
        
        <div id="IndexPage" class="w-full overflow-auto ">
            <div class="mx-auto max-w-[500px] overflow-hidden ">
                <div id="posts" class="px-4 max-w-[600px] mx-auto">
                    <div class="text-white" v-if="isPosts" v-for="post in posts" :key="post">
                        
                        <Post :post="post" @isDeleted="posts=[]"/>
                        <Post :post="post" @isDeleted="posts=[]"/>
                        <Post :post="post" @isDeleted="posts=[]"/>
                        <Post :post="post" @isDeleted="posts=[]"/>
                        <Post :post="post" @isDeleted="posts=[]"/>
                    </div>

                </div>

            </div>

        </div>
    </MainLayout>
    
</template>
<script setup>
import MainLayout from '~/layout/MainLayout.vue';
import { useUserStore } from '~/stores/user';


const userStore=useUserStore()
// const user=useSupabaseUser()

let posts=ref([])
let isPosts=ref(true)
let isLoading=ref(false)


onBeforeMount(()=>{
    posts.value=[
        {
            name:'john assefa',
            image:'https://placeholder.co/100',
            text:'title ',
            pic:'https://placeholder.co/500'
        }
    ]
})
</script>

<style scoped>
#IndexPage::-webkit-scrollbar {
  width: 0.5em;
  background-color: transparent;
}

#IndexPage::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}

#IndexPage::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

#IndexPage::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>