<template>
    <div id='poplarChart'></div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import * as Highcharts from 'highcharts';

@Component
export default class PoplarChart extends Vue {
    private poplarOptions: any = {
        data: {
            table: 'freq',
            startRow: 1,
            endRow: 17,
            endColumn: 7,
        },

        chart: {
            polar: true,
            type: 'column',
        },

        title: {
            text: 'Wind rose for South Shore Met Station, Oregon',
        },

        subtitle: {
            text: 'Source: or.water.usgs.gov',
        },

        pane: {
            size: '85%',
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical',
        },

        xAxis: {
            tickmarkPlacement: 'on',
        },

        yAxis: {
            min: 0,
            endOnTick: false,
            showLastLabel: true,
            title: {
                text: 'Frequency (%)',
            },

            reversedStacks: false,
        },

        tooltip: {
            valueSuffix: '%',
        },

        plotOptions: {
            series: {
                stacking: 'normal',
                shadow: false,
                groupPadding: 0,
                pointPlacement: 'on',
            },
        },
    };
    public mounted() {
        Highcharts.chart('poplarChart', this.poplarOptions);
    }
}
</script>