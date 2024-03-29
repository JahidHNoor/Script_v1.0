// Get  to DOM elements
const currentTime = document.getElementById("current-time");
const rpsResult = document.getElementById("rps-result");
const claimButton = document.getElementById("claim-button");
const gameContainer = document.querySelector(".rps_container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

// Sending live time to backend
setInterval(() => {
  
    const now = new Date().getTime();
    const curTime = Math.floor(now / 1000);
  
    currentTime.value = curTime;

  }, 1000);

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "/static/img/rps/rock.png";
    result.textContent = "Wait...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = ["/static/img/rps/rock.png", "/static/img/rps/paper.png", "/static/img/rps/scissors.png"];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Lose",
        RS: "Win",
        PP: "Draw",
        PR: "Win",
        PS: "Lose",
        SS: "Draw",
        SR: "Lose",
        SP: "Win",
      };

      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the result
      result.textContent = userValue === cpuValue ? "Match Draw" : `You ${outComeValue}!!`;
      rpsResult.value = outComeValue;
      claimButton.click()

    }, 2000);
  });
});


// $(document).on('submit','#rps-form',function(e){
//   e.preventDefault();
//   $.ajax({
//       type:'POST',
//       url:'{% url "rps" %}',
//       data:
//       {
//           currentTime:$("#current-time").val(),
//           rpsResult:$("#rps-result").val(),
//           userUid:$("#user-uid").val(),
//           csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
//       },
//       success:function(){
//             alert('Saved');
//               }
//       })
//   });
