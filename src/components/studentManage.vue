<template>
    <div class="grey lighten-3">

        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card>

                    <v-card-title>
                        <span class="headline">筛选条件</span>
                    </v-card-title>
                    <v-alert :value="true" dismissible type="warning">
                        筛选条件可以部分选择，不需要全部填写，填写多项可提升查找精确度。
                    </v-alert>
                    <v-card-text>

                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="姓名" hint="按照姓名查找，可能会查出多条纪录"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="班级"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="学号" hint="按照学号查找"></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field label="Email*" required></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                    <v-select :items="['2019', '2020', '2021', '2022']" label="学级" required></v-select>
                                </v-flex>

                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">关闭</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">确定</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>

        <v-card>
            <v-container fluid grid-list-lg>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card color="cyan darken-2" class="white--text">
                            <v-layout>
                                <v-flex xs5>
                                    <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-img>
                                </v-flex>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Supermodel</div>
                                            <div>Foster the People</div>
                                            <div>(2014)</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-3">
                                条件搜索
                                <v-spacer></v-spacer>

                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    <v-flex xs12>
                        <v-card color="#385F73" class="white--text">
                            <v-card-actions class="pa-3">
                                学生列表
                                <v-spacer></v-spacer>
                                <v-btn text depressed @click="dialogAction()">筛选</v-btn>
                            </v-card-actions>

                            <v-divider light></v-divider>
                            <!-- <v-data-table :headers="headers" :items="desserts" :expand="expand" item-key="name"> -->
                            <!-- 
                            <v-data-table item-key="name">
                                <template v-slot:items="props">
                                    <tr @click="props.expanded = !props.expanded">
                                        <td>{{ props.item.name }}</td>
                                        <td class="text-xs-right">{{ props.item.calories }}</td>
                                        <td class="text-xs-right">{{ props.item.fat }}</td>
                                        <td class="text-xs-right">{{ props.item.carbs }}</td>
                                        <td class="text-xs-right">{{ props.item.protein }}</td>
                                        <td class="text-xs-right">{{ props.item.iron }}</td>
                                    </tr>
                                </template>
                                <template v-slot:expand="props">
                                    <v-card flat>
                                        <v-card-text>Peek-a-boo!</v-card-text>
                                    </v-card>
                                </template>
                            </v-data-table> -->
                        </v-card>
                    </v-flex>

                    <v-flex xs12>
                        <v-card class="white--text">
                            <v-card-actions class="pa-3 student-header">
                                学生添加
                                {{OtherUserInfo}}
                                <v-spacer></v-spacer>
                                <v-btn text depressed @click="">批量导入</v-btn>
                            </v-card-actions>
                            <v-divider light></v-divider>

                            <v-layout row warp>

                                <v-card-text>
                                    <v-container>
                                        <v-layout wrap>
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="OtherUserInfo.school_id" label="学校"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="OtherUserInfo.student_id" label="学号"></v-text-field>
                                            </v-flex>
                                             <v-flex xs12 sm6>
                                                <v-text-field v-model="OtherUserInfo.people_firtname" label="姓"></v-text-field>
                                            </v-flex>
                                              <v-flex xs12 sm6>
                                                <v-text-field v-model="OtherUserInfo.people_lastname" label="名"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="OtherUserInfo.phone" label="手机号"></v-text-field>
                                            </v-flex>
                                           
                                            <v-flex xs12 sm6>
                                                <v-select v-model="OtherUserInfo.people_sex" :items="userSex" item-text="text" item-value="value" label="性别" required></v-select>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="OtherUserInfo.people_class" label="班级"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-select v-model="OtherUserInfo.people_grade" :items='grade' label="学级"></v-select>
                                            </v-flex>
                                        </v-layout>
                                        <v-card-actions>
                                            <v-btn color="purple" block dark text @click="singleAddStudent()">确定</v-btn>
                                        </v-card-actions>

                                    </v-container>
                                </v-card-text>
                            </v-layout>

                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>


<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { UserTypes } from '@/globaltype/user';
import { Action } from 'vuex-class';
import { userSex, selectGrade } from '@/globaldata/user';
import { jsonIfHasNullItem } from '@/globaldata/util';

const namespace: string = 'profile';
@Component
export default class StudentManage extends Vue {
    // methods
    @Action('ActionLogin', { namespace })
    public ActionLogin: UserTypes.ILoginReturn;

    // data
    private chips: boolean = false;
    private dialog: boolean = false;
    private addStudent = {
        all: '导入学生',
        one: '添加学生',
    };
    private userSex: UserTypes.IUserSex[] = userSex;
    private grade: number[] = selectGrade;

    private OtherUserInfo: UserTypes.IOtherInfo = {
        username: '',
        people_firstname: '',
        people_lastname: '',
        phone: '',
        people_sex: '',
        people_grade: new Date().getFullYear(),
        people_class: '',
        school_id: '',
        student_id: '',
    };
    public dialogAction() {
        this.dialog = !this.dialog;
    }
    private singleAddStudent() {
        console.log(jsonIfHasNullItem(this.OtherUserInfo));
        // jsonIfHasNullItem(this.OtherUserInfo) 这个函数是为了判断数据的合法性--是否有空值
        if (jsonIfHasNullItem(this.OtherUserInfo)) {
        }
    }
}
</script>

<style scoped>
.test {
}
.student-header {
    background-color: #607d8b;
}
.upload-student {
    height: 100%;
    width: 100%;
    color: #efefef;
}
</style>

