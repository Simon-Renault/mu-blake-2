<template lang="pug">
    div.page.page-landing
        div.page__inner
            div.logo(ref="logo")
                svg(xmlns="http://www.w3.org/2000/svg" width="126.806" height="131.066" viewBox="0 0 126.806 131.066")
                    path(id="Path_2427" data-name="Path 2427" d="M27.974-92.442v24.566h-16.9V-58.5h16.9V-34.79H8.8v9.514H133.2V-34.79H116.724V-58.5h14.342v-9.372H116.724V-92.868h11.36v-9.656H34.364a88.562,88.562,0,0,0,5.112-12.5l-9.94-1.278C25.56-104.37,18.176-94.288,7.384-85.91l6.248,8.094A77.55,77.55,0,0,0,27.974-92.442Zm9.8,57.652V-58.5H54.1V-34.79Zm26.27,0V-58.5H80.656V-34.79Zm26.412,0V-58.5h16.33V-34.79Zm16.33-33.086H90.454V-92.868h16.33Zm-26.128,0H64.042V-92.868H80.656Zm-26.554,0H37.772V-92.868H54.1ZM26.98-19.17A116.634,116.634,0,0,1,10.792,8.662l8.378,6.106a134.714,134.714,0,0,0,16.472-29.82Zm30.956,2.982-9.372,2.13a219.933,219.933,0,0,1,6.674,27.974L65.6,11.644C63.332,1.7,60.776-7.668,57.936-16.188Zm30.53-.852-9.514,2.13a160.7,160.7,0,0,1,9.372,28.258l10.224-2.272A210.305,210.305,0,0,0,88.466-17.04ZM115.3-19.88l-7.952,4.97A237.21,237.21,0,0,1,125.67,14.342l8.52-5.964A237.2,237.2,0,0,0,115.3-19.88Z" transform="translate(-7.384 116.298)" fill="#fff")
                    

            h1.title(ref="title") Mu Blake
            div.actions(ref="actions")
                div.language
                    button.ll.fr( @click="setLangFR" ref="lg"  :class="{'active':isFr}")
                        span french
                    button.ll.en( @click="setLangEN" ref="lg2" :class="{'active':isEn}")
                        span english
                button.button.enter( @click="enter" ref="button")
                    span enter
</template>

<script>
import charming from 'charming'
import anime from 'animejs'

import { mapMutations, mapGetters} from 'vuex'

export default {
    data(){
        return{
            
        }
    },
    mounted(){
        this.lang = 'fr'
        localStorage.setItem('lang','fr');
    },
    computed : {
        ...mapGetters(['getLang']),
        isFr(){
            return this.getLang === "fr"
        },
        isEn(){
            return this.getLang === "en"
        }
    },
    methods : {
        ...mapMutations(['setLang']),
        enterAnim(done) {
            window.app.next(0)
            anime({
                targets: this.$refs.logo,
                opacity : 0.8,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                duration: 800,
            })
             anime({
                targets: this.$refs.actions,
                opacity : 1,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                duration: 700,
            })
            anime({
                targets: this.$refs.title,
                opacity : 1,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                delay: 300,
                duration: 1200,
                complete: (anim) => {
                    done()
                }
            })
        },
        enter(){
            this.$router.push(`/page/2`) 
        },
        setLangFR(){
            this.setLang( 'fr' )
            localStorage.setItem('lang','fr');
        },
        setLangEN(){
            this.setLang( 'en' )
            localStorage.setItem('lang','en');
        },
        leaveAnim(done){
            window.app.next(1)
            anime({
                targets: this.$refs.logo,
                opacity : 0,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                duration: 800,
            })
            anime({
                targets: this.$refs.actions,
                opacity : 0,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                duration: 700,
            })
          
            anime({
                targets: this.$refs.title,
                opacity : 0,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                delay: 300,
                duration: 500,
                complete: (anim) =>{
                    setTimeout(()=>{ 
                        done() 
                    }, 1200);
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page{
    z-index: 99999;
    position: relative;
    color : $color-white;
    //background: #000;
    &__inner{
        z-index: 99999;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    & .logo{
        opacity: 0;
       
        
       
    }
    & .title{
        opacity: 0;
        font-size: 10rem;
        color: $color-white;
        margin: 0 0 40px;
    }
}

.actions{
    opacity: 0;
}
.button.enter{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    background: transparent;
    color: $color-white;
    font-size: 18px;
    height: 50px;
    min-width: 150px;
    padding: 0 40px;
    line-height: 60px;
    border-radius: 25px;
    transition: background .5s ease;
    line-height: initial;
    margin: 0;
    margin: 30px auto;
    &:hover{
        background: rgba(255,255,255,0.4);
    }
}

.ll{
    font-size: 18px;
    color: white;
    background: transparent;
    margin: 10px;
    &.active{
        border-bottom: 2px solid white;
    }
}
</style>