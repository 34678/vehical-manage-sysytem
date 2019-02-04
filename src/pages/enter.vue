<template>
  <div class="enter-page">
       <mt-header fixed title="请选择你的身份"></mt-header>
      <mt-button @click="userLogin('业主')">
        <img src="../assets/logo.png" height="20" width="20" slot="icon">
        业主
      </mt-button >
            <mt-button @click="userLogin('manager')">
        <img src="../assets/logo.png" height="20" width="20" slot="icon">
        管理员
      </mt-button>
            <mt-button @click="userLogin('supermanager')">
        <img src="../assets/logo.png" height="20" width="20" slot="icon">
        超级管理员
      </mt-button>
  </div>
</template>

<script>

export default {
    name: 'enter',
    methods: {
        userLogin(val) {
            if (val === '业主') {
                // ADD
                let userinfo;
                // userinfo =  localStorage.getItem('stall');
                if (userinfo) {
                //   直接跳到车库页面
                    alert('已经登录过了');
                } else {
                    this.$router.push('/login');
                }
            } else if (val === 'manager') {

            } else if (val === 'supermanager') {

            }
        }
    }
};
</script>

<style lang="scss" scoped>
.enter-page{
.mint-button--normal{
        display: block;
    margin: 0 auto;
    width: 300px;
    margin-bottom: 20px;
    text-align: left;
}
}
</style>
