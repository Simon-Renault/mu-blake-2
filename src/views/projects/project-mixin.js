import islands from '@/components/island/data.js'
import projects from '@/data/projects.js'


export default {
    components : {
        'v-island' : () => import('@/components/island/v-island.vue'),
    },
    props : {

    },
    data(){
        return {
            islands,
            projects
        }
    },
    created(){

    },
    methods: {
        enterAnim(done) {
            console.log('enter')
            done()
        },
        leaveAnim(done){
            console.log('leave')
            done()
        }
    }
}