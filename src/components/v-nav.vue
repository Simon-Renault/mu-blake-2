<template lang="pug">
    nav.nav
        router-link(:to="top").nav__item.top 
            icon.arrow(name="arrow" width="26px" height="26px" )
        router-link(:to="bottom").nav__item.bottom 
            icon.arrow(name="arrow" width="26px" height="26px" )
        router-link(:to="right").nav__item.left 
            icon.arrow(name="arrow" width="26px" height="26px" )
        router-link(:to="left").nav__item.right 
            icon.arrow(name="arrow" width="26px" height="26px" )

</template>

<script>
import '@/compiled-icons'

export default {
    props : {
        top : {
            type : String,
            default : "/"
        },
        bottom : {
            type : String,
            default : "/"
        },
        left : {
            type : String,
            default : "/"
        },
        right : {
            type : String,
            default : "/"
        }
    }
}
</script>

<style lang="scss" scoped>
.nav{
    z-index: 99999999;
    &__item{
        z-index: 99999999;

        height: 50px;
        width: 50px;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        color: white;
        font-size: 1rem;
        stroke: white;
        stroke-width: 3px;
        
        & > svg{
            stroke: white;
            transform: rotate(-90deg);
            transition: all .3s ease;
        }
        &:hover > svg{
            transform: rotate(-90deg) translate(-5px);
        }
    }
    .top{
        top:0;
        left: 50vw;
        position: fixed;
        transform: translate(-50%,0) rotate(180deg) ;
        &:before{
            content : ' ';
            display: block;
        }
        &:hover{

        }
    }
    .bottom{
        bottom:0;
        position: fixed;
        left: 50vw;
        transform: translate(-50%,0) rotate(0deg) ;
        &:before{
            content : ' ';
            display: block;
        }
        &:hover{
            
        }
    }
    .left{
        left:0;
        position: fixed;
        top:50vh;
        transform: translate(0,-50%) rotate(90deg) ;
        &:before{
            content : ' ';
            display: block;
        }
        &:hover{
            
        }
    }
    .right{
        right:0;
        position: fixed;
        top:50vh;
        transform: translate(0,-50%) rotate(270deg);
        &:before{
            content : ' ';
            display: block;
        }
        &:hover{
            
        }
    }
}
</style>