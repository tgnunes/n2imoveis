// Pegando referencias dos elementos html
const ul_mobile = document.getElementById("ul_mobile");
const nav_mobile = document.getElementById("nav_mobile");

// adicionando um evento de click
nav_mobile.addEventListener("click", (e) => {    
    // Aqui eu coloco o valor se estiver em sero, ou se esse valor for nulo    
    // eu coloco o || !ul_mobile.style.maxHeight pois quando a gente pega os valores do stile inicial    
    // ele vem nulo, mesmo que tenha um valor no css     
    if (ul_mobile.style.maxHeight == "0px" || !ul_mobile.style.maxHeight) {    
        ul_mobile.style.maxHeight = ul_mobile.scrollHeight + "px";  } 
    else {      
        // Caso o max-height atual for diferente de zero, adicione ele para zero    
        ul_mobile.style.maxHeight = "0px";  
}});
