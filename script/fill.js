function fillWithField( jsonData,holderId){
    
    const holdered = document.getElementById(holderId);
//ino goftim ke vaghti tabe fillWithField farakhooni mishe bedoone section yek id ast. shayad moteghayeri ham ba in nam dashte bashim ghati nakone.
// id ro hamishe seda mizanim bezarim too getElementById

    for(let i =0; i< jsonData.length ; i++){


        var folderName = jsonData[i].category;
    
        let category = document.createElement("div");
        category.className = "sport"; 
        category.id = folderName + "_navigation"; 
    
        let header = document.createElement("div");
        header.className = "header"; 
    
            let iconHeader = document.createElement("img");
            iconHeader.src = "images/imgSection/" + folderName +"/" + jsonData[i].pic[5] ;
            iconHeader.className = "imgHeader";
    
            let tittleHeader = document.createElement("span");
            tittleHeader.className = "titleHeader";
            tittleHeader.textContent = jsonData[i].title;
        
        let line = document.createElement("div");
        line.className = "line"; 
    
        let mainCategory = document.createElement("div");
        mainCategory.className = "main"; 
    
            let colRightMain = document.createElement("div");
            colRightMain.className = "col_r"; 
    
                let imgColRight = document.createElement("img");
                imgColRight.className = "col_right_img"; 
                imgColRight.src = "images/imgSection/" + folderName +"/" + jsonData[i].pic[0] ;
    
                let orangeLable = document.createElement("div");
                orangeLable.className = "orange_lable ol_r"; 
                orangeLable.textContent = "نت برگ آنی";
    
                let box = document.createElement("div");
                box.className = "box"; 
    
                    let box1 = document.createElement("div");
                    box1.className = "box1"; 
    
                        let h4Box1 = document.createElement("h4");
                        h4Box1.className = "name_img"; 
                        h4Box1.textContent = jsonData[i].tittleImage[0];
                        h4Box1.addEventListener("click" , function(){alert("hi")});
    
                        let shopBox1 = document.createElement("div");
                        shopBox1.className = "shop"; 
    
                        let iconShop = document.createElement("img");
                        iconShop.src = "images/imgSection/" + folderName +"/"+ jsonData[i].pic[7] ;
    
                    let box2 = document.createElement("div");
                    box2.className = "box2"; 
    
                        let takhfifBox2 = document.createElement("div");
                        takhfifBox2.className = "takhfif"; 
    
                        let mapBox2 = document.createElement("span");
                        mapBox2.className = "map"; 
                        mapBox2.textContent = jsonData[i].map[1];
    
                        let priceBox2 = document.createElement("span");
                        priceBox2.className = "price"; 
                        priceBox2.textContent = jsonData[i].price[1] + "تومان";
    
                        let productBox2 = document.createElement("div");
                        productBox2.className = "product"; 
    
                        box1.appendChild(h4Box1);
                        box1.appendChild(shopBox1);
                        // box1.appendChild(iconShop);
                
                        box2.appendChild(mapBox2);
                        box2.appendChild(priceBox2);
                        box2.appendChild(takhfifBox2);
                
                        // box2.appendChild(productBox2);
                
                        box.appendChild(box1);
                        box.appendChild(box2);
                
                        colRightMain.appendChild(imgColRight);
                        colRightMain.appendChild(orangeLable);
                        colRightMain.appendChild(box);
    
            let colLeftMain = document.createElement("div");
            colLeftMain.className = "col_l";
    
            for (let j = 1; j <= 4; j++) {
                
    
                let itemDiv = document.createElement("div");
                itemDiv.className = "items";
        
                    let imgItem = document.createElement("img");
                    imgItem.src = "images/imgSection/" +folderName +"/"+ jsonData[i].pic[j ];
                    imgItem.alt = "";
            
                    let orangeLableL = document.createElement("div");
                    orangeLableL.className = "orange_lable ol_l";
                    orangeLableL.textContent = "نت برگ آنی";
            
                    let box1L = document.createElement("div");
                    box1L.className = "box1";
        
                        let h4L = document.createElement("h4");
                        h4L.textContent = jsonData[i].tittleImage[j];
                
                        let shopL = document.createElement("div");
                        shopL.className = "shop";
    
                            let ratingL = document.createTextNode("5 ");
                            let iconL = document.createElement("img");
                            iconL.src = "images/imgSection/" +folderName +"/"+ jsonData[i].pic[7];
                            iconL.alt = "shop";
    
                            shopL.appendChild(ratingL);
                            shopL.appendChild(iconL);
        
                    let box2L = document.createElement("div");
                    box2L.className = "box2";
        
                        let mapL = document.createElement("span");
                        mapL.className = "map";
                        mapL.textContent = jsonData[i].map[j];
                
                        let priceL = document.createElement("span");
                        priceL.className = "price";
                        priceL.textContent = jsonData[i].price[j] + " تومان";
                
                        let takhfifL = document.createElement("div");
                        takhfifL.className = "takhfif";
    
                            let offL = document.createElement("span");
                            offL.textContent = jsonData[i].off[j] + "%";
                            takhfifL.appendChild(offL);
    
            box1L.appendChild(h4L);
            box1L.appendChild(shopL);
    
            box2L.appendChild(mapL);
            box2L.appendChild(priceL);
            box2L.appendChild(takhfifL);
    
            itemDiv.appendChild(imgItem);
            itemDiv.appendChild(orangeLableL);
            itemDiv.appendChild(box1L);
            itemDiv.appendChild(box2L);
    
            colLeftMain.appendChild(itemDiv);
            }
    
        let footer = document.createElement("div");
        footer.className = "footer";
    
            let imgFooter = document.createElement("img");
            imgFooter.src = "images/imgSection/" +folderName +"/"+ jsonData[i].pic[6];
            imgFooter.className = "imgFooter";
    
    
        header.appendChild(iconHeader);
        header.appendChild(tittleHeader);
    
        mainCategory.appendChild(colRightMain);
        mainCategory.appendChild(colLeftMain);
    
        category.appendChild(header);
        category.appendChild(line);
        category.appendChild(mainCategory);
        category.appendChild(footer);
        footer.appendChild(imgFooter);
    
    
        holdered.appendChild(category);
    
    }
}

