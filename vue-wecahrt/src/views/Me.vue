<template>
	<div>
		<div class="top">
			<div class="camera iconfont">&#xe62f;</div>
		</div>
		<div class="content">
			<div class="header">
				<div class="img"><img src="img/35.jpg" height="100%"></div>
				<div class="text">
					<div class="more iconfont">&#xe638;</div>
					<div class="code iconfont">&#xe630;</div>
					<div class="name">{{ name }}</div>
					<div class="wechart-id">微信号: {{ id }}</div>
				</div>
			</div>
			<friendList v-for="item in groups" :group="item" :more="'ok'" class="group"></friendList>
		</div>
		<bottom :active="4"></bottom>
	</div>
</template>

<script>	
	import	friendList from '../components/friendList.vue'
	import	bottom from '../components/footer.vue'

	export default {
		name:'mailList',
		data(){
			return {
				title:'发现',
				name:'Pretend°',
				id:'W1558684513',
				groups:[
					{
						Initials:false,
						friends:[
							{name:'支付',img:'img/pay.png'}
						]
					},
					{
						Initials:false,
						friends:[
							{name:'收藏',img:'img/shou.png'},
							{name:'相册',img:'img/photo.png'},
							{name:'卡包',img:'img/cards.png'},
							{name:'表情',img:'img/biao.png'},
						]
					},
					{
						Initials:false,
						friends:[
							{name:'看一看',img:'img/setting.png'}
						]
					}
				]
			}
		},
		components:{
			top,
			friendList,
			bottom
		}
	}
</script>

<style scoped lang="scss">
	.content{
		margin-top:50px;
		margin-bottom:50px;
		background:#EDEDED;
	}

	.group{
		margin-bottom:8px;
	}

	.top{
		width:100%;
		height:50px;
		background:#fff;
		position: fixed;
		top:0;
		left:0;
    	z-index: 1;
	}

	.camera{
		float:right;
		margin-right:15px;
		margin-top:10px;
	}

	.header{
		height:80px;
		margin-bottom:8px;
		background:#fff;
		.img{
			height:50px;
			border-radius:5px;
			overflow:hidden;
			float:left;
			margin-left:20px;
		}

		.text{
			height:50px;
			margin-left:83px;
			position:relative;
			.name{
				font-size:1.3em;
				font-weight:600;
			}
			.wechart-id{
				position:absolute;
				bottom:3px;
				left:0;
				font-size:0.8em;
				color:#777;
			}
		}

		.code{
			position:absolute;
			bottom:3px;
			right:40px;
			color:#999;
			font-size:0.8em;
		}

		.more{
			position:absolute;
			bottom:3px;
			right:15px;
			color:#999;
			font-size:0.8em;
		}
	}
</style>