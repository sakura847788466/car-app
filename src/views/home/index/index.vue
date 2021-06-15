<!-- home -->
<template>
  <div class="index-container">
    <header class="navbar">
      <span class="nav-title">电影</span>
      <van-icon name="location-o" />
    </header>
    <van-sticky>
      <div class="download-app">
        <img class="logo"
             alt="logo"
             src="//p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png"
             width="42"
             height="42">
      </div>
      <div class="topbar">
        <div class="topbar-left"></div>
        <div class="topbar-center">
          <van-tabs v-model="active"
                    @change="changeNav">
            <van-tab title="热映"></van-tab>
            <van-tab title="影院"></van-tab>
            <van-tab title="待映"></van-tab>
            <van-tab title="经典电影"></van-tab>
          </van-tabs>
        </div>
        <div class="topbar-right">
          <van-icon name="search" />
        </div>
      </div>
    </van-sticky>
    <div class="tab-content"
         v-show="active==0">
      <span class="tab-content-title">最受好评电影</span>
      <div class="movie-list-porpol">
        <div class="top-rated-list">
          <div class="top-rated-item"
               v-for="(item,index) in porpolMovie"
               :key="index">
            <div class="poster default-img-bg">
              <img :src="item.img">
              <span class="wish-bg"></span>
              <span class="score">观众评分&nbsp;&nbsp;<span class="rated-score">{{item.point}}</span></span>
            </div>
            <h5 class="name line-ellipsis">{{item.name}}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-content"
         v-show="active==1">
      <span>影院</span>
    </div>
    <div class="tab-content"
         v-show="active==2">
      <span>待映</span>
    </div>
    <div class="tab-content"
         v-show="active==3">
      <span>经典电影</span>
    </div>
    <!-- 列表 -->
    <div class="list-wrap"
         style="margin-top: 0px;" v-show="active == 0">
      <div class="item"
           v-for="(item,index) in movie"
           :key="index">
        <div class="main-block">
          <div class="avatar">
            <div class="default-img-bg">
              <img :src="item.img">
            </div>
          </div>
          <div class="mb-outline-b content-wrapper">
            <div class="column content">
              <div class="box-flex movie-title">
                <div class="title line-ellipsis ">{{item.nm}}</div>
              </div>
              <div class="detail column">
                <div class="wantsee line-ellipsis">
                  <span class="person">{{item.wish}}</span>
                  <span class="p-suffix">人想看</span>
                </div>
                <div class="actor line-ellipsis">主演: {{item.star}}</div>
                <div class="show-info line-ellipsis">{{item.showInfo}}</div>
              </div>
            </div>
            <div class="button-block">
              <div class="btn pre"><span class="fix">{{item.haspromotionTag?'已售':'预售'}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { moviesList } from '../../../utils/data.js'
export default {
  data() {
    return {
      active: 0,
      searchValue: '',
      movie: [],
      porpolMovie: [
        {
          img: 'https://p0.meituan.net/170.230/movie/69291d617c3dc5dcac5e3bf29dda63ac2200192.jpg',
          point: 9.1,
          name: '哆啦A梦：伴我同行2'
        },
        {
          img: 'https://p1.meituan.net/170.230/movie/6a0b995daf79a1112aab8fb441f655ff3419929.jpg',
          point: 8.1,
          name: '阳光姐妹淘'
        },
        {
          img: 'https://p0.meituan.net/170.230/movie/a4cb98a5e79cbe8f458c1c3b869355d12513292.jpg',
          point: 8.9,
          name: '饮料超人'
        },
        {
          img: 'https://p0.meituan.net/170.230/movie/d8842050a6cc2b47359b6f99b60fc8934513352.jpg',
          point: 9.3,
          name: '当男人恋爱时'
        },
        {
          img: 'https://p0.meituan.net/170.230/movie/cc08f286aea37c3355fb4bb2441aef3f3457731.jpg',
          point: 9.2,
          name: '你好世界'
        },
        {
          img: 'https://p0.meituan.net/170.230/movie/49b453507a60d99a9b9d42755950029994987.jpg',
          point: 9.0,
          name: '比得兔2：逃跑计划'
        }
      ]
    }
  },

  computed: {},

  mounted() {
    this.getList()
  },

  methods: {
    // 获取首页电影列表
    getList() {
      this.movie = moviesList
    },
    changeNav(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
