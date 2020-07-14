import Vue from 'nativescript-vue';

import Tasks from './components/Tasks';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <Tasks />
        </Frame>`,

    components: {
        Tasks
    }
}).$start();