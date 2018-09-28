<template>
    <div id="atomBox">
        <!--<div style="background-color: blue;width: 2vh; height: 2vh; position: absolute; margin-top: 1vh; margin-left: 9vh"></div>-->
        <div v-for='element in array' :key="element">
        <div v-for="item in array" v-bind:key="100 + item" class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum(), marginLeft:  element + 'vh'}"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "atomBox",
        data(){
            return {
                array: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6]
            }
        },
        methods: {
            randNum()
            {
                const num = Math.random() * 7;
                return Math.round(num * 100) / 100 + 's';
            }
        }
    }

</script>

<style scoped>
    .block {
        background-color: lightgray;
        transition: .5s;
        animation: atomicBox 20s infinite linear;
    }
    @keyframes atomicBox {
        0% {
            transform: scale(1, 1) rotate(0deg);
            background-color: lightgrey;
        }
        30% {
            transform: scale(1, 1) rotate(0deg);
            background-color: lightgray;
        }
        31% {
            transform: scale(1, 1) rotate(0deg);
            background-color: darkgray;
        }
        32% {
            transform: scale(1, 1) rotate(0deg);
            background-color: lightgray;
        }
        79% {
            transform: scale(1, 1) rotate(0deg);
            background-color: lightgrey;
            z-index: 5;
        }
        80% {
            transform: scale(2.8, 2.8) rotate(0deg);
            background-color: aqua;
            z-index: 25;
        }
        90%{
            transform: scale(1, 1) rotate(0deg);
            background-color: lightgrey;
            z-index: 5;
        }
        100%{
            transform: scale(1, 1) rotate(0deg);
            background-color: lightgrey;
            z-index: 5;
        }
    }
</style>