/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev=0;
    let num = x;
    while(num>0){
        let rem = num%10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    if(x == rev){
        return true;
    }
    else return false;
};