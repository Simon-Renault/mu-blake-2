<template lang="pug">
div
    v-project-content( )
        div.content(v-html="html")
    div.left
        v-island.island(key="nyx" 
                        :project="project"
                        delay=0)
</template>

<script>
import projects from '@/data/projects.js'
import axios from 'axios'
import {mapGetters} from 'vuex'


export default {
    components : {
        'v-project-content' : () => import('@/components/v-project-content.vue'),
        'v-island' : () => import('@/components/island/v-island.vue'),
    },
    data(){
        return {
            projects,
            html: 'estt',
            id : this.$route.params.id
        }
    },
    computed : {
        ...mapGetters(['getLang']),
        project(){
            return projects[this.id]
        },
        url(){
            const project_id = this.$route.params.id
            const base = `/content/${project_id}`
            const lang = this.getLang

            return {
                fr : `${base}/${lang}.html`,
                en : `${base}/${lang}.html`
            }
        }
    },
    methods: {
        fetchContent(){
            // Make a request for a user with a given ID
            axios.get(this.url.fr)
                .then(response =>{
                    this.html = response.data
                    this.$refs.render.innerHTML = this.html
                })
                .catch(error =>{

                })
                .then( () =>{
             
                });
        },
        enterAnim(done) {
            done()
        },
        leaveAnim(done){
            done()
        }
    },
    mounted() {
        this.fetchContent();
    },
}
</script>

<style lang="scss" scoped>
.left{
    position: fixed;
    width: 50vw;
    right:0;
    top:0;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: none;
   @media screen and (min-width : $medium){
      display: flex;
   } 
}

.content{
    padding: 0 10%;
}
</style>