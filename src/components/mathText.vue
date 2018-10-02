<template>
    <div id="mathText">
        <p id="score">0</p>
        <math-component :operation="[2, '+', 16]" :answers="[2, 4, 18]" :index="1"></math-component>
        <br />
        <math-component :operation="[3, '+', 89]" :answers="[91, 92, 95]" ></math-component>
        <br />
        <math-component :operation="[3, '*', 3]" :answers="[3, 6, 9]" ></math-component>
        <br />
        <math-component :operation="[9, '/', 3]" :answers="[3, 6, 9]" ></math-component>
        <br />
        <math-component :operation="[3, '*', 10]" :answers="[3, 30, 9]" ></math-component>
    </div>
</template>

<script>
    import MathComponent from "./mathComponent";
    export default {
        name: "mathText",
        components: {MathComponent}
    }
</script>

<style scoped>
    p {
        color: white;
        font-size: 3vw;
    }

</style>