//IIFE using for loop
      //syntax for IIFE: (function functionname(){})();

 //1.(a): ODD NUMBER:

        var array= [1,2,3,4,5,6,7,8,9,10];

        (function odd(){
            for(var i=0; i<array.length; i++){
                if (array[i]%2!=0)
                console.log(array[i])
            }
        })
        ();    //output: 1 3 5 7 9 


//1.(b): TITTLE CAPS

        let sentence = ["Raj","guvi","ram"];

        (function tittleCaps(){
            
            for(var i=0; i<sentence.length;i++){

            
                sentence[i]=sentence[i].toUpperCase();
            }
            console.log(sentence);
        })
        ();   //output:(3) ['RAJ', 'GUVI', 'RAM']



//1.(c):SUM OF NUMBER:

var array= [1,2,3,4];

(function sum(){
    let ans =0;

    for(var i=0; i<array.length; i++){
        ans = ans+array[i];
        
    }
    console.log(ans)
})
();   //output: 10


//1.(d):PRIME NUMBER:

var array= [1,2,3,4,5,6,7];
let result=[],ans = 0;

        (function prime()
        {
            for(var i=0; i<array.length; i++){
                
                if (array[i]>0)
                {
                    if(array[i]==1 || array[i]==2)
                    {
                       result.push(array[i]);
                    }
                     else
                    {
                        for(var k = 2; k <= array[i]; k++)
                        {
                        if (array[i] % k == 0) 
                        {
                            ans = ans+1;
                            
                        }
                       }
                        if(ans==1)
                        {
                            result.push(array[i]);
                        }
                        ans =0;
                    }
                }
               
            }
            console.log(result);
        }) ();  //output (5) [1, 2, 3, 5, 7]



//1.(e):Palindrome or Not:


let array =["1991","amma","981","2002"];

(function palindrome() {
    let result=[];

    for(var i=0; i<array.length; i++)
    {
    var splitted = array[i].split("").reverse("").join("");

    if(array[i] === splitted)
    {
        result.push(array[i]);
    }
    }
    console.log(result);
  }) (); // output:(3) ['1991', 'amma', '2002']


  //1.(f):Palindrome or Not:

  let ary1 =[1,3,5,8];
  let ary2 =[2,4,6,7];
  let ary3 = ary1.concat(ary2).sort();
  

(function sort() {
    let result;

    let a =(ary3.length)/2;
    result = (ary3[a-1]+ary3[a])/2;
    
    console.log("The Median is "+result);
  }) (); // output: The Median is 4.5



  //1.(g):Remove Duplicate or Not:

  const names = ['John', 'Paul', 'George', 'Ringo', 'John','George'];

  (function sort() {
    let unique = [...new Set(names)];
    console.log(unique);
  }) (); // (4) ['John', 'Paul', 'George', 'Ringo']


//1.(e):Rotate an araay:

  let arrayRot =[1,2,3,4,5]
  let k=4;

(function Rotate() {
    let j= arrayRot.length-k;
    let result=[];

    result = arrayRot.slice(j);
for(var i=0;i<j;i++)
{
    result.push(arrayRot[i]);
}
console.log(result);
  }) ();  //output:(5) [2, 3, 4, 5, 1]

 

 