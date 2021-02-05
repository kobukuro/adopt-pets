<template>
    <div>
        <!-- {{ $route.params.species }}
        {{ $route.params.id }} -->
        <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
        <p>Age: {{ animal.age }} years old</p>
        <p>Breed: {{ animal.breed }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            animal: {}
        }
    },
    computed: {
        ...mapState(
            [
                'cats',
                'dogs'
            ]
        )
    },
    mounted(){
        //this[this.$route.params.species]
        //代表this.cats或this.dogs
        const animal = this[this.$route.params.species][this.$route.params.id]
        this.animal = animal
    }
}
</script>