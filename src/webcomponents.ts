import { defineCustomElement } from 'vue'
import './assets/base.css'
import MainViewCe from './views/MainView.ce.vue'

const MainView = defineCustomElement(MainViewCe)

customElements.define('home-view', MainView)

export { MainView }
