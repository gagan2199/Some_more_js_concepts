let colours=["red","blue","pink","grey","white","black","yellow"];

let rc= colours.reduce((nam,nam2)=>                  // will return single value
{
    return nam+" "+nam2;
})

console.log(rc);