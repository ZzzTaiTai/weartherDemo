let utils = {
	debounce:function(func,wait = 1000){
		let timeout;
		return function(...args){
			if(timeout){
				clearTimeout(timeout);
			}
			timeout = setTimeout(()=>{
				timeout = null;
				func.apply(null,args);
			},wait)
		}
	}
}
export default utils