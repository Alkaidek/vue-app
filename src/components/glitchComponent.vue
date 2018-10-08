<template>
    <div id="glitchComponent" class="glitch">
    </div>
</template>

<script>
    export default {
        name: "glitchComponent"
    }
</script>

<style scoped>
    .glitch  {
        position: relative;
        width: 100%;
        height: 100vh;
        background: url("../assets/img/3.jpg");
        background-size: cover;
    }
    .glitch:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../assets/img/3.jpg");
        background-size: cover;
        opacity: 0.5;
        mix-blend-mode: darken;

    }
    .glitch:hover:before {
        animation: anime .2s infinite;
    }
    @keyframes anime {
        0%{
            background-position: 0 0;
            filter: hue-rotate(0deg) grayscale(0);
        }
        10%{
            background-position: 4px 0;
        }
        20%{
            background-position: -4px 0;
        }
        30%{
            background-position: 12px 0;
            filter: hue-rotate(90deg) grayscale(180);
        }
        40%{
            background-position: -16px 0;
        }
        50%{
            background-position: -24px 0;
        }
        60%{
            background-position: -52px 0;
        }
        70%{
            background-position: 0 22px;
        }
        80%{
            background-position:  -40px -10px;
        }
        100%{
            background-position: 0 0;
            filter: hue-rotate(270deg) grayscale(360);
        }
    }

</style>