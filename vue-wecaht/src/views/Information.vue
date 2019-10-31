<template>
	<div>
		<top :title="title"></top>
		<div class="content">
			<ul>
				<news v-for="item in news" :news="item" @chat="chat($event)"></news>	
			</ul>
		</div>
		<bottom :active="1"></bottom>
	</div>
</template>

<script>
	import	top from '../components/top.vue'
	import	news from '../components/news.vue'
	import	bottom from '../components/footer.vue'

	export default {
		name:'information',
		data(){
			return {
				title:'微信',
				news:[
					{name:'巴传旺',imgUrl:'img/3.jpg',text:'[图片]',time:'18:16'},
					{name:'鲍瑶瑶',imgUrl:'img/5.jpg',text:'[语音]',time:'15:16'},
					{name:'程莎莎',imgUrl:'img/10.jpg',text:'[视频通话]',time:'14:16'},
					{name:'陈小珍',imgUrl:'img/11.jpg',text:'[文件]',time:'12:16'},
					{name:'红星',imgUrl:'img/17.jpg',text:'[语音通话]',time:'昨天'},
					{name:'辉一般的感觉',imgUrl:'img/21.jpg',text:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',time:'昨天'},
					{name:'石康',imgUrl:'img/24.jpg',text:'US哦按本次爆吧承包擦',time:'周一'},
					{name:'张梅霞',imgUrl:'img/28.jpg',text:'粗奥比蚕丝vunabonancacba',time:'周一'},
					{name:'黄利雄',imgUrl:'img/18.jpg',text:'漕河次阿婆草案皮草把陪你吧',time:'10月25日'},
					{name:'段勇',imgUrl:'img/15.jpg',text:'ufvidkhaxaxbava艾克啊',time:'10月25日'},
				]
			}
		},
		methods:{
			chat(event){
				this.$router.push({path:'/chatRoom',query:event});
			}
		},
		components:{
			top,
			bottom,
			news
		}
	}
</script>

<style scoped lang="scss">
	.content{
		margin-top:50px;
		margin-bottom:50px;
	}
</style>