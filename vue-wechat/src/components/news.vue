<template>
		<li class="news" @click="$emit('chat',news)">
			<div class="img"><img height="100%" :src="news.imgUrl"></div>
			<div class="text">
				<p class="name">{{ news.name }}</p>
				<p class="content">{{ news.text }}</p>
			</div>
			<div class="time">{{ news.time }}</div>
		</li>
</template>

<script>
	export default {
		name:'news',
		props:['news']
	}
</script>

<style scoped lang="scss">
	$border:solid 1px #e5e5e5;

	.news{
		heiight:70px;
		position:relative;
		background:#fff;
		.img{
			float:left;
			height:50px;
			margin-top:5px;
			margin-left:15px;
			border-radius:5px;
			overflow:hidden;
		}
		.text{
			height:60px;
			overflow:hidden;
			margin-left:80px;
			border-bottom:$border;
			.name{
				margin-top:10px;
				font-size:1em;
			}
			.content{
				margin-top:5px;
				font-size:0.8em;
				color:#666;
				margin-right:50px;
				overflow:hidden;
				text-overflow: ellipsis;
    			white-space: nowrap;
			}
		}
	}

	.time{
		position:absolute;
		top:10px;
		right:15px;
		color:#666;
		font-size:0.7em;
	}
</style>