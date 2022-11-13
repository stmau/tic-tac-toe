let btns = document.querySelectorAll("button")
let xSymbol = "X"
let oSymbol = "O"
let player = true

document.getElementsByTagName('img')[0].style.display = 'none';

for(let i=0; i<btns.length; i++){
    document.querySelector("input")?.addEventListener("click", resetF);
    btns[i].addEventListener("click", btnClick)
}

function btnClick(e:Event){
    let element = e.target! as HTMLElement
    if(element.textContent == ""){
        if(player){
            element.textContent = xSymbol
            element.style.fontSize = "50px"
            element.style.color = "red"

        }else{
            element.textContent = oSymbol
            element.style.fontSize = "50px"
            element.style.color = "green"
        }
    }

    let win = chekWin(player) 
    if(win != "")
        document.querySelector("input")?.addEventListener("click", resetF);
       
    if(win == ""){
        if(player){
           player = false
           document.getElementsByTagName('h2')[0].textContent = "Player O"
        }else{
            player = true
            document.getElementsByTagName('h2')[0].textContent = 'Player X';
 
        } 
}

function chekWin(player:boolean){
    let win = ""
    let btns = document.querySelectorAll("button")
    const arrWin: {index1: number; index2: number; index3: number}[] = [
        {index1: 0, index2: 1, index3: 2},
        {index1: 3, index2: 4, index3: 5},
        {index1: 6, index2: 7, index3: 8},
        {index1: 0, index2: 3, index3: 6},
        {index1: 1, index2: 4, index3: 7},
        {index1: 2, index2: 5, index3: 8},
        {index1: 0, index2: 4, index3: 8},
        {index1: 2, index2: 4, index3: 6},
    ]; 
    
    for(let i=0; i<8; i++){
        if(btns[arrWin[i].index1].textContent == btns[arrWin[i].index2].textContent && btns[arrWin[i].index1].textContent == btns[arrWin[i].index3].textContent && btns[arrWin[i].index1].textContent != ""){
            document.getElementsByTagName("button")[arrWin[i].index1].style.background = "lightblue"
            document.getElementsByTagName("button")[arrWin[i].index2].style.background = "lightblue"
            document.getElementsByTagName("button")[arrWin[i].index3].style.background = "lightblue"
            if(player){
                document.getElementsByTagName('h2')[0].textContent = 'Player X';
            }else{
                document.getElementsByTagName('h2')[1].textContent = 'Player O';
          }
          setTimeout(() => {
            document.getElementsByTagName('img')[0].style.display = 'block';
            }, 200)
    
            win = "win"
            return(win)     

            
        }
    }
    return(win)        
}    
}
function resetF(){
    location.reload()
}