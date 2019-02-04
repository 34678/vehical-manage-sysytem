<template>
  <div class="registpage">
    <div class="page-title">注册</div>
    <div class="page-part">
      <mt-field label="车位号" placeholder="请输入车位号" :attr="{ maxlength: 10 }" @change="changename"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" @change="changepwd"></mt-field>
    </div>
    <mt-button size="small" type="primary" @click="regist">注册</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { userinterface } from '../../util/interface.js';

export default {
    name: 'registpage',
    data() {
        return {
            stall: '',
            pwd: ''
        };
    },
    methods: {
        changename(val) { this.stall = val; },
        changepwd(val) { this.pwd = val; },
        async regist() {
            if (!this.stall) {
                Toast('请输入车位号');
                return;
            }
            if (!this.pwd) {
                Toast('请输入密码');
            }
            const { data } = await this.$http({
                method: 'get',
                url: userinterface.userRegist,
                data: {
                    Stall: this.stall,
                    Password: this.pwd
                }
            });
            if (data.Status === 'checkOK') {
                Toast('注册成功');
                localStorage.setItem('stall', this.name);
                this.$router.push('/');
                localStorage.setItem('stall', this.name);
            } else {
                Toast('注册失败');
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
