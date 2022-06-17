const load=document.querySelector('.load')

function send() {
	axios.get(`http://localhost:4017/api/login`).then( function (result) {
			console.log(result);
            console.log(result.request.statusText)
		});
}

send();

function list() {
	axios.get(`http://localhost:4017/api/list`).then( function (result) {
            console.log(result);
			if(result==null){
             load.classList.add('loader');
            }     
		});
}
list()