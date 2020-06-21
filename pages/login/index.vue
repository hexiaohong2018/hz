<template>
	<view class="content">
		<view class="head"><open-data type="userAvatarUrl"></open-data></view>
		<open-data class="name" type="userNickName"></open-data>
		<u-divider color="#666">点击下方微信头像快速申请使用</u-divider>
		<!-- <button class="reg" open-type="getPhoneNumber" @getphonenumbe="getPhoneNumber">
			<u-icon name="weixin-circle-fill" size="80" color="#19be6b"></u-icon>
		</button> -->
		<button class="reg" @click="onClick">
			<u-icon name="weixin-circle-fill" size="80" color="#19be6b"></u-icon>
		</button>
		
	</view>
</template>

<script>
	export default{
		
		
		methods:{
			// getPhoneNumber(e){
			// 	console.log(e);
			// 	this.$u.route('/pages/index/index')
			// }
			onClick(){
				this.$u.route('/pages/index/index')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content:stretch;
		align-items: center;
		
		.head{
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
			overflow: hidden;
			margin-top: 360rpx;
			margin-bottom: 20rpx;
		}
		.name{
			font-size: 30rpx;
			margin-bottom: 20rpx;
		}
		.reg{
			background-color: transparent;
			width: 80rpx;
			height: 80rpx;
			padding: 0;
			margin-top: 30rpx;
		}
		.reg:after{
			border: 0;
			
		}
	}
</style>
