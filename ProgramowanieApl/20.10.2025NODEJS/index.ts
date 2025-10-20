const pierwsza = function (){
    setTimeout(()=>console.log("To jest funkcja pierwsza"),2000);
}
const druga = function (){
    setTimeout(()=>console.log("To jest funkcja druga"),2000);
}
const trzecia = function (){
    setTimeout(()=>console.log("To jest funkcja trzecia"),2000);
}

pierwsza();
druga();
trzecia();