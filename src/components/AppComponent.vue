<template>
  <div class="hello">
    <div class="holder">
        <p>{{number}}</p>
        <form @submit.prevent="addStatment">
            <transition name="alert-in" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
                <p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
            </transition>
            <input type="text" id="input" placeholder="Enter a text" v-model="skill" v-bind:disabled="!checked" v-validate="'min:5'" name="skill">
            <br/>
            <input type="checkbox" id="checkbox" v-model="checked" v-on:click="changeValue"><label for="checkbox">Use this checkbox to make input: {{checkboxMsg}}</label>
        </form>
        <ul>
            <transition-group name="list" enter-active-class="alert-in-enter-active" leave-active-class="alert-in-leave-active">
                <li v-for="(data, index) in skills" :key='index' style="font-variant: small-caps;"><span>{{index}}: </span>{{ data.skill | capitalize }}</li>
            </transition-group>
        </ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'AppComponent',
        data(){
            return{
                checked: true,
                checkboxMsg: 'Enable',
                skill: '',
                skills: [
                    { "skill": "kapusta"},
                    { "skill": "ogórki"}
                ],
                number: 0
            }
        },
        filters: {
            capitalize(value) {
                let txt = '';
                for( let i = 0; i < value.length; i++ ) {
                    if ( i % 2 !== 0 ) {
                        txt = txt + value.charAt(i).toUpperCase();
                    }else {
                        txt = txt + value.charAt(i);
                    }
                }
                return txt;
            }
        },
        methods: {
            addSkill() {
                this.$validator.validateAll().then (result => {
                    if(result) {
                        this.skills.push({skill: this.skill});
                        this.skill = '';
                    } else {
                        //console.log('Validate fail');
                    }
                });
            },
            addStatment() {
              if ( this.skill != ''){
                  this.addSkill()
              }  else {
                  alert('no data');
              }
            },
            changeValue() {
                if( !this.checked){
                    this.checkboxMsg = 'Disable';
                }else {
                    this.checkboxMsg = 'Enable';
                }
            },
            handleScroll () {
                this.number = Math.floor(Math.random() * window.innerHeight) + 1
            }
        },
        created () {
            document.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            document.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Acme');
    @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
    h3 {
      margin: 40px 0 0;
     }
     ul {
         text-align: center;
         width: 100vw;
    }
    li {
        width: 50vw;
        margin: 5px;
        margin-left: 25vw;
        border-left: 5px #2478cc solid;
        font-size: 120%;
        font-weight: bold;
        background: gray;
        //background: -webkit-linear-gradient(to right, #FFFDE4, #005AA7);
        //background: linear-gradient(to right, #FFFDE4, #005AA7);

    }
    a {
      color: #42b983;
    }
    .hello{
        font-family: 'Acme', sans-serif;
    }
    span{
        float: left;
    }
    input[type=text] {
        content: '';
        width: 20%;
        box-sizing: border-box;
        border: 3px solid rgba(255,255,255, 0.2);
        border-radius: 4px;
        font-size: 16px;
        background-color: white;
        background-position: 10px 10px;
        background-repeat: no-repeat;
        padding: 12px 20px 12px 40px;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
    }
    p{
        color: #4958a0;
    }
    label{
        color: #4958a0;
    }
    input[type=text]:focus {
        width: 60%;
        animation-duration: 6s;
        animation-iteration-count: infinite;
        animation-name: wallpaper;
        animation-timing-function: ease;
        background: lightblue;
    }
    @keyframes wallpaper{
        0%{
            border: 3px solid #1653da;
        }
        25%{
            border: 3px solid #20da51;
        }
        50%{
            border: 3px solid #ffff26;
        }
        75%{
            border: 3px solid #ff537a;
        }
        100%{
            border: 3px solid #1653da;
        }
    }
    .wow{
        position: fixed;
        top: 5px;
        left: 5px;
        background: lightblue;
        border-radius: 4px;
        padding: 0px 10px 0px 10px;
        opacity: 0.4;
        border: 2px solid #131c57;
    }
    .alert {
        position: fixed;
        padding: 5px;
        left: 20%;
        color:red;
        margin-top: -20px;
    }
    .alert-in-enter-active {
        animation: scalelele 1s;
    }
    .alert-in-leave-active {
        animation: scalelele 1s reverse;
    }
    @keyframes bounce-in {
        0%{
            transform: scale(0);
            left: 70%;
        }
        20% {
            transform: scale(1.2);
            left: 70%;
        }
        100% {
            transform: scale(1);
            left: 10%;
        }
    }
    @keyframes scalelele {
        0% {
            transform: scale(0);
            opacity: 0;
            border: #1d5663 3px solid;
        }
        25% {
            border: #631014 3px solid;
        }
        50% {
            transform: scale(1.5);
            border: 3px solid #635f27;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>
