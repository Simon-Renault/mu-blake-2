<template lang="pug">

div.content  
    v-nav( right="/page/2" left="/page/1" top="/page/2" bottom="/page/1" key="p3")

</template>

<script>
import mixin from "@/views/projects/project-mixin.js"

export default {
    mixins: [mixin],
    mounted(){
        window.app.next(1)
    }
}
</script>

<style lang="scss" scoped>
.content{
    pointer-events: none;
}
</style>