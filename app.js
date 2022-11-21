

function testCSS(){
    alert("Coming soon");
}

function testHTML(){
    alert("Coming soon");
}
function testJavaScript(){


    //fucetion ใช้ผู้ใช้เลือกกดปุ่ม OK cancle 
        let sel = confirm("Hello");
        if(sel){
            document.write("cancle");
        }else{
            console.log(testJavaScript());
            
        }
 
      ///////////////////////////////////////////////////////
      const tax = 0.07;
      let Money = 120+1;
      let price = 29.11;
      Name = "phon ";
      gg = 23;

    //Text
document.write(" <h1><i>Phonphiwat Kongthong</i></h1>");
document.write(Name, gg);

document.write("<h1><br> Array </br></h1>");
//Array
let num = Array("1","2","3","4","5");
let color =[" <br> red"," blue ","  black <br> "," yellow "];

document.write("<br> ตัวแรก ",num[0]," ตัวที่สาม ",num[2]);
document.write(" ตัวที่สอง ",num[1]);
document.write(color [0] ,color[1],color[2]);
document.write("<p> A=5 B=2</p>");


//Array

   //เรียงลำดับ ตัวเลข ตัวอัคษร
    let cons = [1 ,3,5 ,2 , 4 ];
    let con = cons.length;
    document.write("<br>ก่อนเรียง = ",cons);
    console.log(cons);
    document.write("<br>เรียงตังเลข = ", cons.sort());
    console.log(cons);

    let acsr = ["a","e","b","g","d","s" ];
    let lol = acsr.length;
    document.write("<br> ก่อนตัวอักษร = ",acsr);
    console.log(acsr);
    let result = acsr.sort();
    document.write("<br> เรียงตัวอักษร = ",result);
    console.log(result);

     //เรียงลำดับ ตัวเลข 
     //น้อยไม่มาก 
     let points = [-20,-10,-5,20,10,5];
     points.sort(function(t,y){
        return t-y;
     });
     document.write("<br> น้อยไปมาก = ",points);
     //มากไปนน้อย
     let point = [-20,-10,-5,20,10,5];
     point.sort(function(t,y){
        return y-t;
     });
     document.write("<br> มากไปน้อย = ",point);


//บวก ลบ คูณ หาร หาเศษ

const A = 5;
const B = 2;

document.write("ผลบวก= ",A+B);
document.write(" ผลคูณ= ",A*B);
document.write(" ผลหาร= ",A/B);
document.write(" ผลหาเสษ=",A%B);
//เปรียบเที่ยบ
document.write("<br> Aเท่ากับBหรือไม่= ",A==B);
document.write("<br> Aไม่เท่ากับBหรือไม่= ",A!=B);
document.write("<br> Aน้อยกว่าBหรือไม่= ",A<=B);
document.write("<br> Aมากกว่าBหรือไม่= ",A>=B,"<br>");

//Array โดยใช้ forEach
let para = ["แก้ปวด","แก้ไข้","แก้ท้องเสีย","แก้เวียนหัว<br>",];
para.forEach(item);
function item(get){
    document.write("<br>para = ",get);
}
//แปลง Array toString 
let ats = ["<br>แดง","ขาว","เหลือง","ดำ","น้ำเงิน","เขียว<br>"];
let g =ats.toString();
let m = ats.join(" | ");

document.write(g,m);

// การรวม Array
document.write("<br>ก่อนรวม Array");
let c1 = ["<br>iphone11","iphone12<br>"];
document.write(c1);
let c2 = ["iphone13","iphone14<br>"];
document.write(c2);
document.write("<br>หลังรวม Array");
let c3 = c1.concat(c2);
document.write(c3);

// If else for while switch case for loop
document.write("<h1><br> if ,if else ,for ,while ,switch case ,for loop </br></h1>");
//แจ้งระดับชั้น
let ae = 15;

if(ae<=15){
    if(ae==15){
        document.write("<br>ม.3 <br> Aeg <= 15 <br>");
    }else if(ae==14){
        document.write("<br>ม.2 <br> Aeg <= 14 <br>");
    }else if(ae==13){
        document.write("<br>ม.1 <br> Aeg <= 13 <br>");
    }else if(ae<=12){
        document.write("<br>ประถม <br> Aeg <= 12 <br>");
    }  
}
else{
    document.write("<br>ม.ปลาย <br> Aeg >= 15 ");
}

//เงื่อนไขเกรด
let score = 71 ;

if(score>100){
    document.write("เกรด = A <br>");
}
else if(score>70){
    document.write("เกรด = B <br>");
}
else if(score>60){
    document.write("เกรด = C <br>");
}
else if(score>50){
    document.write("เกรด = D <br>");
}
else if(score<49){
    document.write("เกรด = F <br>");
}


//ถอนเงิน
$ = 5000;
withDraw = 5000;

if(withDraw<=$ ){
    document.write("<br>ยอดที่ใช้ได้ = ",$);
    document.write("<br>ดำเนินการถอนเงิน = ",withDraw);
    $ = $-withDraw;
    document.write("<br>ยอดคงเหลือ =  ",$,"<br>");
}
else{
    document.write("<br>ยอดเงินไม่เพียงพอ  ");
}

//ใช้switch กำหนดเงื่อนไข เดือน
let month = 4
switch(month){
    case 1: document.write("<br>มกราคม  ");
    break;
    case 2: document.write(" <br>กุมภา  ");
    break;
    case 3: document.write(" <br>มีนา  ");
    break;
    case 4: document.write(" <br>เมษา <br> ");
    break;
    default: document.write("no info  ");

}
//การใช้for
//นับ 0-12
let i;
for (i= 0; i<13; i++) {
  document.write("",i,"<br>");
}
//เช็ค arrey โดยใช้ for
const fr = ["Apple, ", "Banana, ", "Orange, <br>"];
for (x of fr) {
  document.write("fruits = ",x);
}
//การใช้ for loop

let loop =["loop1","loop2","loop3","loop4","loop5<br>"];
for(i=0;i<loop.length;i++){
    document.write(" <br> loop = ",i," name = ",loop[i]);
    console.log(" <br> loop = ",i," name = ",loop[i]);
}

//การใช้while
let count = 1
while(count<=6){
document.write("<br>Hello",count,"<br>");
  if(count==3){
    break;
}
count++;
}
// function return ส่งต่าออก
document.write("<h1><br> Function </br></h1>");

function getaddress(){
    let add = "อุดรธานี";
    return add;
}
let adddress = getaddress();
document.write(" <br> ที่อยู่ ",adddress);

// function return รับและส่งต่าออก
function salary(salary){
    let bonus = 1000;
    return salary+bonus;
}
let sala = salary(55000);
sala -= 200;
document.write("<br> เงินเดือน-ค่าประกัน 200 =",sala);

function salary2(s,m){
    return s+m;
}
let sad = salary2(50000,3000);
sad -= 200;
document.write("<br> เงินเดือน-ค่าประกัน 200 =",sad);

function getName(city,lname){
    return city+lname;
}
let cl = getName(" ชื่อ............. "," ที่อยู่..............<br> ");
document.write("<br>",cl);

// function กำหยดค่าเริ่มต้น
function getdefault(F,L,C="ไม่ระบุ"){
    document.write("<br>ชื่อ ",F," นามสกุล ",L," ที่อยู่ ",C);
}
getdefault("พลพิวัฒน์","กองทอง","อุดรธานี");
getdefault("พลพิวัฒน์","กองทอง",);

function gettest(K="ไม่ระบุ"){
    document.write("<br>ชื่อ ",K);
}
gettest();

//Object
document.write("<h1><br>Object</h1></br>");

let product = {
    VGA : " RTX 3080ti<br>",
    BOARD : "H690<br>",
    CPU : "15 12400<br>",
    RAM : "corsai 32gb ddr5<br>",
    CASE : "T1 ",
    POWER : "corsair 850w<br>",
    SSD : "samsung <br>",

    //การเรียกใช้แบบที่1
    display:function(){
        return "<br>CPU = "+this.CPU+"Board = "+this.BOARD+"VGA = "+this.VGA+"RAM = "+this.RAM+"SSD = "+this.SSD+"Caes = "+this.CASE+"<br>";
    }
};
//การเรียกใช้แบบที่1
document.write(product.display());

document.write("--------------------------------------------------------------------------------------------")
//การเรียกใช้แบบที่2
document.write(
  "CPU = ", product.CPU,
  "Board = ", product.BOARD,
  "VGA = ", product.VGA,
  "RAM = ",product.RAM,
  "Power = ",product.POWER,
  "SSD = ",product.SSD,
  "CASE = "  ,product.CASE, 
   );

   



console.log("Hello");
console.error("ไวรัส");
console.warn("คำเตือน");

console.log(Name);
console.log("อายุ = ",gg);
console.log("vat =",tax);

console.log(Money);
console.log(price);

}










