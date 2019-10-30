<template>
	<li>
		<div>{{ user.id }}</div>
		<div>{{ user.username }}</div>
		<div>{{ user.sex == 0?'男':'女' }}</div>
		<div><button @click="$emit('revise',user.id)">修改</button><button @click="$emit('del',user.id)">删除</button></div>
	</li>
</template>

<script>
	export default {
	  name: 'ShowUser',
	  props:['user']
	}
</script>

<style scoped lang="scss">
	li{
			display:flex;
			margin-top:-1px;
			div{
				flex:1;
				border:solid 1px #ccc;
				margin-left:-1px;
				text-align:center;
				height:35px;
				line-height:35px;
				button{
					cursor:pointer;
					margin:0 5px;
				}
			}
		}
</style>