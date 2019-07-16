<template>
    <div id='testChart'>
        <VueEcharts class="chart-flex" :option="options"></VueEcharts>
    </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import * as Echarts from 'echarts';
export default class LineChart extends Vue {
    private options = {
        title: {},
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['总分', '英语', '数学', '语文', '物理', '化学', '生物'],
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        toolbox: {
            feature: {
                saveAsImage: {},
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [
                '18/05/12',
                '18/06/12',
                '18/07/12',
                '18/12/12',
                '19/02/12',
                '19/04/12',
                '19/05/12',
                '19/06/12',
            ],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: '总分',
                type: 'line',
                stack: '总量',
                data: [500, 612, 510, 510, 560, 550, 500],
            },
            {
                name: '英语',
                type: 'line',
                stack: '英语',
                data: [100, 110, 105, 110, 120, 110, 120],
            },
            {
                name: '数学',
                type: 'line',
                stack: '数学',
                data: [100, 120, 115, 100, 110, 110, 120],
            },
            {
                name: '语文',
                type: 'line',
                stack: '语文',
                data: [90, 85, 80, 100, 110, 100, 107],
            },
            {
                name: '物理',
                type: 'line',
                stack: '物理',
                data: [70, 76, 70, 65, 80, 65, 50],
            },
            {
                name: '化学',
                type: 'line',
                stack: '化学',
                data: [80, 76, 60, 75, 70, 70, 50],
            },
            {
                name: '生物',
                type: 'line',
                stack: '生物',
                data: [60, 65, 80, 70, 60, 86, 50],
            },
        ],
    };
}
</script>
<style lang="">
</style>