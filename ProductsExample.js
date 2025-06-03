
// Products 
// let Products = [

//     {productName:"laptop",name:"Dell",price:20000,category:"electronics",Product_id:1},
//      {productName:"Shirt",name:"Outfiters",price:1000,category:"clothing",Product_id:2},
//       {productName:"Machine",name:"HairMachine",price:2000,category:"electronics",Product_id:3}

// ]

//   filter,map,reduce
// return new array based on the condition
// FilteredData = [    {productName:"laptop",name:"Dell",price:20000,category:"electronics",Product_id:1},  {productName:"Machine",name:"HairMachine",price:2000,category:"electronics",Product_id:3}  ]
// lez

// console.log(FilteredData);


//  map 
let Products = [

    {productName:"laptop",name:"Dell",price:20000,category:"electronics",Product_id:1},
     {productName:"Shirt",name:"Outfiters",price:1000,category:"clothing",Product_id:2},
      {productName:"Machine",name:"HairMachine",price:2000,category:"electronics",Product_id:3}

]

// let ReturnSomeProperties ["Dell","Outfiters",'HairMachine']
let ReturnSomeProperties = Products.map((productsss)=> {
    return {ProudctName:productsss.name,ProductPrice:productsss.price};
})

console.log(ReturnSomeProperties)




// we printed an property based on condition 

// let Products = [

//     {productName:"laptop",name:"Dell",price:20000,category:"electronics",Product_id:1},
//      {productName:"Shirt",name:"Outfiters",price:1000,category:"clothing",Product_id:2},
//       {productName:"Machine",name:"HairMachine",price:2000,category:"electronics",Product_id:3}

// ]

// // let ReturnSomeProperties ["Dell","Outfiters",'HairMachine']
// let ReturnSomeProperties = Products.map((productsss)=> {
//     if(productsss.name == "Dell")    {
//         return productsss.name
//     }
// })

// console.log(ReturnSomeProperties[0])

// // use loop on ReturnSomeProperties and use condition in the loop when condition match then console.log() that position of array;
