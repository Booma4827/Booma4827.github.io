//swapping two integers
var x=10;
var y=20;
var a;
a=x;
x=y;
y=a;
console.log("x="+x,"y="+y);

//Add a value at last item
var a=[2,4,6,8,1];
a.push(5,4);
for(i=0;i<a.length;i++){
    console.log(a[i]);
}

//Remove the last item
var a=[2,4,6,8,4,1];
a.pop();
for(i=0;i<a.length;i++){
    console.log(a[i]);
}

//Add a value at first item
var a=[3,5,7,1,4];
a.unshift(1);
for(i=0;i<a.length;i++){
    console.log(a[i]);
}

//Remove the first item
var a=[1,3,5,7,9,2];
a.shift();
for(i=0;i<a.length;i++){
    console.log(a[i]);
}
 
//concat()
var a=[3,5,7,9];
var b=[1,2,4,5,8];
var c=a.concat(b);
for(i=0;i<c.length;i++){
console.log(c[i]);
}

//tostring()
var a=["B","o","o","m","a"];
var b=a.toString(a);
console.log(b);

// lastindexof()
var a=[2,4,6,7,2,9];
console.log(a.lastIndexOf(2));

//index()
var a=[1,3,5,7,9];
console.log(a.indexOf(5));

//join()
var a=[2,4,6,8];
var c=a.join();
console.log(c);

//includes
var a=[2,4,6,8,1];
console.log(a.includes(4,1));

//indexof()
var a=[2,3,4,3];
console.log(a.indexOf(4));

//valueof()
var a=[2,4,5,6,8,0]
var v=a.values();

//object

var students=[{
    'name':'Booma',
    'mark':100,
    'email':'boomacse2@gmail.com',
    'contact.no':7094330045
},
    {
    'name':'Banu',
    'mark':200,
    'email':'sabanu@gmail.com',
    'contact.no':9344077689
}]
for(var i=0;i<students.length;i++){
var student=students[i];
for(prop in student){
    console.log(prop,student[prop] );
}}
