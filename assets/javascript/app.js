let interval;
let count = 1200;

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
    start: function(){
            interval = setInterval(function(){
                if(count === 0){
                    clearInterval(interval);
                    countdown.terminate();
                }
                

                $("#clock").text(`${countdown.timeConvert(count)}`);
                // console.log(`${countdown.timeConvert(count)}`);
                count--;

               
            }, 1000);










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
        $("#clock").text(`${00} : ${00}`);
        $("#GameOver").toggleClass("active");
        $("#GameOver").append("<h2>Game Over!</h2>");







    },


    questions: function(){

        for (let i = 0; i < QandA.length; i++){
            
            
            console.log(QandA[i].question);
            $("#container2").text(QandA[i].question);
            $("#container2").append("</br>");
            countdown.answer(i);
            







        
        }

    },

    answer: function(index){
        // console.log(QandA[0].set[index].Question);
        x = index;
        let y = 0;
        for(let i = 0; i < QandA.length; i++){
            
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
            checker(index, 1);
        });

        $("#2").click(function(){
            console.log("2");
            checker(index, 2);
        });
        
        $("#3").click(function(){
            console.log("3");
            checker(index, 3);
        });






        












    },
    checker: function(ind, number){
        console.log(ind);

    }


};





















countdown.start();
countdown.questions();




