<template>
	<div id="app">
		<!-- 主体 -->
		<mymain></mymain>
		<!-- 底部切换 -->
		<myboot></myboot>
	</div>
</template>
<script>
	import mymain from '@/components/mymain.vue';
	import myboot from '@/components/myboot.vue';
	export default {
		components: {
			mymain,
			myboot,
		},
		data() {
			return {
			};
		},
		mounted: function() {
		},
		created: function() {
			// $("body").css("min-height", window.innerHeight);
		},
		computed: {
			// get_loading: function() {
			// 	return this.$store.getters.get_loading;
			// }
		},
		methods: {
		}
	};
</script>
<style lang="less">
	//引入全局样式
	@import "./assets/less/style.less";
	/* 初始化环境 */
	html,
	body {
		height: 100%;
		width: 100%;
		-webkit-user-select: none;
		font-size: 16px;
		color: #2c3e50;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'PingFang';
		white-space: nowrap;
		overflow: hidden;
	}

	// @font-face{font-family:'PingFang';src:url('./assets/fonts/PingFang.ttf') format('truetype');font-weight:normal;font-style:normal;}
	// @font-face{font-family:'DS-Digital';src:url('./assets/fonts/DS-DIGIB.ttf') format('truetype');font-weight:normal;font-style:normal;}
	body {
		margin: 0;
		padding: 0;
		background: #fff;
	}

	body img {
		border: none;
		margin: 0;
		padding: 0;
	}

	div,
	h1,
	h2,
	h3,
	h4,
	p,
	form,
	label,
	input,
	textarea,
	img,
	span {
		margin: 0;
		padding: 0;
		// 允许在单次内换行
		word-break: break-all;
		word-wrap: break-word;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		word-break: break-all;
		word-wrap: break-word;
	}

	dl,
	dt,
	dd {
		margin: 0;
		padding: 0;
		border: 0;
	}

	a {
		color: #5f6477;
		text-decoration: none;
	}

	a:hover {
		color: #5f6477;
		text-decoration: none;
	}

	:focus {
		outline: 0;
	}

	input,
	select {
		font-family: "微软雅黑";
	}

	/* 设置滚动条的样式 */
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	/* 滚动槽 */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
		border-radius: 10px;
		background-color: #ddd;

	}

	/* 滚动条滑块 */
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		height: 1px;
		background: #777;
	}

	#app {
		height: 100%;
		width: 100%;
		@display_column_start();
	}
</style>
