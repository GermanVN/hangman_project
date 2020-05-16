

let guesses_list =[]

class Hangman {
    constructor(word, tries)
    {
        this.word = word
        this.tries = tries
        this.guess = this.initital_convert_to_guess()
        this.failed = []
        //this.word_list = word.split("")
    }


    get_original_word(){
        return this.word
    }

    get_tries(){
        return this.tries
    }

    initital_convert_to_guess (){
        let list = this.word.split("")
  
        list.forEach(function(element, index){

            if (list[index]!=" ")
            {
                list[index] = "*"

            }
            
        })

        return list.join("")

    }

    update_guess_word(letter)
    {
        let list_or_word = this.word.split("")
        let list_guess_word = this.guess.split("")
        //console.log(list_or_word, list_guess_word)

        list_or_word.forEach(function(element,index){
            if (element == letter){
                list_guess_word[index] = letter

            }
        })

        this.guess = list_guess_word.join("")


    }

    guess_word(word){
        if (this.word ===word){
            return true
        }
        else {

            this.tries = this.tries -1

            return false
        }
    }


    guess_word(word){
        if (this.word ===word){
            return true
        }
        else {

            this.tries = this.tries -1

            return false
        }
    }



    try_letter(letter){

        if (guesses_list.includes(letter)){
            console.log(`You already try the letter "${letter}" before`)
            return `You already try the letter "${letter}" before`
        }

        else{

            guesses_list.push(letter)

            if (this.word.includes(letter))
            {
                this.update_guess_word(letter)
                //this.tries = this.tries -1
                return "Letter was found"

            }
            else {
                    console.log(`The letter ${letter} is not present on the word`)
                    this.failed.push(letter)
                    this.tries = this.tries -1
                    return `The letter ${letter} is not present on the word`
                }

            

        }

    }


}

/*
const han = new Hangman("banana", 5)

console.log(han.guess)
console.log(han.word)
han.try_letter("a")
console.log(han.guess)
han.try_letter("a")
console.log(han.guess)
han.try_letter("z")
console.log(guesses_list)
*/