<template>
	<view class="content">
		<u-cell-group title="基本信息" :border="false">
			<u-field icon="bag" v-model="mobile" label="名 称" placeholder="请输入商品名称" required input-align="right">
			</u-field>
			<u-field icon="shopping-cart" v-model="mobile" label="数 量" placeholder="请填商品数量" required input-align="right">
			</u-field>
		</u-cell-group>
		
		<u-cell-group :border="false" title="规格">
				<u-cell-item  title="材质" value="真皮"></u-cell-item>
				<u-cell-item  title="规格" value="选择规格"></u-cell-item>
				<view class="add-c">
					<u-button size="mini" icon="plus">增加规格</u-button>
				</view>
				
		</u-cell-group>
		
		<u-cell-group title="商品图片" :border="false">
			<u-upload :action="action" :file-list="fileList" width="150"></u-upload>
		</u-cell-group>
		
	
		
			
			<!-- <u-cell-item icon="lock" title="权 限" value="选择商品权限" required @click="onSelect"></u-cell-item> -->
			<!-- <u-field icon="home" v-model="mobile" label="部 门" placeholder="请输入商品所属部门" input-align="right">
			</u-field> -->
			<!-- <u-field icon="rmb" v-model="mobile" label="报 价" placeholder="请输入商品报价" input-align="right"> -->
			<!-- </u-field> -->
		
		<view class="add">
			<u-field
				v-model="code"
				label="报价"
				placeholder="请输入价格"
			></u-field>
			<u-button type="error" size="medium">添加</u-button>
		</view>
	</view>
	
	
	
</template>

<script>
	export default{
		data(){
			return{
				action: 'http://www.example.com/upload',
							fileList: [
								{
									url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
								}
							]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add {
		height: 120rpx;
		width: 100vw;
		background-color: white;
		display: flex;
		justify-content:space-between;
		align-items: center;
		position: fixed;
		left: 0;
		bottom: 0;
		border: 1px solid $u-border-color;
		box-sizing: border-box;
		padding-right: 20rpx;
	}
	.add-c{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10rpx;
		box-sizing: border-box;
	}
</style>
