const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image")

optionImages.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");
        optionImages.forEach((image2,index2)=>{
           index!=index2 && image2.classList.remove('active');

           userResult.src = cpuResult.src ="assests/rock.png"
        })


        gameContainer.classList.add("start");

        result.textContent= "Playing..."


        let time = setTimeout(()=>{
         gameContainer.classList.remove("start");  

        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random()*3);
        let cpuImages = ["assests/rock.png","assests/paper.png","assests/scissors.png"]
        cpuResult.src = cpuImages[randomNumber];

        let cpuValue = ["R","P","S"][randomNumber]
        let userValue = ["R","P","S"][index]

        let outcomes ={
            RR: "Draw",
            RP:"Cpu",
            RS:"User",
            PP:"Draw",
            PR:"User",
            PS:"Cpu",
            SS:"Draw",
            SR:"Cpu",
            SP:"User",

        }

        let outComeValue = outcomes[userValue+cpuValue]
        // result.textContent = userValue === cpuValue ? "Match Draw !!" : `${outComeValue} Won 🥳!!!`
        if(userValue === cpuValue){
            result.textContent="Match Draw !!";
        }
        else if(outComeValue==='User'){
            result.textContent=`${outComeValue} Won 🥳!!!`;
        }
        else{
            result.textContent=`${outComeValue} Won 🤖!!!`
        }
    
    
       

        },2500)
    })
    
    })