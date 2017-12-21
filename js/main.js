document.addEventListener('DOMContentLoaded',function(){
	var lightSwitch = document.querySelector('.switch');
	var status = document.querySelector('.status')
	lightSwitch.addEventListener('click', function(e){
		if (e.target.classList.contains('on')){
			document.body.classList = 'dark';
			e.target.classList.remove('on');
			e.target.classList.add('off');
			status.innerText = 'Hey who turned off my nightlight?'

		}else{
			document.body.classList = 'light';
			e.target.classList.remove('off');
			e.target.classList.add('on');
			status.innerText = "it's so bright in here!"
		}
	})
})