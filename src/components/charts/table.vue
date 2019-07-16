<template>
    <v-card>
        <v-card-title>
            高二学期期中考试均分
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="desserts" :search="search">
            <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.All }}</td>
                <td class="text-xs-right">{{ props.item.YuWen }}</td>
                <td class="text-xs-right">{{ props.item.ShuXue }}</td>
                <td class="text-xs-right">{{ props.item.YingYu }}</td>
                <td class="text-xs-right">{{ props.item.WuLi }}</td>
                <td class="text-xs-right">{{ props.item.HuaXue }}</td>
                <td class="text-xs-right">{{ props.item.ShengWu }}</td>
            </template>
            <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                </v-alert>
            </template>
        </v-data-table>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            search: '',
            headers: [
                {
                    text: '学生姓名/班级',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: '总分(排名)', value: 'All' },
                { text: '语文(排名)', value: 'YuWen' },
                { text: '数学(排名)', value: 'ShuXue' },
                { text: '英语(排名)', value: 'YingYu' },
                { text: '物理(排名)', value: 'WuLi' },
                { text: '化学(排名)', value: 'HuaXue' },
                { text: '生物(排名)', value: 'ShengWu' },
            ],
            desserts: [
                {
                    name: '李瑶',
                    All: '600/1',
                    YuWen: '100/1',
                    ShuXue: '100/1',
                    YingYu: '100/1',
                    WuLi: '100/1',
                    HuaXue: '100/1',
                    ShengWu: '100/1',
                },
                {
                    name: '李逍遥',
                    All: '600/1',
                    YuWen: '100/1',
                    ShuXue: '100/1',
                    YingYu: '100/1',
                    WuLi: '100/1',
                    HuaXue: '100/1',
                    ShengWu: '100/1',
                },
                {
                    name: '李小瑶',
                    All: '600/1',
                    YuWen: '100/1',
                    ShuXue: '100/1',
                    YingYu: '100/1',
                    WuLi: '100/1',
                    HuaXue: '100/1',
                    ShengWu: '100/1',
                },
                {
                    name: '邵琴',
                    All: '600/1',
                    YuWen: '100/1',
                    ShuXue: '100/1',
                    YingYu: '100/1',
                    WuLi: '100/1',
                    HuaXue: '100/1',
                    ShengWu: '100/1',
                },
                {
                    name: '邵小琴',
                    All: '600/1',
                    YuWen: '100/1',
                    ShuXue: '100/1',
                    YingYu: '100/1',
                    WuLi: '100/1',
                    HuaXue: '100/1',
                    ShengWu: '100/1',
                },
                {
                    name: '邵雪琴',
                    All: '600/1',
                    YuWen: '100/1',
                    ShuXue: '100/1',
                    YingYu: '100/1',
                    WuLi: '100/1',
                    HuaXue: '100/1',
                    ShengWu: '100/1',
                },
                {
                    name: '邵小雪琴',
                    All: '600/1',
                    YuWen: '100/1',
                    ShuXue: '100/1',
                    YingYu: '100/1',
                    WuLi: '100/1',
                    HuaXue: '100/1',
                    ShengWu: '100/1',
                },
            ],
        };
    },
};
</script>
<style lang="">
</style>