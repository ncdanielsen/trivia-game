<template>
    <div class="app-container">
        <div class="field">
            <label class="label">Number of questions?</label>
            <div class="control">
                <input class="input" type="number" min="10" max="20" placeholder="min 10 - max 20" v-model.number="numberOfQuestions">
                <button v-on:click="StartQuiz" id="btnSubmit" class="button is-primary">Start Quiz</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GameMenu",
    methods: {
        StartQuiz(){

            if(this.numberOfQuestions >= 10 && this.numberOfQuestions <= 20) {
                this.$router.push({name: 'game', params: {questionNumber: this.numberOfQuestions}})
            }
        }
    }, data() {
        return {
            numberOfQuestions: Number
        }
    }, mounted() {
        this.numberOfQuestions = 10;
    }
}
</script>

<style scoped>
.field {
    text-align: left
}
#btnSubmit{
    margin-top: 1em;
}
</style>
