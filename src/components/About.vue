<template>
    <div class="about">
        <md-list class="md-triple-line" style="position: fixed; right:0; z-index: 25;">
            <md-list-item  v-for="(item, index) in arrayImg" :key="item">
                <md-avatar>
                    <img v-bind:src="item" alt="People">
                </md-avatar>
                <div class="md-list-item-text">
                    <span>{{arrayTitle[index]}}</span>
                    <span>{{arrayDescribe[index]}}</span>
                    <p>{{arrayDescribe[index]}}</p>
                </div>
            </md-list-item>
        </md-list>
        <h1>Hello you!</h1>
        <md-avatar class="md-large">
            <img class="avatar" v-bind:src="arrayImg[value4]" alt="Avatar" v-on:click.once="changeValue()"/>
        </md-avatar>
        <md-avatar class="md-large">
            <img class="avatar" v-bind:src="arrayImg[value4]" alt="Avatar" v-on:click.once="changeValue()" style="opacity:0"/>
        </md-avatar>
        <md-avatar class="md-large">
            <img class="avatar" v-bind:src="arrayImg[value5]" v-on:click.once="changeValue()" alt="Avatar"/>
        </md-avatar>
        <md-avatar class="md-large">
            <img class="avatar" v-bind:src="arrayImg[value4]" alt="Avatar" v-on:click.once="changeValue()" style="opacity:0"/>
        </md-avatar>
        <md-avatar class="md-large">
            <img class="avatar" v-bind:src="arrayImg[value6]" v-on:click.once="changeValue()" alt="Avatar"/>
        </md-avatar>
        <br />
        <md-avatar class="md-large">
            <img class="avatar" v-bind:src="arrayImg[value1]" v-on:click.once="changeValue()" alt="Avatar"/>
        </md-avatar>
        <md-avatar class="md-large">
            <img class="avatar" v-bind:src="arrayImg[value4]" v-on:click.once="changeValue()" alt="Avatar" style="opacity:0"/>
        </md-avatar>
        <md-avatar class="md-large">
            <img class="avatar" v-bind:src="arrayImg[value2]" v-on:click.once="changeValue()" alt="Avatar"/>
        </md-avatar>
        <br />
        <md-avatar class="md-large">
            <img class="avatar" v-bind:src="arrayImg[value3]" v-on:click.once="changeValue()" alt="Avatar"/>
        </md-avatar>
        <p>You are here, so here you are. Uhm i mean here you are, so you are here. Basicly its mean that you are here, but you are already here, so here you are!</p>
        <div>
            <md-dialog :md-active.sync="showDialog">
                <md-dialog-title>Preferences</md-dialog-title>

                <md-tabs md-dynamic-height>
                    <md-tab md-label="Text">
                        <h1>Hello you!</h1>
                        <p>You are here, so here you are. Uhm i mean here you are, so you are here. Basicly its mean that you are here, but you are already here, so here you are!</p>
                    </md-tab>
                    <md-tab md-label="DataPicker">
                        <div>
                            <md-datepicker/>
                            <md-field>
                                <label>First day of a week</label>
                                <md-select>
                                    <md-option value="0">Sunday</md-option>
                                    <md-option value="1">Monday</md-option>
                                </md-select>
                            </md-field>
                        </div>
                    </md-tab>
                    <md-tab md-label="Buttons">
                        <div>
                            <md-button class="md-raised">Default</md-button>
                            <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
                            <md-button class="md-raised md-primary">Primary</md-button>
                            <md-button class="md-raised md-accent">Accent</md-button>
                            <md-button class="md-raised" disabled>Disabled</md-button>
                        </div>
                        <div>
                            <md-button class="md-fab md-mini">
                                <md-icon>menu</md-icon>
                            </md-button>
                            <md-button class="md-fab md-mini md-primary">
                                <md-icon>add</md-icon>
                            </md-button>
                            <md-button class="md-fab md-mini md-plain">
                                <md-icon>edit</md-icon>
                            </md-button>
                        </div>
                    </md-tab>
                </md-tabs>

                <md-dialog-actions>
                    <md-button class="md-primary" @click="showDialog = false">Close</md-button>
                    <md-button class="md-primary" @click="showDialog = false">Save</md-button>
                </md-dialog-actions>
            </md-dialog>
            <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>
            <br />
            <md-button class="md-primary md-raised" v-on:click="randomComment()">Add comment</md-button>
            <br />
            <md-list class="md-triple-line md-dense" style="float: left; background-color: rgba(0,0,0, 0); border: none;">
                <md-list-item  v-for="(rand, index) in randomArray1" :key="index" style=" border-bottom: solid 1px darkgray">
                    <md-avatar>
                        <img v-bind:src="rand" alt="People">
                    </md-avatar>
                    <div class="md-list-item-text">
                        <span>{{randomArray2[index]}}</span>
                        <span>{{randomArray3[index]}}</span>
                    </div>
                </md-list-item>


            </md-list>


        </div>

    </div>

</template>
<script>
    export default {
        name: 'About',
        data() {
            return {
                showDialog: false,
                value1: this.setBcg(),
                value2: this.setBcg(),
                value3: this.setBcg(),
                value4: this.setBcg(),
                value5: this.setBcg(),
                value6: this.setBcg(),
                arrayImg: ['https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif',
                    'https://media.giphy.com/media/iJa6kOfJ3qN7a/giphy.gif',
                    'https://media.giphy.com/media/8FxtdFhCKXLFTWkX1H/giphy.gif',
                    'https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif',
                    'https://media.giphy.com/media/EsmlrgWNx5v0Y/giphy.gif',
                    'https://media.giphy.com/media/idLMrYE0TjIHDOapoP/giphy.gif',
                    'https://media.giphy.com/media/AsKkJB6JbFGiQ/giphy.gif',
                    'https://media.giphy.com/media/26mZeCLpOHZarRbDbr/giphy.gif',
                    'https://media.giphy.com/media/tsSrSRO7XWXX86gNvN/giphy.gif',
                    'http://www.avatarsdb.com/avatars/basketball_diaries.gif',
                    'https://media.giphy.com/media/1zR9tZdiqVP9lpnqSk/giphy.gif',
                    'https://media.giphy.com/media/ysTUxdj02ZYre/giphy.gif',
                    'https://media.giphy.com/media/xUydljLrnX00Dm59dH/giphy.gif',
                    'https://media.giphy.com/media/TfS8MAR9ucLHW/giphy.gif',
                    'https://media.giphy.com/media/tHzLBG55JJXYqEgaAb/giphy.gif',
                    'https://media.giphy.com/media/57UCJutzbAWdUrVIyv/giphy.gif'
                ],
                arrayTitle: [
                    'Winner',
                    'Pizza Lover',
                    'Psycho Man',
                    'Black Magic',
                    'Black Oba Ma',
                    'Black Prestiiż',
                    '...',
                    'Podnieta Gerl',
                    'Ouh popcorn is cool',
                    'Oskar Brak',
                    'Black Wyrąbane',
                    'Rap woMEN',
                    'Oł jeah!',
                    'Oh\'n\'No',
                    'Pizza kid',
                    'Plastic Fantastic'
                ],
                arrayDescribe: [
                    'WOW bro im so lucky! Always winner!',
                    'My pizza is my heart, my heart is my pizza',
                    'HAMmmmmmmmmmmmmmmmmmmmmmm',
                    'Look at me! IM MAGIC BLACK MAN!',
                    'Always B(r)ush the tooths',
                    'They see m rollin!',
                    'HI...',
                    'OMG ORBIS! WOW ORBIS!',
                    'Omnomnomnomnom',
                    'Have you seen the golden statuette?',
                    'Im black, so you are racist',
                    'Just look at my cigaret',
                    'YES! im the best!',
                    'I forgot my brain....',
                    'It a god food? YES!',
                    'Yes im an angel'
                ],
                randomArray1: [],
                randomArray2: [],
                randomArray3: []
            }
        },
        methods: {
            setBcg() {
                var value = Math.floor(Math.random() * 16    );
                return value
            },
            changeValue() {
                this.value1 = this.setBcg();
                this.value2 = this.setBcg();
                this.value3 = this.setBcg();
                this.value4 = this.setBcg();
                this.value5 = this.setBcg();
                this.value6 = this.setBcg();
            },
            randomComment(){
                this.randomArray1.push(this.arrayImg[ Math.floor(Math.random() * 16    )]);
                this.randomArray2.push(this.arrayTitle[ Math.floor(Math.random() * 16    )]);
                this.randomArray3.push(this.arrayDescribe[ Math.floor(Math.random() * 16    )]);
            }
        }
    }
</script>
<style>
    .about{
        color: #d4ecf8;
        margin: 0px;
        padding: 0px;
    }
    h1{

    }
    .md-dialog {
        max-width: 2000px;
    }
    .icon {
        position: fixed;
        top: 0px;
        width: 10vh;
        height: 100vh;
        left: 0px;

    }
    .avatar {
        -webkit-animation: shake .7s infinite forwards;
        -moz-animation: shake .7s infinite forwards;
        -o-animation: shake .7s infinite forwards;
        animation: shake .7s infinite forwards;
    }
    .avatar:hover{
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
        -o-animation-play-state: paused;
        animation-play-state: paused;
        transform: scale(1, 1) rotate(0deg);
    }

    @keyframes shake{
        0%{
            transform: scale(1.2, 1) rotate(10deg);
        }
        10%{
            transform: scale(1.1, 1.2) rotate(-10deg);
        }
        20%{
            transform: scale(1.3, 1.1) rotate(-20deg);
        }

        30%{
            transform: scale(1.1, 1) rotate(10deg);
        }

        40%{
            transform: scale(1.2, 1.4) rotate(0deg);
        }
        50%{
            transform: scale(.9, 1.2) rotate(-5deg);
        }
        60%{
            transform: scale(1, 1.1) rotate(10deg);
        }
        70%{
            transform: scale(1.2, 1) rotate(20deg);
        }

        80%{
            transform: scale(1.1, 1.3) rotate(10deg);
        }
        90%{
            transform: scale(1.3, 1.1) rotate(0deg);
        }

        100%{
            transform: scale(1.2, 1);
        }
    }
    .md-list {
        width: 320px;
        max-width: 100%;
        vertical-align: top;
        border: 1px solid gray;
        float:right;
        top: 0px;

    }

</style>