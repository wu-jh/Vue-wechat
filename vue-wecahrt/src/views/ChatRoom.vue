<template>
	<div>
		<div class="header">
			<div class="back iconfont" @click="back">&#xe85c;</div>
			<div class="name">{{ friend.name }}</div>
			<div class="more iconfont">&#xeb5b;</div>
		</div>
		<div class="content" id="content">
			<div class="warp">
				<ul>
					<record v-for="item in news" :content="item"></record>
				</ul>
			</div>
		</div>
		<div class="footer">
			<div class="voice iconfont">&#xe632;</div>
			<textarea class="text" :value="value" @input="text($event.target.value)"></textarea>
			<div class="expression iconfont">&#xe637;</div>
			<div v-if="display" class="more iconfont">&#xe61f;</div>
			<div v-else class="send"><button class="btn" @click="send">发送</button></div>
		</div>
	</div>
</template>

<script>
	import record from '../components/Record.vue'
	import $ from 'jquery'

	export default {
		name:'chatRoom',
		data(){
			return {
				friend:'',
				news:[],
				value:'',
				display:true
			}
		},
		mounted(){
			var tmp = this.$route.query;
			this.friend = tmp;
			this.news = [
				{id:0,text:'哈哈哈哈哈',img:'img/35.jpg'},
				{id:0,text:'哈哈哈哈哈',img:'img/35.jpg'},
				{id:1,text:'哈哈哈哈哈',img:tmp.imgUrl},
				{id:0,text:'哈哈哈哈哈',img:'img/35.jpg'},
				{id:1,text:'哈哈哈哈哈',img:tmp.imgUrl},
				{id:1,text:'哈哈哈哈哈',img:tmp.imgUrl},
				{id:0,text:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',img:'img/35.jpg'},
				{id:1,text:'哈哈哈哈哈',img:tmp.imgUrl},
				{id:0,text:'哈哈哈哈哈',img:'img/35.jpg'},
				{id:0,text:'哈哈哈哈哈',img:'img/35.jpg'},
				{id:1,text:'哈哈哈哈哈',img:tmp.imgUrl},
				{id:1,text:'哈哈哈哈哈',img:tmp.imgUrl}
			];
			this.scrollToBottom()
		},

		updated:function(){
		   this.scrollToBottom();
		},

		methods:{
			back(){
				this.$router.push('/information')
			},
			text(e){
				this.value = e;
				if(this.value.length > 0){
					this.display = false;
				}else{
					this.display = true;
				}
			},
			send(){
				this.news.push({id:0,text:this.value,img:'img/35.jpg'});
				this.value = '';
				this.display = true;
				$('.text').focus();
			},
			scrollToBottom: function () {
			     this.$nextTick(() => {
				    var container = this.$el.querySelector(".content");
			        container.scrollTop = container.scrollHeight;
			     })
			}
		},
		components:{
			record
		}
	}
</script>

<style scoped lang="scss">
	.header{
		position:fixed;
		top:0;
		left:0;
		z-index:1;
		background:#EDEDED;
		width:100%;
		height:50px;
		line-height:50px;
		border-bottom:solid 1px #ddd;
		.back{
			float:left;
			font-size:1.2em;
			margin-left:15px;
		}

		.name{
			font-size:1.1em;
			float:left;
			font-weight:700;
			margin-left:15px;
		}

		.more{
			font-size:1.2em;
			float:right;
			margin-right:15px;
		}
	}

	.content{
		margin:50px 0;
		height:calc(100vh - 100px);
		overflow:auto;
		.warp{
			ul{
				overflow:hidden;
			}
		}
	}

	.content::-webkit-scrollbar{ 
		display: none;  
	}

	.footer{
		position:fixed;
		bottom:0;
		left:0;
		z-index:1;
		background:#EDEDED;
		width:100%;
		height:50px;
		height:50px;
		border-top:solid 1px #ddd;
		line-height:50px;
		display:flex;
		text-align:center;
		.voice{
			flex:1;
			font-size:1.8em;
		}
		.text{
			flex:5;
			height:30px;
			padding-left:5px;
			padding-top:10px;
			resize:none;
			outline:none;
			border:none;
			margin-top:5px;
			font-size:1.2em;		
		}
		.expression{
			flex:1;
			font-size:1.8em;
		}
		.more{
			flex:1;
			font-size:2em;
		}
		.send{
			flex:1;
			margin-right:10px;
		}
	}

	.btn{
		width:100%;
		border:none;
		background:#22a714;
		border-radius:2px;
		color:#fff;
		padding:6px 0;
		font-size:0.9em;
		text-align:center;
		outline:none;
	}
</style>