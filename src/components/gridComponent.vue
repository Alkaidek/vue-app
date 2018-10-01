<template>
    <div id="gridComponent">
        <div id="grid-container">
            <div id="item1">{{txt1}}</div>
            <div id="item2">{{txt2}}</div>
            <div id="item3">{{txt3}}</div>
            <div id="item4">{{txt4}}</div>
            <div id="item5">{{txt5}}</div>
            <div id="item6">{{txt6}}</div>
            <div id="item7">{{txt7}}</div>
            <div id="item8">{{txt8}}</div>
        </div>
        <md-button class="md-raised md-accent"  v-on:click="changeGrid" :disabled="btn">ChangeGrid</md-button>
        <md-button class="md-raised md-primary"  v-on:click="changeMargin">ChangeMargin</md-button>
        <div id="menuBox">
            <moving-menu></moving-menu>
        </div>

    </div>
</template>

<script>
    import MovingMenu from "./MovingMenu";
    export default {
        name: "gridComponent",
        components: {MovingMenu},
        props: [
            'txt1',
            'txt2',
            'txt3',
            'txt4',
            'txt5',
            'txt6',
            'txt7',
            'txt8'
        ],
        data() {
            return {
                round: true,
                btn: true,
            }
        },
        methods: {
            changeGrid() {
                let elem= document.getElementById("grid-container");
                elem.style.gridTemplateAreas = '"a a a a a a" "f f f f f f" "b b b b b b" "c c c c c c" "h h h h h h" "d d d d d d" "e e e e e e" "g g g g g g"';
            },
            changeMargin() {
                this.btn = false;
                document.getElementById('item1').style.margin = '0px 0px 0px 0px';
                document.getElementById('item2').style.margin = '0px 0px 0px 0px';
                document.getElementById('item3').style.margin = '0px 0px 0px 0px';
                document.getElementById('item4').style.margin = '0px 0px 0px 0px';
                document.getElementById('item5').style.margin = '0px 0px 0px 0px';
                document.getElementById('item6').style.margin = '0px 0px 0px 0px';
                document.getElementById('item7').style.margin = '0px 0px 0px 0px';
                document.getElementById('item8').style.margin = '0px 0px 0px 0px';
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Caveat|Indie+Flower|Mali|Poiret+One|Sacramento|Shadows+Into+Light|Yellowtail');
    #gridComponent {
    }
    #menuBox {
        position: relative;
    }
    #item1 {
        grid-area: a;
        transition: 1s;
        margin: -800px 0px 800px -200px;
        font-family: 'Mali', cursive;
        animation: infinite 10s bcg1;
    }
    #item2 {
        grid-area: b;
        transition: .8s;
        margin: 0px 1000px 0px -1000px;
        font-family: 'Indie Flower', cursive;
        animation: infinite 10s bcg2;
    }
    #item3 {
        grid-area: c;
        transition: .6s;
        margin: -600px 0px 600px 0px;
        animation: infinite 10s bcg3;
        font-family: 'Shadows Into Light', cursive;
    }
    #item4 {
        grid-area: d;
        transition: .8s;
        margin: 0px -1000px 0px 1000px;
        font-family: 'Amatic SC', cursive;
        animation: infinite 10s bcg4;
    }
    #item5 {
        grid-area: e;
        transition: .6s;
        margin: 0px -2000px 0px 2000px;
        font-family: 'Yellowtail', cursive;
        animation: infinite 10s bcg1;
    }
    #item6 {
        grid-area: f;
        transition: .8s;
        margin: 16000px 0px -16000px 0px;
        font-family: 'Poiret One', cursive;
        animation: infinite 10s bcg2;
    }
    #item7 {
        grid-area: g;
        transition: 1s;
        margin: 0px -1000px 0px 1000px;
        font-family: 'Sacramento', cursive;
        animation: infinite 10s bcg3;
    }
    #item8 {
        grid-area: h;
        transition: 1s;
        margin: 0px 1000px 0px -1000px;
        font-family: 'Caveat', cursive;
        animation: infinite 10s bcg4;
     }
    #grid-container {
        display: grid;
        grid-template-areas:
                'a a a a a a'
                'b c c c d d'
                'b e e e e e'
                'b f f f g g'
                'h f f f g g';
        grid-gap: 20px;
        transition: .6s;
        padding: 20px;
        }
    #grid-container > div {
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
    @keyframes bcg1 {
        0% {
            background-color: #4897D8;
        }
        25% {
            background-color: #FFDB5C;
        }
        50% {
            background-color: #FA6E59;
        }
        75% {
            background-color: #F8A055;
        }
        100% {
            background-color: #4897D8;
        }
    }
    @keyframes bcg2 {
        0% {
            background-color: #F8A055;
        }
        25% {
            background-color: #4897D8;
        }
        50% {
            background-color: #FFDB5C;
        }
        75% {
            background-color: #FA6E59;
        }
        100% {
            background-color: #F8A055;
        }
    }
    @keyframes bcg3 {
        0% {
            background-color: #FA6E59;
        }
        25% {
            background-color: #F8A055;
        }
        50% {
            background-color: #4897D8;
        }
        75% {
            background-color: #FFDB5C;
        }
        100% {
            background-color: #FA6E59;
        }
    }
    @keyframes bcg4 {
        0% {
            background-color: #FFDB5C;
        }
        25% {
            background-color: #FA6E59;
        }
        50% {
            background-color: #F8A055;
        }
        75% {
            background-color: #4897D8;
        }
        100% {
            background-color: #FFDB5C;
        }
    }
</style>