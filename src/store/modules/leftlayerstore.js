//引入自定义通用方法脚本
import myCommon from '../../assets/plugins/common.js';
//引入axios
import axios from 'axios';
import $store from '@/store/index.js';
//此处修改为 服务器地址即可
// let host = "10.2.28.136:15000";
let host = "127.0.0.1:5000";
const leftlayer_store = {
	state: {
		config_url:"http://"+host+"/layertree_service/get_layertree_config",
		layers_tree_config:[],
		layer_index:0,
	},
	actions: {
		//初始化图层树配置
		init_layers_tree:function(context){
			axios({
			    method: 'get',
			    url: context.getters.get_leftlayer_url
			}).then(function (result) {
				console.log(result);
				context.commit("init_layers_tree",result.data[0].children);
			}).catch(function(error){
				console.log(error);
			})
		},
		
	},
	mutations: {
		//设置switch值
		set_switch_value:function(state,value){
			state.switch_value=value;
		},
		//初始化图层树配置
		init_layers_tree:function(state,value){
			state.layers_tree_config=value;
		},
		//++ layer_index
		update_layer_index:function(state){
			state.layer_index+=1;
		},
		delete_leftlayer_config:function(state,post){
			if(post.url_type == "vector"){
				let map = $store.getters.map;
				map.getPanes().overlayPane.removeChild(post.my_canvas_div);
				post.my_canvas_div="";
				post.my_canvas="";
			}else{
				post.layer.remove();
				post.layer="";
			}
			post.show_flag=false;
			
		}
	},
	getters:{
		get_leftlayer_tree_config: (state) => {
			return state.layers_tree_config;
		},
		get_switch_value:function(state){
			return state.switch_value;
		},
		get_leftlayer_url:function(state){
			return state.config_url;
		},
		get_layer_index:function(state){
			return state.layer_index;
		}
	}
}
export default leftlayer_store
