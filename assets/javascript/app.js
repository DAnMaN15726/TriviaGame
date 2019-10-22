let interval;
let count = 15;
let right = 0;
let wrong = 0;
let tally = 0;


// let count = 2;
let x = 0;



const QandA = [
            {
                question: "Where did Terry once live when pursuing a college education?",
                answer: [
                    {
                        choice: "Japan",
                        correct: "Japan"
                    },
                    {
                        choice: "New York",
                        correct: "Japan"
                    },
                    {
                        choice: "Korea",
                        correct: "Japan"
                    }
                    
                    
                ]
            },
        

            {
                question: "What hidden talent did Terry have?",
                answer: [
                    {
                        choice: "Gym Talent",
                        correct: "Artistic Talent"
                    },
                    {
                        choice: "Artistic Talent",
                        correct: "Artistic Talent"
                    },
                    {
                        choice: "Musical Talent",
                        correct: "Artistic Talent"
                    }
                    
                    
                ]
            },
        

            {
                question: "Who disappeared after the pilot of the show and was never seen again?",
                answer: [
                    {
                        choice: "Pimento",
                        correct: "Detective Daniels"
                    },
                    {
                        choice: "Scully",
                        correct: "Detective Daniels"
                    },
                    {
                        choice: "Detective Daniels",
                        correct: "Detective Daniels"
                    }
                    
                    
                ]
            },
        

            {
                question: "How many brothers does Amy have?",
                answer: [
                    {
                        choice: "One",
                        correct: "Seven"
                    },
                    {
                        choice: "Five",
                        correct: "Seven"
                    },
                    {
                        choice: "Seven",
                        correct: "Seven"
                    }
                    
                    
                ]
            },
        

            {
                question: "Who is the Pontiac Bandit?",
                answer: [
                    {
                        choice: "Raymond",
                        correct: "Doug Judy"
                    },
                    {
                        choice: "Doug Judy",
                        correct: "Doug Judy"
                    },
                    {
                        choice: "Hitchcock",
                        correct: "Doug Judy"
                    }
                    
                    
                ]
            }
        ];





let countdown = {
    start: function(count){
        clearInterval(interval);
            let countess = count;
            interval = setInterval(function(){
                if(countess === 0){
                    clearInterval(interval);
                    countdown.terminate();
                }
                

                $("#clock").text(`${countdown.timeConvert(countess)}`);
                // console.log(`${countdown.timeConvert(count)}`);
                countess--;

               
            }, 1000);


            if(countess === 0){
                clearInterval(interval);
                countdown.terminate();
            }







    },
    
    timeConvert: function(t){
        let minutes = Math.floor(t / 60);
        let seconds = t - (minutes * 60);


        if (seconds < 10) {
            seconds = "0" + seconds;
          }
        
          if (minutes === 0) {
            minutes = "00";
          }
        
          else if (minutes < 10) {
            minutes = "0" + minutes;
          }



          
        
          return minutes + ":" + seconds;

        

    },
    

    terminate: function(){
        if ( tally < 4){
            $("#Choice").toggleClass("active");
            $("#Choice").append("<h2>Oops! Out of Time!</h2>");
            setTimeout(function(){ 
                $("#Choice").empty();
                $("#Choice").toggleClass("active");
                
            }, 2000);
            
            countdown.questions(tally+=1);
        }
        else{
            $("#clock").text(`${00} : ${00}`);
            countdown.done();
            // $("#GameOver").toggleClass("active");
            // $("#GameOver").append("<h2>Game Over!</h2>");
        }






    },


    questions: function(i){
        countdown.start(count);


        if(tally === 5){
            countdown.done();
        }
       
            
            
        console.log(QandA[i].question);
        $("#container2").text(QandA[i].question);
        $("#container2").append("</br>");

        if(countdown.answer(i) === true){
            
            console.log("congrats");
        }
         
        console.log(wrong);
    },

    answer: function(index){
        // console.log(QandA[0].set[index].Question);
        x = index;
        let y = 0;
        for(let i = 0; i < 3; i++){
            
            y++;
            let buton = $("<button>"+ QandA[index].answer[i].choice + "</button> </br>"); 
            
            buton.attr("id", y);
            buton.attr("class", "buton");
            // buton.attr("style", "float: left");
            
            buton.appendTo("#container2");


            console.log(QandA[index].answer[i].choice);

        }



        
        $("#1").click(function(){
            console.log("1");
            if (countdown.checker(index, 0) === true){
                $("#container2").empty();
                right++;
                countdown.timeout(true);
                return countdown.questions(tally+=1);
            }
            else if (countdown.checker(index, 0) === false){
                $("#container2").empty();
                wrong++;
                countdown.timeout(false);
                return countdown.questions(tally+=1);
            }
        });

        $("#2").click(function(){
            console.log("2");
            if (countdown.checker(index, 1) === true){
                // $("#container2").empty();
                right++;
                countdown.timeout(true);
                return countdown.questions(tally+=1);
            }
            else if (countdown.checker(index, 1) === false){
                $("#container2").empty();
                wrong++;
                countdown.timeout(false);
                return countdown.questions(tally+=1);
            }
            
        });

        $("#3").click(function(){
            console.log("3");
            if (countdown.checker(index, 2) === true){
                $("#container2").empty();
                right++;
                countdown.timeout(true);
                return countdown.questions(tally+=1);
            }
            else if (countdown.checker(index, 2) === false){
                $("#container2").empty();
                wrong++;
                countdown.timeout(false);
                console.log(wrong);
                return countdown.questions(tally+=1);
            }
        });






        










        return;

    },
    checker: function(ind, number){
        console.log(QandA[ind].answer[number].correct);
        if(QandA[ind].answer[number].choice === QandA[ind].answer[number].correct){
            console.log("You Win!");
            // $("#container2").empty();
            $("#container2").append("GOOD JOB!");
            return true;
            // $("#GameOver").toggleClass("active");
            // $("#GameOver").empty();
            // $("#GameOver").append("<h2>Good Job!</h2>");



        }
        else
            return false;



    },
    done: function(){
        $(".container").empty();
        clearInterval(interval);
        $("#clock").text(`${00} : ${00}`);
        $("#GameOver2").toggleClass("active");
        $("#GameOver2").append("<h2>You have " + right + " right, and " + wrong + " wrong.</h2>");



        if( wrong === 0 && right === 0){
            $("#GameOver2").append("<h3>Try Harder!</h3>");
        }
        else{
            $("#GameOver2").append("<h3>Good For You!</h3>");
        }
        // $("#GameOver2").text(`You have ${right} right, and ${wrong} wrong `);

        




    },
    timeout: function(x){

        if( x === true){
            $("#Choice").toggleClass("active");
            $("#Choice").append("<h2>Good Job!</h2>");
            setTimeout(function(){ 
                $("#Choice").empty();
                $("#Choice").toggleClass("active");
                
            }, 1000);
        }
        else if( x === false){
            $("#Choice").toggleClass("active");
            $("#Choice").append("<h2>Wrong! Try Again!</h2>");
            setTimeout(function(){ 
                $("#Choice").empty();
                $("#Choice").toggleClass("active");
                
            }, 1000);



        }






    }


};





















countdown.start(count);
countdown.questions(tally);




