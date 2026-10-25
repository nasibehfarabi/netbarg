
fillWithField( field,"section");



pos=0

function right(){
    if(pos > -400){
		pos = pos - 100;
		gal.style.left = pos + "%";
	}
	else if(pos == -400){
		pos = 0;
		gal.style.left = pos + "%";	
	}
    changeTab(pos/-100);
}

function left(){

	if(pos < 0){
		pos = pos + 100;
		gal.style.left = pos + "%";
	}
    changeTab(pos/-100);
}

var buts= document.querySelectorAll("#but>li");

function change(slidenum){
    move(slidenum);
    changeTab(slidenum);
}

function move(slidenum){
    pos= -100*slidenum;
    gal.style.left= pos + "%";	
}


function changeTab(slidenum){
    for(i=0 ; i<buts.length ; i++ ){
            buts[i].className="";
        }
        buts[slidenum].className="sell";  
}


//   play shodan khodkar slideshow
var s;
function play(){
    s=setInterval("right()",2000);
}
function pause(){
    clearInterval(s);
}

play();

slideshow.onmouseover = function(){
    pause();
}
slideshow.onmouseout = function(){
    play();
}

//    keshoii shodan shahrha dar header
let showMenuFlag = 0
function show_city(){
    if (showMenuFlag==0){
        drowpDown.style.visibility= "visible";
        showMenuFlag=1;
    }
    else{
        drowpDown.style.visibility= "hidden";
        showMenuFlag=0;
    }
}

function show_hambergeri(){
    hambergeri.style.display = "block";
    bg_filter.style.display = "block";
}
function hide_hambergeri(){
    hambergeri.style.display = "none";
    bg_filter.style.display = "none";
}

var mode = 0;
function change_mode(){
    if(mode==0){
        page.className="dark_mode";
        mode=1;
    }
    else{
        page.className="";
        mode=0;
    }
}


let section= document.getElementById("section");
window.addEventListener("scroll",function(){
    let position = section.offsetTop;
    if(window.scrollY >= position){
        navbar_right.style.position="fixed";
        navbar_right.style.top= "20px";
        navbar_right.style.right= "10px";
    }
    else{
        navbar_right.style.position="static";
    }
})



window.addEventListener("scroll" , function(){
    if(window.scrollY > 120){
        document.getElementById("header").classList.add("scroll");
    }else{
        this.document.getElementById("header").classList.remove("scroll");
    }
})




overlay.onclick = function(){
	result.className = "hide";
	overlay.className = "hide";	
}
