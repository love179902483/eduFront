import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/common/login.vue';
import LeftMenu from './views/common/leftmenu.vue';
import Chart from './components/chart.vue';
import MySquire from './components/mysquire.vue';
import CKeditorVue from './components/ckeditor.vue';
import StudentManage from './components/studentManage.vue';

import SchoolManage from './components/schoolManage.vue';
import SchoolCase from './components/schoolCase.vue';
import MySchoolCase from './components/mySchoolCase.vue';


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            components: {
                mainlogin: Login,
            },
        },
        {
            path: '/login',
            name: 'login',
            components: {
                mainlogin: Login,
            },
        },
        {
            path: '/chart',
            name: 'chart',
            components: {
                default: Chart,
                leftMenu: LeftMenu,
            },
        },
        {
            path: '/mysquire',
            name: 'mysquire',
            components: {
                default: MySquire,
                leftMenu: LeftMenu,
            },
        },
        {
            path: '/studentmanage',
            name: 'studentmanage',
            components: {
                default: StudentManage,
                leftMenu: LeftMenu,
            },
        },
        {
            path: '/ckeditor',
            name: 'ckeditor',
            components: {
                default: CKeditorVue,
                leftMenu: LeftMenu,
            },
        },
        {
            path: '/schoolmanage',
            name: 'schoolmanage',
            components: {
                default: SchoolManage,
                leftMenu: LeftMenu,
            },
        },
        {
            path: '/schoolcase',
            name: 'schoolcase',
            components: {
                default: SchoolCase,
                leftMenu: LeftMenu,
            },
        },
        {
            path: '/myschoolcase',
            name: 'myschoolcase',
            components: {
                default: MySchoolCase,
                leftMenu: LeftMenu,
            },
        },
    ],
});
