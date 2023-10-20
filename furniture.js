let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  next();
});
const port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let products = [
  {
    prodCode: "DS2S245",
    category: "Dining",
    desc: ["Two seater Dining Set", "Built from High quality wood", "1 year warranty"],
    img: "https://ii1.pepperfry.com/media/catalog/product/a/v/1100x1210/avian-sheesham-wood-2-seater-dining-set-in-provincial-teak-finish-avian-sheesham-wood-2-seater-dinin-tfta0z.jpg",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 2 },
    ],
    title: "Two seater Dining Set",
  },
  {
    prodCode: "DS6S761",
    category: "Dining",
    desc: [
      "Six Seater Dining Set in	Antique	Cherry Colour",
      "Assembly by Skilled Carpenters",
      "Made from Teak wood",
    ],
    img: "https://www.ulcdn.net/images/products/476617/slide/666x363/Brighton-Oribi_4_Seater_Upholstered_Bench_Dining_Table_Set_TK_WB_02_3.jpg?1646730752",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
      { ingName: "Bench", qty: 1 },
    ],
    title: "Six Seater Dining Set",
  },
  {
    prodCode: "DS4S177",
    category: "Dining",
    desc: [
      "Mild Steel Four Seater Dining Set in Black Colour",
      "Knock-down construction for easy transportation",
    ],
    img: "https://d1wc69nzx5ojwh.cloudfront.net/catalog/product/cache/2c7fa294d57090ee456930df120451a9/1/8/182142101_182143101_143402168.webp",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
    ],
    title: "Mild Steel Dining Set",
  },
  {
    prodCode: "DC2S705",
    category: "Dining",
    desc: [
      "Solid Wood Dining Chair Set of Two in Dark Walnut Colour",
      "Beautiful design	carved	on	dining	chair",
      "Dining chair	seat upholstered in	dark brown Fabric",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/h/u/1100x1210/huckleberry-set-of-2-dining-chair-in-walnut-colour-by-estre-huckleberry-set-of-2-dining-chair-in-wal-ti1hlj.jpg",
    ingredients: [{ ingName: "Chair", qty: 2 }],
    title: "Dining Chair Set",
  },
  {
    prodCode: "BN1S388",
    category: "Dining",
    desc: [
      "Solid Wood Dining Bench in Dark Walnut Colour",
      "Comfortable bench for a relaxed dinner",
    ],
    img: "https://www.home-designing.com/wp-content/uploads/2019/09/Modern-Dining-Bench-Hair-Pin-Legs-Grey-Upholstered-Seat-Cushion-Faux-Leather-Wood-Base-600x393.jpg",
    ingredients: [{ ingName: "Bench", qty: 1 }],
    title: "Dining Bench",
  },
  {
    prodCode: "SF2S532",
    category: "Drawing",
    desc: [
      "Characteristic Rising Track Arm Rest Design",
      "Premium High Gloss Leatherette Upholstery",
      "Independent Headrest	And	Lumber Support",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/a/n/1250x625/andres-2-seater-sofa-in-beige-colour-by-woodsworth-andres-2-seater-sofa-in-beige-colour-by-woodswort-bi5oqc.jpg",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two Seater Sofa",
  },
  {
    prodCode: "SF2S206",
    category: "Drawing",
    desc: ["Two	Seater Sofa	in	Blue Colour", "Assembly	by	Skilled	Carpenters"],
    img: "https://ii1.pepperfry.com/media/catalog/product/b/a/1250x625/bali-fabric-2-seater-sofa-in-jeans-blue-colour-bali-fabric-2-seater-sofa-in-jeans-blue-colour-zfqd1h.jpg",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two	Seater Sofa",
  },
  {
    prodCode: "SFBD311",
    category: "Drawing",
    desc: [
      "Sofa	Cum	bed	in	Brown Colour",
      "Ply-wood	construction with hand polished finish",
      "Removable fabric	cover on best quality foam mattress",
      "Throw cushions and bolsters come	with the product",
    ],
    img: "https://ii1.pepperfry.com/media/catalog/product/s/t/1250x625/strasbourg-sheesham-wood-pull-out-2-seater-sofa-cum-bed-in-provincial-teak-finish---yellow-cushions--8p3fcf.jpg",
    ingredients: [
      { ingName: "Sofa", qty: 1 },
      { ingName: "Cushions", qty: 2 },
    ],
    title: "Sofa cum Bed",
  },
  {
    prodCode: "BDQS381",
    category: "Bedroom",
    desc: [
      "Wood	Box	Storage	King Size Bed in Wenge colour",
      "Box Storage included for Maximum space utilization",
      "Mattress	is included",
    ],
    img: "https://m.economictimes.com/thumb/msid-99768075,width-1500,height-1300,resizemode-4,imgsize-123788/1.jpg",
    ingredients: [
      { ingName: "Bed", qty: 1 },
      { ingName: "Mattress", qty: 2 },
    ],
    title: "King size Bed",
  },
  {
    prodCode: "BDQS229",
    category: "Bedroom",
    desc: [
      "Wood	Hydraulic Storage Queen Size Bed",
      "Half	hydraulic storage",
      "Superior	E2 grade MDF used with melamine	finish",
    ],
    img: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    ingredients: [{ ingName: "Bed", qty: 1 }],
    title: "Queen size Bed",
  },
  {
    prodCode: "ST1T425",
    category: "Study",
    desc: [
      "Wood	Study Table	in Walnut Colour",
      "Assembly	by Skilled Carpenters",
      "Built from High Quality	Wood",
    ],
    img: "https://www.greensoul.online/cdn/shop/products/VenueStudyTable8.3.jpg?v=1672935544",
    ingredients: [{ ingName: "Study	Table", qty: 1 }],
    title: "Study Table",
  },
  {
    prodCode: "ST1T588",
    category: "Study",
    desc: [
      "	Wood Study	Table in Highgloss White & Blue	Colour",
      "Study table comes with bookshelf	on top,	5 drawers &	1 open shelf",
      "Superior	quality	MDF	with stain resistant melamine finish",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87AFzpMP7rEfDCR8Y0mbbnRpD7TAQv9fYb-sFhUdAC4suzMdUv1hsF7MjGVlxmtJq24w&usqp=CAU",
    ingredients: [{ ingName: "Study	Table", qty: 1 }],
    title: "Study Table",
  },
];

const users=[
    {email:"email@test.com",password:"12345",role:"user"},
    {email:"admin@gmail.com",password:"admin",role:"admin"},
]

app.post("/login",function(req,res){

    let body=req.body;
    console.log(body);
    let user = users.find((usr)=>usr.email===body.email && usr.password===body.password);
    console.log(user);
    res.json({
        email:user.email,
        role:user.role
    })

})


app.get("/product/:category",function(req,res){
  let {category}=req.params;
  let prod= products.filter((pr)=>pr.category===category)
  res.send(prod)

})

app.get("/GET/products/:id",function(req,res){
  let id= req.params.id;
  console.log(id);
  let prod= products.find((pr)=>pr.prodCode===id)
    res.send(prod)
});

app.get("/products",function(req,res){
    
    res.send(products)

});





app.post("/products",function(req,res){
  let body = req.body;
  products.push(body)

});

app.put("/PUT/products/:id/edit",function(req,res){
  let body = req.body;
  let id= req.params.id;
  console.log("In Put");
  let index= products.findIndex((pr)=>pr.prodCode===id);
  if(index>=0){
    products[index] = body;
    res.send(body)
  }
  else{
    res.status(404).send("No product Found")
  }
  
  

})

app.delete("/products/:id/delete",function(req,res){
  let body = req.body;
  let id= req.params.id;
  let index= products.findIndex((pr)=>pr.prodCode===id);
  if(index>=0){
    products.splice(index,1)
    res.send(body)
  }
  else{
    res.status(404).send("No product Found")
  }
  
  

})