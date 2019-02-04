<template>
  <div class="registpage">
    <div class="page-title">登录</div>
    <div class="page-part">
      <mt-field label="用户名" placeholder="请输入车位号" :attr="{ maxlength: 10 }" @change="changename"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" @change="changepwd"></mt-field>
    </div>
    <mt-button size="small" type="primary" @click="login">登录</mt-button>
    <mt-button size="small" type="primary" @click="regist">注册</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { userinterface } from '../util/interface.js';

export default {
    name: 'registpage',
    data() {
        return {
            name: '',
            pwd: ''
        };
    },
    methods: {
        changename(val) { this.name = val; },
        changepwd(val) { this.pwd = val; },
        async login() {
            if (!this.name) {
                Toast('请输入用户名');
                return;
            }
            if (!this.pwd) {
                Toast('请输入密码');
                return;
            }
            const { data } = await this.$http({
                method: 'get',
                url: userinterface.userlogin,
                data: {
                    Stall: this.name,
                    Password: this.pwd
                }
            });
            if (data.Status === 'checkOK') {
                Toast('登录成功');
                localStorage.setItem('stall', this.name);
            // TODO 跳转车库页面
            } else {
                Toast('登录失败');
            }
        },
        async regist() {
            this.$router.push('/regist');
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
