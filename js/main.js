function shoesGallery(price, size, stock, image) {
	this.price = price
	this.size = size
	this.stock = stock
	this.image = image
}

var shoe1 = new shoesGallery("$79.99", "8-14", 20, "img/1.jpg")
var shoe2 = new shoesGallery("$89.99", "8-13", 25, "img/2.jpg")
var shoe3 = new shoesGallery("$68.99", "8-13", 30, "img/3.jpg")
var shoe4 = new shoesGallery("$57.99", "8-12", 35, "img/4.jpg")
var shoe5 = new shoesGallery("$99.99", "8-14", 22, "img/5.jpg")
var shoe6 = new shoesGallery("$49.99", "8-13", 15, "img/6.jpg")
var shoe7 = new shoesGallery("$58.99", "8-15", 40, "img/7.jpg")
var shoe8 = new shoesGallery("$67.99", "8-14", 25, "img/8.jpg")
var shoe9 = new shoesGallery("$73.99", "8-13", 30, "img/9.jpg")
var shoe10 = new shoesGallery("$88.99", "8-12", 13, "img/10.jpg")
var shoe11 = new shoesGallery("$55.99", "8-16", 16, "img/11.jpg")
var shoe12 = new shoesGallery("$87.99", "8-14", 24, "img/12.jpg")
var shoe13 = new shoesGallery("$73.99", "8-13", 30, "img/13.jpg")
var shoe14 = new shoesGallery("$88.99", "8-12", 13, "img/14.jpg")
var shoe15 = new shoesGallery("$55.99", "8-16", 16, "img/15.jpg")
var shoe16 = new shoesGallery("$87.99", "8-14", 24, "img/16.jpg")

console.log(shoesGallery)

var shoesArray = []
shoesArray.push(shoe1)
shoesArray.push(shoe2)
shoesArray.push(shoe3)
shoesArray.push(shoe4)
shoesArray.push(shoe5)
shoesArray.push(shoe6)
shoesArray.push(shoe7)
shoesArray.push(shoe8)
shoesArray.push(shoe9)
shoesArray.push(shoe10)
shoesArray.push(shoe11)
shoesArray.push(shoe12)
shoesArray.push(shoe13)
shoesArray.push(shoe14)
shoesArray.push(shoe15)
shoesArray.push(shoe16)


for (var i = 0; i < shoesArray.length; i++) {
	var sprice = document.createTextNode("Price: " + shoesArray[i].price)
	var ssize = document.createTextNode("Size: " + shoesArray[i].size)
	var sstock = document.createTextNode("In Stock: " + shoesArray[i].stock)
	var simage = shoesArray[i].image
	var buyNow = document.createTextNode("Buy Now")


	var newRow = document.createElement("div")
	var newCol = document.createElement("div")
	var newImage = document.createElement("img")
	var newHover = document.createElement("div")
	var newPrice = document.createElement("h4")
	var newSize = document.createElement("h4")
	var newStock = document.createElement("h4")
	var newButton = document.createElement("button")

	

	
	newPrice.appendChild(sprice)
	newSize.appendChild(ssize)
	newStock.appendChild(sstock)
	newButton.appendChild(buyNow)

	newImage.src = simage
	newImage.className = "img-responsive"
	newButton.className = "btn btn-danger"
	newCol.className = "col-sm-3"
	newRow.className = "shoe" + i
	newHover.className = "hoverAction"
	



	newHover.appendChild(newPrice)
	newHover.appendChild(newSize)
	newHover.appendChild(newStock)
	newHover.appendChild(newButton)
	newCol.appendChild(newImage)
	newCol.appendChild(newHover)
	newRow.appendChild(newCol)

	document.getElementById("shoes").appendChild(newRow)



}
