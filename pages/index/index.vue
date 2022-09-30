<template>
	<view class="container">
		<uni-search-bar placeholder="请输入任意信息" bgColor="#EEEEEE" @confirm="search" />
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" style-type="text"
				:active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view class="content" style="padding: 0 20rpx;">
			<view v-if="current === 0">
				<scroll-view scroll-x="true">
					<view class="image-list">
						<view  @click="viewDetail(item.id,item.novelname)" v-for="(item,index) in bookArray" :key="index"   class="image-item" >
							<view class="image-content">
								<image mode="aspectFill" :src="item.avatar"	@error="imageError"></image>
							</view>
							<view class="image-title">{{item.novelname}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-if="current === 1">
				<scroll-view scroll-x="true">
					<view class="image-list">
						<view   @click="viewDetail(item.id,item.novelname)"  v-for="(item,index) in bookArray" :key="index"   class="image-item" >
							<view class="image-content">
								<image mode="aspectFill" :src="item.avatar"	@error="imageError"></image>
							</view>
							<view class="image-title">{{item.novelname}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-if="current === 2">
				<scroll-view scroll-x="true">
					<view class="image-list">
						<view  @click="viewDetail(item.id,item.novelname)"  v-for="(item,index) in bookArray" :key="index"   class="image-item" >
							<view class="image-content">
								<image mode="aspectFill" :src="item.avatar"	@error="imageError"></image>
							</view>
							<view class="image-title">{{item.novelname}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-if="current === 3">
				<scroll-view scroll-x="true">
					<view class="image-list">
						<view  @click="viewDetail(item.id,item.novelname)"  v-for="(item,index) in bookArray" :key="index"   class="image-item" >
							<view class="image-content">
								<image mode="aspectFill" :src="item.avatar"	@error="imageError"></image>
							</view>
							<view class="image-title">{{item.novelname}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	
							
		<uni-section title="你的书库" type="line">
			<uni-card  v-for="(item,index) in novelList" :key="index" :title="item.novelname" :isFull="true"  @click.native="onClick" :data-id="item.id" :data-name="item.novelname" :sub-title="item.tags" :extra="item.author" :thumbnail="item.avatar">
				<text class="uni-body">{{item.description}}</text>
			</uni-card>
			
		</uni-section>
	</view>
</template>

<script>
	import http from '@/utils/request.js'
	export default {
		data() {
			return {
				items: ['悬疑', '灵异', '玄幻','全部'],
				activeColor: '#dd524d',
				current:0,
				bookArray:[],
				novelList:[{
					id:1,
					avatar: 'avatar',
					novelname: 'novelname',
					author:'author',
					publish_date: 'publish_date',
					description :'description',
					url :'url',
					tags: 'tags'}
				],
				pageNo:1,
				limit:5,
				keyWord: 'all',
				count:0,
				userInfo:{}
			}
		},
		onLoad() {
			uni.startPullDownRefresh();
			this.getUserInfo();
		},
		onPullDownRefresh(){
			var myApp = this;			
			myApp.queryNovelBytype(myApp.items[0]);
			if(myApp.userInfo.openid || myApp.userInfo.username || myApp.userInfo.uuid){
				myApp.loadNovelMy(1);
			}
		},
		methods: {
			getUserInfo() {
				var myApp = this;
				uni.showModal({
					title: '用户信息授权',
					content: '授权微信登录后才能正常使用小程序功能',
					success: function (res) {
						if (res.confirm) {
							uni.getUserProfile({
								lang: 'zh_CN',
								desc: '用户登录', 
								success: (res) => {
									let userTemp = res.userInfo;
									myApp.userInfo.username = userTemp.nickName;
									myApp.userInfo.avatarUrl = userTemp.avatarUrl;
									myApp.userInfo.province = userTemp.province;
									myApp.userInfo.gender = userTemp.gender;
									uni.setStorage({
										key: 'userInfo',
										data: myApp.userInfo,
										success: function () {
											console.info(res.userInfo)
										}
									});
									myApp.loadNovelMy(1);
									// myApp.weixinLogin();
								},
								fail: (err) => {
								}
							})
						} else if (res.cancel) {
							
						}
					}
				});
			},
			weixinLogin() {
				let myApp = this;
				uni.login({
					provider: 'weixin',
					success: function(res) {
						http('wx/login', {
							'code': res.code,
							'userInfo':myApp.userInfo
						}, {
							hideLoading: false, // 默认 false
							hideMsg: true, // 默认 false
						}).then(res => {
							if(res.code == 0){
								//将openid存入本地缓存
								uni.setStorage({
									key: 'userInfo',
									data: res.data,
									success: function () {
									}
								});
							}else{
								uni.showToast({
									title:res.msg,
									icon:'error',
									duration: 3000
								})
							}
						
						}).catch(err => {
							console.error(err)
						})
					}	
					,fail(e) {
						console.log(e);
					}
					,complete(e) {
						console.log(e);
					}
				});
					
			},
			
			
			viewDetail(id,name){
				this.jumpPage(id,name);
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
					if(this.items[this.current] == '全部'){
						this.jumpSearchPage(this.items[0]);
						return
					}
					
					this.queryNovelBytype(this.items[this.current]);
				}
			},
			queryNovelBytype(type){
				var myApp = this
				http('novel/home', {
					'limit': 30,
					'currNo': 1,
					'keyWord':type
				}, {
					hideLoading: false, // 默认 false
					hideMsg: true, // 默认 false
				}).then(res => {
					myApp.bookArray = res.data.result;
					uni.stopPullDownRefresh() 
				}).catch(err => {
					console.error(err)
				})
				
			},
			loadNovelMy(){
				var myApp = this;
				http('novel/query/collection', {
					'uuid': myApp.userInfo.uuid,
					'username': myApp.userInfo.username,
					'openid': myApp.userInfo.openid,
				}, {
					hideLoading: false, // 默认 false
					hideMsg: true, // 默认 false
					method: 'POST' // 默认 POST
				}).then(res => {
					myApp.novelList = res.data;
					uni.stopPullDownRefresh() 
				}).catch(err => {
					console.error(err)
				})
			},
			
			search(res) {
				var myApp = this;
				uni.showToast({
					title: '搜索关键字：' + res.value,
					icon: 'search'
				})
				myApp.jumpSearchPage(res.value);
				
			},
			
			onClick(e){
				var id =e.currentTarget.dataset.id
				var novelname =e.currentTarget.dataset.name
				this.jumpPage(id,novelname);
				
			},
			jumpPage(id,novelname){
				uni.navigateTo({
					url: '/pages/article_index/index?id='+id+"&name="+novelname,
					events: {
					    acceptDataFromOpenedPage: function(data) {
					      console.log(data)
					    },
					    someEvent: function(data) {
					      console.log(data)
					    }
					  },
					  success: function(res) {
					    // 通过eventChannel向被打开页面传送数据
					    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'data from starter page' })
					  }
				});
			},
			jumpSearchPage(value){
				uni.navigateTo({
					url: '/pages/book_search/book_search?keywords='+value,
					events: {
					    acceptDataFromOpenedPage: function(data) {
					      console.log(data)
					    },
					    someEvent: function(data) {
					      console.log(data)
					    }
					  },
					  success: function(res) {
					    // 通过eventChannel向被打开页面传送数据
					    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'data from starter page' })
					  }
				});
			},
		}
	}
</script>
	
<style>
	@import './index.css'
</style>

