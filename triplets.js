var a = [17,28,30];
var b = [99,16,8];
var res = [];

function triplets(a, b) {
    let ptr=0;
    var count_a = 0;
    var count_b = 0;
   
    while(ptr<a.length){
        if(a[ptr]>b[ptr]){
            count_a++;
            ptr++;
        }
        else if(a[ptr]<b[ptr]){
            count_b++;
            ptr++;
        }
        else{
            ptr++;
        }
    }
    res = [count_a,count_b];
    console.log(count_a,count_b);
    return res;
}

triplets(a,b);
console.log(res);


