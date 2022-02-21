<template>
<div id="home-wrapper">
    <div class="home-input">
        <input v-model="text" type="text" @keyup.enter="onClicked"/>
    </div>
    <div class="home-button">
        <button @click="onClicked">Enter</button>
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
#home-wrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 450px;
    height: 250px;
    margin-left: -220px;
    margin-top : -170px;
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.home-input, .home-button {
    text-align: center;
    color: aliceblue;
    margin: 3px;
}

.home-input input {
    font-size: 20px;
    width: 30rem;
    height: 2rem;
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
