function solution(list){

    let str = ""

    for(let i = 0 ; i<list.length; i ++){
        let consecutives = 0;
        let j = i;
        while(list[j+1] == list[j]+1 ){
            consecutives++;
            j++;
        }
        if(consecutives >= 2){
            str+= list[i] + "-" + list[j] + ",";
            i+=consecutives;
        } else{
            str+= list[i]+",";
        }
    }
    
    str = str.substring(0, str.length-1)
    return str;
}



solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);