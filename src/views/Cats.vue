<template>
    <div>
        <b-table striped hover :items="cats"></b-table>
    </div>
</template>
<script>
// @代表src資料夾
import cats from '@/data/cats'
export default {
    data(){
        return{
            // 右邊的cats代表import的cats
            cats:cats
        }
    }
}
</script>