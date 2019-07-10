<template>

  <div id="app">
	<div><h1>確認以下資料是否正確</h1></div>
	<div>日期：<input type="date" v-model="date"></div>
	<div>地址：<input type="text" v-model="address"></div>
	<div>電話：<input type="text" v-model="phone"></div>
	<div><input type="button" value='無誤'></div>
	<div class="hi">{{date}} {{address}} {{phone}} {{words}}</div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
			date:'',
			address: '',
			phone: '',
			words:''
    }
  },
	method:{

		check :function(){
			alert(this.date+this.address+this.phone)
		}
		/*chrome.runtime.onConnect.addListener(function(port) {
			console.assert(port.name == "typing");
			port.onMessage.addListener(function(msg) {
					words = msg.words
			});
		});*/
	}
}
</script>

<style scoped>

</style>
