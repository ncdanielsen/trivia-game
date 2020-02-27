import GameMenu from './components/GameMenu.vue';
import GamePlay from './components/GamePlay.vue';
import GameOver from './components/GameOver.vue';

const routes = [
    {path: '/', component: GameMenu},
    {path: '/game/:questionNumber', name: 'game', component: GamePlay},
    {path: '/results', name: 'results', component: GameOver, props: true}
]

export default routes;
