function calcSgpa() {
    var $4c1 = document.getElementById('4c1').value;
    var $4c2 = document.getElementById('4c2').value;

    var $3c1 = document.getElementById('3c1').value;
    var $3c2 = document.getElementById('3c2').value;
    var $3c3 = document.getElementById('3c3').value;
    
    var $1c1 = document.getElementById('1c1').value;
    var $1c2 = document.getElementById('1c2').value;
    var $1c3 = document.getElementById('1c3').value;

    var sgpaVal,i;

    arr = [$4c1,$4c2,$3c1,$3c2,$3c3,$1c1,$1c2,$1c3];
    for(i=0 ; i<arr.length ; i++ ) {
             if(arr[i]>=90) {arr[i]=10}
        else if(arr[i]>=80) {arr[i]=9}
        else if(arr[i]>=70) {arr[i]=8}
        else if(arr[i]>=60) {arr[i]=7}
        else if(arr[i]>=65) {arr[i]=6}
        else if(arr[i]>=50) {arr[i]=5}
        else if(arr[i]>=55) {arr[i]=4}
        else if(arr[i]>=40) {arr[i]=3}
        else {arr[i]=0}
    }

    sgpaVal = ((arr[0]*4)+(arr[1]*4)+(arr[2]*3)+(arr[3]*3)+(arr[4]*3)+(arr[5]*1)+(arr[6]*1)+(arr[7]*1))/20;

    document.getElementById('sgpa').innerHTML=sgpaVal;
}