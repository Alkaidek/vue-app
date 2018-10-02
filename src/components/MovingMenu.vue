<template>
    <div id="MovingMenu">
        <div id="itm1"></div>
        <div id="itm2"></div>
        <div id="itm3"></div>
        <div id="itm4"></div>
        <div id="itm5"></div>
        <div id="itm6"></div>
        <div id="itm7"></div>
        <div id="itm8"></div>
        <div id="itm9"></div>
        <div id="itm10"></div>
        <div id="itm11"></div>
        <div id="itm12"></div>
    </div>
</template>

<script>
    export default {
        name: "MovingMenu"
    }
</script>

<style scoped>
    #itm1, #itm2, #itm3, #itm4, #itm5, #itm6, #itm7, #itm8, #itm9, #itm10, #itm11, #itm12 {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: red;
        opacity: 0.8;
    }
    #itm1:hover, #itm2:hover, #itm3:hover, #itm4:hover, #itm5:hover, #itm6:hover, #itm7:hover, #itm8:hover, #itm9:hover, #itm10:hover, #itm11:hover, #itm12:hover {
        opacity: 1;
    }

    #itm1 {
        animation: 1 4s it1 forwards, infinite 15s 4s linear bcg14 forwards;
        background-color: #F47D4A;
    }
    #itm2 {
        animation: 1 4s it2 forwards, infinite 15s 4s linear bcg12 forwards;
        background-color: #FFEC5C;
    }
    #itm3 {
        animation: 1 4s it3 forwards, infinite 15s 4s linear bcg13 forwards;
        background-color: #E1315B;
    }
    #itm4 {
        animation: 1 4s it4 forwards, infinite 15s 4s linear bcg14 forwards;
        background-color: #F47D4A;
    }
    #itm5 {
         animation: 1 4s it5 forwards, infinite 15s 4s linear bcg11 forwards;
        background-color: #008DCB;
     }
    #itm6 {
        animation: 1 4s it6 forwards, infinite 15s 4s linear bcg11 forwards;
        background-color: #008DCB;
    }
    #itm7 {
        animation: 1 4s it7 forwards, infinite 15s 4s linear bcg13 forwards;
        background-color: #E1315B;
    }
    #itm8 {
        animation: 1 4s it8 forwards, infinite 15s 4s linear bcg12 forwards;
        background-color: #FFEC5C;
    }
    #itm9 {
        animation: 1 4s it9 forwards, infinite 15s 4s linear bcg11 forwards;
        background-color: #008DCB;
    }
    #itm10 {
        animation: 1 4s it10 forwards, infinite 15s 4s linear bcg12 forwards;
        background-color: #FFEC5C;
    }
    #itm11 {
        animation: 1 4s it11 forwards, infinite 15s 4s linear bcg13 forwards;
        background-color: #E1315B;
    }
    #itm12 {
        animation: infinite 15s 4s linear bcg14;
        background-color: #F47D4A;
    }
    @keyframes it1 {
        0% {
            top: 0px;
            left: 0px;
            width: 100px;
        }
        25% {
            top: 0px;
            left: 220px;
            width: 100px;

        }
        50% {
            top: 110px;
            left: 220px;
            width: 100px;
        }
        75% {
            top: 110px;
            left: 220px;
            width: 210px;
        }
        100% {
            top: 110px;
            left: 220px;
            width: 210px;
        }
    }
    @keyframes it2 {
        0% {
            top: 0px;
            left: 0px;
            width: 100px;
        }
        25% {
            top: 220px;
            left: 0px;
            width: 100px;

        }
        50% {
            top: 220px;
            left: 440px;
            width: 100px;
        }
        75% {
            top: 220px;
            left: 440px;
            width: 210px;
        }
        100% {
            top: 220px;
            left: 440px;
            width: 210px;
        }
    }
    @keyframes it3 {
        0% {
            top: 0px;
            left: 0px;
            width: 100px;
            height: 100px;
        }
        25% {
            top: 110px;
            left: 0px;
            width: 100px;
            height: 100px;

        }
        50% {
            top: 110px;
            left: 550px;
            width: 100px;
            height: 100px;
        }
        75% {
            top: 0px;
            left: 550px;
            width: 100px;
            height: 100px;
        }
        100% {
            top: 0px;
            left: 550px;
            height: 210px;
        }
    }
    @keyframes it4 {
        0% {
            top: 0px;
            left: 0px;
            width: 100px;
            height: 100px;
        }
        25% {
            top: 0px;
            left: 440px;
            width: 100px;
            height: 100px;

        }
        50% {
            top: 0px;
            left: 440px;
            width: 100px;
            height: 100px;
        }
        75% {
            top: 0px;
            left: 440px;
            width: 100px;
            height: 100px;
        }
        100% {
            top: 0px;
            left: 440px;
            width: 100px;
            height: 100px;
        }
    }
    @keyframes it5 {
        0% {
            top: 0px;
            left: 0px;
            width: 100px;
            height: 100px;
        }
        25% {
            top: 110px;
            left: 0px;
            width: 100px;
            height: 100px;

        }
        50% {
            top: 110px;
            left: 440px;
            width: 100px;
            height: 100px;
        }
        75% {
            top: 110px;
            left: 440px;
            width: 100px;
            height: 100px;
        }
        100% {
            top: 110px;
            left: 440px;
            width: 100px;
            height: 100px;
        }
    }
    @keyframes it6 {
        0% {
            top: 0px;
            left: 0px;
            width: 100px;
            height: 100px;
        }
        25% {
            top: 220px;
            left: 0px;
            width: 100px;
            height: 100px;

        }
        50% {
            top: 220px;
            left: 110px;
            width: 100px;
            height: 100px;
        }
        75% {
            top: 220px;
            left: 110px;
            width: 210px;
            height: 100px;
        }
        100% {
            top: 220px;
            left: 110px;
            width: 210px;
            height: 100px;
        }
    }
    @keyframes it7 {
        0% {
            top: 0px;
            left: 0px;
            width: 100px;
            height: 100px;
        }
        25% {
            top: 0px;
            left: 330px;
            width: 100px;
            height: 100px;

        }
        50% {
            top: 220px;
            left: 330px;
            width: 100px;
            height: 100px;
        }
        75% {
            top: 220px;
            left: 330px;
            width: 100px;
            height: 100px;
        }
        100% {
            top: 220px;
            left: 330px;
            width: 100px;
            height: 100px;
        }
    }
    @keyframes it8 {
        0% {
            top: 0px;
            left: 0px;
            width: 100px;
            height: 100px;
        }
        25% {
            top: 0px;
            left: 110px;
            width: 100px;
            height: 100px;

        }
        50% {
            top: 0px;
            left: 110px;
            width: 210px;
            height: 100px;
        }
        75% {
            top: 0px;
            left: 110px;
            width: 210px;
            height: 100px;
        }
        100% {
            top: 0px;
            left: 110px;
            width: 210px;
            height: 100px;
        }
    }
    @keyframes it9 {
        0% {
            top: 0px;
            left: 0px;
            width: 100px;
            height: 100px;
        }
        25% {
            top: 110px;
            left: 0px;
            width: 100px;
            height: 100px;

        }
        50% {
            top: 110px;
            left: 330px;
            width: 100px;
            height: 100px;
        }
        75% {
            top: 0px;
            left: 330px;
            width: 100px;
            height: 100px;
        }
        100% {
            top: 0px;
            left: 330px;
            width: 100px;
            height: 100px;
        }
    }
    @keyframes it10 {
         0% {
             top: 0px;
             left: 0px;
             width: 100px;
             height: 100px;
         }
         25% {
             top: 110px;
             left: 0px;
             width: 100px;
             height: 100px;

         }
         50% {
             top: 110px;
             left: 0px;
             width: 100px;
             height: 210px;
         }
         75% {
             top: 110px;
             left: 0px;
             width: 100px;
             height: 210px;
         }
         100% {
             top: 110px;
             left: 0px;
             width: 100px;
             height: 210px;
         }
     }
    @keyframes it11 {
        0% {
            top: 0px;
            left: 0px;
            width: 100px;
            height: 100px;
        }
        25% {
            top: 0px;
            left: 110px;
            width: 100px;
            height: 100px;

        }
        50% {
            top: 110px;
            left: 110px;
            width: 100px;
            height: 100px;
        }
        75% {
            top: 110px;
            left: 110px;
            width: 100px;
            height: 100px;
        }
        100% {
            top: 110px;
            left: 110px;
            width: 100px;
            height: 100px;
        }
    }

    @keyframes bcg11 {
        0% {
            background-color: #008DCB;
        }
        25% {
            background-color: #F47D4A;
        }
        50% {
            background-color: #E1315B;
        }
        75% {
            background-color: #FFEC5C;
        }
        100% {
            background-color: #008DCB;
        }
    }
    @keyframes bcg12 {
        0% {
            background-color: #FFEC5C;
        }
        25% {
            background-color: #008DCB;
        }
        50% {
            background-color: #F47D4A;
        }
        75% {
            background-color: #E1315B;
        }
        100% {
            background-color: #FFEC5C;
        }
    }
    @keyframes bcg13 {
        0% {
            background-color: #E1315B;
        }
        25% {
            background-color: #FFEC5C;
        }
        50% {
            background-color: #008DCB;
        }
        75% {
            background-color: #F47D4A;
        }
        100% {
            background-color: #E1315B;
        }
    }
    @keyframes bcg14 {
        0% {
            background-color: #F47D4A;
        }
        25% {
            background-color: #E1315B;
        }
        50% {
            background-color: #FFEC5C;
        }
        75% {
            background-color: #008DCB;
        }
        100% {
            background-color: #F47D4A;
        }
    }
</style>