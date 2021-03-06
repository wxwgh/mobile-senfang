
const map_store = {

	state: {
		// 地图模块 全局map,底图layer,底图地址
		map:"",
		layer:"",
		url:"TianDiTu.Normal.road",
		marker_group:"",
		popup_datas:""
	},
	actions: {},
	mutations: {
		set_map: (state, data) => {
			state.map = data;
		},
		set_layer: (state,data) => {
			state.layer = data;
		},
		set_marker_group: (state,marker_group) => {
			state.marker_group = marker_group;
		},
		set_popup_datas:function(state,datas){
			state.popup_datas = datas;
		}
	},
	getters: {
		map: (state) => {
			return state.map;
		},
		map_url: (state) => {
			return state.url;
		},
		get_marker_group: (state) => {
			return state.marker_group;
		},
		get_popup_datas:function(state){
			return state.popup_datas;
		}
	}
}
export default map_store
