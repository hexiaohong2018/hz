<template>
	<view class="content">
		<view class="bg">
			<view class="logo">公司logo</view>
		</view>
		<view class="info">
			<view class="name">广州市翔腾云纸塑制品有限公司</view>
			<view class="info-content">公司简介。。。</view>
		</view>
		<view class="btns">
			<u-button icon="man-add" size="medium" shape="circle" @click="addUser">管理员工</u-button>
			<u-button size="medium" shape="circle" @click="addCatalogue">管理规格</u-button>
			<u-button size="medium" shape="circle" @click="addProduct">管理报价</u-button>
			<u-button size="medium" shape="circle" @click="checkProduct">查看报价</u-button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			uniCloud.callFunction({
				name:'login'
			}).then(res=>{
				
				console.log(res)
			})
		},
		methods:{
			addCatalogue(){
				this.$u.route('/pages/addCatalogue/index')
			},
			addUser(){
				this.$u.route('/pages/userList/index')
			},
			addProduct(){
				this.$u.route('/pages/productList/index')
			},
			checkProduct(){
				this.$u.route('/pages/check/index')
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.bg{
			width: 100vw;
			height: 0;
			padding-bottom: 70%;
			background-image: url('../../static/bg.jpg');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			position: relative;
			.logo{
				width: 130rpx;
				height: 130rpx;
				position: absolute;
				bottom: -67rpx;
				left: 40rpx;
				overflow: hidden;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: green;
				border-radius: 50%;
			}
			
		}
		.info{
			width: 100vw;
			height: 200rpx;
			box-sizing: border-box;
			padding: 10rpx 0rpx 20rpx 190rpx;
			.name{
				padding: 10rpx;
			}
			.info-content{
				font-size: 24rpx;
				color: #666;
			}
			
		}
		.btns{
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			height: 350rpx;
		}
	}
</style>
