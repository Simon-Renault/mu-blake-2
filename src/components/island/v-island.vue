<template lang="pug">

.item()
   router-link.item__link( :to="path")
      h2.item__title(ref="title") {{project.title}}
      svg.item__svg( :width="width" 
                     :height="height" 
                     viewBox="0 0 500 500" 
                     ref="svg")

         v-blob-deco(   :isHover="isHover"
                        :path="island.deco")

         v-blob-image(  :isHover="isHover" 
                        :img="project.cover.backgroundImage")

            v-blob-path(v-for="path in island.paths"
                        :isHover="isHover" 
                        :path="path.start" 
                        :morphPath="path.end" )
        
</template>

<script>
//import Island from '@/js/island/island.1'
import Vdeco from '@/components/island/v-blob-deco'
import Vimage from '@/components/island/v-blob-image'
import Vpath from '@/components/island/v-blob-path'
import charming from 'charming'
import anime from 'animejs'
import islands from '@/components/island/data.js'
import {clamp, lerp, map, mod, random,} from '@/js/helpers'

export default {
   components :{
      'v-blob-deco' : Vdeco,
      'v-blob-image' :Vimage,
      'v-blob-path' : Vpath
   },
   props : {
      project : {
         required : false,
         default: 1500,
         type: Object
      },
      delay : {
         default : 1000,
      }
   },
   data(){
      return{
         width : 500,
         height: 500,
         isHover : false,
      }
   },
   computed :{
      path(){
         return `/project${this.project.url}`
      },
      island(){
         return islands[this.project.cover.islandModel]
      }
   },
   watch: {
      isHover(){
         this.isHover ? this.show() : this.hide()
      }
   },
   methods: {
      show(){
         const els = [...this.$refs.title.querySelectorAll('span')]

         anime.set(els, {
            opacity: 0, 
         });
         anime({
            targets: els,
            opacity : 1,
            loop: false,
            elasticity: 400,
            easing: 'easeOutQuad',
            duration: 800,
         })
      },
      hide(){
         const els = [...this.$refs.title.querySelectorAll('span')]
         anime({
            targets: els,
            opacity : 0,
            loop: false,
            elasticity: 400,
            easing: 'easeOutQuad',
            duration: 800,
         });
      }
   },
   created(){
      this.seed = Math.random()
      this.seed1 = Math.random()
   },
   mounted(){
     
      this.$nextTick(()=> {

         //charming the title
         charming(this.$refs.title,{
            classPrefix: 'letter'
         })
         
         this.hide();
         
         anime.set(this.$el, {
            opacity: 0, 
            translateY: -100,
         });

         anime({
            targets: [this.$el],
            opacity : 1,
            translateY: 0,
            easing: 'easeOutQuad',
            duration: 1000,
            delay : this.delay
         });

         //enter
         this.$el.addEventListener('mouseenter', () => {this.isHover = true},{passive:true});
         this.$el.addEventListener('touchstart', () => this.isHover = true,{passive:true});

         //leave
         this.$el.addEventListener('mouseleave', () =>this.isHover = false,{passive:true});
         this.$el.addEventListener('touchend', () => this.isHover = false,{passive:true});
      })
     
     
   },
   beforeDestroy() {
      //enter
      this.$el.removeEventListener('mouseenter', () => this.isHover = true,{passive:true});
      this.$el.removeEventListener('touchstart', () =>this.isHover = true,{passive:true});

      //leave
      this.$el.removeEventListener('mouseleave', () =>this.isHover = false,{passive:true});
      this.$el.removeEventListener('touchend', () => this.isHover = false,{passive:true});
   }
}
</script>

<style lang="scss" scoped>


.item {
	position: relative;
   width: 500px;
   height: 500px;
	max-width: 100%;
   cursor: pointer;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   opacity: 0;

   &__title{
      z-index: 99;
      position: absolute;
      font-size: 2rem;
      text-transform: uppercase;
      color: white;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
      flex-direction: row;
      display: flex;
      & > span {
         opacity: 0;
      }
   }
   &__deco{
      fill: rgba(70,70,70,0.6);
   }
   &__svg{
      position: relative;
      display: block;
      width: 80%;
      height: 80%;
      margin: 0 auto;
      color: white;
      //border: 1px solid yellow;
   }
   &__clippath,
   &__deco,
   &__img {
      transform-origin: 50% 50%;
   }
   &__meta {
      position: absolute;
      top: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
   }
   &__number {
      position: absolute;
      top: 0;
      width: 100%;
      padding: 12.5% 0 0 3em;
      letter-spacing: 0.5em;
      text-transform: uppercase;
   }
   &__specimen {
      font-size: 5em;
      font-weight: 500;
      line-height: 0.9;
      vertical-align: text-bottom;
      letter-spacing: -0.025em;
   }
   &__reference {
      font-size: 1.25em;
      -webkit-writing-mode: vertical-rl;
      writing-mode: vertical-rl;
   }
   &__subtitle {
      font-size: 1em;
      font-weight: 500;
      margin: 0.5em 0 0;
      text-align: center;
      letter-spacing: 0.15em;
      opacity: 0;
   }
}
</style>