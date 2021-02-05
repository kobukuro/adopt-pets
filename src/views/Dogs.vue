<template>
    <div>
        <h1>Dogs for Adoption</h1>
        <b-table striped hover :items="dogs">
            <!-- cell參數為欄位名稱 -->
            <template #cell(name)="data">
                <router-link :to="`/pets/dogs/${data.index}`">
                    {{ data.value }}
                </router-link>
            </template>
        </b-table>
    </div>
</template>
<script>
// @代表src資料夾
// import dogs from '@/data/dogs'

import { mapState } from 'vuex'

export default {
    data(){
        return{
            // 右邊的cats代表import的cats
            // dogs:dogs
        }
    },
    computed: {
        ...mapState(
            [
                'dogs'
            ]
        )
    }
}
</script>