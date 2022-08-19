///arrow function
//syntax: variable name = () => {return};


//2.(a): ODD NUMBER:

    var array= [1,2,3,4,5,6,7,8,9,10];

        var oddNumber = ()=>{
            for(var i=0; i<array.length; i++){
                if (array[i]%2!=0)
                console.log(array[i])
            }
        }
oddNumber(array); // output: 1 3 5 7 9 




//2.(b): TITTLE CAPS

let sentence = ["Raj","guvi","ram","kanna"];

let tittleCaps = ()=>{
    for(var i=0; i<sentence.length;i++){

            
        sentence[i]=sentence[i].toUpperCase();
    }
    console.log(sentence);
   } 
tittleCaps(sentence);  //output: (4) ['RAJ', 'GUVI', 'RAM', 'KANNA']



//2.(c):SUM OF NUMBER:
let array= [1,2,3,4];

        let sum = ()=>{
            let ans = 0;
    for(var i=0; i<array.length; i++)
    {
        ans = ans+array[i];
        
    }
    console.log(ans)
            
  }

 sum(array);  // Output:10



 //2.(d):PRIME NUMBER:

var array= [1,2,3,4,5,6,7];
let result=[],ans = 0;

 let prime = ()=>{
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
}

prime(array);  //output (5) [1, 2, 3, 5, 7]*/




//2.(e):Palindrome or Not:


let array =["1991","amma","981","2002"];

 
let palindrome = ()=> {

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

  } 
  
  palindrome(array);// output:(3) ['1991', 'amma', '2002']
 

 