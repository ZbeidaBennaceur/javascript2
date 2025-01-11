function capitalize(str) {
    var str2=""
    for (var i=0; i<str.length; i++)
    {
        if (i===0 || str[i-1]===" ") {str2+=str[i].toUpperCase()}
        else {str2+=str[i]}
    }
    return str2 }
    
    console.log (capitalize("je suis une femme"))