<template>
	<div class="top">
		<h4 class="title">{{ title }}</h4>
		<div>
			<div class="more iconfont">&#xe61f;</div>
			<div class="search iconfont">&#xe6b1;</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'top',
		props:['title']
	}
</script>

<style scoped lang="scss">
	.top{
		width:100%;
		height:50px;
		background:#EDEDED;
		line-height:50px;
		position: fixed;
		top:0;
		left:0;
    	z-index: 1;

		.title{
			float:left;
			margin-left:15px;
			font-size:1em;
		}

		.search{
			float:right;
			margin-right:30px;
			font-size:1.7em;
		}

		.more{
			float:right;
			margin-right:15px;
			font-size:1.5em;
		}
	}
</style>