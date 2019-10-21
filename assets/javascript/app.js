let interval;
// let count = 1200;

let count = 2;




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







    }


};



countdown.start();


for(let i = 0; i < QandA[0].length; i++){
    console.log(QandA[0].Q[0])

}

