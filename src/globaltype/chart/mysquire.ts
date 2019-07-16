import {
    Mysquire,
    SquireCardPerson,
    SquireCardQuestion,
    SquireCard,
    SquireCards,
    SquireTab,
} from './types';

const CardPerson: SquireCardPerson = {
    aimPerson: '李清照（高级教师）',
    aimPersonID: 72894834,
    sourcePerson: '李大明（304）',
    sourcePersonID: 1230123,
};
const CardQuestion: SquireCardQuestion = {
    title: '植物细胞达到渗透平衡时内外物质浓度相等吗，看到有人说不相等是！',
    content:
        '植物细胞达到渗透平衡时内外物质浓度相等吗，看到有人说不相等是因为细胞壁有保',
    pictures: [
        'https://imgsrc.baidu.com/forum/w%3D580%3B/sign=624a84c23aa85edffa8cfe2b796f0823/9e3df8dcd100baa1136aaa294910b912c9fc2eda.jpg',
    ],
};
const thisSuireCard: SquireCard = {
    answersNumber: 12123123,
    person: CardPerson,
    question: CardQuestion,
    time: '09/05/29',
};
