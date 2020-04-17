function findPos(obj) {
	var curtop = 0;
	if (obj.offsetParent) {
		do {
			curtop += obj.offsetTop;
		} while ((obj = obj.offsetParent));
		return [curtop];
	}
}



function doScroll() {
	console.log("test");
	window.scrollTo({
		top: findPos(document.getElementById("image-list")) - 100,
		left: 0,
		behavior: "smooth",
	});
}
