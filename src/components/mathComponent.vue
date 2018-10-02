<template>
    <div id="mathComponent">
        <div class="operation" :key="'op' + index" v-for="(item, index) in operation">{{item}}</div>
        <div class="operation">=</div>
        <div class="answer" :key="'key' + index" v-for="(answer, index) in answers" :id="'answer' + index + Math.floor(Math.random() * 1000)"  v-on:click.once="checkAnswer(index)">{{answer}}</div>
    </div>
</template>

<script>
    export default {
        name: "mathComponent",
        props: [
            'operation',
            'answers'
        ],
        data: function () {
            return {
                round: true,
                btn: true,
                display: true,
                props: [
                    'operation',
                    'answers'
                ],
            }
        },
        methods: {
            checkAnswer(n) {
                let score = Number(document.getElementById('score').innerHTML);
                if(this.operation[1] === '+'){
                    if (this.answers[n] === (this.operation[0] + this.operation[2])) {
                        document.getElementById(event.target.id).style.background = 'green';
                        score = score + 1;
                    }
                    else {
                        document.getElementById(event.target.id).style.background = 'red';
                        score = score - 2;
                    }
                } else if (this.operation[1] === '-'){
                    if (this.answers[n] === (this.operation[0] - this.operation[2])) {
                        document.getElementById(event.target.id).style.background = 'green';
                        score = score + 1;
                    }
                    else {
                        document.getElementById(event.target.id).style.background = 'red';
                        score = score - 2;
                    }
                } else if (this.operation[1] === '*'){
                    if (this.answers[n] === (this.operation[0] * this.operation[2])) {
                        document.getElementById(event.target.id).style.background = 'green';
                        score = score + 1;
                    }
                    else {
                        document.getElementById(event.target.id).style.background = 'red';
                        score = score - 2;
                    }
                } else if (this.operation[1] === '/'){
                    if (this.answers[n] === (this.operation[0] / this.operation[2])) {
                        document.getElementById(event.target.id).style.background = 'green';
                        score = score + 1;
                    }
                    else {
                        document.getElementById(event.target.id).style.background = 'red';
                        score = score - 2;
                    }
                }
                document.getElementById('score').innerHTML = '' + score;
            }
        }
    }
</script>
<style scoped>
    .operation, .answer {
        width: 5vw;
        height: 5vw;
        background-color: darkgrey;
        text-align: center;
        display: inline-block;
        font-size: 3vw;
        padding-top: 2vw;
        transition: .5s;
    }
    .answer {
        margin-left: 0.3vw;
        background-color: lightblue;
        transition: .5s;
    }
    .answer:hover {
        background-color: aqua;
    }
</style>