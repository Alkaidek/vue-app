<template>
    <div class="noFound" style="">
        <p class="neon not-selectable">Sorry but the URL address is not cool enough, <br><br><br> so enjoy this page!</p>
        <p class="neonik not-selectable"></p>
        <!--<audio  autoplay>
            <source  type="audio/mpeg">
            <p style="color: white;">If you are reading this, it is because your browser does not support the audio element.     </p>
        </audio>-->
        <div class="plug">
            <img id="img3" src="../assets/wtyczka3.png" >
            <img id="img1" src="../assets/wtyczka1.png" >
            <img id="img2" src="../assets/wtyczka2.png" >
        </div>
    </div>
</template>
<script>
    export default {
        name: 'NoFound',
        data() {
            return {
                showDialog: false,
            }
        },
        methods: {
        }
    }
</script>
<style>
    @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
    @import url('https://fonts.googleapis.com/css?family=Monoton');

    .not-selectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .neon {
        color: black;
        font-family: 'Monoton', cursive;
        font-size: 5vh;
        animation: lightSaber 10s infinite linear;
        text-shadow: 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px red, 0 0 0px black;
    }
    .neonik {
        color: white;
        font-family: 'Monoton', cursive;
        font-size: 5vh;
        float: left;
        margin-top: 22%;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px red, 0 0 35px red, 0 0 40px red, 0 0 50px red, 0 0 75px red;
    }
    .neonik::after{
        content: 'Plug out';
        animation: lightSaber2 10s infinite linear;
    }
    .noFound{
        height: 100vh;
        z-index: 50;
        width: 100vw;
        background-color: black;
        position: fixed;
        top: -0vh;
        overflow: hidden;
    }
    .plug{
        width: 200px;
        height: 200px;
        bottom: 0px;
        left: 0px;
        position: absolute;
    }
    .plug #img3 {
        position: absolute;
        left: 0px;
    }
    .plug #img1 {
        position: absolute;
        left: 0px;
        animation: plugin 10s infinite linear;
    }
    .plug #img2 {
        position: absolute;
        left: 0px;
        animation: plugon 10s infinite linear;
    }
    @keyframes lightSaber {
        0%{
            color: black;
            text-shadow: 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px red, 0 0 0px black;
        }
        19%{
            color: black;
            text-shadow: 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px red, 0 0 0px black;
        }
        20%{
            color: white;
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px red, 0 0 35px red, 0 0 40px red, 0 0 50px red, 0 0 75px red;
          }
        21%{
            color: black;
            text-shadow: 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px red, 0 0 0px black;
        }
        22%{
            color: white;
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px red, 0 0 35px red, 0 0 40px red, 0 0 50px red, 0 0 75px red;
        }
        25%{
            color: black;
            text-shadow: 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px red, 0 0 0px black;
        }
        26%{
            color: white;
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px red, 0 0 35px red, 0 0 40px red, 0 0 50px red, 0 0 75px red;
        }
        50%{
            color: white;
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px red, 0 0 35px red, 0 0 40px red, 0 0 60px red, 0 0 90px red;
        }
        52% {
            color: black;
            text-shadow: 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px red, 0 0 0px black;
        }
        54% {
            color: white;
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px red, 0 0 35px red, 0 0 40px red, 0 0 50px red, 0 0 75px red;
        }
        79%{
            color: white;
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px red, 0 0 40px red, 0 0 24px red, 0 0 30px red, 0 0 90px red;
        }
        80%{
            color: black;
            text-shadow: 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px black, 0 0 0px red, 0 0 0px black;
        }
    }
    @keyframes lightSaber2 {
        0%{
            content: 'Plug out';
        }
        19%{
            content: 'Plug out';
        }
        20%{
            content: 'Plug in';
        }
        21%{
            content: 'Plug out';
        }
        22%{
            content: 'Plug in';
        }
        25%{
            content: 'Plug out';
        }
        26%{
            content: 'Plug in';
        }
        50%{
            content: 'Plug in';
        }
        52% {
            content: 'Plug out';
        }
        54% {
            content: 'Plug in';
        }
        79%{
            content: 'Plug in';
        }
        80%{
            content: 'Plug out';
        }
    }
    @keyframes plugin {
        0% {
            left: 0px;
            bottom: 0px;
        }
        19% {
            left: 0px;
            bottom: 0px;
        }
        20% {
            left: 17px;
            bottom: 17px;
        }
        21% {
            left: 8px;
            bottom: 8px;
        }
        22% {
            left: 17px;
            bottom: 17px;
        }
        25% {
            left: 8px;
            bottom: 8px;
        }
        26% {
            left: 17px;
            bottom: 17px;
        }
        50% {
            left: 17px;
            bottom: 17px;
        }
        52% {
            left: 8px;
            bottom: 8px;
        }
        54% {
            left: 17px;
            bottom: 17px;
        }
        79% {
            left: 17px;
            bottom: 17px;
        }
        80% {
            left: 0px;
            bottom: 0px;
        }
    }
    @keyframes plugon {
        0% {
            left: 0px;
            bottom: 0px;
        }
        19% {
            left: 0px;
            bottom: 0px;
        }
        20% {
            left: -17px;
            bottom: -17px;
        }
        21% {
            left: -8px;
            bottom: -8px;
        }
        22% {
            left: -17px;
            bottom: -17px;
        }
        25% {
            left: -8px;
            bottom: -8px;
        }
        26% {
            left: -17px;
            bottom: -17px;
        }
        50% {
            left: -17px;
            bottom: -17px;
        }
        52% {
            left: -8px;
            bottom: -8px;
        }
        54% {
            left: -17px;
            bottom: -17px;
        }
        79% {
            left: -17px;
            bottom: -17px;
        }
        80% {
            left: 0px;
            bottom: 0px;
        }
    }
</style>