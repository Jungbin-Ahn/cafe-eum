MENU  = [
    {
        name: '아이스 아메리카노',
        price: 4,
    },
    {
        name: '핫 아메리카노',
        price: 4,
    },
    {
        name: '아이스 흑당 라떼',
        price: 5,
    },
    {
        name: '아이스 유자 에이드',
        price: 4,
    },
    {
        name: '아이스 매실 에이드',
        price: 4,
    },
    {
        name: '달란트',
        price: '',
    },
];

const menu1Button = document.querySelector(".menu :nth-child(1)")
const menu2Button = document.querySelector(".menu :nth-child(2)")
const menu3Button = document.querySelector(".menu :nth-child(3)")
const menu4Button = document.querySelector(".menu :nth-child(4)")
const menu5Button = document.querySelector(".menu :nth-child(5)")
const menu6Button = document.querySelector(".menu :nth-child(6)")


function sendToOrder(order){
    let newOrder = order.name;
    newOrder.count += 1;
    ORDERLIST.push(newOrder);
    console.log("order sent")
}



menu1Button.addEventListener("click", sendToOrder());
menu2Button.addEventListener("click", sendToOrder);
menu3Button.addEventListener("click", sendToOrder);
menu4Button.addEventListener("click", sendToOrder);
menu5Button.addEventListener("click", sendToOrder);
menu6Button.addEventListener("click", sendToOrder);