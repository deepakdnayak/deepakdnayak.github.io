const toHexa = (dec) => {
    const getRemain = (decimal) => {
        let remainder = Number.parseInt(decimal % 16);
        if (remainder == 10) { remainder = 'A'; }
        else if (remainder == 11) { remainder = 'B'; }
        else if (remainder == 12) { remainder = 'C'; }
        else if (remainder == 13) { remainder = 'D'; }
        else if (remainder == 14) { remainder = 'E'; }
        else if (remainder == 15) { remainder = 'F'; }
        return remainder;
    }
    const getquotient = (decimal) => {
        return Number.parseInt(decimal/16);
    }
    let final = [];
    final.push(getRemain(dec));
    dec = getquotient(dec);
    while(dec>=16) {
        final.push(getRemain(dec));
        dec = getquotient(dec);
    }
    if(dec!=0){final.push(getRemain(dec));}
    let str = "";
    for(let i=final.length-1;i>=0;i--) {
        str += final[i];
    }
    console.log(str);
    document.getElementById('solution').innerHTML = str;
    return str;
}
const toBinary = (dec) => {
    const getRemain = (decimal) => {
        let remainder = Number.parseInt(decimal % 2);
        return remainder;
    }
    const getquotient = (decimal) => {
        return Number.parseInt(decimal/2);
    }
    let final = [];
    final.push(getRemain(dec));
    dec = getquotient(dec);
    while(dec>=1) {
        final.push(getRemain(dec));
        dec = getquotient(dec);
    }
    final.push(getRemain(dec));
    let str = "";
    for(let i=final.length-1;i>=0;i--) {
        str += final[i];
    }
    return str;
}
const toOctal = (dec) => {
    const getRemain = (decimal) => {
        let remainder = Number.parseInt(decimal % 8);
        return remainder;
    }
    const getquotient = (decimal) => {
        return Number.parseInt(decimal/8);
    }
    let final = [];
    final.push(getRemain(dec));
    dec = getquotient(dec);
    while(dec>=7) {
        final.push(getRemain(dec));
        dec = getquotient(dec);
    }
    final.push(getRemain(dec));
    let str = "";
    for(let i=final.length-1;i>=0;i--) {
        str += final[i];
    }
    return str;
}
// main begins here
const mainBegin = () => {
    let dec = document.getElementById('decimal').value;
    let selection = document.getElementById('selection').value;
    let str = "";

    if(selection=='Binary'){str = toBinary(dec);}
    else if(selection=='Octal'){str = toOctal(dec);}
    else if(selection=='Hexadecimal'){str = toHexa(dec);}
    
    document.getElementById('solution').innerHTML = str;
    console.log("Entered decimal = "+dec);
    console.log("Entered format = "+selection);
    console.log("Generated answer = "+str);

}