<template>
  <div id="app">
<!--     <div id="nav">
      
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
	*{
		margin:0;
		padding:0;
	}

	body{
		background:#EDEDED;
	}

	a{
	    text-decoration: none;
	    color: inherit;
	}

	ul,ol,dl {
	    list-style: none;
	}
	body::-webkit-scrollbar{ display: none;  }
</style>
