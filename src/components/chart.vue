<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4>
                <v-card>
                    <v-card-title primary class="title">高二学期期中考试均分</v-card-title>
                    <SymbolsChart></SymbolsChart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md8 align-content-center>
                <v-card>
                    <v-card-text class="title">高二学期期中考试成绩</v-card-text>
                    <DistributedChart></DistributedChart>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 sm12 md12 align-content-center>
                <v-card>

                    <Table></Table>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 sm12 md6>
                <v-card>
                    <v-card-title primary class="title">个人成绩趋势图</v-card-title>
                    <LineChart></LineChart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md6 align-content-center>
                <v-card>
                    <v-card-text class="title">个人成绩趋势图</v-card-text>
                    <CompareChart></CompareChart>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DistributedChart from '@/components/charts/distributedChart.vue';
import SymbolsChart from '@/components/charts/symbols.vue';
import PoplarChart from '@/components/charts/poplarChart.vue';
import TestChart from '@/components/charts/testChart.vue';
import Table from '@/components/charts/table.vue';
import LineChart from '@/components/charts/lineChart.vue';
import CompareChart from '@/components/charts/compareChart.vue';

@Component({
    components: {
        DistributedChart,
        SymbolsChart,
        PoplarChart,
        TestChart,
        Table,
        LineChart,
        CompareChart,
    },
})
export default class Chart extends Vue {
    private source: string = 'www.baidu.com';
    private lorem: string = '111111111';
}
</script>

