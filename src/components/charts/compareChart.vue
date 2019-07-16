<template>
    <div id='testChart'>
        <VueEcharts class="chart-flex" :option="options"></VueEcharts>
    </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import * as Echarts from 'echarts';
export default class CompareChart extends Vue {
    private labelRight = {
        normal: {
            position: 'right',
        },
    };
    private options = {
        title: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        legend: {
            data: ['200班级', '201班级'],
        },

        xAxis: {
            type: 'value',
        },
        yAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['英语', '语文', '数学', '物理', '化学', '生物', '总分'],
            },
        ],
        series: [
            {
                name: '200均分',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                    },
                },
                data: [100, 102, 105, 78, 80, 65, 530],
            },
            {
                name: '201均分',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        formatter: (value: any) => {
                            return Math.abs(value.data);
                        },
                    },
                },
                data: [-120, -122, -101, -76, -75, -87, -581],
            },
        ],
    };
}
</script>
<style lang="">
</style>