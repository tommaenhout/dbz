import {createApp} from "vue";

import Cards from "./components/Cards.vue";

import "./index.css";

export default function placeCards (el: Element | string) {
    createApp(Cards).mount(el);
}