<template>
    <div id="photoGrid">
        <div id="grid-box">
            <div>
                <img id="img1" src="../assets/img/1.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img2" src="../assets/img/2.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img3" src="../assets/img/3.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img4" src="../assets/img/4.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img5" src="../assets/img/5.jpeg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img6" src="../assets/img/6.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img7" src="../assets/img/7.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img8" src="../assets/img/8.jpeg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img9" src="../assets/img/9.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img10" src="../assets/img/3.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img11" src="../assets/img/1.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img12" src="../assets/img/2.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img13" src="../assets/img/3.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img14" src="../assets/img/4.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img15" src="../assets/img/5.jpeg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img16" src="../assets/img/6.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img17" src="../assets/img/7.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img18" src="../assets/img/8.jpeg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img19" src="../assets/img/9.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img20" src="../assets/img/4.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img21" src="../assets/img/1.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img22" src="../assets/img/2.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img23" src="../assets/img/3.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img24" src="../assets/img/4.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img25" src="../assets/img/5.jpeg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img26" src="../assets/img/6.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img27" src="../assets/img/7.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img28" src="../assets/img/8.jpeg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img29" src="../assets/img/9.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img30" src="../assets/img/3.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img31" src="../assets/img/1.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img32" src="../assets/img/2.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img33" src="../assets/img/3.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img34" src="../assets/img/4.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img35" src="../assets/img/5.jpeg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img36" src="../assets/img/6.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img37" src="../assets/img/7.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img38" src="../assets/img/8.jpeg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img39" src="../assets/img/9.jpg" v-on:click="setImg()">
            </div>
            <div>
                <img id="img40" src="../assets/img/4.jpg" v-on:click="setImg()">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "photoGrid",
        data: function () {
            return {
            }
        },
        methods: {
            setImg() {
                document.getElementById(event.target.id).style.transform = 'scale(1, 1)';
                document.getElementById(event.target.id).style.boxShadow = '0 0 0px 0px black';
                document.getElementById(event.target.id).style.opacity = '1';

            }
        }
    }

</script>

<style scoped>
    h1{
        z-index: 10;
        color: red;
    }
    #grid-box {
        line-height: 0;
        -webkit-column-count: 5;
        -webkit-column-gap:   0px;
        -moz-column-count:    5;
        -moz-column-gap:      0px;
        column-count:         5;
        column-gap:           0px;
    }
    #grid-box div {
/*        border: red 1px solid;
        background-color: gray;*/
    }
    #grid-box div img {
        width: 100% !important;
        height: auto !important;
        opacity: 0.3;
        transition: 1.5s;
        transform: scale(.6, .6);
        box-shadow: 0 0 0px 50px black;
        z-index: 2;
    }
    /*#grid-box div img:active {*/
        /*transform: scale(1, 1);*/
        /*box-shadow: 0 0 0px 0px black;*/
        /*z-index: 2;*/
    /*}*/
    #grid-box div img:hover {
        opacity: 1;
        z-index: 2;
    }

    @media (max-width: 1200px) {
        #grid-box  {
            -moz-column-count:    4;
            -webkit-column-count: 4;
            column-count:         4;
        }
    }
    @media (max-width: 1000px) {
        #grid-box  {
            -moz-column-count:    3;
            -webkit-column-count: 3;
            column-count:         3;
        }
    }
    @media (max-width: 800px) {
        #grid-box  {
            -moz-column-count:    2;
            -webkit-column-count: 2;
            column-count:         2;
        }
    }
    @media (max-width: 400px) {
        #grid-box  {
            -moz-column-count:    1;
            -webkit-column-count: 1;
            column-count:         1;
        }
    }
</style>