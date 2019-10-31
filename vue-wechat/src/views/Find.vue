<template>
	<div>
		<top :title="title"></top>
		<div class="content">
			<friendList v-for="item in groups" :group="item" :more="'ok'" class="group"></friendList>
		</div>
		<bottom :active="3"></bottom>
	</div>
</template>

<script>
	import	top from '../components/top.vue'
	import	friendList from '../components/friendList.vue'
	import	bottom from '../components/footer.vue'

	export default {
		name:'mailList',
		data(){
			return {
				title:'发现',
				groups:[
					{
						Initials:false,
						friends:[
							{name:'朋友圈',img:'img/friend.png'}
						]
					},
					{
						Initials:false,
						friends:[
							{name:'扫一扫',img:'img/sao.png'},
							{name:'摇一摇',img:'img/yao.png'}
						]
					},
					{
						Initials:false,
						friends:[
							{name:'看一看',img:'img/look.png'},
							{name:'搜一搜',img:'img/sou.png'}
						]
					},
					{
						Initials:false,
						friends:[
							{name:'附近的人',img:'img/near.png'}
						]
					},
					{
						Initials:false,
						friends:[
							{name:'购物',img:'img/shop.png'},
							{name:'游戏',img:'img/game.png'}
						]
					},
					{
						Initials:false,
						friends:[
							{name:'小程序',img:'img/small.png'}
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
</style>