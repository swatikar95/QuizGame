/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
function Question(ques,ans,correctAns){
    this.ques = ques,
    this.ans = ans,
    this.correctAns = correctAns
}
Question.prototype.display = function(){
    console.log(this.ques)

    for(var i=0;i<this.ans.length;i++){
        console.log(i+':'+this.ans[i])
    }
}

Question.prototype.checkAns=function(ans){
    if(ans === this.correctAns){
        console.log('Correct ans!')
        
    }else{
        console.log('Ans is incorrect')
    }
}

var firstQ = new Question('What is your name?',['Swati','Swaty'],0)
var secondQ = new Question('Is JavaScript the coolest programming language?',['Yes','No'],0)
var thirdQ = new Question('Where do u live?',['Natore','Dhaka','Khulna'],1)

var questions = [firstQ,secondQ,thirdQ]
var n = Math.floor(Math.random()*questions.length)
questions[n].display()
var annswer = parseInt(prompt('Please select the correct ans'))
questions[n].checkAns(annswer)
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

function Question(ques,answers,correctAns){
    this.ques = ques,
    this.answers = answers,
    this.correctAns = correctAns
}
Question.prototype.display = function(){
    console.log(this.ques)

    for(var i=0;i<this.answers.length;i++){
        console.log(i+':'+this.answers[i])
    }
}

// Question.prototype.checkAns=function(ans,){
//     // var sc
//     if(ans === this.correctAns){
//         console.log('Correct ans!')
//         // sc=callback(true)
        
//     }else{
//         console.log('Ans is incorrect')
//         sc=callback(false)
//     }
//     // this.displayScore(sc)
// }

var firstQ = new Question('What is your name?',['Swati','Swaty'],0)
var secondQ = new Question('Is JavaScript the coolest programming language?',['Yes','No'],0)
var thirdQ = new Question('Where do u live?',['Natore','Dhaka','Khulna'],1)
var questions = [firstQ,secondQ,thirdQ]

// function Score(){
//     var sc = 0
//     return function(correct){
//         if(correct){
//             sc++
//         }
//         return sc
//     }
// }
// var keepScore = Score()

// Question.prototype.displayScore=function(Score){
//     console.log('Your current Score: '+Score)
//     console.log('-------------------')
// }

// function nextQuestion(){
    
//     var n = Math.floor(Math.random()*questions.length)
//     questions[n].display()
//     var answer = prompt('Please select the correct ans')
//     questions[n].checkAns(parseInt(answer))

//     if(answer !== 'exit'){
//         questions[n].checkAns(parseInt(answer))
//         nextQuestion()
//     }
// }
// nextQuestion()

Question.prototype.checkAns = function(ans, callback) {
    var sc;
    
    if (ans === this.correctAns) {
        console.log('Correct answer!');
        sc = callback(true);
    } else {
        console.log('Wrong answer. Try again :)');
        sc = callback(false);
    }
    
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('------------------------------');
}

function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}
var keepScore = score();


function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);
    questions[n].display();

    var answer = prompt('Please select the correct answer.');

    if(answer !== 'exit') {
        questions[n].checkAns(parseInt(answer), keepScore);
        
        nextQuestion();
    }
}
nextQuestion()

 