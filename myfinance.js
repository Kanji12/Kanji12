function getSimpleIntrest(amount, rate, year)
{
    console.log("hellow");
    var result
    return result = (amount * rate * year) / 100

    
   
}
function getCompoundIntrest(amount, rate, year, m)
{ 
    var result, i, k, p;
        p = m * year;
        i = rate / m ;
        j = (1 + i);
    k = Math.pow(j, p);
    result = amount * j;
}
module.exports.getSimpleIntrest = getSimpleIntrest;