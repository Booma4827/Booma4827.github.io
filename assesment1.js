//1.non repeated element
var a=[1,1,2,8,3,4,5,5,8,4];
for(i=0;i<=a.length;i++){
    for(j=1;j<=a.length;j++){
        
        if(a[i]==a[j]){
            console.log("dup"+a[i]);
        }
    else{
            console.log("non repeated"+a[i]);
    }
    }
}
//2.kth largest element
var a=[1,1,2,8,3,5,5,8];
var b=[];
for(i=0;i<=a.length;i++){
    for(j=0;j<=a.length;j++){
        if(a[i]<=a[j]){
            for(i=0;i<=b.length;i++){
                b[i]=a[i];
            }
        }
    }
}
for(i=0;i<=b.length;i++){
for(j=0;j<=b.length;j++){
    if(b[i]<b[j]){
console.log(b[j]+"largest")
    }
}
}


//3.arrange the given num to biggest 
var a=[14,21,56];
var b=[];
for(i=a.length;i>=0;i--){
    for(j=1;j<=a.length;j++){
        b[j]=a[i];
console.log(b[j]);
console.log(b.join());
}
}


//4.move all zeros to end of array
var a=[0,1,4,0,5,7,6,0,1];
var b=[],c=[];
for(i=0;i<a.length;i++){
    if(a[i]==0){
for(i=0;b.length;i++){
    b[i]=a[i];
//console.log(b[i]);
}
}
else{
    for(i=0;i<=c.length;i++)
    {
        c[i]=a[i];
    }
   }
}
console.log(c.concat(b));


