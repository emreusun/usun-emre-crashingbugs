
// a module is a javascript "pattern" -a programming convention
// this keeps your code private - kinda like a "black box" - which is best practice

(() => {
//identify the nodes of interest in the DOM
const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
			dropcontainer = document.querySelector(".puzzle-board"),
			dragImages = document.querySelectorAll(".puzzle-image"),
			dropzones = document.querySelectorAll(".drop-zone"),
      dragContainer = document.querySelector(".puzzle-pieces");
	// functions go in the middle
	pieceName = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	function swapImages () {
		let currentIndex = this.dataset.imageref;

		dragImages.forEach((image, index) => {
		 image.src = `images/dd/${pieceName [index] + currentIndex}.jpg`;
	 });

		// swap out the draggable thumbnail Images
		// update the background image of the drop zone dropcontainer
		// 1. get the imageref attribute from the element we're clicking on

		//let imageIndex = this.dataset.imageref,
		    //newImagePath = "images/dd/backgGround" + imageIndex,
			//	newImagePath = `url(images/dd/backgGround${imageIndex}.jpg)`;
      // 2.set the bakcground image of the dropcontainer
      dropcontainer.style.backgroundImage = `url(images/dd/backGround${this.dataset.imageref}.jpg)`;
		//debugger;
		resetImages();
	}
 function resetImages() {
	 dropzones.forEach(zone => {

if ( zone.children.length > 0) {
	dragContainer.appendChild(zone.firstElementChild);
}

	  })
 }

	function startDrag() {
		console.log('dragging ' + this.id);
		// save reference to the element the user is dragging
		// we can retrive the element later and put it in da drop zone
		event.dataTransfer.setData("dragTarget", this.id);

	}

	function draggedOver(event) {
		event.preventDefault();
		console.log('dragging over drop zone elements');
	}

	function dropped(event) {
		event.preventDefault();

		if(this.children.length > 0) { return; }


	let targetImage = document.querySelector(`#${event.dataTransfer.getData("dragTarget")}`);

	this.appendChild(targetImage);
	targetImage.style.width ="100%";
	targetImage.style.padding ="0%";
	targetImage.style.
	debugger;
	}


	// event handling at the bottom
dragImages.forEach(piece => {
	piece.addEventListener('dragstart', startDrag, false);
});


dropzones.forEach(zone => {
	zone.addEventListener('drop',dropped, false);
	zone.addEventListener('dragover',draggedOver, false);
});

puzzleSelectors.forEach(button => button.addEventListener("click", swapImages));
})();
