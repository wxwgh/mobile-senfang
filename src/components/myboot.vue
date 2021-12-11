<template>
	<div class="myboot_parent">
		<div v-for="post in datas" :class="[{'active':post.is_active},{'touch_active':post.touch_active}]" @touchend="touchend_click(post)" @touchstart="touchstart_click(post)">
			<span :class="post.class"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myboot',
		data() {
			return {
				is_active:false,
				datas:[
					{
						name:"地图",
						class:"el-icon-reading",
						is_active:false,
						touch_active:true,
					},
					{
						name:"装备搜索",
						class:"el-icon-search",
						is_active:false,
						touch_active:false,
					},
					{
						name:"装备申请",
						class:"el-icon-s-check",
						is_active:false,
						touch_active:false,
					},
					{
						name:"我的申请",
						class:"el-icon-s-custom",
						is_active:false,
						touch_active:false,
					},
				]
			}
		},
		methods: {
			touchstart_click(post) {
				for(let i=0;i<this.datas.length;i++){
					if(post.name==this.datas[i].name){
						this.datas[i].is_active=true;
					}else{
						this.datas[i].is_active=false;
					}
				}
				for(let i=0;i<this.datas.length;i++){
					if(post.name==this.datas[i].name){
						this.datas[i].touch_active=true;
					}else{
						this.datas[i].touch_active=false;
					}
				}
			},
			touchend_click(post){
				post.is_active=false;
			}
		},
	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";
	
	.myboot_parent{
		line-height:50px;
		@display_row_around();
		font-size:28px;
		border-top:1px solid #ccc;
		text-align:center;
		&>div{
			width:25%;
		}
		.active{
			background:#ccc;
		}
		.touch_active{
			color:@common_color;
		}
	}

</style>
