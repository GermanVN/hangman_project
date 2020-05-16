

let first_draw = () =>{

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.moveTo(0, 300);
    ctx.lineTo(300,300);

    //ctx.moveTo(30, 300)
    //ctx.lineTo(30,0)

    ctx.stroke();
    
}

let second_draw = () => {

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.moveTo(0, 300);
    ctx.lineTo(300,300);

    ctx.moveTo(30, 300)
    ctx.lineTo(30,0)

    ctx.moveTo(30, 0)
    ctx.lineTo(200,0)

    
    ctx.stroke();

}

let third_draw = () => {

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.moveTo(0, 300);
    ctx.lineTo(300,300);

    ctx.moveTo(30, 300)
    ctx.lineTo(30,0)

    ctx.moveTo(30, 0)
    ctx.lineTo(200,0)

    ctx.moveTo(170, 0)
    ctx.lineTo(170,50)

    ctx.arc(140, 80, 20, 0, 10 * Math.PI);
  
    ctx.stroke();

}

let fourth_draw = () =>{

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.moveTo(0, 300);
    ctx.lineTo(300,300);

    ctx.moveTo(30, 300)
    ctx.lineTo(30,0)

    ctx.moveTo(30, 0)
    ctx.lineTo(200,0)

    ctx.moveTo(170, 0)
    ctx.lineTo(170,50)

    ctx.arc(140, 80, 20, 0, 10 * Math.PI);
    ctx.moveTo(150, 100)
    ctx.lineTo(150,170)

    ctx.stroke();
}

let fifth_draw = () =>{

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.moveTo(0, 300);
    ctx.lineTo(300,300);

    ctx.moveTo(30, 300)
    ctx.lineTo(30,0)

    ctx.moveTo(30, 0)
    ctx.lineTo(200,0)

    ctx.moveTo(170, 0)
    ctx.lineTo(170,50)

    ctx.arc(140, 80, 20, 0, 10 * Math.PI);
    ctx.moveTo(150, 100)
    ctx.lineTo(150,170)

    ctx.moveTo(150, 110)
    ctx.lineTo(180,150)

    ctx.moveTo(150, 110)
    ctx.lineTo(130,150)


    ctx.stroke();
    
}

let sixth_draw = () =>{

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.moveTo(0, 300);
    ctx.lineTo(300,300);

    ctx.moveTo(30, 300)
    ctx.lineTo(30,0)

    ctx.moveTo(30, 0)
    ctx.lineTo(200,0)

    ctx.moveTo(170, 0)
    ctx.lineTo(170,50)

    ctx.arc(140, 80, 20, 0, 10 * Math.PI);
    ctx.moveTo(150, 100)
    ctx.lineTo(150,170)

    ctx.moveTo(150, 110)
    ctx.lineTo(180,150)

    ctx.moveTo(150, 110)
    ctx.lineTo(130,150)

    ctx.moveTo(150, 170)
    ctx.lineTo(180,230)

    ctx.stroke();
}


let seventh_draw = () =>{

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.moveTo(0, 300);
    ctx.lineTo(300,300);

    ctx.moveTo(30, 300)
    ctx.lineTo(30,0)

    ctx.moveTo(30, 0)
    ctx.lineTo(200,0)

    ctx.moveTo(170, 0)
    ctx.lineTo(170,50)

    ctx.arc(140, 80, 20, 0, 10 * Math.PI);
    ctx.moveTo(150, 100)
    ctx.lineTo(150,170)

    ctx.moveTo(150, 110)
    ctx.lineTo(180,150)

    ctx.moveTo(150, 110)
    ctx.lineTo(130,150)

    ctx.moveTo(150, 170)
    ctx.lineTo(180,230)

    ctx.moveTo(150, 170)
    ctx.lineTo(130,230)

    ctx.stroke();
    
}

let eight_draw = () =>{

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.font = "30px Verdana";
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.strokeStyle = gradient;

    ctx.moveTo(0, 300);
    ctx.lineTo(300,300);

    ctx.moveTo(30, 300)
    ctx.lineTo(30,0)

    ctx.moveTo(30, 0)
    ctx.lineTo(200,0)

    ctx.moveTo(170, 0)
    ctx.lineTo(170,50)

    ctx.arc(140, 80, 20, 0, 10 * Math.PI);
    ctx.moveTo(150, 100)
    ctx.lineTo(150,170)

    ctx.moveTo(150, 110)
    ctx.lineTo(180,150)

    ctx.moveTo(150, 110)
    ctx.lineTo(130,150)

    ctx.moveTo(150, 170)
    ctx.lineTo(180,230)

    ctx.moveTo(150, 170)
    ctx.lineTo(130,230)

    ctx.stroke();
    ctx.strokeText("You are dead!", 80, 260);
}

let initialize_values = () =>{

    update_lives()
    update_guess_word()

}


let update_lives = () => {

    document.querySelector("#retry").textContent = `LIVES -> ${hang_object.tries}`
}


let update_draw = (tries) => {

    if (hang_object.tries === 7)
    {
        first_draw()

    }
    else if (hang_object.tries === 6)
    {
        second_draw()
    }
    else if (hang_object.tries === 5)
    {
        third_draw()

    }
    else if (hang_object.tries === 4)
    {
        fourth_draw()

    }
    else if (hang_object.tries === 3)
    {
        fifth_draw()

    }
    else if (hang_object.tries === 2)
    {
        sixth_draw()

    }
    else if (hang_object.tries === 1)
    {
        seventh_draw()

    }
    else if (hang_object.tries === 0)
    {
        eight_draw()

    }

}


let update_guess_word = () =>{
    let guess_word = document.querySelector("#guess-word")
    guess_word.textContent=hang_object.guess
}


let show_failed_words = ()=>{
    document.querySelector("#failed").textContent=`Failed attempted letteres -> ${hang_object.failed} `
}


document.querySelector("#create-note").addEventListener("click", function(e){

        if (hang_object.tries < 1)
        {
            document.querySelector("#announce").textContent="Game Over"
            console.log("Game Over")
        }
        else {
            let letter_input = document.querySelector("#letter-guess").value
            let result=hang_object.try_letter(letter_input)
            document.querySelector("#announce").textContent=result
            console.log(hang_object.guess)
            document.querySelector("#letter-guess").value =""
            
            show_failed_words()
            update_guess_word()
            update_lives()
            update_draw(hang_object.tries)

            if (hang_object.tries < 1)
            {
            document.querySelector("#announce").textContent="Game Over"
            console.log("Game Over")
            }
            

        }
        
        

})

document.querySelector("#guess-note").addEventListener("click", function(e){
   
   
    let word_guess_input = document.querySelector("#word-guess").value
    
    let result = hang_object.guess_word(word_guess_input)
    

    if (result)
    {
        console.log(result)
        console.log("You win the game")
        document.querySelector("#announce").textContent="Congratulations you won the game!!!!"
        document.querySelector("#guess-word").textContent = hang_object.word

    }

    else {

        if (hang_object.tries < 1)
    {
        document.querySelector("#announce").textContent="Game Over"
        console.log("Game Over")
    }
        update_lives()
        update_draw(hang_object.tries)


    }
    

     


    

})



words =["buy a book", "expensive computer", "paint a wall", "go to the jungle","clean the window", "go to supermarket", "play some videogames", "do your homework", "have breakfast", "play tennis"]
word= words[Math.floor(Math.random()*words.length)]


const hang_object = new Hangman(word, 7)
console.log(hang_object.word, hang_object.guess)

/*
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.moveTo(0, 300);
ctx.lineTo(300,300);
//ctx.stroke();

ctx.moveTo(30, 300)
ctx.lineTo(30,0)
//ctx.stroke();


ctx.moveTo(30, 0)
ctx.lineTo(200,0)


ctx.moveTo(170, 0)
ctx.lineTo(170,50)


ctx.arc(140, 80, 20, 0, 10 * Math.PI);
ctx.moveTo(150, 100)
ctx.lineTo(150,170)

ctx.moveTo(150, 110)
ctx.lineTo(180,150)

ctx.moveTo(150, 110)
ctx.lineTo(130,150)

ctx.moveTo(150, 170)
ctx.lineTo(180,230)

ctx.moveTo(150, 170)
ctx.lineTo(130,230)



ctx.stroke();
*/

initialize_values()
//eight_draw()