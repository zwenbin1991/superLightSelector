## superLightSelector
一个超轻量的DOM选择器，兼容chrome、ff、ie6-11

## Install
	npm i superLightSelector
	git clone git@github.com:zwenbin1991/superLightSelector.git

## Usage
	<div class="md" id="wjj">1</div>
    <div class="md">2</div>
    <span class="xx">xx</span>
    <h1 class="xx">xx</h1>
    <h2 class="xx">md</h2>
    <span class="oo">oo</span>

	<script src="superLightSelector.js"></script>
	<script>
		alert($.find('.md,.xx').length) //5
	</script>
			
## LICENSE
MIT	