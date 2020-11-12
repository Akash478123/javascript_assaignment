/* Write a Program to Flatten a given n-dimensional array */

// const flatten = (array, result) => {
// 		result === undefined && (result = []);
		
// 		for (var i = 0, len = array.length; i < len; i++) {
// 			if (Object.prototype.toString.call(array[i]) === '[object Array]') {
// 				flatten(array[i], result);
// 			} else {
// 				result.push(array[i]);
// 			}
// 		}
		
// 		return result;
// 	}
	
	const flatten (a, shallow,r)=>
	{
		if(!r){ r = []}
		 
	  if (shallow) {
		return r.concat.apply(r,a);
		}
			
		 for(var i=0; i<a.length; i++){
			  if(a[i].constructor == Array){
				  flatten(a[i],shallow,r);
			  }else{
				  r.push(a[i]);
			  }
		  }
		  return r;
	  }
	  
	  console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
	  
	  console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));




	// Write your code here


/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
