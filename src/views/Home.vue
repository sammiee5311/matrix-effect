<template>
<div class="wrapper">
    <div class="content">
        <div class="home-input">
            <input v-model="text" type="text" @keyup.enter="onClicked"/>
        </div>
        <div class="home-button">
            <button @click="onClicked">Enter</button>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { router } from "../routers";
import { defaultCharacters } from "../utils/data"

const text = ref("");

const onClicked = () => {
    router.push({ path: '/matrix', query: { text: text.value ? text.value : defaultCharacters } })
}

</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.home-input, .home-button {
    text-align: center;
    color: aliceblue;
    margin: 3px;
}

.home-input input {
    font-size: 20px;
    width: 15rem;
    height: 2rem;
    margin-bottom: 1rem;
}

.home-button button {
    width: 5rem;
    height: 2rem;
    font-family: 'Courier New', Courier, monospace;
    font-style: oblique;
    font-weight: bold;
}

.home-button button:hover {
    background: #9cc79ca7;
}
</style>
