<template>
	<li v-bind:class="['warp',content.id == 1?'friend':'me']">
		<div class="img"><img :src="content.img" height="100%"></div>
		<div class="text">{{ content.text }}<div class="triangle"></div></div>
	</li>
</template>

<script>
	export default {
		name:'record',
		props:['content']
	}
</script>

<style scoped lang="scss">
	.warp{
		margin:15px 0px;
		&::after{
			content:'';
			display:block;
			clear:both;
		}
		.img{
			width:35px;
			height:35px;
			border-radius:5px;
			overflow:hidden;
		}
		.text{
			max-width:60%;
			position:relative;
			padding:10px;
			.triangle{
				position:absolute;
				top: 10px;
			}
		}
	}

	.me{
		.img{
			float:right;
			margin-right:10px;
		}
		.text{
			background:#2ce40a;
			font-size:1em;
			float:right;
			margin-right:15px;
			border-radius:5px;
			.triangle{
				border: solid 5px;
			    border-color: transparent transparent transparent #2ce40a ;
			    right: -10px;
			}
		}
	}

	.friend{
		.img{
			float:left;
			margin-left:10px;
		}
		.text{
			background:#fff;
			font-size:1em;
			float:left;
			margin-left:15px;
			border-radius:5px;
			.triangle{
				border: solid 5px;
			    border-color: transparent #fff transparent transparent ;
			    left: -10px;
			}
			
		}
	}
</style>