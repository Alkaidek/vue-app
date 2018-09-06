<template>

    <div id="NewContent">
        <div class="fridi">
            <contenter title="Siemanko witam w moim komponencie" srcValue="https://media.giphy.com/media/W0CVjglEcnzhe/giphy.gif" style="transform-style: preserve-3d; transform: rotateX(50deg) rotateY(35deg) scale(0.7,0.7)"></contenter>
        </div>
        <div class="fridi">
            <contenter id="diff" title="a co to za gwint?!" srcValue="https://i.giphy.com/media/EAtAXa5KHaQCs/giphy.webp" ></contenter>
        </div>
        <div class="fridi">
            <contenter title="Rum zium siup" srcValue="https://i.giphy.com/media/58HC78psmbyE/giphy.webp" style="transform-style: preserve-3d; transform: rotateX(50deg) rotateY(-35deg) scale(0.8,0.8)"></contenter>
        </div>
        <div class="fridi">
            <contenter title="Płotka gdzie Ty wlazłaś?!" srcValue="https://i.giphy.com/media/3oKIP5pWYEB00yQlI4/giphy.webp" style="transform-style: preserve-3d; transform: rotateX(20deg) rotateY(20deg) scale(0.8,0.8)"></contenter>
        </div>
        <div class="fridi">
            <contenter title="najpierw rzeźba" srcValue="https://i.giphy.com/media/ZRMo8QM6M7lM4/giphy.webp" style="transform-style: preserve-3d; transform: rotateX(20deg) rotateY(-20deg) scale(0.8,0.8)"></contenter>
        </div>
    </div>
</template>

<script>
    import contenter from "./contenter";
    export default {
        name: "NewContent",
        components: {contenter}
    }
</script>

<style scoped>
    .fridi{
        width: 33%;
        display: inline-block;
        perspective: 300px;
        transform-style: preserve-3d;

    }
    #diff {
        color: red;
        transform-style: preserve-3d;
        transform: rotate3d(2, 0, 0, 45deg) scale(0.8,0.8);
        animation: differententent 10s infinite linear;
    }
    @keyframes differententent {
        0% {
            transform: rotate3d(2, 0, 0, 45deg) scale(0.8,0.8);
        }
        50% {
            transform: rotate3d(0, 0, 0, 0deg) scale(1,1);
        }
        100% {
            transform: rotate3d(2, 0, 0, 45deg) scale(0.8,0.8);
        }
    }


</style>