window.promises = [prom1,prom2,prom3,prom4,prom5];

// Do not change the code above this
// add your promises to the array `promises`
let prom1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("data azmat");
	},1000);
});
let prom2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("data");
	},2000);
});let prom3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("data");
	},4000);
});let prom4 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("data");
	},2000);
});let prom5 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("data azmat");
	},9000);
});




let result = Promise.any([prom1,prom2,prom3,prom4,prom5]);
result.then((value)=>{
    let div= document.getElementById("output");
    div.innerText=value;
})