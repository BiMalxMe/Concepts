function gettheSum(a : number , n:number[]) : number {
    let sum = 0 ;
    let i=0;
    for(i<0;i<n.length;i++){
        sum = sum + n[i]
    }
    sum += a;
    return sum

}

console.log("The sum is ",gettheSum(1,[1,2,3,4,5,6]))