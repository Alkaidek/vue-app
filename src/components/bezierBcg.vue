<template>
    <div id="bezierBcg">
        <div class="container">
            <svg viewBox="0 0 500 100" preserveAspectRatio="xMinYMin meet" style="position: absolute; top: 0; left: 0">
                <defs>
                    <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stop-color="#ff0099"/>
                        <stop offset="100%" stop-color="#493240"/>
                    </linearGradient>
                </defs>
                <path d="M0,90 C150,25 350,150 500,80 L500,00 L0,0 Z"  style="stroke: none; fill:url(#Gradient1); padding-top: 0px; margin-top: 0px; position: absolute; top: 0px;" ></path>
            </svg>
        </div>

    </div>
    
</template>

<script>
    export default {
        name: "bezierBcg"
    }
</script>

<style scoped>

</style>