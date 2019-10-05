<template>
<div class="portfolio">
    <v-container grid-list-md >
        <v-tabs
            centered
            dark
            slider-color="yellow"
        >
            <v-tab v-for="language in languages" :key="language" ripple >{{language}}</v-tab>

            <v-tab-item v-for="language in languages" :key="language" class="mt-1">
                <v-layout row wrap justify-center>
            <v-flex v-for="(project,i) in projects[language]" :key="`6${i}`" xs12 md6 >
                <v-card>
                    <v-carousel hide-controls height="425">
                        <v-carousel-item
                        v-for="(image,i) in project.images"
                        :key="i"
                        :src="require(`../assets/${image}`)"
                        >
                        </v-carousel-item>
                    </v-carousel>

                    <v-card-title primary-title>
                    <div>
                        <div class="headline">{{project.codename}}</div>
                            <span class="grey--text" style="text-align:justify">
                                {{project.description}}
                            </span>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-chip label class="mr-3">
                        <a :href="project.github"><v-icon>mdi-github-circle</v-icon> Github</a>
                    </v-chip>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="getProjectId(i)">
                        <!-- <v-icon>{{ i == ProjectId? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon> -->
                    </v-btn>
                    </v-card-actions>

                </v-card>
            </v-flex>
            </v-layout>
            </v-tab-item>

        </v-tabs>

</v-container>
</div>
</template>

<script>
// @ is an alias to /src
// import Projects from './Projects.vue'

export default {
name: 'portfolio',
    props: ['portfolio'],
components: {
    // Projects
},
data () {
    return {
            projects:this.portfolio,
            show: false,
            ProjectId: 0
    }
},
    computed: {
        languages:function() {
            return Object.keys(this.portfolio);
        }
    },
    methods: {
        getProjectId: function(name){
            if(this.ProjectId != name){
                this.ProjectId = name;
            }else{
                this.ProjectId = 0;
            }
        }
    }

}
</script>

<style scoped>
/* .v-responsive{
    overflow: visible;
} */
</style>
