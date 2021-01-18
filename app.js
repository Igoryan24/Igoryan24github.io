// add to cart
let productsCountEl = document.getElementById("product-count");
/*console.log(productsCountEl)*/
let addToCartButtons = document.querySelectorAll(".add-cart");
/*console.log(addToCartButtons);*/

for(let i = 0;i < addToCartButtons.length;i++) {
    addToCartButtons[i].addEventListener("click",function () {
       productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

//modal

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".more-det");
let closeBtn = document.querySelector(".btn-close");

/*console.log(modal)
console.log(moreDetailsBtns)
console.log(closeBtn)*/

moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click",openModal)
})

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}
closeBtn.addEventListener("click",closeModal);

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})

function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll",showModalByScroll);
    }
}

window.addEventListener("scroll",showModalByScroll);

//like

let likeButtons = document.querySelectorAll(".like")

likeButtons.forEach((btn) => {
    btn.addEventListener("click",function() {
        this.classList.toggle("liked");
    })
})
