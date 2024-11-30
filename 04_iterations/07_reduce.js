const myNums = [1,2,3]
const initialValue = 0
const total = myNums.reduce( (accumelator, currentvalue) => {
    // console.log(`acc: ${accumelator} , curval : ${currentvalue}`);
    return accumelator + currentvalue},initialValue )

// console.log(total);



const shoppingCart = [
    {
        itemName : 'Shoes',
        price : 499
    },
    {
        itemName : 'Speaker',
        price : 6499
    },
    {
        itemName : 'shirt',
        price : 350
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => (acc + item.price) ,  0 )
console.log(totalPrice);
