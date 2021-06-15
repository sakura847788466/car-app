<template>
  <!-- 移动端网页 -->
  <div class="car-main-page">
    <div class="title">
      <div class="left">
        <img src="../../../assets/car/left_arrow.png"
             alt="">
      </div>
      <div class="title-sign">零配件商城</div>
      <div class="right-options">
        <img src="../../../assets/car/icon_search.png"
             alt="">
        <img src="../../../assets/car/icon_more.png"
             alt="">
      </div>
    </div>
    <div class="sign">
      <span>已为您推荐适合<p>广汽丰田雷凌双擎</p>的商品</span>
      <van-button>换车</van-button>
    </div>
    <!-- swiper -->
    <div class="img-banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images"
                        :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="option-nav">
      <ul>
        <li v-for="(item,index) in options" :key="index">
          <img :src="item.url" alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div class="theme">
      <div class="theme-title">
        <span>爆款推荐</span>
      </div>
      <div class="theme-content"></div>
    </div>
    <div class="shop-list" >
      <ul>
        <li v-for="(item,index) in 5" :key="index">
          <div class="img-box">
             <img src="../../../assets/car/shop-item.png" alt="">
          </div>
          <span class="shop-sign">原厂件刹车片</span>
          <span class="price">¥3800.00</span>
        </li>
      </ul>
    </div>
    <div class="hot-shopList">
       <div class="title">
         <span>热卖单品</span>
       </div>
       <div class="list-content">
         <ul class='clearfix'>
           <li v-for="(item,index) in list" :key="index" :class="{'isMargin':index%2==0}">
             <div class="img-box">
               <img :src="item.url" alt="">
             </div>
             <span class="shop-sign">
               {{item.sign}}
             </span>
             <span class="sign-active">活动</span>
             <span class="shop-price">￥{{item.price}}</span>
           </li>
         </ul>
       </div>
    </div>
    <div class="bottom-sign">
      <span>我是有底线的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Car',
  data() {
    return {
      images: [require('../../../assets/car/car-banner.png'), require('../../../assets/car/car-banner.png')],
      options:[
        {
          url:require('../../../assets/car/icon01.png'),
          title:'基础保养'
        },
        {
          url:require('../../../assets/car/icon02.png'),
          title:'常用易损品'
        },{
          url:require('../../../assets/car/icon03.png'),
          title:'轮胎'
        },
        {
          url:require('../../../assets/car/icon04.png'),
          title:'深度保养'
        }
      ],
      list:[{
        url:require('../../../assets/car/lunzi0.png'),
        sign:'韩泰轮胎/汽车轮胎 205/55R16 91V K415',
        price:200
      },{
        url:require('../../../assets/car/lunzi1.png'),
        sign:'风帆蓄电池汽车电瓶免维护系列46B24(6Q...',
        price:148
      },{
        url:require('../../../assets/car/lunzi2.png'),
        sign:'三效合一强效燃油添加剂/燃油宝 1瓶装325ml',
        price:888
      },{
        url:require('../../../assets/car/lunzi1.png'),
        sign:'燃油宝/燃油添加剂PN2019-KB-8204',
        price:200
      },{
        url:require('../../../assets/car/lunzi4.png'),
        sign:'OE配件空气滤清器空气滤芯空滤RAV4 2.0...',
        price:200
      }]
    }
  },
  methods:{
    setItemImg(index){
      let url = '../../../assets/car/lunzi'+index+'.png'
      return url
    }
  }
}
</script>

<style lang='scss' scoped>
@import './shopCar.scss';
</style>