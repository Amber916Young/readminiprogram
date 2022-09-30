<template>
	<view class="container" :style="{backgroundColor:backgroundColor}">
		
		<uni-popup :animation="true" type="bottom" ref="popup"
		background-color="#fff" >
			<view class="popup-content"  >
				<view class="card" @click="showDrawer">
					<uni-icons type="list" size="30" color="#ffffff" /></uni-col>
					<view class="text">目录</view>
				</view>
				<view class="card"  @click="changeBackGroungColor()">
					<uni-icons type="color" size="30" color="#ffffff" /></uni-col>
					<view class="text">背景颜色</view>
				</view>
				<view class="card" @click="changeFrontSize()">
					<uni-icons type="font" size="30" color="#ffffff" /></uni-col>
					<view class="text">字号</view>
				</view>
				<view class="card" @click="changeLight()" >
					<uni-icons type="tune" size="30" color="#ffffff" /></uni-col>
					<view class="text">亮度</view>
				</view>
			</view>
			<view class="popup-content-card">
				<view  :style="{display:display1, height: cardheight+'rpx'}">
					<slider :value="fontSize" @change="sliderFontChange" min="30" max="60" show-value />
				</view>			
				<view :style="{display:display2 , height: cardheight+'rpx'}" >
					<slider :value="light" @change="sliderLightChange" min="0" max="100" show-value />
				</view>	
				<scroll-view :style="{display:display3}" scroll-x="true">
					<uni-icons @click="changeColor('#C7EDCC')" type="smallcircle-filled" :size="80" color="#C7EDCC" /></uni-col>
					<uni-icons @click="changeColor('#FAF9DE')" type="smallcircle-filled" :size="80" color="#FAF9DE" /></uni-col>
					<uni-icons @click="changeColor('#FFF2E2')" type="smallcircle-filled" :size="80" color="#FFF2E2" /></uni-col>
					<uni-icons @click="changeColor('#DCE2F1')" type="smallcircle-filled" :size="80" color="#DCE2F1" /></uni-col>
					<uni-icons @click="changeColor('#E9EBFE')" type="smallcircle-filled" :size="80" color="#E9EBFE" /></uni-col>
				</scroll-view>	
			</view>
		
				
		</uni-popup>
		
		<uni-drawer  ref="showLeft" mode="left" :mask-click="true" style="margin-top: 20rpx;">
			<view style="text-align: center;font-size: 40rpx">目录</view>
			<uni-search-bar placeholder="搜索" bgColor="#EEEEEE" @confirm="search" />
			<scroll-view style="height: 85%;" scroll-y="true" :scroll-into-view="toView">
				<block  v-for="(item,index) in chapterList" :id="index"  :key="index">
					<block v-if="(index+1) == current">
						<view @click="jumptoChapter(index)"  :id="'cate'+index" style="margin: 10rpx 20rpx; font-weight:600; color: #f13360 ;"  >{{ "【" + item.chaptername+"】" }}</view>
					</block>
					<block v-else> 
					<view @click="jumptoChapter(index)" :id="'cate'+index" style="margin: 10rpx 20rpx;"  >{{ "【" + item.chaptername+"】" }}</view>
					</block>
				</block>
				<uni-load-more @clickLoadMore="clickLoadMore" :status="status" iconType="circle"   :content-text="contentText" />
			</scroll-view>
		</uni-drawer>
		<view    @touchstart="touchstart"  @touchmove="touchmove" @touchend="handletouchend" class="content" :style="[{ fontSize: fontSize + 'rpx' }]">
			<rich-text :style="[{ fontSize: fontSize + 'rpx' }]" :nodes="content">}}</rich-text>
		</view>
		<view class="arrow_container">
			<uni-transition ref="ani" custom-class="transition"
			 mode-class="fade" :show="showArrRight">
				<uni-icons style="float: right;" type="arrow-right" size="30"></uni-icons>
			</uni-transition>
			<uni-transition ref="ani" custom-class="transition"
			 mode-class="fade" :show="showArrLeft">
				<uni-icons style="float: left;" type="arrow-left" size="30"></uni-icons>
			</uni-transition>
		</view>
		
	
		<uni-transition ref="ani" custom-class="transition"
		 mode-class="fade" :show="show">
			<uni-fab ref="fab" :pattern="pattern" :content="butArray" horizontal="right"
			vertical="bottom" direction="vertical"  @trigger="showSetting"  />
		</uni-transition>
	</view>
</template>

<script>
	import http from '@/utils/request.js'
	export default {
		data() {
			return {
				id : 0,
				chapterid: 0,
				toView: "",
				current:0,
				content:'',
				count:0,
				pageNo:1,
				limit:100,
				novelDetail:{},
				showLeft: false,
				chapterList:[],
				showButton:false,
				fontSize:34,
				light:50,
				backgroundColor:'#C7EDCC',
				display1:'none',
				display2:'none',
				display3:'none',
				cardheight:200,
				status: 'more',
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#f13360',
					buttonColor: '#292d33',
					iconColor: '#fff'
				},
				butArray:[
					{
						iconPath: '/static/prev.png',
						selectedIconPath: '/static/prevactive.png',
						text: '上一章',
						active: false
					},
					{
						iconPath: '/static/next.png',
						selectedIconPath: '/static/nextactive.png',
						text: '下一章',
						active: false
					},
					 {
						iconPath: '/static/setting.png',
						selectedIconPath: '/static/settingactive.png',
						text: '设置',
						active: false
					}
				],
				show: true,
				showArrRight: false,
				showArrLeft: false,
				touchData: {},
			}
		},
		methods: {
			touchmove(e){
				let touchMoveX = e.changedTouches[0].clientX;
				let touchMoveY = e.changedTouches[0].clientY;
				if (touchMoveX > this.touchData.clientX){
					this.showArrLeft = true
					this.showArrRight = false
				}else{
					this.showArrRight = true
					this.showArrLeft = false
				}
			},
			touchstart(e){
				this.touchData.clientX = e.changedTouches[0].clientX;
				this.touchData.clientY = e.changedTouches[0].clientY;
			},
			handletouchend(e) {
				var myApp = this;
				const subX = e.changedTouches[0].clientX - myApp.touchData.clientX;
				const subY = e.changedTouches[0].clientY - myApp.touchData.clientY;
				if(subY > 50){
					console.log('下滑')
					if(!myApp.show) myApp.show = !myApp.show
				}else if(subY < -50){
					console.log('上滑')
					if(myApp.show) myApp.show = !myApp.show
				}else if (subX > 100) {
					if( parseInt(myApp.current)-1 == 0) {
						return uni.showToast({
							title:"这已经是第一章了",
							duration:2000
						})
					}
					myApp.current = parseInt(myApp.current)-1;
					myApp.loadNovelContent(myApp.current);
					 console.log('左滑')
				}else if (subX < -100) {
					 console.log('右滑')
					 if( parseInt(myApp.current)+1 == myApp.count) {
						return uni.showToast({
							title:"这已经是最后一章了",
							duration:2000
						})
					 }
					 myApp.current = parseInt(myApp.current)+1;
					 myApp.loadNovelContent(myApp.current);
					}else{
						myApp.showArrLeft = false
						myApp.showArrRight = false
					}
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
			search(res) {
				uni.pageScrollTo({
					selector: '.group-list',//你要跳转的样式位置
					duration: 300,//跳转时间段
				})
				uni.showToast({
					title: '搜索章节：' + res.value,
					icon: 'none'
				})
			},
			
		
			onLoad: function (option) {
				var myApp = this;
				myApp.id =  option.id;
				if(option.id == undefined) return;
				myApp.current = option.current;
				myApp.chapterid =  option.chapterid;
				myApp.pageNo = 1;
				
				if(myApp.current > myApp.limit){
					myApp.pageNo = parseInt(parseInt(myApp.current)/100) + 1;
					let limit = myApp.pageNo * 100;
					myApp.loadNovel(1,limit);
				}else{
					myApp.loadNovel(myApp.pageNo,myApp.limit);
				}
				myApp.loadNovelContent(myApp.current);
				myApp.getScreenBrightness();
			
				var key = 'lastPage'+option.id
				var value = {"current":myApp.current,"id":option.id,"chapterid":option.chapterid}
				uni.setStorage({
					key: key,
					data: value,
					success () {
					}
				 })
				uni.getStorage({
					key: 'pageColor',
					success:  res=>{
						myApp.backgroundColor = res.data
					}
				})
				uni.getStorage({
					key: 'pageFontSize',
					success:  res=>{
						myApp.fontSize = res.data
					}
				})
				uni.getStorage({
					key: 'pageLight',
					success:  res=>{
						myApp.light = parseInt(res.data);
						uni.setScreenBrightness({
							value: parseFloat(myApp.light) / 100
						})
					}
				})
				
				
				
				
			},
			jumptoChapter(id){
				var myApp = this;
				var curPageNo = parseInt(myApp.pageNo);
				console.info(id)
				// myApp.current = (curPageNo-1) * (parseInt(myApp.limit))+parseInt(id)+1
				myApp.current = parseInt(id)+1
				myApp.loadNovelContent(myApp.current);
			},
			changeColor(type){
				this.backgroundColor = type;
				uni.setStorage({
					key: 'pageColor',
					data: type,
					success () {
					}
				 })
			},
			getScreenBrightness(){
				//注意uni.getScreenBrightness为异步接口，所以需要使用Promise封装为异步执行
				return new Promise(function(resolve, reject){
					uni.getScreenBrightness({
						success: function (res) {
							resolve(res.value)
						},
						fail: function (err) {
							// reject(0.5);//如果获取失败设置亮度为中间值
							reject(0.5);//如果获取失败设置亮度为中间值
						}
					});
				})
			},
		
			sliderFontChange(e){
				this.fontSize  = e.detail.value
				uni.setStorage({
					key: 'pageFontSize',
					data: e.detail.value,
					success () {
					}
				 })
			},
			changeFrontSize(){
				this.changeDisplay("none","block","none")
			},
			changeLight(){
				this.changeDisplay("block","none","none")
			},
			changeBackGroungColor(){
				this.changeDisplay("none","none","block")
			},
			changeDisplay(d1,d2,d3){
				this.display2 = d1
				this.display1 = d2
				this.display3 = d3
			},
			
			sliderLightChange(e){
				var value=  parseFloat(e.detail.value / 100.0);
				uni.setScreenBrightness({
					value:value ,
					success: function () {
						console.log('成功修改屏幕亮度为', value);
					}
				});
				uni.setStorage({
					key: 'pageLight',
					data: e.detail.value,
					success () {
					}
				 })
			},
			
			showSetting(e){
				var myApp = this;
				myApp.changeDisplay("none","none","none")
				myApp.butArray[e.index].active = !e.item.active;
				// preview
				if(e.index == 0){
					if( parseInt(myApp.current)-1 == 0) {
						return uni.showToast({
							title:"这已经是第一章了",
							duration:2000
						})
					}
					myApp.current = parseInt(myApp.current)-1;
					myApp.loadNovelContent(myApp.current);
				}else if(e.index == 1){
					//next
					if( parseInt(myApp.current)+1 == myApp.count) {
						return uni.showToast({
							title:"这已经是最后一章了",
							duration:2000
						})
					}
					myApp.current = parseInt(myApp.current)+1;
					myApp.loadNovelContent(myApp.current);
				}else if(e.index == 2){
					myApp.$refs.popup.open('buttom');
				}
				setTimeout(function() {
					myApp.butArray[e.index].active = !e.item.active;
				}, 300);
			},
			
		
			// 打开窗口
			showDrawer(e) {
				var myApp = this;
				myApp.$refs.showLeft.open()
				var toview = parseInt(myApp.current) -3 <= 0 ? 0 :parseInt(myApp.current) -3;
				setTimeout(function() {
					myApp.toView = "cate"+ toview
				}, 300);
			},
	
			loadNovelContent(pageNo){
				var myApp = this;
				http('novel/chapter/detail', {
					'currNo': pageNo,
					'id': myApp.id
				}, {
					hideLoading: false, // 默认 false
					hideMsg: true, // 默认 false
					method: 'POST' // 默认 POST
				}).then(res => {
					uni.pageScrollTo({
						scrollTop:0,   // 滚动到页面的目标位置  这个是滚动到顶部, 0 
						duration:300  // 滚动动画的时长
					})	
					myApp.novelDetail = res.data;
					myApp.content = myApp.novelDetail.content;
					myApp.showArrRight = false
					myApp.showArrLeft = false
					myApp.$refs['showLeft'].close();
					myApp.$refs.popup.close('buttom');
					myApp.$refs.fab.close();
					
					var key = 'lastPage'+myApp.id
					var value = {"current":myApp.current,"id":myApp.id,"chapterid":res.chapterid}
					uni.setStorage({
						key: key,
						data: value,
						success () {
						}
					 })
					uni.setNavigationBarTitle({
						title: myApp.novelDetail.chaptername
					})
				}).catch(err => {
					console.error(err)
				})
			},
			loadNovel(pageNo,limit){
				var myApp = this;
				http('novel/chapter', {
					'currNo': pageNo,
					'id': myApp.id,
					'limit': limit
				}, {
					hideLoading: false, // 默认 false
					hideMsg: true, // 默认 false
				}).then(res => {
					if(myApp.chapterList.length == 0 ){
						myApp.chapterList = res.data.result;
					}else{
						let len = res.data.result.length;
						if(len == 0 ){
							myApp.status = "noMore";
						}else{
							myApp.status = "more";
						}
						for(var i = 0;i<len;i++){
							myApp.chapterList.push(res.data.result[i]);
						}
						
					}
					myApp.count = res.data.count;					
				}).catch(err => {
					console.error(err)
				})
				
		
			},
		}
	}
</script>


<style>
	.arrow_container{
		position: fixed;
		top: 43%;
		width: 100%;
	}
	uni-text{
		font-size: 36rpx;
	}

	page{
		height: 100%;
		width: 100%;
	}
	silder{
		margin-bottom:100rpx
	}

	
	.popup-content{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		height: 230rpx;
		padding: 20rpx 30rpx;
		background-color:  #292c33;
	}
	.popup-content  .card{
		width: 130rpx;
		height: 130rpx;
		text-align: center;
		padding: 20rpx;
	}
	.popup-content .text{
		color: white;
	}

	.closeIcon{
		display: flex;
		justify-content: flex-end; 
	}	

	.container{
		width: 100%;
		height: auto;
		position: relative;
		background-color:  #C7EDCC;
		
	}
	.container .content{
		color: black;
		margin: 0 20rpx;
		overflow: hidden;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
	}
</style>
