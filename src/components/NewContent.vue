<template>

    <div id="NewContent">
        <bezier-bcg></bezier-bcg>
        <atom-man style="display: inline-block; transform: rotate(270deg)"></atom-man>
        <atom-man style="display: inline-block"></atom-man> <br/>
        <div style="width: 10%">
            <atom-box></atom-box>
            <br /><br /><br /><br /><atom-box></atom-box>
            <br /><br /><br /><br /><atom-box></atom-box>
        </div>


        <div class="cube" style="display: inline-block">
            <div class="side front"></div>
            <div class="side back monster"></div>
            <div class="side right aligator"></div>
            <div class="side left ciri"></div>
            <div class="side top witcher"></div>
            <div class="side bottom plotka"></div>
        </div>
        <br />
        <div class="fridi">
            <contenter class="contenter" title="Siemanko witam w moim komponencie" srcValue="https://media.giphy.com/media/W0CVjglEcnzhe/giphy.gif" style="transform-style: preserve-3d; transform: rotateX(50deg) rotateY(35deg) scale(0.7,0.7)"></contenter>
        </div>
        <div class="fridi">
            <contenter id="diff" title="a co to za gwint?!" srcValue="https://i.giphy.com/media/EAtAXa5KHaQCs/giphy.webp" ></contenter>
        </div>
        <div class="fridi">
            <contenter class="contenter" title="Rum zium siup" srcValue="https://i.giphy.com/media/58HC78psmbyE/giphy.webp" style="transform-style: preserve-3d; transform: rotateX(50deg) rotateY(-35deg) scale(0.8,0.8)"></contenter>
        </div>
        <div class="fridi">
            <contenter class="contenter" title="Płotka gdzie Ty wlazłaś?!" srcValue="https://i.giphy.com/media/3oKIP5pWYEB00yQlI4/giphy.webp" style="transform-style: preserve-3d; transform: rotateX(20deg) rotateY(20deg) scale(0.8,0.8)"></contenter>
        </div>
        <div class="fridi">
            <contenter class="contenter" title="najpierw rzeźba" srcValue="https://i.giphy.com/media/ZRMo8QM6M7lM4/giphy.webp" style="transform-style: preserve-3d; transform: rotateX(20deg) rotateY(-20deg) scale(0.8,0.8)"></contenter>
        </div>
    </div>
</template>

<script>
    import contenter from "./contenter";
    import BezierBcg from "./bezierBcg";
    import AtomMan from "./atomMan";
    import AtomBox from "./atomBox";
    export default {
        name: "NewContent",
        components: {AtomBox, AtomMan, BezierBcg, contenter}
    }
</script>

<style>
    #NewContent {
        background-color: white;
        height: 300vh;
    }
    .fridi {
        color: red;
        width: 33%;
        display: inline-block;
        perspective: 300px;
        transform-style: preserve-3d;
    }
    .box {
        position: absolute;
        color: red;
        transform-style: preserve-3d;
        transform: rotate3d(1, 0, 0, 0deg) scale(0.8,0.8);
        transition: 1s;
    }
    .fridi:hover {
        color: blue;
    }
    #diff {
        color: red;
        transform-style: preserve-3d;
        transform: rotate3d(1, 0, 0, 45deg) scale(0.8,0.8);
        animation: differententent 10s infinite linear;
    }
    @keyframes differententent {
        0% {
            transform: rotate3d(1, 0, 0, 45deg) scale(0.8,0.8);
        }
        30% {
            transform: rotate3d(0, 1, 0, 45deg) scale(1,1);
        }
        60% {
            transform: rotate3d(0, 1, 0, -45deg) scale(1,1);
        }
        100% {
            transform: rotate3d(1, 0, 0, 45deg) scale(0.8,0.8);
        }
    }

    .cube {
        font-size: 4em;
        width: 2em;
        margin: 1.5em auto;
        transform-style: preserve-3d;
        transform: rotateX(-20deg) rotateY(32deg);
        transition: 2s;
    }
    .cube:active {
        transform: rotateX(-90deg) rotateY(32deg);

    }

    .side {
        position: absolute;
        width: 2em;
        height: 2em;
        background: rgba(255,0,0,.4);
        background-image: url('https://i.giphy.com/media/EAtAXa5KHaQCs/giphy.webp');
        border: 1px solid rgba(0,2,0,.5);
        background-size: cover;
        color: white;
        text-align: center;
        line-height: 2em;
        opacity: 0.5;
        transition: 0.5s;
    }
    .side:hover {
        opacity: 1;
    }

    .front  {
        transform: rotateX( 0deg) translateZ(1em);
        animation: a1 10s infinite linear;
    }
    @keyframes a1 {
        0% {
            transform: rotateX( 0deg) translateZ(1em);
        }
        50% {
            transform: rotateY(-90deg)  translateZ(1em);
        }
        100% {
            transform: rotateX( 0deg) translateZ(1em);
        }
    }
    .top    {
        transform: rotateX( 90deg)  translateZ(1em);
        animation: a5 10s infinite linear;
    }
    @keyframes a5 {
        0% {
            transform: rotateX( 90deg)  translateZ(1em);
        }
        50% {
            transform: rotateX( 90deg) rotateZ(90deg)  translateZ(1em);
        }
        100% {
            transform: rotateX( 90deg)  translateZ(1em);
        }
    }
    .right  { transform: rotateY( 90deg)  translateZ(1em);
        animation: a2 10s infinite linear;
    }
    @keyframes a2 {
        0% {
            transform: rotateY( 90deg)  translateZ(1em);
        }
        50% {
            transform: rotateX( 0deg) translateZ(1em);
        }
        100% {
            transform: rotateY( 90deg)  translateZ(1em);
        }
    }
    .left   {
        transform: rotateY(-90deg)  translateZ(1em);
        animation: a3 10s infinite linear;
    }
    @keyframes a3 {
        0% {
            transform: rotateY(-90deg)  translateZ(1em);
        }
        50% {
            transform: rotateY(-180deg) translateZ(1em);
        }
        100% {
            transform: rotateY(-90deg)  translateZ(1em);
        }
    }
    .bottom {
        transform: rotateX(-90deg)  translateZ(1em);
        animation: a6 10s infinite linear;
    }
    @keyframes a6 {
        0% {
            transform: rotateX(-90deg)  translateZ(1em);
        }
        50% {
            transform: rotateX( -90deg) rotateZ(-90deg)  translateZ(1em);
        }
        100% {
            transform: rotateX(-90deg)  translateZ(1em);
        }
    }
    .back   {
        transform: rotateY(-180deg) translateZ(1em);
        animation: a4 10s infinite linear;
    }
    @keyframes a4 {
        0% {
            transform: rotateY(-180deg) translateZ(1em);
        }
        50% {
            transform: rotateY(-270deg) translateZ(1em);
        }
        100% {
            transform: rotateY(-180deg) translateZ(1em);
        }
    }
    .ciri {
        background-image: url('https://i.giphy.com/media/58HC78psmbyE/giphy.webp');
    }
    .plotka {
        background-image: url('https://i.giphy.com/media/ZRMo8QM6M7lM4/giphy.webp');
    }
    .witcher {
        background-image: url('https://media.giphy.com/media/SGfWWpPV6LO92/giphy.gif');
    }
    .monster {
        background-image: url('https://media.giphy.com/media/8QVZvKIVMm7Qs/giphy.gif');
    }
    .aligator {
        background-image: url('https://media.giphy.com/media/PaKWbsWWdttmg/giphy.gif');
    }
</style>