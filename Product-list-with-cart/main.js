
class dessert{
    constructor(name = "", description = "", price = 0, urlimg = "",id="",quantity=0) {
        this.name=name;
        this.description=description
        this.price=price;
        this.urlimg=urlimg;
        this.id=id;
        this.quantity=quantity;
    }
    increseQuantity() {return this.quantity++;}
    decreseQuantity(){return this.quantity--;}
    urlmobil(){
       return this.urlimg+"-mobile.jpg";
    }
    urltablet(){
       return this.urlimg+"-tablet.jpg";
    }
    urldesktop(){
       return this.urlimg+"-desktop.jpg";
    }
    urlthumbnail(){
        return this.urlimg+"-thumbnail.jpg";
    }
    totalPrice(){return this.quantity*this.price}
}
let waffle= new dessert();
waffle.id=1;
waffle.name="Waffle";
waffle.description="Waffle with Berries";
waffle.price= 6.50;
waffle.urlimg="assets/images/image-waffle";

let creeme_bruelle= new dessert();
creeme_bruelle.id=2;
creeme_bruelle.name="Crème Brûlée";
creeme_bruelle.description="Vanilla Bean Crème Brûlée";
creeme_bruelle.price=7;
creeme_bruelle.urlimg="assets/images/image-creme-brulee";

let macaron= new dessert();
macaron.id=3;
macaron.name="Macaron";
macaron.description="Macaron Mix of Five";
macaron.price=8;
macaron.urlimg="assets/images/image-macaron";

let tiramisu= new dessert();
tiramisu.id=4;
tiramisu.name="Tiramisu";
tiramisu.description="Classic Tiramisu";
tiramisu.price=5.5;
tiramisu.urlimg="assets/images/image-tiramisu";

let baklava= new dessert();
baklava.id=5
baklava.name="Baklava";
baklava.description=" Pistachio Baklava";
baklava.price=4;
baklava.urlimg="assets/images/image-baklava";

let pie= new dessert();
pie.id=6;
pie.name="Pie";
pie.description="Lemon Meringue Pie";
pie.price=5;
pie.urlimg="assets/images/image-meringue";

let cake= new dessert();
cake.id=7
cake.name="Cake";
cake.description="Red Velvet Cake";
cake.price=4.5;
cake.urlimg="assets/images/image-cake";

let brownie= new dessert();
brownie.id=8;
brownie.name="Brownie";
brownie.description="Salted Caramel Brownie";
brownie.price=4.5;
brownie.urlimg="assets/images/image-brownie";

let pana_cota= new dessert();
pana_cota.id=9
pana_cota.name="Panna Cotta";
pana_cota.description="Vanilla Panna Cotta";
pana_cota.price=6.5;
pana_cota.urlimg="assets/images/image-panna-cotta";

let listDessert=[waffle,creeme_bruelle,macaron,tiramisu,baklava,pie,cake,brownie,pana_cota];
let dessertSelect=[];
const container_dessert=document.querySelector('.container__desserts');
const  container_cart=document.querySelector('.container__cart-selected');
const modal_cart=document.querySelector('.modal__cart-selected');
const templade_item=document.querySelector('.container__dessert');
const templade_cart=document.querySelector('.container__cart-template');
const cart_order=document.querySelector('.container__cart-order');
const complete_button=document.querySelector('.container__cart-button');
const modal=document.querySelector('.modal');
const new_order=document.querySelector('.new_order');
fillcontainer();
add();
complete_button.addEventListener('click',()=>{
    modal.showModal();
    fillModal();

})

new_order.addEventListener('click',()=>{
    modal.close();
    dessertSelect.length = 0;
    listDessert.forEach(e => e.quantity = 0);
    fillCart();
    document.querySelector('.numberList').textContent = 0;
    cart_order.querySelector('span').textContent = 0;
    container_dessert.querySelectorAll('.button-dessert').forEach(btn=>{
        btn.classList.remove('hiden','selected__button');
        
    });
    container_dessert.querySelectorAll('.button-dessert2').forEach(div=>{
        div.classList.add('hiden');
        div.querySelector('.add_cart').textContent="1";
    });
    container_dessert.querySelectorAll('.img-dessert').forEach(img=>{
        img.classList.remove('selected');
    });
})
function add(){
    const buttons_add_cart=container_dessert.querySelectorAll('.button-dessert')
    buttons_add_cart.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            btn.parentElement.querySelector('img').classList.add('selected');
            btn.classList.add('selected__button');
            let id=btn.parentElement.parentElement.dataset.id;
            addDessert(Number(id)); 
            document.querySelector('.numberList').textContent=globalQuantity()  ;
            cart_order.querySelector('span').textContent=globalPrice().toFixed(2);
            //Bnt before clicked
            btn.classList.add('hiden');
            btn.parentElement.querySelector('button-dessert2').classList.remove('hiden');
        });

    })
    const buttons_add=container_dessert.querySelectorAll('.more');
    buttons_add.forEach(btn=>{
        btn.addEventListener('click',()=>{
            console.log(btn);
            console.log(dessertSelect);
            console.log(btn.parentElement)
            let id=btn.parentElement.parentElement.parentElement.dataset.id;
            addDessert(Number(id));
            let el =dessertSelect.find(e=>e.id===Number(id));
            const quantity_Card=btn.parentElement.querySelector('.add_cart');
            quantity_Card.textContent=el.quantity;
            document.querySelector('.numberList').textContent=globalQuantity()  ;
            cart_order.querySelector('span').textContent=globalPrice().toFixed(2);
        })

    });
    const buttons_less=container_dessert.querySelectorAll('.less');
    buttons_less.forEach(btn=>{
        btn.addEventListener('click',()=>{
            console.log(btn);
            console.log(dessertSelect);
            console.log(btn.parentElement)
            let id=btn.parentElement.parentElement.parentElement.dataset.id;
            let el =dessertSelect.find(e=>e.id===Number(id));
            if(el.quantity===1){
                btn.parentElement.classList.add('hiden');
                btn.parentElement.parentElement.querySelector('.button-dessert').classList.remove('hiden');
                btn.parentElement.parentElement.querySelector('.button-dessert').classList.remove('selected__button');
                btn.parentElement.parentElement.querySelector('img').classList.remove('selected');
                
            }
            removeDesser(Number(id));
            let el2 =dessertSelect.find(e=>e.id===Number(id));
            const quantity_Card=btn.parentElement.parentElement.querySelector('.add_cart');
            quantity_Card.textContent=el2.quantity;
            document.querySelector('.numberList').textContent=globalQuantity()  ;
            cart_order.querySelector('span').textContent=globalPrice().toFixed(2);
        })

    });

}

function globalPrice(){
    return dessertSelect.reduce((total, e) => total + e.totalPrice(), 0);
}
function globalQuantity(){
    return dessertSelect.reduce((total, e) => total + e.quantity, 0);
}
function removeDesser(id){
    let el=listDessert.find(e=>e.id===id);
    let quantity_el=el.quantity;
    if(quantity_el>1){
        el.decreseQuantity();
    }
    else{
        let index = dessertSelect.findIndex(obj => obj.id === id);
        dessertSelect.splice(index,1);
        el.quantity = 0; // reseteamos la cantidad
        
    }
    fillCart(); // <-- refresca el carrito
}
function addDessert(id){
    let el=listDessert.find(e=>e.id===id);
    if(dessertSelect.find(e=>e===el)){
        el.increseQuantity();
    }
    else{
        el.increseQuantity();
        dessertSelect.push(el);
    }
    fillCart(); // <-- refresca el carrito

}
templade_modal=document.querySelector('.modal__cart-template');
function fillModal(){
  modal_cart.innerHTML = ""; // limpia el modal
  dessertSelect.forEach(e=>{
    const clone=templade_modal.content.cloneNode(true);
    const img=clone.querySelector('.thumbnail')
    const name=clone.querySelector('.modal-item-description-name');
    const quantity=clone.querySelector('.modal-count');
    const price=clone.querySelector('.modal-price');
    const totalprice=clone.querySelector('.modal-totalprice');
    const globalPrices=document.querySelector('.priceglobal')
    img.src=e.urlthumbnail();
    name.textContent=e.description;
    quantity.textContent=`${e.quantity}x`;
    price.textContent=`@$${e.price.toFixed(2)}`;
    totalprice.textContent=`$${(e.price*e.quantity).toFixed(2)}`;
    globalPrices.textContent=globalPrice().toFixed(2);

    modal_cart.appendChild(clone);
  });
}


function fillCart(){
    if(dessertSelect.length>0){
        document.querySelector('.container__cart-empty').classList.add('hiden');
        document.querySelector('.container__cart-order').classList.remove('hiden');
        container_cart.innerHTML = ""; // limpia el carrito antes
        dessertSelect.forEach(e=>{
            const clone=templade_cart.content.cloneNode(true);
            const name=clone.querySelector('.container__cart-item-description-name');
            const quantity=clone.querySelector('.container__cart-count');
            const price=clone.querySelector('.container__cart-price');
            const totalprice=clone.querySelector('.container__cart-totalprice');
            name.textContent=e.description;
            quantity.textContent=`${e.quantity}x`;
            price.textContent=`@$${e.price.toFixed(2)}`;
            totalprice.textContent=`$${(e.price*e.quantity).toFixed(2)}`;
            const remove_button=clone.querySelector('.container__cart-item-delete');
            remove_button.addEventListener('click',()=>{
                e.quantity=1;
                removeDesser(Number(e.id));
                 // actualizar también la card del producto en la lista principal
                document.querySelectorAll('.tmre').forEach(div => {
                    if (Number(div.dataset.id) === e.id) {
                        div.querySelector('.button-dessert2').classList.add('hiden');
                        div.querySelector('.button-dessert').classList.remove('hiden');
                        div.querySelector('.button-dessert').classList.remove('selected__button');
                        div.querySelector('img').classList.remove('selected');
                        document.querySelector('.numberList').textContent=globalQuantity()  ;

                    }
                });
            })    
            container_cart.appendChild(clone);
        });
    }
    else{
        document.querySelector('.container__cart-selected').innerHTML="";
        document.querySelector('.container__cart-empty').classList.remove('hiden');
        document.querySelector('.container__cart-order').classList.add('hiden');
    }
}   
function fillcontainer(){
    listDessert.forEach(e=>{
        const clone=templade_item.content.cloneNode(true);
        const id=clone.querySelector(".tmre");
        const name=clone.querySelector('.container__dessert-name');
        const description=clone.querySelector('.container__dessert-description');
        const price=clone.querySelector('.container__dessert-price');
        const img=clone.querySelector('.img-dessert');
        const pictue=clone.querySelector('.picture');
        pictue.srcset=e.urldesktop();
        //falla esta parte
      
        //xd
        id.dataset.id=e.id;
        name.textContent=e.name;
        description.textContent=e.description;
        price.textContent=`$${e.price.toFixed(2)}`;
        img.src=e.urlmobil();
        container_dessert.appendChild(clone);
    });
}


