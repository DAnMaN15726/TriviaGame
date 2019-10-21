let interval;
let count = 1200;

// let count = 2;
let x = 0;



const QandA = [
    {
    
        set: 
        [

            {
                Question: "What is A?",
                Answer: "A"
            },
        

            {
                Question: "What is B?",
                Answer: "B"
            },
        

            {
                Question: "What is C?",
                Answer: "C"
            },
        

            {
                Question: "What is D?",
                Answer: "D"
            },
        

            {
                Question: "What is E?",
                Answer: "E"
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

        for (let i = 0; i < QandA[0].set.length; i++){
            console.log(QandA[0].set[i].Question);
            $("#container2").text(QandA[0].set[i].Question);
            countdown.answer(i);








        
        }

    },

    answer: function(index){
        // console.log(QandA[0].set[index].Question);
        
        let y = 0;
        for(let i = 0; i < QandA[0].set.length; i++){
            
            y++;
            let buton = $("<button>"+ QandA[0].set[index].answer + "</button>") 
            
            buton.attr("id", y);
            buton.attr("class", "buton");
            
            buton.appendTo("#container2");
            console.log(y);
        }


    }


};





















countdown.start();
countdown.questions();




