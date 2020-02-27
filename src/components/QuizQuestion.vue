<template>
    <div>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    {{quizItem.category}}
                </p>
            </header>
            <body>
                <div class="content">{{quizItem.question}}</div>
                <ul>
                    <li v-for="(answer, index) of AnswerScrambler(quizItem)" :key="index">
                        <button class="button" v-on:click="AnswerClicked(answer, quizItem)">{{answer}}</button>
                    </li>
                </ul>
            </body>
        </div>
    </div>
</template>

<script>
export default {
    name: "QuizQuestion",
    props: ['quizItem'],
    created() {
        this.correctAnswer = this.quizItem.correct_answer;
    },
    updated(){
        this.correctAnswer = this.quizItem.correct_answer;
    },
    methods: {
        AnswerScrambler(quizItem) {
            let quizAnswers = [];
            quizAnswers.push(quizItem.correct_answer);
            quizAnswers.push(...quizItem.incorrect_answers)
            
            quizAnswers.sort();

            return quizAnswers;
        },
        AnswerClicked(answer){
            this.$emit('answered', answer);
        }
    },
    data() {
        return {
            correctAnswer: String
        }
    }
}
</script>
<style scoped>
.card {
    margin-top: 2em;
    padding-bottom: 2em;
}
.content {
    margin-top: 1em;
}
li {
    margin-left: 2em;
}
.button {
    margin-top: 1em;
    min-width: 14em;
}
</style>