let wrapper = document.querySelector(".sliderWrapper");
let menuItem = document.querySelectorAll(".menuItem");



const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
];

menuItem.forEach((item,index) => {
    item.addEventListener("click",() => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

    });
});

//homepage



//   let choosenProduct = products[0];
  
//   let currentProductImg = document.querySelector(".productImg");
//   let currentProductPrice = document.querySelector(".productPrice");
//   let currentProductTitle = document.querySelector(".productTitle");
//   let currentProductColors = document.querySelectorAll(".color");
//  let currentProductSizes = document.querySelectorAll(".size");
  

//payment button click topup apear

const productButton = document.querySelector(".buyButton");//product name
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
});

close.addEventListener("click",()=>{
  payment.style.display="none"
});


// //fatch data from product.json

// let productss = null;
// fetch('api/product.json')
// .then(Response => Response.json())
// .then(data => {
//   productss=data;
//   console.log(productss);
//   addDataTOHTML();
// });

// //add product to html

// let listproduct = document.querySelector('.listProduct');
// function addDataTOHTML(){
//   productss.forEach(productss => {
//     //create new alement item
//     let newProduct= document.createElement('a');
//     newProduct.href = '/detail.html?id='+productss.id;
//     newProduct.classList.add('item');
//     newProduct.innerHTML = `
//     <img src="${productss.image}" >
//     <h2>${productss.name}</h2>
//     <div class="price">${productss.price}</div>
//     `;
//     //add this element in list
//     listproduct.appendChild(newProduct);
//   })
// }