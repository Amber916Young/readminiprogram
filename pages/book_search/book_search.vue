<template>
	<view class="container">
		<uni-segmented-control :current="current" :values="items" style-type="text"
			:active-color="activeColor" @clickItem="onClickItem" />
			
		<scroll-view scroll-y="true"  style="height: 90%;">
			<view v-for="(item,index) in bookArray" :key="index">
				<uni-card  padding="10px 0" :thumbnail="item.avatar" >
					<view class="description_content"    @click="viewDetail(item.id,item.novelname)" >
						<image style="width: 200rpx; height: 250rpx;" :src="item.avatar"></image>
						<view class="description_card" >
							<view>书名 : {{item.novelname}}</view>
							<view>作者 : {{item.author}}</view>
							<view>标签 : {{item.tags}}</view>
							<view v-if="item.status == '已完结'" >状态 :
							 <uni-tag :text="item.status" type="primary" />
							</view>
							<view v-if="item.status == '连载中'" >状态 :
							 <uni-tag :text="item.status" type="error" />
							 </view>
							<view>发布时间 : {{item.publish_date}}</view>
						</view>
					</view>
					
					<uni-transition ref="ani" custom-class="transition"
					 mode-class="fade" :show="show">
						<view  >{{item.description}}</view>
					</uni-transition>
					
				</uni-card>
			</view>
			
		</scroll-view>	
		
		
		
	</view>
</template>

<script>
	import http from '@/utils/request.js'
	export default {
		data() {
			return {
				items: ['悬疑', '灵异恐怖', '玄幻', '推理'],
				activeColor: '#dd524d',
				current:0,
				pageNO:1,
				bookArray:[],
				show:true,
				keywords:"",
			}
		},
		onLoad: function (option) { 
			var myApp = this;
			if(option.keywords){
				myApp.keywords = option.keywords;
				myApp.searchKeywords(myApp.keywords);
			}else{
				myApp.queryNovelBytype(myApp.items[0],1);
			}
		},
		methods: {
			searchKeywords(value){
				var myApp = this
				http('novel/home', {
					'limit': 200,
					'currNo': 1,
					'keyWord':value
				}, {
					hideLoading: false, // 默认 false
					hideMsg: true, // 默认 false
				}).then(res => {
					myApp.bookArray = res.data.result;
					if(myApp.bookArray.length == 0) {
						uni.showToast({
							title: '暂无搜索到数据',
							icon: 'checkmarkempty',
							duration:3000
						})
					}else{
						uni.showToast({
							title: '搜索成功',
							icon: 'checkmarkempty',		
							duration:3000,
						})
					}
			
					
				}).catch(err => {
					console.error(err)
				})
				
			},
			viewDetail(id,name){
				this.jumpPage(id,name);
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
			showOrHidden(){
				 this.show = !this.show
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
					this.queryNovelBytype(this.items[this.current],1);
				}
			},
			queryNovelBytype(type,pageNO){
				var myApp = this
				http('novel/home', {
					'limit': 50,
					'currNo': pageNO,
					'keyWord':type
				}, {
					hideLoading: false, // 默认 false
					hideMsg: true, // 默认 false
				}).then(res => {
					myApp.bookArray = res.data.result;
				}).catch(err => {
					console.error(err)
				})
				
			},
		}
	}
</script>

<style>
	@import './book_search.css'
</style>
