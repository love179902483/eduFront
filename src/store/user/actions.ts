import { ActionTree } from 'vuex';
import axios from 'axios';
import { UserState, User } from './types';
import { RootState } from '../types';
import { Mutation } from 'vuex-class';
import { mutations } from './mutations';
import { UserTypes } from '@/globaltype/user';

axios.defaults.baseURL = 'http://localhost:3000';

export const actions: ActionTree<UserTypes.IUserInfo, RootState> = {
    async ActionLogin(
        { commit },
        loginInfo: UserTypes.ILoginInfo,
    ): Promise<UserTypes.ILoginReturn> {
        const ReturnMsg: UserTypes.ILoginReturn = {
            flag: false,
            message: '',
            data: '',
        };
        console.log(
            `这是用户输入的名和密码 用户名 ${loginInfo.username} 密码 ${
                loginInfo.password
            }`,
        );

        try {
            const response = await axios.get('/user/login');

            if (
                (response.data && response.data.hasOwnProperty('token'),
                response.data.hasOwnProperty('userInfo'))
            ) {
                const responseData: UserTypes.IUserInfo = {
                    loginToken: response.data.token,
                    otherInfo: response.data.userInfo,
                };
                // 更新mutations的数据
                commit('setUserInfo', responseData);
                ReturnMsg.flag = true;
                ReturnMsg.message = '';
                return ReturnMsg;
            } else {
                console.log(response);
                ReturnMsg.message = response.data.message;
            }
        } catch (error) {
            ReturnMsg.message = '网路问题，无法登录！稍后重试！';
        }

        return ReturnMsg;
    },
};
