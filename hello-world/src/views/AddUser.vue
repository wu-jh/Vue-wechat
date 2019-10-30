<template>
	<div class="warp">
		<div>
			<span class="tips">用户名:</span>
			<input v-model="createUser.username" type="text" placeholder="请输入用户名">
		</div>
		<div>
			<span class="tips">性别:</span>
			<input v-model="createUser.sex" type="text" placeholder="请输入性别">
		</div>
		<div class="btn-warp">
			<button class="btn" @click="addUser()">提交</button>
			<button class="btn" @click="back()">返回</button>
		</div>
		
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		name:'add',
		data(){
			return {
				createUser:{
					username:'',
					sex:''
				}
			}
		},
		methods:{
			back(){
				this.$router.push({path:'/'})
			},
			addUser(){
				if(this.createUser.username.length <= 0){
                        alert('用户名不能为空');
                        return;
                    }

                    if(this.createUser.sex.length <= 0){
                        alert('性别不能为空');
                        return;
                    }

                    if(this.createUser.sex != '1' && this.createUser.sex != '0'){
                    	alert('0表示男,1表示女');
                    	return;
                    }
				$.ajax({
					url:'http://127.0.0.1:8888/mock.php/user/create',
					type:'post',
					data:this.createUser,
					dataType:'json',
					success:(res)=>{
						if(parseInt(res) > 0 ){
							this.$router.push({path:'/'})
						}
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp{
		width:350px;
		margin:auto;
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		background:#ccc;
		padding:20px;
		.tips{
			display:inline-block;
			width:80px;
			text-align:right;
			margin-right:10px;
		}
		input{
			height:25px;
			width:200px;
			margin:10px;
			padding-left:5px;
			outline:none;
			border:solid 1px #eee;
		}
		.btn-warp{
			text-align:center;
			.btn{
			padding:5px 20px;
			border:solid 1px #fff;
			background:#fff;
			margin-top:20px;
			margin-left:20px;
			outline:none;
			cursor:pointer;
		}
		}
		
	}
</style>