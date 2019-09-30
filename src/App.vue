<template>
<v-app>
    <v-content>
            <div class="background">
                <Banner :contact="contact"/>
            <v-tabs
            centered
            dark
            slider-color="yellow"
            >
                    <v-tab key="about" ripple >About</v-tab>
                    <v-tab key="portfolio" ripple >Portfolio</v-tab>

                    <v-tab-item key="about">
                        <About :about="about" :contact="contact"/>
                    </v-tab-item>

                    <v-tab-item key="portfolio">
                        <Portfolio :portfolio="portfolio" />
                    </v-tab-item>

            </v-tabs>
        </div>
    </v-content>
</v-app>
</template>

<script>
import Banner from './components/Banner'
import About from './components/About'
import Portfolio from './components/Portfolio'

import data from './assets/data.js'

export default {
    name: 'App',
    components: {
        Banner,
        About,
        Portfolio
    },
    data () {
        return {
            contact:data.contact,
            about:data.about,
            portfolio:data.portfolio,
        }
    }
}
</script>

<style>
    /* .background{
        height: 100%;
    } */
</style>
