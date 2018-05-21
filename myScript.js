/*--------------------------------PROBLEM 01-------------------------------------------*/
function reverseNumber(number)
{
	number = number + "";
	
	return number.split("").reverse().join("");
}
document.getElementById("A3_01").innerHTML = reverseNumber(32243);
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 02-------------------------------------------*/
function isPalindrome(string)
{
	string = string + "";
 	stringReversed = string.split("").reverse().join('');
 	
 	if(string == stringReversed)
 		return "Yes, this is a palindrome.";
 	else
 		return "No, this is not a palindrome.";
}
document.getElementById("A3_02").innerHTML = isPalindrome('mango');
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 03-------------------------------------------*/
function combinator(string) 
{
   subStrings = new Array();
   
   for(i=0; i<string.length; i++) 
   {
       for(j=i+1; j<string.length+1; j++) 
       {
           subStrings.push(string.slice(i, j));
       }
   }
   return subStrings;
}
document.getElementById("A3_03").innerHTML = combinator('dog');
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 04-------------------------------------------*/
function alphabeticOrder(string)
{
	return string.split('').sort().join('');
}
document.getElementById("A3_04").innerHTML = alphabeticOrder('webmaster');
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 05-------------------------------------------*/
function capitalizeFirstChar(sentence) 
{
  	var array = sentence.split(' ');
  	var newarray = [];
    
  	for(x=0; x<array.length; x++)
  	{
    	newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
  	}
  	return newarray.join(' ');
}
document.getElementById("A3_05").innerHTML = capitalizeFirstChar('the quick brown fox');
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 06-------------------------------------------*/
function findLongestWord(string) 
{
    var str = string.split(" ");
    var longest = 0;
    var word = null;

    for (i=0; i<str.length; i++) 
    {
        if (longest < str[i].length) 
        {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
document.getElementById("A3_06").innerHTML = findLongestWord('Web Development Tutorial');
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 07-------------------------------------------*/
function vowelCount(string) 
{

  	temp = string.length;
  	var count = 0;
  	
  	for (i = 0; i<temp; i++) 
  	{
    	if ((string[i] == "a") || (string[i] == "e") || (string[i] == "i") || (string[i] == "o") || (string[i] == "u")) 
    	{
      		count += 1;
    	}
  	}
  	return count;
}
document.getElementById("A3_07").innerHTML = vowelCount('The quick brown fox');
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 08-------------------------------------------*/
function isPrime(number) 
{
	if(number < 2) 
	  	return false;
	  
	if(number == 2) 
	  	return true;
	  
	for(i=2; i<number; i++) 
	{
	   	if(number%i === 0) 
	   		return false;
	}
	return true;
}
document.getElementById("A3_08").innerHTML = isPrime(15);
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 09-------------------------------------------*/
function checkDataType(value)
{

	var dataTypes = [Function, RegExp, Number, String, Boolean, Object];
	    
	if(typeof value === "object" || typeof value === "function") 
	{
	    for (x=0, len=dataTypes.length; x<len; x++) 
	    {
	        if(value instanceof dataTypes[x])
	        {
	            return dataTypes[x];
	        }
	    }
	}
	return typeof value;
}
document.getElementById("A3_09").innerHTML = checkDataType(true);
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 10-------------------------------------------*/
function indentityMatrix(n) 
{ 
	var a = Array.apply(null, new Array(n)); 
	
	return a.map(function(x, i) 
	{ 
		return a.map(function(y, k) 
		{ 
			return i === k ? 1 : 0; 
		}) 
	}) 
}
document.getElementById("A3_10").innerHTML = indentityMatrix(4);
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 11-------------------------------------------*/
function secondLowestAndGreatest(array_number)
{
  	array_number.sort(function(x, y)
    {
        return x-y;
    });
  	
  	var newarray = [array_number[0]];
  	var result = [];
  
  	for(j=1; j<array_number.length; j++)
  	{
    	if(array_number[j-1] !== array_number[j])
    	{
      		newarray.push(array_number[j]);
    	}
  	}
  	result.push(newarray[1], newarray[newarray.length-2]);
  	return result.join(', ');
}
document.getElementById("A3_11").innerHTML = secondLowestAndGreatest([1,2,3,4,5]);
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 12-------------------------------------------*/
function isPerfect(number)
{
	var temp = 0;
   	for(var i=1;i<=number/2;i++)
    {
        if(number%i === 0)
        {
        	temp += i;
        }
    }
   
    if(temp === number && temp !== 0)
    {
    	return "It is a perfect number.";
    } 
    else
    {
    	return "It is not a perfect number.";
    }
}
document.getElementById("A3_12").innerHTML = isPerfect(28);
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 13-------------------------------------------*/
function computeFactor(number) 
{
    var str = "0";
    for (i=1; i<=number; i++) 
    {
        if (number%i == 0) 
        {
        	str += ',' + i;
        }
    }
    return str;
}
document.getElementById("A3_13").innerHTML = computeFactor(15);
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 14-------------------------------------------*/
function amountTocoins(amount, coins) 
{
	if (amount === 0) 
  	{
    	return [];
   	} 
 	else
   	{
     	if (amount >= coins[0]) 
       	{
        	left = (amount - coins[0]);
        	return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      	else
        {
        	coins.shift();
         	return amountTocoins(amount, coins);
        }
    }
}
document.getElementById("A3_14").innerHTML = amountTocoins(46, [25, 10, 5, 2, 1]);
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 15-------------------------------------------*/
function computeExponent(b, n)
{
    var result = 1;
    
    for(i=1; i<= n; i++)
    {
        result = b * result;        
    }
        return result;
}
document.getElementById("A3_15").innerHTML = computeExponent(3, 5);
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 16-------------------------------------------*/
function findUniqChar(text) 
{
    var unique= "";
    
    for(i=0; i<text.length; i++)
    {
    	if(unique.indexOf(text.charAt(i)) < 0) 
        {
        	unique += text.charAt(i);
        }
    }
    return unique;
}
document.getElementById("A3_16").innerHTML = findUniqChar("thequickbrownfoxjumpsoverthelazydog");
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 17-------------------------------------------*/
function getCharCount(str) 
{
    var result = str.charAt(0);
    var count = 1;
    
    if (str.length == 1) 
    {
        result += count;
        return result;
    } 
    else 
    {
        for(var i=1;i<str.length;i++) 
        {
            if(str.charAt(i) != str.charAt(i-1)) 
            {
                result += count + str.charAt(i);
                count = 1;
            } 
            else 
            {
                count++;
            }
            if (i == str.length - 1) 
            {
                result += count;
            }
        }
        return result;
    }
}
document.getElementById("A3_17").innerHTML = getCharCount('aaaabbbbaaacccbbb');
/*-------------------------------------------------------------------------------------*/





/*--------------------------------PROBLEM 18-------------------------------------------*/
function binarySearch(array, number, left, right)
{
	if(array instanceof Array)
	{
	    left = isNaN(left) ? 0 : left;
	    right = isNaN(right) ? array.length - 1: right;
	    let middle = left + 1 + Math.round((right - left)/2 - 1);    
	    
	    if(number == array[middle])
	    {
	      	return middle; 
	    }
	    
	    if(typeof array[middle] == "undefined" || left == right)
	    {
	   		return -1;
	    }
	    
	    if(number < array[middle])
	    {   
	    	return binarySearch(array, number, left, right - middle);
	    }
	    return binarySearch(array, number, middle, right);
  	}
}
document.getElementById("A3_18").innerHTML = binarySearch([0, 0, 1 ,1, 2, 3, 5, 6, 11], 2);
/*-------------------------------------------------------------------------------------*/