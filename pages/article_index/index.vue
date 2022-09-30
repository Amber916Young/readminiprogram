<template>
	<view class="container">
		<view class="content">
			<uni-breadcrumb separator="/">
				<uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
				{{route.name}}
				</uni-breadcrumb-item>
			</uni-breadcrumb>
			<uni-card  padding="10px 0" :thumbnail="currentBook.avatar" >
				<view class="description_content"  @click="showOrHidden" >
					<image style="width: 200rpx; height: 250rpx;" :src="currentBook.avatar"></image>
					<view class="description_card" >
						<view>书名 : {{currentBook.novelname}}</view>
						<view>作者 : {{currentBook.author}}</view>
						<view>标签 : {{currentBook.tags}}</view>
						<view v-if="currentBook.status == '已完结'" >状态 :
						 <uni-tag :text="currentBook.status" type="primary" />
						</view>
						<view v-if="currentBook.status == '连载中'" >状态 :
						 <uni-tag :text="currentBook.status" type="error" />
						 </view>
						
						<view>发布时间 : {{currentBook.publish_date}}</view>
					</view>
				</view>
				
				<uni-transition ref="ani" custom-class="transition"
				 mode-class="fade" :show="show">
					<view  @click="showOrHidden">{{currentBook.description}}</view>
				</uni-transition>
				
			</uni-card>
			<uni-fab ref="fab" :pattern="pattern" :content="butArray" horizontal="right" 
			vertical="bottom" direction="vertical"  @trigger="trigger"  />
			<scroll-view scroll-y="true" style="height: 60%;" :scroll-into-view="toView" >
				<view style="margin-bottom: 100rpx;padding: 10rpx 20rpx;"  >
					<block  v-for="(item,index) in chapterList" :key="index" >
						<block v-if="(index+1) == current">
							<uni-title :id="'cate'+index" color="#f13360 "  @click.native="viewDetail"  :data-index="index" :data-id="item.chapterid" type="h3" :title="item.chaptername" align="left"></uni-title>
						</block>
						<block v-else>
							<uni-title :id="'cate'+index"  @click.native="viewDetail"  :data-index="index" :data-id="item.chapterid" type="h3" :title="item.chaptername" align="left"></uni-title>
						</block>
					</block>
				</view>
				
				<uni-load-more @clickLoadMore="clickLoadMore" :status="status" iconType="circle"   :content-text="contentText" />
				
			</scroll-view>
		
		
		</view>
	

	</view>
</template>

<script>
	import http from '@/utils/request.js'
	export default {
		data() {
			return {
				toView:'',
				 routes: [],
				 id:0,
				 butArray:[
					 {
					 	iconPath: '/static/prev.png',
					 	selectedIconPath: '/static/prevactive.png',
					 	text: '上一页',
					 	active: false
					 },
					 {
					 	iconPath: '/static/next.png',
					 	selectedIconPath: '/static/nextactive.png',
					 	text: '下一页',
					 	active: false
					 },
					 {
					 	iconPath: '/static/collect.png',
					 	selectedIconPath: '/static/collectionactive.png',
					 	text: '收藏',
					 	active: false
					 },
					 {
						iconPath: '/static/reading.png',
						selectedIconPath: '/static/readingactive.png',
						text: '继续阅读',
						active: false
					}
				 ],
				 pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#f13360',
					buttonColor: '#292d33',
					iconColor: '#fff'
				},
				 currentBook:{},
				 novelName:'',
				 chapterList:[],
				 pageNo:1,
				 limit:100,
				 chapterid:1,
				 count:0,
				 userInfo :{},
				 show: true,
				 status: 'more',
				 contentText: {
				 	contentdown: '查看更多',
				 	contentrefresh: '加载中',
				 	contentnomore: '没有更多'
				 },
				 current:0,
			}
		},
		methods: {
			
			showOrHidden(){
				 this.show = !this.show
			},
			trigger(e) {
				var myApp = this;
				var index = e.index;
				myApp.butArray[index].active = !e.item.active
				
				if(index == 2){
					var temp = myApp.butArray[index].active;
					if(temp == true){
						myApp.cancelOrCollect(2)
					}else{
						myApp.cancelOrCollect(1)
					}
					return;
				}
				
				
				
				if(index == 0){
					if(myApp.pageNo != 1){
						// myApp.pageNo = parseInt(myApp.pageNo)-1;
						// myApp.loadNovel(myApp.pageNo,myApp.limit);
					}else{
						uni.showToast({
							title:"已经是首页了哦～"
						})
					}
				}else if(index == 1){
					myApp.pageNo = parseInt(myApp.pageNo)+1;
					myApp.loadNovel(myApp.pageNo,myApp.limit);
				}else if(index == 3){
					var key = 'lastPage'+myApp.id
					uni.getStorage({
						key: key,
						success: res=>{
							myApp.NavigationTo(res.data.id,res.data.chapterid,res.data.current);
						},
						fail: res=> {
							uni.showToast({
								title:"无最近阅读记录"
							})
						}
					})
				}
				myApp.butArray[e.index].active = !e.item.active;
			},
			clickLoadMore(e){
				var myApp = this;
				if(e.detail.status == "more"){
					var pageNo = parseInt(myApp.pageNo)+1;
					myApp.status = "loading";
					myApp.pageNo = pageNo;
					myApp.loadNovel(pageNo,myApp.limit);
				}else if(e.detail.status == "loading"){
					uni.showToast({
						icon: 'none',
						title: "正在加载，请等待"
					})
				}else if(e.detail.status == "noMore"){
					uni.showToast({
						icon: 'none',
						title: "暂无更新"
					})
				}
			},
			cancelOrCollect(type){
				var myApp = this;
				http('novel/collection/operation', {
					'novelid': myApp.id,
					'type':type,
					'uuid':myApp.userInfo.uuid,
					'openid':myApp.userInfo.openid,
					'username':myApp.userInfo.username,
				}, {
					hideLoading: false, // 默认 false
					hideMsg: true, // 默认 false
				}).then(res => {
					if(type == 1){
						uni.showToast({
							title:"取消收藏"
						})
						myApp.butArray[2].active = false;
					
					}else{
						uni.showToast({
							title:"收藏成功"
						})
						myApp.butArray[2].active = true;
					}
				}).catch(err => {
					console.error(err)
				})
			},
			
			queryCollection(id){
				var myApp = this;
				http('novel/collection', {
					'novelid': id,
					'uuid':myApp.userInfo.uuid,
					'openid':myApp.userInfo.openid,
					'username':myApp.userInfo.username,
				}, {
					hideLoading: false, // 默认 false
					hideMsg: true, // 默认 false
				}).then(res => {
					var currentBook  = res.data;
					myApp.currentBook = currentBook
					console.info(currentBook)
					if(currentBook.isCollection == "NO"){
						myApp.butArray[2].active = false;
					}else{
						myApp.butArray[2].active = true;
					}
				}).catch(err => {
					console.error(err)
				})
			},
			onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
				var myApp = this;
				myApp.routes = [ {
					to: "/pages/index/index",
					name: "首页",
				  }, {
					to: "",
					name: option.name,
				  }]
				uni.setNavigationBarTitle({
					title: option.name
				})
				uni.getStorage({
					key: 'userInfo',
					success:  res=>{
					myApp.userInfo = res.data
					}
				})
				myApp.novelName = option.name;
				myApp.id =  option.id;
				myApp.pageNo = 1;
				var key = 'lastPage'+myApp.id
				uni.getStorage({
					key: key,
					success: res=>{
						myApp.current = res.data.current;
						myApp.chapterid = res.data.chapterid;
						if(myApp.current > myApp.limit){
							myApp.pageNo = parseInt(parseInt(myApp.current)/100) + 1;
							let limit = myApp.pageNo * 100;
							myApp.loadNovel(1,limit);
						}else{
							myApp.loadNovel(1,myApp.limit);
						}
					},
					fail: res=> {
						myApp.loadNovel(1,myApp.limit);
					}
				})
				myApp.queryCollection(option.id);
			},
		
			
			loadNovel(pageNo,limit){
				var myApp = this;
				http('novel/chapter', {
					'currNo': pageNo,
					'id':myApp.id,
					'limit': limit
				}, {
					hideLoading: false, // 默认 false
					hideMsg: true, // 默认 false
				}).then(res => {
					let len = res.data.result.length;
					if(len == 0 ){
						myApp.status = "noMore";
					}else{
						myApp.status = "more";
					}
					for(var i = 0;i<len;i++){
						myApp.chapterList.push(res.data.result[i]);
					}
					myApp.count = res.data.count;
					var toview = parseInt(myApp.current) -3 <= 0 ? 0 :parseInt(myApp.current) -3;
					setTimeout(function() {
						myApp.toView = "cate"+ toview
					}, 200);
				}).catch(err => {
					console.error(err)
				})
				
			},
			
			viewDetail(e){
				var myApp = this;
				var cid =e.currentTarget.dataset.id
				var curPageNo = parseInt(myApp.pageNo);
				// var index =  (curPageNo-1) * (parseInt(myApp.limit)) +
				// parseInt(e.currentTarget.dataset.index) + 1
				var nid = myApp.id
				myApp.current = parseInt(e.currentTarget.dataset.index) + 1
				myApp.NavigationTo(nid,cid,myApp.current);
				
			},
			// nid novelid capterid
			NavigationTo(novelid,capterid,index){
				this.$refs.fab.close();
				uni.navigateTo({
					url: '/pages/novelContent/novelContent?id='+novelid+"&chapterid="+capterid+"&current="+index,
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
		},
	}
</script>

<style>
	.description_content{
		display: flex;
		flex-wrap: wrap;
		color: black;
	}
	.description_card{
		margin-left: 10rpx;
	}
	
	page uni-text{
		font-size: 36rpx;
	}
	.pageSection{
		padding-top: 30rpx;
		padding-bottom: 20rpx;
		text-align: center; 
		position:fixed; 
		bottom:0;
		width: 70%; 
		background: white;
	}
	page{
		width: 100%;
		height: 100%;
	}
	.container{
		width: 100%;
		height: 100%;
		
	}
	.container .content{
		margin-left: 10rpx;
		margin-right: 10rpx;
		height: 100%;
	}
	.uni-text {
		font-size: 14px;
		line-height: 22px;
		color: #333;
	}
	.uni-view{
		margin:0
	}

</style>