
search.onkeyup = function(){
    result.className = "show";
	overlay.className = "show";	

    var searched = [];

    for(let el of field){
        let titles = el.tittleImage;

        for(var elm of titles){

            if( elm.indexOf(search.value) != -1 && this.value != ""){
                if(!searched.includes(elm)){
                    searched.push( elm);
                }            
            }
        
        }
    }

    // result.innerHTML = searched;
    fillSearch(searched);
}

function fillSearch(searchList){

    result.innerHTML = "";
    for(let el of searchList){

        console.log(el);
        let items = document.createElement("div");
        items.className = "rowResult";
        let itemsImage = document.createElement("img");
        itemsImage.src = "images/imgSection/sport/01.jpg" ;
        let itemsTitle = document.createElement("span");
        itemsTitle.innerHTML = el;

        items.appendChild(itemsImage);
        items.appendChild(itemsTitle);
        result.appendChild(items);

    }

}