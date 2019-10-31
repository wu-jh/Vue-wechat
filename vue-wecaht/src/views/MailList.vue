<template>
	<div>
		<top :title="title"></top>
		<div class="content">
			<friendList v-for="item in groups" :group="item" :more="false"></friendList>
			<div class="statistics blank">142位联系人</div>
		</div>
		<div class="sidebar">
        <ul>
            <li class="iconfont">&#xe74a;</li>
            <li class="iconfont">&#xe63a;</li>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>I</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li>M</li>
            <li>N</li>
            <li>O</li>
            <li>P</li>
            <li>Q</li>
            <li>R</li>
            <li>S</li>
            <li>T</li>
            <li>U</li>
            <li>V</li>
            <li>W</li>
            <li>X</li>
            <li>Y</li>
            <li>Z</li>
            <li>#</li>
        </ul>
    </div>
		<bottom :active="2"></bottom>
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
				title:'通讯录',
				groups:[
					{
						Initials:false,
						friends:[
							{name:'新的朋友',img:'img/newFriend.jpeg'},
							{name:'群聊',img:'img/grounpChat.png'},
							{name:'标签',img:'img/trag.png'},
							{name:'公众号',img:'img/pub.png'}
						]
					},
					{
						Initials:'A',
						friends:[
							{name:'A学历提升王老师',img:'img/1.jpg'},
							{name:'安鑫宇',img:'img/2.jpg'}
						]
					},
					{
						Initials:'B',
						friends:[
							{name:'巴传旺',img:'img/3.jpg'},
							{name:'柏春',img:'img/4.jpg'},
							{name:'鲍瑶瑶',img:'img/5.jpg'},
							{name:'波波',img:'img/6.jpg'}
						]
					},
					{
						Initials:'C',
						friends:[
							{name:'曹老师',img:'img/7.jpg'},
							{name:'曹丽丽',img:'img/8.jpg'},
							{name:'超哥',img:'img/9.jpg'},
							{name:'程莎莎',img:'img/10.jpg'},
							{name:'陈小珍',img:'img/11.jpg'},
						]
					},
					{
						Initials:'D',
						friends:[
							{name:'党诗雨',img:'img/12.jpg'},
							{name:'段道泽',img:'img/13.jpg'},
							{name:'段文斌',img:'img/14.jpg'},
							{name:'段勇',img:'img/15.jpg'},
						]
					},
					{
						Initials:'H',
						friends:[
							{name:'何涛',img:'img/16.jpg'},
							{name:'红星',img:'img/17.jpg'},
							{name:'黄利雄',img:'img/18.jpg'},
							{name:'黄伟',img:'img/19.jpg'},
							{name:'胡欢欢',img:'img/20.jpg'},
							{name:'辉一般的感觉',img:'img/21.jpg'},
						]
					},
					{
						Initials:'S',
						friends:[
							{name:'石波',img:'img/22.jpg'},
							{name:'石峰',img:'img/23.jpg'},
							{name:'石康',img:'img/24.jpg'},
							{name:'宋晓露',img:'img/25.jpg'},
						]
					},
					{
						Initials:'Z',
						friends:[
							{name:'张海生',img:'img/26.jpg'},
							{name:'张玲',img:'img/27.jpg'},
							{name:'张梅霞',img:'img/28.jpg'},
							{name:'张世超',img:'img/29.jpg'},
							{name:'赵坤',img:'img/30.jpg'},
							{name:'赵沁芳',img:'img/31.jpg'},
							{name:'周振娟',img:'img/32.jpg'},
							{name:'周敏',img:'img/33.jpg'},
						]
					},
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
	}

	.sidebar{
		position: fixed;
	    top: 50%;
	    right: 10px;
	    transform: translateY(-50%);
	    line-height:15px;
	    font-size: 1.5em;
	    text-align: center;
	    font-size:0.7em;
	    .iconfont{
	    	font-size:1em;
	    }
	}

	.statistics{
	    height: 45px;
	    background: #fff;
	    text-align: center;
	    line-height: 45px;
	    font-size: 0.9em;
	    color: #999; 
	}
</style>