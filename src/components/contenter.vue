<template>
    <div id="contenter">
        <h1>{{title}}
        </h1>
        <img :src="srcValue">
    </div>
    
</template>

<script>
    export default {
        name: "contenter",
        props: ['title', 'srcValue']
    }
</script>

<style scoped>
    #contenter {
        color: red;
    }

</style>