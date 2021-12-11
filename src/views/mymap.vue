<template>
	<div id="map"></div>
</template>

<script>
	export default {
		name: 'mymap',
		data() {
			return {
			}
		},
		mounted: function() {
			this.init_map();
		},
		methods: {
			init_map() {
				var $this=this;
				var height = parseInt($(".mymain_parent").css("height"));
				$("#map").css("height", height);
				let url = this.$store.getters.map_url;
				let map = L.map("map", {
					center: [32.550339, 103.114129],
					zoom: 3,
					minZoom: 1,
					maxZoom: 20,
					zoomControl: false,
					attributionControl: false,
					keyboard: false,
					preferCanvas: true,
					
				});
				this.$store.commit('set_map',map);
				let layer = L.tileLayer.chinaProvider(url,{ transparent: true,zIndex: 0,noWrap:true}).addTo(map);
				this.$store.commit("set_layer",layer);
				
				//绑定重绘函数
				// map.on('moveend', $this.myCommon.map_event_redraw_marker,this);
				// map.on('resize', $this.myCommon.map_event_redraw_marker,this);
				
				
				// if (map._zoomAnimated) {
				// 	map.on('zoomanim', $this.myCommon.animate_zoom, this);
				// }
				
				// window.onresize = function() {
				// 	var height = parseInt(window.innerHeight);
				// 	$("#map").css("height", height);
				// }
			},
		},
	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";
	#map{
		width:100%;
		height:100%;
	}
</style>
