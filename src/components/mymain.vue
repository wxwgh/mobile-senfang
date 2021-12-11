<template>
	<div class="mymain_parent">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'mymain',
		data() {
			return {
			}
		},
		methods: {
			downLoadClick(post) {
				var map = this.myCommon.getMap();
				this.myCommon.unbindMapEvent(map);
				this.myCommon.switchMouseStyle(false, map);
				this.myCommon.clearOperation();
			},
		},
	}
</script>

<style lang="less">
	.mymain_parent{
		flex:1;
		width:100%;
	}

</style>
