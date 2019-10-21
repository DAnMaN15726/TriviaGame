let interval;
let count = 1200;





const QandA = [{
    Q: [
        {
            Q1: "What is A?",
            A: "A"
        },
        {
            Q1: "What is B?",
            A: "B"
        },
        {
            Q1: "What is C?",
            A: "C"
        },
        {
            Q1: "What is D?",
            A: "D"
        },
        {
            Q1: "What is E?",
            A: "E"
        },
        {
            Q1: "What is F?",
            A: "F"
        },
        {
            Q1: "What is G?",
            A: "G"
        },
        {
            Q1: "What is H?",
            A: "H"
        }
    ]

}];





let countdown = {
    start: function(){
            interval = setInterval(function(){
                
                

                $("#clock").text(`${countdown.timeConvert(count)}`);
                // console.log(`${countdown.timeConvert(count)}`);
                count--;

                if(count === 0){
                    terminate();
                }






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
        $("body").append("<h1>Game Over!</h1>");
        





    }


};



countdown.start();