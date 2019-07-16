import { UserTypes } from '@/globaltype/user';

// 这个函数是为了返回公共的学级下拉框数组
function getGradeYearArray(num: number): number[] {
    console.log([...Array(5)]);
    const returnNumberArray: number[] = [];
    const thisYear: number = new Date().getFullYear();
    [...Array(num)].map((_, index) =>
        returnNumberArray.unshift(thisYear - index),
    );
    [...Array(num)].map((_, index) =>
        returnNumberArray.push(thisYear + index + 1),
    );

    return returnNumberArray;
}

// 定义性别下拉框数组
const userSex: UserTypes.IUserSex[] = [
    { text: '女', value: '0' },
    { text: '男', value: '1' },
];

enum userSexEnum {
    '女' = '0',
    '男' = '1',
}

const selectGrade: number[] = getGradeYearArray(5);
export { userSex, selectGrade };
