export namespace UserTypes {
    export interface ILoginReturn {
        flag: boolean;
        message?: string;
        data: string;
    }
    export interface ILoginInfo {
        username: string;
        password: string;
    }
    export interface IloginToken {
        token: string;
        username: string;
    }
    export interface IOtherInfo {
        username: string;
        school_id: string;
        phone: string;
        people_firstname: string;
        people_lastname: string|null;
        people_sex: string;
        people_class: string|null;
        people_grade: number;
        student_id: string;
    }
    // 性别字段，text包含
    export interface IUserSex {
        text: string;
        value: string;
    }
    // 用户信息包括loginInfo和其他信息两部分。
    export interface IUserInfo {
        loginToken: IloginToken;

        otherInfo: IOtherInfo;
    }
}
