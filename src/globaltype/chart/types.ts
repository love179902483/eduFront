// 定义card中帖子问题的接口格式
export interface SquireCardQuestion {
    title: string;
    content: string;
    pictures?: string[];
}
export interface SquireCardPerson {
    sourcePerson: string;
    sourcePersonID: number;
    aimPerson: string;
    aimPersonID: number;
}
// 这个是定义Card中帖子的接口
export interface SquireCard {
    answersNumber: number;
    question: SquireCardQuestion;
    person: SquireCardPerson;
    time: string;
}
export interface SquireCards {
    allCards: SquireCard[];
}
export interface SquireTab {
    personID: number;
    personImg: string;
}
export interface Mysquire {
    squireCard: SquireCard[];
    tabs: SquireTab;
}
