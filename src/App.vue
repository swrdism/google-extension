<template>

  <div id="app">
	<div><h1>確認以下資料是否正確</h1></div>
	<div>日期：<input type="date" v-model="date"></div>
	<div>地址：<input type="text" v-model="address"></div>
	<div>電話：<input type="text" v-model="phone"></div>
	<div class="hi">{{date}} {{address}} {{phone}} {{words}}</div>
	<input type="submit" value="無誤" @click=googleCenlender()>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
			date:''
			address: '',
			phone: ''
			words:'words'
    }
  },
	method:{
		chrome.runtime.onConnect.addListener(function(port) {
			console.assert(port.name == "typing");
			port.onMessage.addListener(function(msg) {
					words = msg.words 
			});
		});
	}
}
</script>

<style scoped>

</style>
