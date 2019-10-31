<template>
	<div>
		<div class="Initials" v-if="group.Initials">{{ group.Initials }}</div>
		<ul class="friendList">
			<li v-for="friend in group.friends" :k="friend" class="friend">
				<div class="img"><img height="100%" :src="friend.img"></div>
				<div v-if="more" class="more iconfont">&#xe638;</div>
				<div class="name">{{ friend.name }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'friendList',
		props:['group','more']
	}
</script>

<style scoped lang="scss">
	$border:solid 1px #e5e5e5;
	.Initials{
		height:20px;
		line-height:20px;
		padding-left:15px;
		font-size:0.8em;
		background:#EDEDED;
		color:#666;
	}

	.friendList{
		border-bottom: $border;
		border-top: $border;
		background:#fff;
		&::after{
			content:'';
			display:none;
			clear:both;
		}
	}

	.friend{
		heiight:45px;
		.img{
			float:left;
			height:35px;
			margin-top:5px;
			margin-left:15px;
			border-radius:5px;
			overflow:hidden;
		}

		.name{
			line-height:45px;
			margin-left:70px;
			border-bottom:$border;
			margin-bottom:-1px;
		}

		.more{
			height:45px;
			float:right;
			color:#999;
			font-size:0.8em;
			line-height:45px;
			margin-right:10px;
		}
	}
</style>