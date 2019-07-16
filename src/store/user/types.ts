import {UserTypes} from '@/globaltype/user';


export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

export interface UserState {
    userInfo: UserTypes.IUserInfo;
}

