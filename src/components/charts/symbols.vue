<template>
    <div>
        <VueEcharts class="chart-flex" :option="options"></VueEcharts>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as Echarts from 'echarts';

@Component
export default class DistributedChart extends Vue {
    private options = {
        title: {},
        tooltip: {},
        legend: {
            data: ['本校均分', '班级均分'],
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5],
                },
            },
            indicator: [
                { name: '英语', max: 150 },
                { name: '数学', max: 150 },
                { name: '语文', max: 150 },
                { name: '物理', max: 100 },
                { name: '化学', max: 100 },
                { name: '生物', max: 100 },
            ],
        },
        series: [
            {
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: [90, 96, 103, 70, 68, 65],
                        name: '本校均分',
                    },
                    {
                        value: [88, 96, 110, 69, 76, 60],
                        name: '班级均分',
                    },
                ],
            },
        ],
    };
}
</script>
