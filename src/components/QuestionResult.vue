<template>
    <div class="question-result">
        <div class="card">
            <div class="card-content">
                <div class="content" v-html="question.question">
                    <hr>
                    <br>
                </div>
                <ul>
                    <li class="" v-for="(answerItem, index) of answerList" :key="index">
                        <p :class="IsCorrectAnswer(answerItem)" v-html="GetAnswerString(answerItem, index)">
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "QuestionResult",
    props: ['answer', 'question'],
    mounted() {
        this.answerList.push(this.question.correct_answer);
        this.answerList.push(...this.question.incorrect_answers)
            
        this.answerList.sort();
    },
    methods: {
        IsCorrectAnswer(answer){
            if((answer == this.answer) && (this.question.incorrect_answers.includes(answer))){
                return 'wrong-answer';
            }
            else if(this.question.correct_answer == answer) {
                return 'correct-answer';
            }
            return '';
        },
        GetAnswerString(answerItem, index){
            return String(`Option ${index+1}: ${answerItem}`);
        }
    },
    data() {
        return {
            answerList: []
        }
    }
}
</script>
<style scoped>
.wrong-answer {
    background: red;
}
.correct-answer {
    color: white;
    background: green;
    
}
</style>