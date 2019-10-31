<template>
	<div class="footer">
		<ul>
			<li>
				<div v-if="active == 1" class="icon active iconfont">&#xe60b;</div>
				<div v-else class="icon iconfont" @click="information()">&#xe62d;</div>
				<div class="text">微信</div>
			</li>
			<li>
				<div v-if="active == 2" class="icon active iconfont">&#xe62e;</div>
				<div v-else class="icon iconfont" @click="mailList()">&#xe635;</div>
				<div class="text">通讯录</div>
			</li>
			<li>
				<div v-if="active == 3" class="icon active iconfont">&#xe62b;</div>
				<div v-else class="icon iconfont" @click="find()">&#xe64f;</div>
				<div class="text">发现</div>
			</li>
			<li>
				<div v-if="active == 4" class="icon active iconfont">&#xe61c;</div>
				<div v-else class="icon iconfont" @click="me()">&#xe626;</div>
				<div class="text">我</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'bottom',
		props:['active'],
		methods:{
			information(){
				this.$router.push({path:'/Information'});
			},
			mailList(){

				this.$router.push({path:'/'});
			},
			find(){

				this.$router.push({path:'/find'});
			},
			me(){

				this.$router.push({path:'/me'});
			},
		}
	}
</script>

<style scoped lang="scss">
	.footer{
		width:100%;
		height:50px;
		background:#EDEDED;
		position: fixed;
		bottom:0;
		left:0;
    	z-index: 1;
    	border-top:solid 1px #ccc;
    	ul{
    		display:flex;
    		li{
    			flex:1;
    			text-align:center;
    		}
    	}
    }

    .icon{
    	margin-top:8px;
    	margin-bottom:2px;
    	font-size:1.2em;
    }

    .text{
    	font-size:0.8em;
    }

    .active{
    	color:#32bc19;
    }
</style>