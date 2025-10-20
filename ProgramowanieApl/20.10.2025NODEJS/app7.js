//tworzenie własnego modułu 
//moduł pole figur
const wzory = [
    {figura: "kwadrat", wzor: "p=a^2"},
    {figura: "prostokat", wzor: "p=a*b"},
    {figura: "trojkat", wzor: "p=a*h/2"}
];

//export metod modułu pole figur
module.exports = {
    podajWzory(){
        console.log("\n Wzory pola figur: \n");
        for(let i = 0; i < wzory.length; i++){
            const item = wzory[i];
            console.log(item.figura + " " + item.wzor + "\n");
        }
        console.log("\n");
    },
    obliczPole(){

    }
}
