<template>
    <div class="boforeComponent">
        <h1 id="hajeden">
           is
        </h1>

        <ul>
            <li>
                <img alt="Image" src="../assets/img/2.jpg">
                <p>Elo...</p>
            </li>
            <li>
                <img alt="Image" src="../assets/img/1.jpg">
                <p>...szka</p>
            </li>
        </ul>
        <md-button class="md-icon-button md-accent" v-on:click="pleaseKukizSingASong">
            <md-icon>radio_button_checked</md-icon>
        </md-button>
    </div>
</template>

<script>
    import { mix } from './mixins/mix'
    export default {
        name: "boforeComponent",
        data: function () {
            return {

            }
        },
        mixins: [mix]
    }
</script>

<style scoped>
    h1{
        color: red;
    }
    h1::before{
        content: 'POLICE!';
        animation: .5s infinite beforeanim;
        border-top: 2px dotted red;
    }
    h1::after{
        content: 'HERE!';
        animation: .5s reverse infinite beforeanim;
        border-bottom: 6px dotted blue;
    }
    @keyframes beforeanim {
        0%{
            color: blue;
            border-top: 2px dotted red;
            border-bottom: 6px dotted blue;
        }
        50%{
            color: red;
            border-top: 6px dotted blue;
            border-bottom: 2px dotted red;
        }
        100%{
            color:blue;
            border-top: 2px dotted red;
            border-bottom: 6px dotted blue;
        }
    }
    ul li {
        padding: 0 5px;
        display: inline-block;
        position: relative;
        transition: 1s;
    }
    ul li img {
        max-width: 100%;
        height: auto;
    }
    ul li p {
        margin: 0;
        padding: 20px;
        color: white;
        background: black;
    }
    ul li::after {
        height: 100%;
        content: "";
        background: rgba(0,0,0,0.8);
        position: absolute;
        top: 0;
        left: 5px;
        right: 5px;
        opacity: 0;
        transition: 1s;
    }
    ul li:hover::after,
    ul li:hover::before {
        opacity: 1;
        transition: 1s;
    }
    ul li::before {
        content: "No czesc!";
        position: absolute;
        top: calc(50% - 12px);
        left: calc(50% - 30px);
        color: #ffffff; opacity: 0;
        z-index: 10;
        transition: 1s;
    }
</style>