<template>
    <div>
        <h1>Cats for Adoption</h1>
        <b-table striped hover :items="cats">
            <!-- cell參數為欄位名稱 -->
            <template #cell(name)="data">
                <router-link :to="`/pets/cats/${data.index}`">
                    {{ data.value }}
                </router-link>
            </template>
        </b-table>
    </div>
</template>
<script>
// @代表src資料夾
// import cats from '@/data/cats'

//改成用vuex的方式去import cats 
import { mapState } from 'vuex'

export default {
    data(){
        return{
            // 右邊的cats代表import的cats
            // cats:cats
        }
    },
    //改成用vuex的方式去import cats
    //直接從自己的vuex store
    computed: {
        ...mapState(
            [
                'cats'
            ]
        )
    }
}
</script>