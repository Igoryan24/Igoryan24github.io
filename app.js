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

// change product-count 

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quantity input");

/*console.log(decrementBtns)
console.log(incrementBtns)
console.log(quantityValue)*/
/*let currentCount = +quantityValue.value;*/
let minCount = 1;
let maxCount = 10;

/*for(let i = 0;i < quantityValue.length;i++) {
    let currentCount = +quantityValue[i].value;
    toggleButtonState(currentCount,decrementBtns[i],incrementBtns[i]);
}*/

/*quantityValue.forEach(() => {
    let currentCount = +quantityValue.value;
    toggleButtonState(currentCount,decrementBtns,incrementBtns);
    console.log(quantityValue)
});

function toggleButtonState(count,decrementBtn,incrementBtn) {
    decrementBtn.disabled = count <= minCount;
    incrementBtn.disabled = count >= maxCount;
}*/

/*toggleDecrementState(currentCount);

function toggleDecrementStata(count) {
    if(count <= 1) {
        decrementBtns.disabled = true;
    } else {
        decrementBtns.disabled = false;
    }
}
toggleDecrementState(currentCount);*/

/*for(let i = 0;i < incrementBtns.length;i++) {
    incrementBtns[i].addEventListener("click",function () {
        let currentCount = +quantityValue[i].value;
        let nextCount = currentCount + 1;
        quantityValue[i].value = nextCount;
       
        toggleButtonState(nextCount,decrementBtns[i],incrementBtns[i]);
    })
}

for(let i = 0;i < decrementBtns.length;i++) {
    decrementBtns[i].addEventListener("click",function () {
        let currentCount = +quantityValue[i].value;
        let nextCount = currentCount - 1;
        quantityValue[i].value = nextCount;
        
        toggleButtonState(nextCount,decrementBtns[i],incrementBtns[i]);
        
    })
}*/
/*incrementBtns.forEach((incrementBtns) => {
    incrementBtns.addEventListener("click", function () {
        let currentCount = +quantityValue.value;
        let nextCount = currentCount + 1;
        quantityValue.value = nextCount;
        
        toggleButtonState(nextCount,decrementBtns[i],incrementBtns[i]);
        console.log(incrementBtns)
    })
})

decrementBtns.forEach((decrementBtns) => {
    decrementBtns.addEventListener("click", function() {
        let currentCount = +quantityValue.value;
        let nextCount = currentCount - 1;
        quantityValue.value = nextCount;
    
        toggleButtonState(nextCount,decrementBtns,incrementBtns);
        console.log(decrementBtns)
    })
})*/

    //function constructor change product quantity

    function Counter(incrementBtn,decrementBtn,inputField,minCount = 1,maxCount = 10) {

        this.domRefs = {
            incrementBtn,
            decrementBtn,
            inputField,
        }
        this.toggleButtonState = function () {
            let count = this.domRefs.inputField.value;
            this.domRefs.decrementBtn.disabled = count <= minCount;
            this.domRefs.incrementBtn.disabled = count >= maxCount;
        }
        this.toggleButtonState();

        this.increment = function() {
            let currentCount = +this.domRefs.inputField.value;
            let nextCount = currentCount + 1;
            this.domRefs.inputField.value = nextCount;
        
            this.toggleButtonState()
        }

        this.decrement = function() {
            let currentCount = +this.domRefs.inputField.value;
            let nextCount = currentCount - 1;
            this.domRefs.inputField.value = nextCount;
        
            this.toggleButtonState()
        }
        
        this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
        this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
        
    }

    for(let i = 0;i < quantityValue.length;i++) {
        const counter = new Counter(incrementBtns[i],decrementBtns[i],quantityValue[i]); 
    }
    /*quantityValue.forEach((quantityValue) => {
        const counter = new Counter(incrementBtns,decrementBtns,quantityValue); 
    });*/

    // Slider 
    $(".slider-block").slick({
        dots:true,
        arrows: true,
    });



