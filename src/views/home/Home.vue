<template>
 <div id="home">
   <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import {getHomeMultdata} from "network/home";
export default {
  name: 'Home',
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView

  },
  created() {
    //1.请求多个数据
    getHomeMultdata().then(res =>{
      // this.result = res
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>
<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
