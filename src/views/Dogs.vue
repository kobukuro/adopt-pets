<template>
    <div>
        <h1>Dogs for Adoption</h1>
        <b-table striped hover :items="dogs"></b-table>
    </div>
</template>
<script>
// @代表src資料夾
import dogs from '@/data/dogs'
export default {
    data(){
        return{
            // 右邊的cats代表import的cats
            dogs:dogs
        }
    }
}
</script>