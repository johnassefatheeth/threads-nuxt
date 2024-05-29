<template>
    <div id="CreatePost" class="fixed z-50 bottom-0 w-full h-full overflow-hidden">
        <div class="bg-black h-full w-full text-white overflow-auto">
            <div class="flex items-center justify-start py-4 max-w-[500px] mx-auto border-b border-b-gray-700">
                <button @click="userStore.isMenuOverlay=false; clearData()" class="rounded-full px-2">
                    <Icon name="mdi:close" size="25"/>

                </button>
                <div class="text-[16px] font-semibold">New Thread</div>
            </div>

        </div>
    </div>
</template>

<script setup>
import {v4 as uuidv4} from 'uuid'
import { useUserStore } from '~/stores/user';
const userStore=useUserStore()

const runtimeConfig=useRuntimeConfig()

// const client=useSupabaseClient()
// const user=useSupabaseUser()

let text =ref(null)
let isLoading=ref(false)


const adjustTextAreaHeight=()=>{
    var textarea= documnet.getElementById("textarea")
    textarea.style.height="auto"
    textarea.style.height=textarea.scrollHeight+"px"

}


let file=ref(null)
let fileDisplay=ref(null)
let fileData=ref(null)

const clearData=()=>{
    text.value=null
    file.value=null
    fileDisplay.value=null
    fileData.value=null
}

const onChange=()=>{
    fileDisplay.value=URL.createObjectURL(file.value.files[0])
    fileData.value=file.value.files[0]
}

</script>