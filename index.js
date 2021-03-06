const arr = [1,34,2,7,12,4,5,6,4,-6]
function nsort(ar){
	const resar = [];
	const rowEnd =  Math.max.apply(null,ar);
	
	const rowStart = Math.min.apply(null, ar);
	console.log(rowStart, rowEnd);
	for(let i = rowStart; i < rowEnd; i++){
		const v = ar.indexOf(i);
		if(ar.indexOf(i)>=0){
			resar.push(ar[v]);
		} 
	}
	return resar;
}

console.log(nsort(arr));
