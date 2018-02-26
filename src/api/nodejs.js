//const url = "";
const url = "http://localhost:3000/";
//console.log(user.credential.accessToken);

export const fetchAllProducts = ()=>{
	//const token = JSON.parse(localStorage.getItem("token"));
	//console.log(token);
	return fetch(url + "products/")
	.then(r=>{
		if(!r.ok) throw r.error();
		return r.json();
	})
	.then(res=>res);
};

export const addNewProduct = (product)=>{
	//const token = JSON.parse(localStorage.getItem("token"));
	//console.log(token);
	return fetch(url + "products/", {method:"post",body:product})
	.then(r=>{
		if(!r.ok) throw r.error();
		return r.json();
	})
	.then(res=>res);
};