/* Write a program to build a `Pyramid of stars` of given height */
const buildPyramid = (rows) => { 
    if(Number.isInteger(rows) &&(Math.sign(rows)==1 )){

        for (let i = 0; i < rows; i++) {
            let output = '';
            for (let j =0; j < rows - i; j++) output += ' ';
            for (let k = 0; k <= i; k++) output += '* ';
           return output;  
        }
        } 
        else{
            let error="invalid value"
            return error
        }
    }
    
    buildPyramid(5)

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
