<template>
    <v-container grid-list-md>
        <template>
            <v-carousel height='200px'>
                <v-carousel-item v-for="(item,i) in AllTabs" :key="i" :src="item.personImg"></v-carousel-item>
            </v-carousel>
        </template>
        <v-bottom-nav :value="true" fixed color="#ffffff">
            <v-btn color="teal" flat value="recent">
                <span>答题</span>
                <v-icon>history</v-icon>
            </v-btn>

            <v-btn color="teal" flat value="favorites">
                <span>生活</span>
                <v-icon>favorite</v-icon>
            </v-btn>

            <!-- <v-btn color="teal" flat value="nearby">
                <span>Nearby</span>
                <v-icon>place</v-icon>
            </v-btn> -->
        </v-bottom-nav>
        <v-layout row v-for="i in 3" :key="i">
            <v-flex xs12 sm12>
                <v-card>
                    <v-card-title primary-title>
                        <v-layout row wrap>
                            <v-flex sm11>
                                <a class='square-card-title'>
                                    <p class=" text-xs-left title font-weight-black">
                                        <span>植物细胞的吸水和失水实验中细胞必须是活的吗？</span>

                                    </p>
                                </a>
                            </v-flex>
                            <v-flex sm1 class='text-xs-right'>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-icon color='purple' v-on="on">star</v-icon>
                                    </template>
                                    <span>@的用户以解答</span>
                                </v-tooltip>

                            </v-flex>
                        </v-layout>
                    </v-card-title>
                    <v-layout row wrap="">
                        <v-flex md3>
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="150px"> </v-img>
                        </v-flex>
                        <v-flex md9>
                            <a class='square-card-content'>
                                <v-card-text>
                                    植物体细胞吸水和失水关键在于渗透压，而渗透压的关键在于细胞内外物质的浓度，而细胞内外物质浓度需要细胞膜的选择透过性来控制的，需要活细胞的调控来控制物质平衡，所以细胞得是活的才行，不然就和你往水里放个漏子一样，漏子里的水和漏子外的水你能分清楚它在吸水还是失水吗？
                                </v-card-text>
                            </a>
                        </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="rgb(81, 161, 238)" class="caption" flat>
                            <v-icon class="subheading">thumb_up</v-icon>
                            &nbsp;&nbsp;{{starNumbers}}
                            &nbsp;优秀
                        </v-btn>
                        <v-btn flat color="rgb(81, 161, 238)">
                            <v-icon class="subheading">thumb_down</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <!-- {{panel}} -->
                        <v-btn flat class="caption" color="rgb(170, 170, 170)" @click="toggleEvaluation">
                            <v-icon class="subheading">sms</v-icon>
                            &nbsp;&nbsp;{{evaluationNumbers}}
                            &nbsp;条评价
                        </v-btn>
                        <v-btn flat class="caption" color="rgb(170, 170, 170)" @click="toggleEvaluation">
                            <v-icon class="subheading">sms</v-icon>
                            &nbsp;&nbsp;{{evaluationNumbers}}
                            &nbsp;条回答
                        </v-btn>
                    </v-card-actions>

                    <template>
                        <v-expansion-panel v-model="panel" expand>
                            <v-expansion-panel-content >
                                <div class="square-card-content-comment">
                                    <v-card>
                                        <v-layout>
                                            <v-flex>
                                                <v-img width='200' height='200' aspect-ratio="1" class="grey lighten-2"
                                                    :src="require('../assets/good.jpg')"></v-img>
                                            </v-flex>
                                        </v-layout>
                                    </v-card>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </template>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
    Mysquire,
    SquireCardPerson,
    SquireCardQuestion,
    SquireCard,
    SquireCards,
    SquireTab,
} from '@/globaltype/chart/types';

@Component
export default class MySquire extends Vue {
    private cardNumber = [1, 2, 3];
    private panel: boolean[] = [true];
    private starNumbers: number = 12;
    private evaluationNumbers: number = 3;

    private firstTab: SquireTab = {
        personID: 1123,
        personImg: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    };
    private secondTab: SquireTab = {
        personID: 11233323,
        personImg: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    };
    private thirdTab: SquireTab = {
        personID: 100,
        personImg: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    };

    // 荣耀墙的数据
    private AllTabs: SquireTab[] = [
        this.firstTab,
        this.secondTab,
        this.thirdTab,
    ];
    // 所有问题的array
    // private AllCards: SquireCard[] = [this.thisSuireCard, this.thisSuireCard];

    // method
    public toggleEvaluation() {
        if (this.panel.length === 0) {
            this.panel.push(true);
        } else {
            this.panel = [];
        }
    }
}
</script>



<style scoped>
.square-star {
    width: 80px;
}
.square-card-img {
    height: 80px;
    width: 100px;
}

.square-card-title {
    color: rgb(43, 43, 43);
}
.square-card-content {
    color: rgb(43, 43, 43);
}

.square-card-content-comment {
    border: 1px solid #eeeeee;
    border-radius: 5px;
    padding: 8px;
}
</style>