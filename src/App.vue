<template>
    <div id="app">
        <div>
            <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
            </button>
        </div>
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {
        },
        data() {
            return {
                languages: [
                    { flag: 'us', language: 'en', title: 'English' },
                    { flag: 'vn', language: 'vi', title: 'Tiếng Việt' }
                ]
            };
        },
        methods: {
            changeLocale(locale) {
                this.$i18n.locale = locale;
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    button {
        cursor: pointer;
        padding: 5px 15px;
        border: 1px solid green;
        font-size: 15px;
        margin: 15px;
    }
</style>
