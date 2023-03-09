function optimalPoint(magic, dist) {
    // Write your code here
    let currentMagic=0; 
    for (let j = 0; j < dist.length; j++){
        console.log('Iteração', j)
        currentMagic = magic[j];
        console.log('Initial Magic', magic[j])
        let i = 0
        while(i < dist.length){     
            currentMagic -=dist[i];
            
            console.log('currentMagic', currentMagic)
            if (currentMagic <= 0) break;
            if(!isNaN(magic[j+1])){
                currentMagic+= magic[j+1]
            }
            else currentMagic += magic[0]
            console.log('currentMagic UPADA', currentMagic)
            i++;
        }
        if (currentMagic > 0) return j; 
    }
    
    return -1;
}

console.log('OptimalPoint', optimalPoint([8,4,1,9],[10,9,3,5]));