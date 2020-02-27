<template>
    <div class="app-container">
        <div v-if="answers && questions">
            <div class="score-element">
                <h2>
                    Score: {{score}} / {{questions.length * 10}} points
                </h2>
            </div>
            <quiz-results :answers=answers :questions=questions></quiz-results>
            <button v-on:click="GoToGame" class="button" >Play again</button>
        </div>
        <div v-if="!answers || !questions">
            <h2>
                Please go back to the main menu and complete a quiz in order to view results
            </h2>
        </div>
        <router-link to="/" class="button" >Go back to main menu</router-link>
    </div>
</template>
<script>
import QuizResults from './QuizResults.vue';

export default {
    name: "GameOver",
    props: ['answers', 'questions'],
    components: {
        QuizResults
    },
    methods: {
        GetScore() {
            this.score = 0;
            for (let index = 0; index < this.questions.length; index++) {
                if(this.answers[index] == this.questions[index].correct_answer){
                    this.score += 10;
                }
            }
            return this.score;
        },GoToGame() {
            this.$router.push({name: "game", params: {questionNumber: this.questions.length}})
        }
    },
    mounted() {
        this.GetScore();
    },
    data() {
        return {
            score: Number
        }
    }
}
</script>
<style scoped>
.score-element {
    text-align: left;
}
.button {
    margin-top: 1em;
}
</style>