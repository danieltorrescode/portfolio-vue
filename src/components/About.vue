<template>
    <section class="about">
        <v-container grid-list-xl >
            <v-layout row wrap>
                <v-flex align-self-end xs8 offset-xs2>
                    <section id="bio" class="elevation-24">
                        <v-img :src="img" class="photo mr-5" ></v-img>

                        <p class="description mt-5">{{ about.description }}</p>
                        <div class="clear"></div>

                        <v-container>
                            <v-layout align-center justify-space-around row wrap fill-height>
                                <v-flex ><v-icon>mdi-console</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-linux</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-json</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-language-html5</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-language-css3</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-language-javascript</v-icon></v-flex>
                                <!-- <v-flex ><v-icon>mdi-nodejs</v-icon></v-flex> -->
                                <!-- <v-flex ><v-icon>mdi-angular</v-icon></v-flex> -->
                                <v-flex ><v-icon>mdi-vuejs</v-icon></v-flex>
                                <!-- <v-flex ><v-icon>mdi-language-typescript</v-icon></v-flex> -->
                            </v-layout>
                            <v-layout align-center justify-space-around row wrap fill-height>
                                <v-flex ><v-icon>mdi-language-php</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-laravel</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-language-python</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-git</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-github-circle</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-gitlab</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-database</v-icon></v-flex>
                                <v-flex ><v-icon>mdi-docker</v-icon></v-flex>
                            </v-layout>
                        </v-container>

                        <v-layout row wrap>
                            <v-flex xs12 sm6 >
                                <h1 class=".title align">Can work at:</h1>
                                <ul>
                                    <li v-for="(skill, index) in about.skills" :key="index">
                                        {{ skill }}
                                    </li>
                                </ul>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <h1 class=".title align">Languages and Frameworks:</h1>
                                <ul>
                                    <li v-for="(language, index) in about.languages" :key="index">
                                        {{ language }}
                                    </li>
                                </ul>
                            </v-flex>
                        </v-layout>
                        <div class="text-xs-center">
                            <v-chip
                            text-color="white"
                            outline color="primary"
                            >
                                <a
                                :href="about.git"
                                style="font-size: 150%;"
                                >
                                <v-icon light>mdi-github-circle</v-icon>GitHub
                                </a>
                            </v-chip>
                            <v-chip
                            text-color="white"
                            outline color="primary"
                            >
                                <a
                                :href="mailto"
                                style="font-size: 150%;"
                                >
                                <v-icon>mdi-email</v-icon> {{ contact.email }}
                                </a>
                            </v-chip>
                        </div>
                    </section>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>


<script>

export default {
    name: 'about',
    props: ['about','contact'],
    data () {
        return {
        }
    },
    computed:{
        img: function(){
            return require(`../assets/${this.about.photo}`);
        },
        mailto: function(){
            return `mailto:${this.contact.email}`;
        }
    },
}
</script>

<style>
    /* .about{

    } */
    #bio{
        background-color: #ddd;
        border: 1px solid;
        border-radius: 30px;
        padding: 30px;
    }
    .align{
        text-align: center;
    }
    .description{
        text-align: justify;
    }
    .photo{
        width: 25%;
        float: left;
        border-radius: 30px;
    }
    .clear{
        clear: both;
    }
</style>
