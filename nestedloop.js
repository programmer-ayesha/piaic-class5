//use nested loop
for (var i = 0; i < 3; i++) {
    console.log("PARENT", i);
    break;
    for (var j = 0; j < 4; j++) {
        console.log("child loop", i);
    }
}
