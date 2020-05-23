<template>
	<view>
		<u-swipe-action :show="item.show" :index="index" 
			v-for="(item, index) in list" :key="item.id" 
			@click="click" @open="open"
			:options="options"
		>
			<view class="item u-border-bottom">
				<image mode="aspectFill" :src="item.images"></image>
				<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
				<view class="title-wrap">
					<text class="title u-line-2">{{ item.title }}</text>
				</view>
				<u-badge :is-dot="true" type="error"></u-badge>
			</view>
		</u-swipe-action>
		<u-action-sheet :list="[{text: '删除'}]" v-model="showSheet" @click="onDel"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSheet:false,
				delIndex:-1,
				list: [
					{
						id: 1,
						title: '张三',
						images: 'https://cdn.uviewui.com/uview/common/logo.png',
						show: false
					},
					{
						id: 2,
						title: '李四',
						images: 'https://cdn.uviewui.com/uview/common/logo.png',
						show: false
					},
					{
						id: 3,
						title: '王五',
						images: 'https://cdn.uviewui.com/uview/common/logo.png',
						show: false,
					}
				],
				disabled: false,
				btnWidth: 180,
				show: false,
				options: [
					{
						text: '编辑',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			};
		},
		methods: {
			onDel(index){
				if(index == 0){
					this.list.splice(this.delIndex, 1);
					this.$u.toast(`删除成功`);
				}
				
			},
			click(index, index1) {
				if(index1 == 1) {
					this.delIndex = index
					this.showSheet = true;
				} else {
					this.list[index].show = false;
					this.$u.route('/pages/addUser/index')
				}
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.list[index].show = true;
				this.list.map((val, idx) => {
					if(index != idx) this.list[idx].show = false;
				})
			},
			addUser(){
				this.$u.route('/pages/addUser/index')
			},
			
		}
	};
</script>

<style lang="scss" scoped>
	.add{
		height: 120rpx;
		width: 100vw;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		bottom: 0;
		border: 1px solid $u-border-color;
		span{
			padding-left: 10rpx;
		}
	}
	.add:active{
		opacity: .8;
	}
	.item {
		display: flex;
		padding: 20rpx;
	}
	
	image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		margin-right: 20rpx;
		border-radius: 12rpx;
	}
	
	.title {
		text-align: left;
		font-size: 28rpx;
		color: $u-content-color;
		margin-top: 20rpx;
	}
</style>