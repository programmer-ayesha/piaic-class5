
//use nested loop
for (let i= 0 ; i <3 ; i++){
    console.log("PARENT",i)

    break;

    for(let j= 0; j <4; j++){
        console.log("child loop", i)
    }
    
}