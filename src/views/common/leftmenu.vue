<template>
    <v-navigation-drawer fixed clipped darkclass="grey lighten-4" app v-model="commonState.drawer">
   
        <v-list dense class="grey lighten-4">
            <template v-for="(item, i) in items">
                <v-layout row v-if="item.heading" align-center :key="i">
                    <v-flex xs6>
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-flex>
                    <v-flex xs6 class="text-xs-right">
                        <!-- <v-btn small flat>edit</v-btn> -->
                    </v-flex>
                </v-layout>
                <v-divider dark v-else-if="item.divider" class="my-3" :key="i"></v-divider>
                <v-list-tile :key="i" v-else @click="jumpURL(item.url)">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="grey--text">
                            {{ item.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang='ts'>
import { State, Action, Getter } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import { setup } from 'mocha';

@Component
export default class LeftMenu extends Vue {
    @State('CommonStore') private commonState: any;

    private alert: boolean = true;
    private items = [
        { icon: 'person', text: '个人中心' , url: ''},
        { icon: 'trending_up', text: '成绩统计' , url: '/chart' },
        { icon: 'speaker_phone', text: '本校广场' , url: '/mysquire' },
        { icon: 'speaker_phone', text: '答疑解题' , url: '/mysquire' },
        { divider: true },

        { heading: '学生资料' },
        { icon: 'library_books', text: '学生资料' , url: '' },

        { divider: true },

        { heading: '教师资料' },
        { icon: 'library_books', text: '我的教案' , url: '' },
        { icon: 'archive', text: '我的学案/练习' , url: '/myschoolcase' },
        { icon: 'import_contacts', text: '我的试题' , url: '' },
        { divider: true },

        { heading: '学案相关' },
        { icon: 'library_books', text: '本校学案/练习' , url: '/schoolcase' },

        { icon: 'archive', text: '制作学案/练习' , url: '/ckeditor' },
        { divider: true },

        { heading: '试题相关' },
        { icon: 'import_contacts', text: '本校试题' , url: '' },
        { icon: 'import_contacts', text: '制作试题' , url: '' },


        { divider: true },
        { heading: '题库相关' },
        { icon: 'import_contacts', text: '系统题库' , url: '' },
        { icon: 'import_contacts', text: '本校题库' , url: '' },
        { icon: 'import_contacts', text: '个人题库' , url: '' },

        { divider: true },
        { heading: '扫描/阅卷' },
        { icon: 'import_contacts', text: '试题扫描' , url: '' },
        { icon: 'import_contacts', text: '练习扫描' , url: '' },
        { icon: 'import_contacts', text: '教案扫描' , url: '' },
        { divider: true },

        { icon: 'import_contacts', text: '视频课堂' , url: '' },

        { divider: true },
        { heading: '校园管理' },
        { icon: 'speaker_phone', text: '学生信息管理' , url: '/studentmanage' },
        { icon: 'speaker_phone', text: '教员信息管理' , url: '/schoolmanage' },

    ];
    // methods
    public clickedHere(item: string): void {
        alert(item);
    }
    public jumpURL(url: string): void {
        if (url) {
            console.log(url);
            this.$router.push(url);

        } else {
            this.$notify({ group: 'auth', type: 'error', text: '这个链接没有配置URL' });
        }

    }
}
</script>