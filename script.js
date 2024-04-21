const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");
const btn = document.getElementById("Btn");

let isRunning = false;
let score = 0;


btn.addEventListener('click', function() {
    if (isRunning) {
        isRunning = false;
        btn.textContent = 'Start';
        document.getElementById("scoreDisplay").textContent = ` Your Score is: ${score}`;
        document.querySelector(".option_images").style.display = "none";
    } else {
        isRunning = true;
        document.querySelector(".option_images").style.display = "flex";
        btn.textContent = 'Stop';
        
        optionImages.forEach((image, index) => {
            image.addEventListener("click", (e) => {
                image.classList.add("active");
        
                userResult.src = cpuResult.src = "Images/rock.png";
                result.textContent = "Wait...";
        
                optionImages.forEach((image2, index2) => {
                    index !== index2 && image2.classList.remove("active");
                });
        
                gameContainer.classList.add("start");
        
                let time = setTimeout(() => {
                    gameContainer.classList.remove("start");
        
                    let imageSrc = e.target.querySelector("img").src;
                    userResult.src = imageSrc;
        
                    let randomNumber = Math.floor(Math.random() * 3);
                    let cpuImages = ["Images/rock.png", "Images/paper.png", "Images/scissors.png"];
        
                    cpuResult.src = cpuImages[randomNumber];
        
                    let cpuValue = ["R", "P", "S"][randomNumber];
                    let userValue = ["R", "P", "S"][index];
        
                    let outcomes = {
                        RR: "Draw",
                        RP: "Cpu",
                        RS: "User",
                        PP: "Draw",
                        PR: "User",
                        PS: "Cpu",
                        SS: "Draw",
                        SR: "Cpu",
                        SP: "User",
                    };
        
                    let outComeValue = outcomes[userValue + cpuValue];
        
                    if (userValue === cpuValue) {
                        result.textContent = "Match Draw";
                    } else {
                        if (outComeValue === "User") {
                            score++;
                        }
                        else{
                            score--;
                            
                        }
                        result.textContent = `${outComeValue} Won!!`;
                    }
                }, 2000);
            });
        });
    }
});
