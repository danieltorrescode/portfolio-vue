<template>
    <section class="banner">
        <section id="banner">
            <v-container grid-list-xl >
            <v-layout row wrap>
                    <v-flex >
                        <h1 class="display-1">
                            <strong>{{ contact.name }}</strong>
                        </h1>
                        <h1 class="title">{{ contact.title }}</h1>
                        <h1>{{ contact.job }}</h1>
                        <!-- <h1 class="text-xs-center">
                            <v-chip>
                                <a v-bind:href="mailto"><strong>{{ contact.email }}</strong></a>
                            </v-chip>
                        </h1> -->
            </v-flex>
            </v-layout>
        </v-container>
        </section>
    </section>
</template>

<script>
export default {
    name: 'banner',
        props: ['contact'],
    data () {
        return {
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
    color: white;
}

.banner > * {
    margin: 0px;
}

#banner{
    height: 150px;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,217,255,0.8533613274411327) 100%);
}
</style>
