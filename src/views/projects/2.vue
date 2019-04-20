<template lang="pug">

div.content   
    v-nav( right="/page/1" left="/page/3" top="/page/1" bottom="/page/3" key="p2")

    v-island.island.a(  key="atlantide" 
                        :project="projects['atlantide']"
                        delay=300)

    v-island.island.b(  key="nyx" 
                        :project="projects['nyx']"
                        delay=300)
                        
    v-island.island.c(  key="GIF" 
                        :project="projects['gif']"
                        delay=300)

</template>

<script>
import mixin from "@/views/projects/project-mixin.js"

export default {
    mixins: [mixin],
    mounted(){
        window.app.next(3)
    }
}
</script>

<style lang="scss" scoped>
.a{
    top: 400px;
}
.b{
    top: 100px;
}
.c{
    top: 530px;
    left: 250px;
}
</style>