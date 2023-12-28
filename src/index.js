import ExpandCard from "./components/ExpandCard.vue";

export default {
    install: (app, options) => {
        app.component("ExpandCard",ExpandCard);
    },
};