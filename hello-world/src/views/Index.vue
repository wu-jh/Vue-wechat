<template>
	<div class="warp">
		<button class="add" @click="addUser">添加用户</button>
		<ul>
			<li class="table-head">
				<div class="td">ID</div>
				<div class="td">用户名</div>
				<div class="td">性别</div>
				<div class="td">操作</div>
			</li>
			<ShowUser @revise="revise($event)" @del="del($event)" v-for="user in users" v-bind:user="user" />
		</ul>
	</div>
</template>
<script>
	import ShowUser from '../components/ShowUser.vue'
	import $ from 'jquery'
	export default {
	  name: 'index',
	  data(){
	  	return {
	  		users:[]
	  	}
	  },
	  mounted(){
	  	this.showUser();
	  },

	  methods:{
	  	addUser(){
	  		this.$router.push({path:'/add'})
	  	},

	  	del(e){
	  		var choose = confirm('你确定要删除吗?');
	  		if(choose){
	  			$.ajax({
		  			url:'http://127.0.0.1:8888/mock.php/user/delete?id='+e,
		  			type:'post',
		  			data:{id:e},
		  			success:(res)=>{
		  				if(res){
		  					this.showUser();
		  				}else{
		  					alert('删除失败')
		  				}
		  			},
		  			error:()=> alert('链接服务器失败')
		  		})
	  		}
	  		
	  	},

	  	revise(e){
	  		this.$router.push({path:'/revise',query:{id:e}});
	  	},

	  	showUser(){
	  		$.ajax({
		  		url:'http://127.0.0.1:8888/mock.php/user',
		  		type:'get',
		  		dataType:'json',
		  		success:(res)=>{
		  			this.users = res;
		  		},
		  		error:()=> alert('链接服务器失败')
		  	})
	  	}
	  },

	  components: {
	    ShowUser
	  }
	}
</script>

<style scoped lang="scss">
	.warp{
		width:500px;
		margin:50px auto;
		.table-head{
			display:flex;
			.td{
				flex:1;
				border:solid 1px #ccc;
				margin-left:-1px;
				text-align:center;
				height:35px;
				line-height:35px;
			}
		}
		.add{
			margin-bottom:20px;
			cursor:pointer;
		}
	}
	
</style>