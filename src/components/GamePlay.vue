<template>
    <div class="app-container">
        <div>{{questionCounter+1}} / {{ numberOfQuestions }}</div>
        <quiz-question v-on:answered="AnsweredQuestion" v-if="quizList.length > 0" v-bind:quizItem="currentQuestion"></quiz-question>
    </div>
</template>

<script>
import QuizQuestion from './QuizQuestion.vue';
import axios from 'axios';

export default {
    name: "GamePlay",
    components: {
        QuizQuestion        
    },
    methods: {
        NextQuestion(){
            if(!this.isLastQuestion)
            {
                this.questionCounter += 1;
                this.currentQuestion = this.quizList[this.questionCounter];
            }
            if(this.questionCounter >= this.quizList.length - 1){
                this.isLastQuestion = true;
            }

        },
        AnsweredQuestion(answer){
            if(!this.isLastQuestion){
                this.answers.push(answer);
                this.NextQuestion();
            }
            else{
                this.$router.push({name: 'results', params: {answers: this.answers, questions: this.quizList}})
            }
        }
    },
    beforeCreate(){
        if(this.$route.params.questionNumber < 10 || this.$route.params.questionNumber > 20) {
            this.$router.push({path: '/'});
        }
    },
    created(){
        this.numberOfQuestions = this.$route.params.questionNumber;
        this.questionCounter = 0;
        this.score = 0;
        this.isLastQuestion = false;

        axios.get(`https://opentdb.com/api.php?amount=${this.$route.params.questionNumber}`)
        .then(resp => resp.data)
        .then(resp => {
            this.quizList = resp.results;
            this.currentQuestion = this.quizList[this.questionCounter];
        }).catch(error => {
        if (!error.response) {
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;
        }
      })

    },
    data() {
        return {
            quizList: [],
            answers: [],
            questionCounter: Number,
            currentQuestion: Object,
            isLastQuestion: Boolean,
            numberOfQuestions: Number
        }
    }

    
}


</script>

<style scoped>
</style>