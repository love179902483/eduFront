<template>
    <div>
        <VueEcharts class="chart-flex" :option="option"></VueEcharts>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as Echarts from 'echarts';

@Component
export default class DistributedChart extends Vue {
    private option = {
        title: {},
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['本校成绩', '503班级成绩'],
        },
        toolbox: {
            show: true,
            feature: {},
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: [
                    '350',
                    '360',
                    '370',
                    '380',
                    '390',
                    '400',
                    '410',
                    '420',
                    '430',
                    '440',
                    '450',
                    '460',
                    '470',
                    '480',
                    '490',
                    '500',
                    '510',
                    '520',
                    '530',
                    '540',
                    '550',
                    '560',
                    '570',
                    '580',
                    '590',
                    '600',
                    '610',
                    '620',
                    '630',
                    '640',
                    '650',
                    '660',
                    '670',
                    '680',
                    '690',
                    '700',
                ],
            },
        ],
        yAxis: [
            {
                type: 'value',
            },
        ],
        series: [
            {
                name: '本校成绩',
                type: 'bar',
                data: [
                    20,
                    26,
                    27,
                    36,
                    5,
                    6,
                    7,
                    8,
                    20,
                    26,
                    27,
                    36,
                    5,
                    6,
                    7,
                    8,
                    40,
                    70,
                    90,
                    100,
                    110,
                    100,
                    110,
                    70,
                    95,
                    40,
                    60,
                    50,
                    20,
                    10,
                    8,
                    8,
                    3,
                ],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' },
                    ],
                },
                markLine: {
                    data: [{ type: 'average', name: '平均值' }],
                },
            },
            {
                name: '503班级成绩',
                type: 'bar',
                data: [
                    20,
                    5,
                    6,
                    7,
                    8,
                    20,
                    26,
                    27,
                    36,
                    5,
                    6,
                    7,
                    8,
                    null,
                    null,
                    null,
                    26,
                    27,
                    36,
                ],
                markPoint: {
                    data: [
                        { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                        { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 },
                    ],
                },
                markLine: {
                    data: [{ type: 'average', name: '平均值' }],
                },
            },
        ],
    };
}
</script>
