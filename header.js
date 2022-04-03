let res;
let data;
async function header(){
    try{
         res=await fetch(`http://localhost:3000/header`);
         data=await res.json();
        console.log(data);
        showitems();
    }catch(err){
        console.log();
    }
}
header();
function showitems(){
    
    let image1=document.createElement("img");
    image1.src=data[0].image;
    image1.setAttribute("id","home_logo");

    let title1=document.createElement("p");
    title1.innerText=data[0].title;
    title1.setAttribute("id","home_p");

    document.getElementById("store_a").append(image1,title1);

    let image2=document.createElement("img");
    image2.src=data[1].image;
    image2.setAttribute("id","home_logo");

    let title2=document.createElement("p");
    title2.innerText=data[1].title;
    title2.setAttribute("id","home_p");

    document.getElementById("contact_a").append(image2,title2);


    let image3=document.createElement("img");
    image3.src=data[2].image;
    image3.setAttribute("id","name_logo");
    document.getElementById("name_logo").append(image3);

    let image4=document.createElement("img");
    image4.src=data[3].image;
    image4.setAttribute("id","page_logo");
    document.getElementById("page_logo1").append(image4);

    let image5=document.createElement("img");
    image5.src=data[4].image;
    image5.setAttribute("id","page_logo");
    document.getElementById("page_logo2").append(image5);

    let image6=document.createElement("img");
    image6.src=data[5].image;
    image6.setAttribute("id","page_logo");
    document.getElementById("page_logo3").append(image6);


    let cat1=document.createElement("p");
    cat1.innerText=data[6].title;
    cat1.setAttribute("id","cat_p");
    document.getElementById("mens").append(cat1);

    let cat2=document.createElement("p");
    cat2.innerText=data[7].title;
    cat2.setAttribute("id","cat_p");
    document.getElementById("women").append(cat2);

    let cat3=document.createElement("p");
    cat3.innerText=data[8].title;
    cat3.setAttribute("id","cat_p");
    document.getElementById("kids").append(cat3);

    let cat4=document.createElement("p");
    cat4.innerText=data[9].title;
    cat4.setAttribute("id","cat_p");
    document.getElementById("watch").append(cat4);

    let cat5=document.createElement("p");
    cat5.innerText=data[10].title;
    cat5.setAttribute("id","cat_p");
    document.getElementById("beauty").append(cat5);

    let cat6=document.createElement("p");
    cat6.innerText=data[11].title;
    cat6.setAttribute("id","cat_p");
    document.getElementById("homestop").append(cat6);

    let cat7=document.createElement("p");
    cat7.innerText=data[12].title;
    cat7.setAttribute("id","cat_p");
    document.getElementById("luxe").append(cat7);

    let cat8=document.createElement("p");
    cat8.innerText=data[13].title;
    cat8.setAttribute("id","cat_p");
    document.getElementById("gifts").append(cat8);

    let cat9=document.createElement("p");
    cat9.innerText=data[13].title;
    cat9.setAttribute("id","cat_p");
    document.getElementById("brands").append(cat9);

    let cat10=document.createElement("p");
    cat10.innerText=data[14].title;
    cat10.setAttribute("id","cat_p");
    document.getElementById("bargain").append(cat10);


    
}