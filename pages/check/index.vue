<template>
	<view class="content">
		<view class="search-box">
			<view class="search">
				<u-search :clearabled="true"></u-search>
			</view>
			<u-icon name="list-dot" size="40" @click="onClick"></u-icon>
		</view>

		<u-table>
			<u-tr>
				<u-th>名称</u-th>
				<u-th>质地</u-th>
				<u-th>价格</u-th>
				<u-th>价格</u-th>
			</u-tr>
			<u-tr>
				<u-td>吊牌1</u-td>
				<u-td>真皮</u-td>
				<u-td>22</u-td>
				<u-td>22</u-td>
			</u-tr>
			<u-tr>
				<u-td>吊牌2</u-td>
				<u-td>人造革</u-td>
				<u-td>20</u-td>
				<u-td>22</u-td>
			</u-tr>
		</u-table>


		<u-popup v-model="show" mode="right">
			<view class="pop-content">
				<view class="item">
					<view class="title">
						颜色
					</view>
					<view class="item-content">
						<view class="btn btn-active">黑色</view>
						<view class="btn">红色</view>
						<view class="btn">大红色</view>
						<view class="btn">黄色</view>
					</view>
				</view>

				<view class="item">
					<view class="title">
						颜色
					</view>
					<view class="item-content">
						<view class="btn btn-active">黑色</view>
						<view class="btn">红色</view>
						<view class="btn">大红色</view>
						<view class="btn">黄色</view>
					</view>
				</view>
				<view class="item">
					<view class="title">
						颜色
					</view>
					<view class="item-content">
						<view class="btn btn-active">黑色</view>
						<view class="btn">红色</view>
						<view class="btn">大红色</view>
						<view class="btn">黄色</view>
					</view>
				</view>
				<view class="item">
					<view class="title">
						颜色
					</view>
					<view class="item-content">
						<view class="btn btn-active">黑色</view>
						<view class="btn">红色</view>
						<view class="btn">大红色</view>
						<view class="btn">黄色</view>
					</view>
				</view>
				<view class="item">
					<view class="title">
						颜色
					</view>
					<view class="item-content">
						<view class="btn btn-active">黑色</view>
						<view class="btn">红色</view>
						<view class="btn">大红色</view>
						<view class="btn">黄色</view>
					</view>
				</view>
				<view class="item">
					<view class="title">
						颜色
					</view>
					<view class="item-content">
						<view class="btn btn-active">黑色</view>
						<view class="btn">红色</view>
						<view class="btn">大红色</view>
						<view class="btn">黄色</view>
					</view>
				</view>
				<view class="item">
					<view class="title">
						颜色
					</view>
					<view class="item-content">
						<view class="btn btn-active">黑色</view>
						<view class="btn">红色</view>
						<view class="btn">大红色</view>
						<view class="btn">黄色</view>
					</view>
				</view>
				<view class="item">
					<view class="title">
						颜色
					</view>
					<view class="item-content">
						<view class="btn btn-active">黑色</view>
						<view class="btn">红色</view>
						<view class="btn">大红色</view>
						<view class="btn">黄色</view>
					</view>
				</view>

				<view class="item">
					<u-field v-model="mobile" label="数量:" placeholder="请输入数量">
					</u-field>
				</view>


			</view>


			<view class="comfim">
				<u-button size='medium'>确定</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			onClick() {
				this.show = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100vw;
		min-height: 100vh;
		overflow: scroll;

		.search-box {
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			padding: 0rpx 20rpx;
			height: 80rpx;

			.search {
				flex: 1;
			}
		}

		.comfim {
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: white;
		}

		.pop-content {
			height: calc(100vh - 100rpx);
			overflow-y: scroll;

			.item {
				width: 400rpx;
				display: flex;
				flex-direction: column;

				.title {
					color: #333;
					padding: 10rpx;
					font-weight: 600;
					font-size: 28rpx;
				}
				.item-content {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					color: #666;
					.btn {
						padding: 10rpx 20rpx;
						border: 1px solid #eee;
						margin: 10rpx;
						font-size: 24rpx;
					}
					.btn-active {
						color: white;
						background-color: #f44;
					}
				}
			}
		}
	}
</style>
