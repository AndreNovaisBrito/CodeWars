function cardinalitySort(nums) {
    // Write your code here

    let countA=0;
    let countB;

    let binary = nums.map((e)=>e.toString(2))
    console.log(binary)
 

    arr.sort((a,b)=>{
        for(let i = 0 ; i < binary[0].length; i++){
            if(binary[0].charAt(i) == '1'){
                countA++;
                console.log(countA);
            }
        }
    })
    
    return binary;
}

console.log(cardinalitySort([1,2,3,4,5]));