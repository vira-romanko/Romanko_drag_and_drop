(() => {
	console.log("fired!");
// need a reference to each piec that we want to create
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];


	//get a reference to the drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");


	//get a reference to the buttons at the bottom so we can change the puzzlw
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");


	// get a reference to the drop area
	let dropZones = document.querySelectorAll('.drop-zone');


	//functions go in the middle
	function createPuzzlePieces(pictureIndex){
		//generate images here-> need to make 4 (top. left, rignt, bottom)

		//debugger;
		//
		// loop through the images refs and generate one for each
		thePieces.forEach(( piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece+ pictureIndex}.jpg" alt="puzzle piece" draggable>`

			piecesBoard.innerHTML += newPuzzlePiece;
		});

		initDrag();
	}

	// drag and drop functunality
	// this is a 3-step process
	//1.handle the drag ivent
	//2. handle the dragover event
	//3. handle the drop enent
	//
	//dragging sets some data referance (an audio, ima sourse, etc)
	//dragover -> just prevent the default behaviour
	// on a drop is where the magic happens -> script that behaviour , get the data referance and
	// do what you need to do with it
	function initDrag(){
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e){
				console.log('draggin...');
				e.dataTransfer.setData("text/plain", this.id);

			});

		});
	}

	// handle the drop
	// 
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e){
			e.preventDefault();
			console.log('drag over me now!!!');
		});
		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped something on me');

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});


   function resetPuzzlePieces() {
   	debugger;
   	//change the current puxxle, generate the pieces
   	//clean out the puzzle pieces div
   	piecesBoard.innerHTML = "";

   	//generate new pieces
   	createPuzzlePieces(this.dataset.puzzleref);
   }


  //event handling goes there
  puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));
// call this function to set up/ generate the pieces on load
  createPuzzlePieces(0);



    
	// set up the puzzle pieces and boards
	//
	

	
})();
