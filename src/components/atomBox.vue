<template>
    <div id="atomBox">
        <!--<div style="background-color: blue;width: 2vh; height: 2vh; position: absolute; margin-top: 1vh; margin-left: 9vh"></div>-->
        <div v-for="item in array" :key='item + 10000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 0vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 20000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 0.5vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 30000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 1vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 40000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 1.5vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 50000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 2vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 60000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 2.5vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 70000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 3vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 80000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 3.5vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 90000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 4vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 100000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 4.5vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 110000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 5vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 120000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 5.5vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 130000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 6vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
        <div v-for="item in array" :key='item + 140000' class="block" style="width: .5vh; height: .5vh; position: absolute; margin-top: 0vh; margin-left: 6.5vh;"
             v-bind:style="{marginTop: item + 'vh', animationDelay: randNum() }"></div>
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
                const num = Math.random() * 4;
                return Math.round(num * 100) / 100 + 's';
            }
        }
    }

</script>

<style scoped>
    #atomMan {
        width: 20vh;
        height: 20vh;
    }
    .block {
        background-color: lightgray;
        transition: .5s;
        animation: atomicBox 10s infinite linear;
    }
    @keyframes atomicBox {
        0%{
            transform: scale(1, 1) rotate(0deg);
            background-color: lightgrey;
        }
        79% {
            transform: scale(1, 1) rotate(0deg);
            background-color: lightgrey;
        }
        80% {
            transform: scale(2.8, 2.8) rotate(0deg);
            background-color: aqua;
        }
        100%{
            transform: scale(1, 1) rotate(0deg);
            background-color: lightgrey;
        }
    }
</style>