<!-- home -->
<template>
  <div class="about-container">
    <div class="m-box">
      <div class="m-box-items m-box-items-full">
        <section class="m-mine-userCard m-mine-userCard-nologin">
          <div class="userCard-link">
            <div class="userCard-pic"><span class="c-img"></span></div>
            <div class="userCard-cont">
              <div class="c-title"><span class="c-name">未登录用户</span></div>
              <div class="c-des">登录后可享受更多云服务</div>
            </div>
            <div class="c-btn-login"
                 @click="toLogin">立即登录
              <van-icon name="arrow"
                        class="c-glyphicon c-glyphicon-arrowRight" />
            </div>
          </div>
        </section>
      </div>
      <!-- cell -->
    </div>
    <div class="cell-list">
      <van-cell-group v-for="(item,index) in cellList"
                      :key="index">
        <van-cell v-for="(subItem,subIndex) in item.children"
                  :key="subIndex"
                  :title="subItem.title"
                  :icon="subItem.icon"
                  :value="subItem.value"
                  is-link />
      </van-cell-group>
    </div>
    <div class="page-c-items"
         style="background-color: rgb(247, 247, 247);">
      <footer class="m-footer"><img src="../../../assets/foot.png"></footer>
    </div>
  </div>
</template>

<script>
// 请求接口
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      wechat: `${this.$cdn}/wx/640.gif`,
      cellList: [
        {
          children: [
            { title: '播放记录', value: '记录看过的精彩', icon: 'underway-o' },
            { title: '点赞记录', value: '', icon: 'good-job-o' },
            { title: '收藏', value: '', icon: 'like-o' },
            { title: '关注', value: '发现未知的精彩', icon: 'like-o' }
          ]
        },
        {
          children: [
            { title: '借钱', value: '额度高 易通过', icon: 'underway-o' },
            { title: '办信用卡', value: '领3个月会员', icon: 'good-job-o' },
            { title: '安全中心', value: '', icon: 'like-o' },
            { title: '隐私设置', value: '发现未知的精彩', icon: 'like-o' }
          ]
        },
        {
          children: [
            { title: '意见反馈', value: '', icon: 'underway-o' },
            { title: '关于我们', value: '', icon: 'underway-o' }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {},
  methods: {
    toLogin() {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
<style lang="scss">
@import './about.scss';
</style>
