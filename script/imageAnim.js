(() => {
	console.log("fired!");

	const theButton = document.querySelector("#buttonHolder img");

	function changeHeadline(){
	document.querySelector("h1").textContent= "Hello world";
	document.querySelector("p").textContent= "Here js goes";
    }

    
	// set up the puzzle pieces and boards
	//
	//window.addEventListener("load", changeHeadline);
	theButton.addEventListener("click", changeHeadline);

	
})();
