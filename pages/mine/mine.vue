<template>
	<view class="user-container" >
	  <view class="user-information relative">
		<view class="user-detail">
		  <view class="user-vip-card-section">
			<view class="user-vip-desc">
			  <view>菜鸟</view>
			  <view class="user-vip-desc-rank">12/3000</view>
			</view>
			<view class="user-vip">VIP</view>
		  </view>
		  <view class="vip-progress">
			<progress :percent="percentage"  backgroundColor="#EBEBEB" activeColor="#09BB07" show-info stroke-width="6" />
		  </view>

		  <view class="nickname">
			<view  class="user-information_img" :style="{backgroundImage:'url('+userInfo.avatarUrl+')'}"></view>
			<view class="user-information_nickname">{{userInfo.username}}</view>
			<!-- <view class="user-information_introduction">{{userInfo?'Quaff咖啡小程序':'点击这里授权登录'}}</view> -->
		  </view>
		</view>

		<view class="sideSection">
		  <view class="sideLeft">
			<view>我的积分 88</view>
		  </view>
		  <view class="sideCenter"></view>
		  <view class="sideRight">
			<view>我的劵包 6</view>
		  </view>
		</view>
		<button class="userLogin" bindgetuserinfo="goLogin" openType="getUserInfo"></button>
	  </view>


	  <view class="user-items">
		<view class="user-item relative">
		  <text class="user-item_text">基本信息</text>
		  <view class="user-item_icon">
			  <uni-icons type="person" size="30"></uni-icons>
		  </view>
		  <button class="userLogin" data-url="/pages/auth/register/register" bindtap="bindHandler"></button>
		</view>
		
		<view class="user-item">
		  <text class="user-item_text">关于</text>
		  <view class="user-item_icon"><uni-icons type="info" size="30"></uni-icons></view>
		  <button class="auth-btn"  @click="onclick('aboutInfo')"></button>
		</view> 
	
		<view class="user-item">
		  <text class="user-item_text">清除缓存</text>
		  <view class="user-item_icon"><uni-icons type="trash" size="30"></uni-icons></view>
		  <button class="auth-btn"  @click="onclick('clearCache')"></button>
		</view>
		
	  </view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				userInfo : {avatarUrl:"/static/user.png"},
				percentage:20,
			}
		},
		onload(){
			uni.startPullDownRefresh();
		},
		onPullDownRefresh(){
			var myApp = this;
			uni.getStorage({
				key: 'userInfo',
				success: function (res) {
					myApp.userInfo = res.data; 
					console.log(res.data);
				}
			});
		},
		methods: {
			onclick(type){
				if(type == "clearCache"){
					uni.showModal({
						title: '清除缓存',
						content: '是否确定清除所有缓存（阅读进度，用户信息等数据）？',
						success: function (res) {
							if (res.confirm) {
								uni.clearStorage();
								uni.showToast({
									title:"清除成功",
									icon:'success',
									duration:1000
								})
							} else if (res.cancel) {
								uni.showToast({
									title:"已取消",
									icon:'none',
									duration:1000
								})
							}
						}
					});
				} else if(type == "aboutInfo"){
					uni.showModal({
						title: '小程序信息',
						content: '我不生产小说，我只是小说的搬运工 :) \t\n 本小程序爬取小说来源：纵横中文 \t\n 禁止商用',
						showCancel: false,
						success: function (res) {
							if (res.confirm) {
								uni.showToast({
									title:"欢迎再来",
									icon:'none',
									duration:500
								})
							} 
						}
					});
				} else if(type == ""){
				} else if(type == ""){
				}
			},
		
			
		}
	}
</script>

<style>
	
/* pages/mine/mine.wxss */
.text{
	font-size: 32rpx;
}
.user-container {
  background-color: #F5F7F9;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 68rpx;
}

.user-information {
  /* padding: 48rpx 24rpx; */
  margin: 24rpx 24rpx 0;
  /* border: rgb(0, 127, 119) 1px solid;   */
  background: rgb(0, 127, 119);  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, rgb(0, 127, 119), rgb(0, 80, 126));  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, rgb(0, 127, 119),rgb(0, 80, 126));
  color: rgb(0, 127, 119);
  border-radius: 16rpx;
}

.user-information_img {
  position: relative;
  width: 140rpx;
  height: 140rpx;
  border-radius: 50%;
  border: 4rpx solid #ffd700;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  margin-right: 32rpx;
  overflow: hidden;
}

.nickname {
    text-align: center;
    display: flex;
	align-items: center;
}

.user-information_nickname {
  font-size: 44rpx;
  font-weight: bold;
  line-height: 60rpx;
  color: #f5f5f5;
}

.user-information_introduction {
  font-size: 28rpx;
  line-height: 40rpx;
  color: #ffffff;
  margin-top: 10rpx;
  opacity: .8;
}

.user-items {
  padding: 24rpx 40rpx;
  margin: 24rpx;
  border-radius: 16rpx;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
}

.user-item {
  position: relative;
  height: 120rpx;
  line-height: 120rpx;
  font-size: 36rpx;
  color: #3A3A3A;
  border-bottom: 1rpx solid #E8E8E8;
}

.user-item:last-child {
  border-bottom: none;
}

.user-item_text {
  position: relative;
  z-index: 10;
  font-size: 32rpx;
  pointer-events: none;
}

.user-item_icon {
  position: relative;
  z-index: 10;
  float: right;
  vertical-align: middle;
  width: 60rpx;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;
}

.user-item_switch {
  float: right;
  transform: scale(0.8,.8);
  margin-right: -20rpx;
}

.user-item_icon_img {
  width: 100%;
  height: 60rpx;
}

.user-item_icon_sup {
  position: absolute;
  right: -1rpx;
  top: 24rpx;
  width: 32rpx;
  height: 32rpx;
  background: #F13B03;
  border: 2rpx solid #FFFFFF;
  border-radius: 50%;
  font-weight: bold;
  font-size: 24rpx;
  color: #FFFFFF;
  line-height: 32rpx;
  text-align: center;
}

.user-welfare {
  position: relative;
  margin: 54rpx 24rpx;
  height: 196rpx;
}

.user-welfare_img {
  width: 100%;
  height: 100%;
}

.my-login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: none;
}

.my-login::after {
  border: none;
}

.auth-btn {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  padding: 0;
  text-align: left;
  line-height: 120rpx;
  color: #3A3A3A;
}

.auth-btn:after {
  border: none;
}

.separator {
  width: 100%;
  height: 24rpx;
}

.user-detail{
  padding: 48rpx 24rpx;
}
/* ranking sector */
.sideSection{
  height: 100rpx;
  background-color: #ffffff;
  border-bottom-left-radius: 16rpx;
  border-bottom-right-radius: 16rpx;
  display: flex;
}
.sideLeft{
  width: 50%;
  justify-content:center;
  align-items: center;
  display: flex;
}
.sideCenter{
  height: 70%;
  border: rgb(0, 127, 119) 0.5rpx solid;
  margin: auto;
}
.sideRight{
  width: 50%;
  justify-content:center;
  align-items: center;
  display: flex;
}
.user-vip-card-section{
  display: flex;
  align-items: center;
  margin-bottom:20rpx ;
}
.user-vip{
  border-radius: 60rpx ;
  margin: 0 0 0 auto;
  padding: 10rpx 20rpx;
  width: max-content;
  color: #ffffff;
  background-color: #007f77 ;
}
.user-vip-desc{
  color: #ffffff;
  font-size: 32rpx;
  font-weight: 600;
  display: flex;
}
.user-vip-desc-rank{
  font-size: 12px;
  margin: auto;
  font-weight: 400;
  margin-left:10rpx ;
}
.vip-progress{
  width: 100%;
  margin-bottom: 20rpx;
}
</style>
