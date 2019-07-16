<template>
    <div>
        <v-card>
            <v-container fluid grid-list-lg>
                <v-layout>
                    <v-flex xs12>
                        <v-card color="#385F73" class="white--text">
                            <v-card-actions class="pa-3">
                                学校列表
                                <v-spacer></v-spacer>
                                <v-btn text depressed @click="dialog=!dialog">添加学校</v-btn>
                            </v-card-actions>
                            <v-divider light></v-divider>
                            <v-dialog v-model="dialog" max-width="600px">
                                <v-card>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                               
                                                <v-flex xs12 sm6>
                                                    <v-text-field v-model="editedItem.province_name" label="省份名称"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-text-field v-model="editedItem.province_code" label="省份代码"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-text-field v-model="editedItem.city_name" label="城市名称"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-text-field v-model="editedItem.city_code" label="城市代码"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-text-field v-model="editedItem.county_code" label="区/县代码"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-text-field v-model="editedItem.county_name" label="区/县名称"></v-text-field>
                                                </v-flex>
                                                 <v-flex xs12 sm6>
                                                    <v-text-field v-model="editedItem.school_name" label="学校名称"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-text-field v-model="editedItem.school_code" label="学校代码"></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                                        <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-data-table :headers="headers" :items="SchoolData" class="elevation-1">
                                <template v-slot:items="props">
                                    <td>{{ props.item.school_name }}</td>
                                    <td class="text-xs-left">{{ props.item.school_code }}</td>
                                    <td class="text-xs-left">{{ test(props.item) }}</td>
                                    <td class="justify-center layout px-0">
                                        <v-icon small class="mr-2" @click="editItem(props.item)">
                                            edit
                                        </v-icon>
                                        <v-icon small @click="deleteItem(props.item)">
                                            delete
                                        </v-icon>
                                    </td>
                                </template>
                                <template v-slot:no-data>
                                    <!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
                                </template>
                            </v-data-table>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>

    </div>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator';
import { SchoolDataType } from '@/globaltype/schoolmanage';
import Vue from 'vue';
@Component
export default class SchoolMangement extends Vue {
    // data
    private editedItem: SchoolDataType = {
        school_name: '名称示例',
        school_code: '0001',
        province_name: '省份示例',
        province_code: '0002',
        city_code: '城市示例',
        city_name: '0003',
        county_code: '',
        county_name: '',
    };

    private defaultItem: SchoolDataType = {
        school_name: '名称示例',
        school_code: '0001',
        province_name: '省份示例',
        province_code: '0002',
        city_code: '城市示例',
        city_name: '0003',
        county_code: '',
        county_name: '',
    };

    private dialog: boolean = false;
    private editedIndex = -1;
    private desserts = [];
    private headers = [
        {
            text: '学校名称',
            align: 'left',
            sortable: false,
            value: 'school_name',
        },
        { text: '学校代码', value: 'school_code' },
        { text: '省份/城市/区县', value: 'province_city_county' },
        { text: '操作', value: 'name', sortable: false },
    ];
    private SchoolData: SchoolDataType[] = [
        {
            school_name: '名称示例',
            school_code: '0001',
            province_name: '省份示例',
            province_code: '0002',
            city_code: '城市示例',
            city_name: '0003',
            county_code: '',
            county_name: '',
        },
    ];

    // computed

    get test() {
        return function(item: SchoolDataType) {
            return `${item.province_name}/${item.city_name}/${item.county_name}`;
        };
    }

    // method
    private close() {
        this.dialog = false;
        setTimeout(() => {
            this.editedItem = Object.assign({}, this.defaultItem);
            this.editedIndex = -1;
        }, 300);
    }
    private save() {
        if (this.editedIndex > -1) {
            Object.assign(this.SchoolData[this.editedIndex], this.editedItem);
        } else {
            this.SchoolData.push(this.editedItem);
        }
        this.close();
    }
    private editItem(item: SchoolDataType) {
        this.editedIndex = this.SchoolData.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
    }
    private deleteItem(item: SchoolDataType): void {
        const index = this.SchoolData.indexOf(item);
        confirm('确定要删除这条纪录吗') && this.SchoolData.splice(index, 1);
    }
}
</script>

<style scoped>
</style>
