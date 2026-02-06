const video = document.getElementById("backvideo");
video.playbackRate = 0.3 ; 

function play(){
        document.getElementById("description").innerHTML = "I am thinking the number and you suggest me that number. <br> Number is between 0-100 ."
        document.getElementById("start").style.display="block";
        document.getElementById("play").style.display="none";
        
    }

let number 
    function start(){
        let digit1 = Math.floor(Math.random() *100)
        let digit2 = Math.floor(Math.random() *10)
        number = parseInt(digit1 + digit2)
        console.log(number)
        document.getElementById("input_number").style.display="block";
        document.getElementById("start").style.display="none";
        document.getElementById("confirm").style.display="block";
        
    }

function restart(){
        let digit1 = Math.floor(Math.random() *100)
        let digit2 = Math.floor(Math.random() *10)
        number = parseInt(digit1 + digit2)
        document.getElementById("input_number").value = "" ;
        console.log(number)
    }

function confirm(){
        let input = document.getElementById("input_number").value
        let user = parseInt(document.getElementById("input_number").value)
        if ((user <= 100) && (user >= 0)){
            if(user == number){
                // document.getElementById("result").innerHTML = "congratulation";
                // document.getElementById("result").innerHTML = "Congratulation , You guess the another number , You are genius";
                alert("Congratulation , You guess the correct number , You are genius")
                document.getElementById("help").innerHTML = ""
                restart()
            }else{
                if(Math.abs(user - number) > 90 ){
                    document.getElementById("help").innerHTML = "Number difference is greater than 90" + ` . You guess the number ${user}`;
                }else if(Math.abs(user - number) > 80 ){
                    document.getElementById("help").innerHTML = "Number difference is greater than 80" + ` . You guess the number ${user}`;
                }else if(Math.abs(user - number) > 70 ){
                    document.getElementById("help").innerHTML = "Number difference is greater than 70" + ` . You guess the number ${user}`;
                }else if(Math.abs(user - number) > 60 ){
                    document.getElementById("help").innerHTML = "Number difference is greater than 60" + ` . You guess the number ${user}`;
                }else if(Math.abs(user - number) > 50 ){
                    document.getElementById("help").innerHTML = "Number difference is greater than 50" + ` . You guess the number ${user}`;
                }else if(Math.abs(user - number) > 40 ){
                    document.getElementById("help").innerHTML = "Number difference is greater than 40" + ` . You guess the number ${user}`;
                }else if(Math.abs(user - number) > 30 ){
                    document.getElementById("help").innerHTML = "Number difference is greater than 30" + ` . You guess the number ${user}`;
                }else if(Math.abs(user - number) > 20 ){
                    document.getElementById("help").innerHTML = "Number difference is greater than 20" + ` . You guess the number ${user}`;
                }else if(Math.abs(user - number) > 10 ){
                    document.getElementById("help").innerHTML = "Number difference is greater than 10" + ` . You guess the number ${user}`;
                }else if(Math.abs(user - number) > 5 ){
                    document.getElementById("help").innerHTML = "Number difference is greater than 5" + ` . You guess the number ${user}`;
                }else{
                    document.getElementById("help").innerHTML = "Great , you are nearsest the number" + ` . You guess the number ${user}`;
                }

                document.getElementById("result").innerHTML = "Try again and guess the same number.";
                document.getElementById("input_number").value = "" ;
            }
        }else if(isNaN(user)){
            document.getElementById("result").innerHTML = "Write number";
            document.getElementById("help").innerHTML = ""
        }else{
            alert("No is between 0 to 100")
            restart()
        }
            
    }