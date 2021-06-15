<template>
  <div class="login-box">
    <div class="reback-btn">
      <van-icon name="arrow-left"
                @click="rebackRoute" />
    </div>
    <div class="view">
      <div class="m-pc-title">
        <span class="title"
              v-if="isLogin">登录账号</span>
        <span class="title"
              v-else>短信注册登录</span>
      </div>
      <div class="from-box">
        <van-form @submit="onSubmit"
                  v-if="isLogin">
          <van-field v-model="username"
                     name="用户名"
                     label="用户名"
                     placeholder="用户名" />
          <van-field v-model="password"
                     :type="eyeStatus?'password':'text'"
                     name="密码"
                     label="密码"
                     placeholder="请输入密码">
            <template #button>
              <van-icon :name="eyeStatus?'closed-eye':'eye-o'"
                        @click="openEye" />
            </template>
          </van-field>
          <div style="margin: 16px;">
            <van-button round
                        block
                        type="info"
                        native-type="submit">登录</van-button>
          </div>
        </van-form>
        <van-form @submit="onSubmit"
                  v-else>
          <van-field v-model="username"
                     name="手机号"
                     label="手机号"
                     placeholder="请输入手机号" />
          <van-field v-model="sms"
                     center
                     clearable
                     label="短信验证码"
                     placeholder="请输入短信验证码">
            <template #button>
              <van-button size="mini"
                          type="primary">发送验证码</van-button>
            </template>
          </van-field>
          <div class="info-message">
            <span>没有收到短信,点击重新发送</span>
          </div>
          <div style="margin: 16px;">
            <van-button round
                        block
                        type="info"
                        native-type="submit">登录</van-button>
          </div>
        </van-form>
      </div>
      <div class="other-sign"
           v-if="isLogin">
        <span @click="resiger">注册</span>
        <span>其他登录方式</span>
      </div>
      <!-- 账号密码登录 -->
      <div class="other-sign"
           v-else>
        <span class="resiger" @click="resiger">账号密码登录</span>
      </div>
    </div>
    <div class="footer">
      <span>帮助反馈</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      eyeStatus: true,
      isLogin: true,
      sms:null
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    resiger() {
      this.isLogin = !this.isLogin
    },
    openEye() {
      this.eyeStatus = !this.eyeStatus
    },
    rebackRoute() {
      if(this.isLogin){
         this.$router.go(-1)
      }else{
        this.isLogin = !this.isLogin
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import './login.scss';
</style>