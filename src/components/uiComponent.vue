<template>
    <div id="uiComponent">
        <div id="menuBox">
            <div id="corner"></div>
            <div id="corner2"></div>
            <div id="corner3"></div>
            <div id="corner4"></div>
            <div id="corner5"></div>
            <div id="corner6"></div>
            <md-button class="md-raised"  v-on:click="changeRound">{{txt}}</md-button>
            <div id="menu">
                <div id="menuCircle"></div>
            </div>

        </div>
        <div id="menuRound">

        </div>
    </div>
</template>

<script>
    export default {
        name: "uiComponent",
        data(){
            return {
                round: true,
                txt: 'Edge of the World!'
            }
        },
        methods: {
           changeRound() {
               if (this.round) {
                   document.getElementById('menuRound').style.borderRadius = '0%';
                   document.getElementById('menuRound').style.transform = 'rotate(45deg)';
                   document.getElementById('menuBox').style.borderRadius = '0%';
                   document.getElementById('menu').style.borderRadius = '0%';
                   document.getElementById('menuCircle').style.borderRadius = '0%';
                   document.getElementById('corner').style.borderRadius = '0%';
                   document.getElementById('corner').style.transform = 'rotate(45deg)';
                   document.getElementById('corner2').style.borderRadius = '0%';
                   document.getElementById('corner2').style.transform = 'rotate(45deg)';
                   document.getElementById('corner3').style.borderRadius = '0%';
                   document.getElementById('corner3').style.transform = 'rotate(45deg)';
                   document.getElementById('corner4').style.borderRadius = '0%';
                   document.getElementById('corner4').style.transform = 'rotate(45deg)';
                   document.getElementById('corner5').style.borderRadius = '0%';
                   document.getElementById('corner5').style.transform = 'rotate(45deg)';
                   document.getElementById('corner6').style.borderRadius = '0%';
                   document.getElementById('corner6').style.transform = 'rotate(45deg)';
                   /*464619
                   461912*/
                   document.getElementById('menuRound').style.backgroundColor = '#464619';
                   document.getElementById('menuRound').style.backgroundColor = '#464619';
                   document.getElementById('menuBox').style.backgroundColor = '#464619';
                   document.getElementById('menu').style.backgroundColor = ' #461912';
                   document.getElementById('menuCircle').style.backgroundColor = '#464619';
                   document.getElementById('corner').style.backgroundColor = '#464619';
                   document.getElementById('corner2').style.backgroundColor = '#464619';
                   document.getElementById('corner3').style.backgroundColor = '#461912';
                   document.getElementById('corner4').style.backgroundColor = '#461912';
                   document.getElementById('corner5').style.backgroundColor = '#464619';
                   document.getElementById('corner6').style.backgroundColor = '#464619';
                   this.txt =  'The world is gonna rolle me!';
               } else {
                   document.getElementById('menuRound').style.borderRadius = '50%';
                   document.getElementById('menuRound').style.transform = 'rotate(0deg)';
                   document.getElementById('menuBox').style.borderRadius = '10%';
                   document.getElementById('menu').style.borderRadius = '50%';
                   document.getElementById('menuCircle').style.borderRadius = '50%';
                   document.getElementById('corner2').style.borderRadius = '50%';
                   document.getElementById('corner2').style.transform = 'rotate(0deg)';
                   document.getElementById('corner').style.borderRadius = '50%';
                   document.getElementById('corner').style.transform = 'rotate(0deg)';
                   document.getElementById('corner3').style.borderRadius = '50%';
                   document.getElementById('corner3').style.transform = 'rotate(0deg)';
                   document.getElementById('corner4').style.borderRadius = '50%';
                   document.getElementById('corner4').style.transform = 'rotate(0deg)';
                   document.getElementById('corner5').style.borderRadius = '50%';
                   document.getElementById('corner5').style.transform = 'rotate(0deg)';
                   document.getElementById('corner6').style.borderRadius = '50%';
                   document.getElementById('corner6').style.transform = 'rotate(0deg)';

                   document.getElementById('menuRound').style.backgroundColor = '#461912';
                   document.getElementById('menuRound').style.backgroundColor = '#461912';
                   document.getElementById('menuBox').style.backgroundColor = '#461912';
                   document.getElementById('menu').style.backgroundColor = ' #464619';
                   document.getElementById('menuCircle').style.backgroundColor = '#461912';
                   document.getElementById('corner').style.backgroundColor = '#461912';
                   document.getElementById('corner2').style.backgroundColor = '#461912';
                   document.getElementById('corner3').style.backgroundColor = '#464619';
                   document.getElementById('corner4').style.backgroundColor = '#464619';
                   document.getElementById('corner5').style.backgroundColor = '#461912';
                   document.getElementById('corner6').style.backgroundColor = '#461912';
                   this.txt =  'Edge of the World!';
               }
               this.round = !this.round;
           }
        }
    }
</script>

<style scoped>
    #uiComponent{
        min-width: 100vw;
        width: 100vw;
        height: 100vh;
        min-height: 100vh;
    }
    #menuBox {
        width: 50%;
        height: 50%;
        background: #461912;
        margin-left: 25%;
        border-radius: 10%;
        transition: .6s;
        transition-delay: .4s;
        z-index: 1;
    }
    #menuRound {
        background-color: #461912;
        width: 10vw;
        height: 10vw;
        margin-top: -5vw;
        border-radius: 50%;
        margin-left: 45%;
        transition: .6s;
        z-index: 0;
    }
    #menu {
        width: 10vw;
        height: 10vw;
        background-color: #464619;
        margin-left: 40%;
        margin-top: 10%;
        border-radius: 50%;
        transition: .6s;
        transition-delay: .8s;
        z-index: 10;
    }
    #menuCircle
    {
        width: 40%;
        height: 40%;
        background-color: #461912;
        margin-left:30%;
        border-radius: 50%;
        transition: .6s;
        transition-delay: .6s;
    }
    #menuCircle:hover {
        transition-delay: 0s;
        width: 100%;
        height: 100%;
        margin-left:0%;
        background-color: #464619;
    }
    #corner {
        width:5vw;
        height: 5vw;
        margin-left: -2.5vw;
        margin-top: 5vw;
        position: absolute;
        border-radius: 50%;
        background-color: #461912;
        transition: .6s;
        transition-delay: 1.2s;
    }
    #corner2 {
        width:5vw;
        height: 5vw;
        margin-left: 47.5vw;
        margin-top: 5vw;
        position: absolute;
        border-radius: 50%;
        background-color: #461912;
        transition: .6s;
        transition-delay: 1.2s;
    }
    #corner4 {
        width:5vw;
        height: 5vw;
        margin-left: 47.5vw;
        margin-top: 10vw;
        position: absolute;
        border-radius: 50%;
        background-color:  #464619;
        transition: .6s;
        transition-delay: 1.2s;
        z-index: 11;
    }
    #corner3 {
        width:5vw;
        height: 5vw;
        margin-left: -2.5vw;
        margin-top: 10vw;
        position: absolute;
        border-radius: 50%;
        background-color:  #464619;
        transition: .6s;
        transition-delay: 1.2s;
        z-index: 11;
    }
    #corner5 {
        width:5vw;
        height: 5vw;
        margin-left: 47.5vw;
        margin-top: 15vw;
        position: absolute;
        border-radius: 50%;
        background-color: #461912;
        transition: .6s;
        transition-delay: 1.2s;
    }
    #corner6 {
        width:5vw;
        height: 5vw;
        margin-left: -2.5vw;
        margin-top: 15vw;
        position: absolute;
        border-radius: 50%;
        background-color: #461912;
        transition: .6s;
        transition-delay: 1.2s;
    }
</style>