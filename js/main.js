

// let header = document.createElement("header")

// header.className = header


// document.querySelector("main").prepend(header)






let button = document.createElement("button")

button.id = "btn"

button.innerHTML = "send"



document.querySelector("main").prepend(button)


let box = document.getElementById('main_div')

let input = document.createElement("input")

input.id = "inp"

document.querySelector("main").prepend(input)








let arr = [

	{nkar:"https://www.mobilecentre.am/img/prodpic/114231.jpg",name:"Iphone11",preace:"249,900դր.",color:"Blue"},

	{nkar:"https://www.mobilecentre.am/img/prodpic/a96a2fc2c5c6aae33ef8WWEN_iPhone14ProMax_Q422_Deep-Purple_PDP-IMAGES_Position-1a.jpg",name:"Iphone14 Pro",preace:"669,900դր.",color:"Deep Purple"},

	{nkar:"https://www.mobilecentre.am/img/prodpic/8262b7a11c18ddd36798%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__13_.png",name:"Samsung galaxy s 22",preace:"583,900դր.",color:"Gray"},

	{nkar:"https://www.mobilecentre.am/img/prodpic/c945729707428d9b7e2dNew_Project_-_2021-09-11T161755.233.png",name:"redmi10",preace:"140,900դր",color:"Gray"},

	{nkar:"https://www.mobilecentre.am/img/prodpic/101691.jpg",name:"Iphone8",preace:"209,900դր.",color:"Red"},

	{nkar:"https://www.mobilecentre.am/img/prodpic/103040.jpg",name:"PNnokia",preace:"12,900դր.",color:"Gray"},

	{nkar:"https://www.mobilecentre.am/img/prodpic/fd094d2cb231467c9b27%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__12_.png",name:"Samsung galazy Z flip",preace:"499,900դր.",color:"Black"},

	{nkar:"https://www.mobilecentre.am/img/prodpic/d4041ee6de32dfb530fd%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__53_.png",name:"Samsung A03",preace:"63,900դր.",color:"Blue"},






]

function crate(arr){



	for (let i = 0; i < arr.length; i++) {

		let div = document.createElement("div")

		div.className = "div"


		let img = document.createElement("img")

		img.src=arr[i].nkar


		div.append(img)

		let p1 = document.createElement("p")

		p1.innerHTML = arr[i].name

		div.append(p1)

		document.getElementById("main_div").append(div)


		let p2 = document.createElement("p")

		p2.innerHTML = arr[i].preace

		div.append(p2)

		let p3 = document.createElement("p")

		p3.innerHTML = arr[i].color

		div.append(p3)


	}

}

crate(arr)



button.addEventListener("click", function(){

	document.getElementById("main_div").innerHTML = " "


	let search = document.getElementById("inp")

	console.log(search)

	let ar = arr.filter((item) => {return item.name.indexOf(search.value)!== -1})

	crate(ar)

	console.log(ar)

})

























