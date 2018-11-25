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
								<v-flex ><v-icon>mdi-json</v-icon></v-flex>
								<v-flex ><v-icon>mdi-language-html5</v-icon></v-flex>
								<v-flex ><v-icon>mdi-language-css3</v-icon></v-flex>
								<v-flex ><v-icon>mdi-language-javascript</v-icon></v-flex>
								<v-flex ><v-icon>mdi-nodejs</v-icon></v-flex>
								<v-flex ><v-icon>mdi-angular</v-icon></v-flex>
								<v-flex ><v-icon>mdi-vuejs</v-icon></v-flex>
								<v-flex ><v-icon>mdi-language-typescript</v-icon></v-flex>
							</v-layout>
							<v-layout align-center justify-space-around row wrap fill-height>
								<v-flex ><v-icon>mdi-language-php</v-icon></v-flex>
								<v-flex ><v-icon>mdi-laravel</v-icon></v-flex>
								<v-flex ><v-icon>mdi-language-python</v-icon></v-flex>
								<v-flex ><v-icon>mdi-github-circle</v-icon></v-flex>
								<v-flex ><v-icon>mdi-gitlab</v-icon></v-flex>
								<v-flex ><v-icon>mdi-database</v-icon></v-flex>
							</v-layout>
						</v-container>

						<v-layout row wrap>
							<v-flex xs12 sm6 >
								<h1 class=".title align">Can work at:</h1>
								<ul>
									<li v-for="skill in about.skills">
										{{ skill }}
									</li>
								</ul>
							</v-flex>
							<v-flex xs12 sm6>
								<h1 class=".title align">languages and Frameworks</h1>
								<ul>
									<li v-for="language in about.languages">
										{{ language }}
									</li>
								</ul>
							</v-flex>
						</v-layout>

					</section>
				</v-flex>
			</v-layout>
		</v-container>
	</section>
</template>


<script>

  export default {
		name: 'about',
		props: ['about'],
	  data () {
	    return {
	      about:this.about,

	    }
	  },
		computed:{
			img: function(){
				return require(`../assets/${this.about.photo}`);
			}
		},
    methods: {

    }
  }
</script>

<style>
	.about{

	}
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
	}
	.clear{
		clear: both;
	}
</style>
