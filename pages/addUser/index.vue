<template>
	<view class="content">
		<view class="head">
			<open-data type="userAvatarUrl"></open-data>
		</view>
		<u-cell-group>
			<u-field icon="account" v-model="mobile" label="名 称" placeholder="请输入员工名称" required input-align="right">
			</u-field>
			<u-field icon="phone" v-model="mobile" label="手机号" placeholder="请填写手机号" required input-align="right">
			</u-field>
			<u-cell-item icon="lock" title="权 限" value="选择员工权限" required @click="onSelect"></u-cell-item>
			<u-field icon="home" v-model="mobile" label="部 门" placeholder="请输入员工所属部门" input-align="right">
			</u-field>
			<u-field icon="bookmark" v-model="mobile" label="职 位" placeholder="请输入员工职位" input-align="right">
			</u-field>
		</u-cell-group>

		<u-action-sheet :list="list" v-model="show"></u-action-sheet>


		<view class="add" @click="addProduct">
			<u-icon name="edit-pen"></u-icon>
			<span>保存</span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				list: [{
					text: '一般员工'
				}, {
					text: '高级员工'
				}, {
					text: '管理员'
				}],
				show: false

			}
		},
		methods:{
			onSelect(){
				this.show = true
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.content {
		width: 100vw;
		height: calc(100vh - 120rpx);
		box-sizing: border-box;
		padding: 0 20rpx;


		.head {
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
			overflow: hidden;
			margin: 70rpx auto 70rpx auto;
		}
	}

	.add {
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

		span {
			padding-left: 10rpx;
		}
	}

	.add:active {
		opacity: .8;
	}
</style>
