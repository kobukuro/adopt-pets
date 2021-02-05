<template>
    <div>
        <h1>Cats for Adoption</h1>
        <b-table striped hover :items="cats">
            <!-- cell參數為欄位名稱 -->
            <template #cell(name)="data">
                <router-link :to="`/pets/${data.index}`">
                    {{ data.value }}
                </router-link>
            </template>
        </b-table>
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