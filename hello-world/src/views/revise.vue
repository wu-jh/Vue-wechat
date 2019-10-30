<template>
	<div class="warp">
		<div>
			<span class="tips">用户名:</span>
			<input v-model="user.username" type="text" placeholder="请输入用户名">
		</div>
		<div>
			<span class="tips">性别:</span>
			<input v-model="user.sex" type="text" placeholder="请输入性别">
		</div>
		<div class="btn-warp">
			<button class="btn" @click="change()">提交</button>
			<button class="btn" @click="back()">返回</button>
		</div>
		
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		name:'revise',
		data(){
			return {
				user:{
					username:'',
					sex:''
				}
			}
		},

		mounted(){
			let id = this.$route.query.id;
			$.ajax({
				url:'http://127.0.0.1:8888/mock.php/user/get?id='+id,
				type:'get',
				dataType:'json',
				success:(res)=>{
					this.user = res;
				},
				error:()=> alert('链接服务器失败')
			})
		},

		methods:{
			back(){
				this.$router.push({path:'/'})
			},

			change(){
				let id = this.$route.query.id;
				if(this.user.username.length <= 0){
                    alert('用户名不能为空');
                    return;
                }

                if(this.user.sex.length <= 0){
                    alert('性别不能为空');
                    return;
                }

                if(this.user.sex != '1' && this.user.sex != '0'){
                	alert('0表示男,1表示女');
                	return;
                }

                $.ajax({
                	url:'http://127.0.0.1:8888/mock.php/user/update?id='+id,
                	type:'post',
                	data:this.user,
                	dataType:'json',
                	success:(res)=>{
                		if(res){
                			this.$router.push({path:'/'});
                		}else{
                			alert('修改失败')
                		}
                	},

                	error:()=> alert('链接服务器失败')
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