class Product {
        constructor(tien) {
            this.tien = tien;
        }
    }
var nv1 = new Product(2500000);
var nv2 = new Product(2000000);
var nv3 = new Product(1500000);
var nv4 = new Product(1300000);
var nv5 = new Product(1300000);
var nv6 = new Product(1300000);
let arrProduct = [nv1, nv2, nv3, nv4, nv5, nv6];

function addToCart(id) {
    sumInt = +sum.innerText;
    sumInt += arrProduct[id].luong;
    sum.innerText = sumInt;
}

function summ()
{
	addToCart(0);
	addToCart(1);
	addToCart(2);
	addToCart(3);
	addToCart(4);
	addToCart(5);
	// alert("Tiền lương tháng này là: " + sum.innerText);
	// sum.innerText = 0;
}
function show()
{
	alert("Tiền lương tháng này là: " + sum.innerText);
	sum.innerText = 0;
}
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});
