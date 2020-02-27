<template>
    <div>
        <question-result class="question-result"
         v-for="(question, index) of questions" :key="index" :answer=answers[index] :question=question></question-result>
    </div>
</template>
<script>
import QuestionResult from "./QuestionResult.vue";

export default {
    name: "QuizResults",
    props: ['answers', 'questions'],
    components: {
        QuestionResult
    }
}
</script>
<style scoped>
.question-result{
    margin-top: 2em;
    margin-bottom: 2em;
}
</style>