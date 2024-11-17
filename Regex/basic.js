// let pat=/x/;
let pat=/[a-zA-Z0-9]{1,90}[3]/;
let pat2=/[a-zA-Z0-9]+[3]/;
const imp="hfdiefex3"
console.log(pat.test(imp));


// validate phone number 
const regex1 = /^[6-9]\d{9}$/;


//validate email
const regex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



/**
 * '*' 0 or more
 * '+' 1 or more
 * {min,max} range
 * [A-Za-z0-9,-_/]
 * [or basis] --> any one
 * [][] --> [] and []
 * /^exp/ ---> start
 * /exp$/ ---> end
 * /^ exp $ / ---> entire string should be like pattern(no other char)
 * /[a-c]{1,}[1-5] | [0-9] --> or -grouping
 * /([a-c]{1,}[1-5]) | [0-9] --> or -grouping
 * shorthands   \d--> digit  \$--->escape  \s--->space  \b word \b-->boundary  \w-->wordCharacter
 * uppercase --> negatice scenarios   \S-->except space \W \D    except space,word,digit is there anything
 * Not operator (^)  /[^0-9]/-->any char except 0-9
 */