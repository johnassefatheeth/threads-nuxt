<template>
    <div id="CreatePost" class="fixed z-50 bottom-0 h-full overflow-hidden">

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

</script>