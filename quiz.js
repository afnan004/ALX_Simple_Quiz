function checkAnswer() {
    const correctAnswer = "4"; // Step 1: define correct answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked'); // Step 2: get selected radio

    const feedbackDiv = document.getElementById("feedback"); // Step 3: feedback container

    if (selectedOption) {
        const userAnswer = selectedOption.value; // Step 4: get user's answer

        if (userAnswer === correctAnswer) {
            feedbackDiv.textContent = "Correct! Well done."; // Step 5a: success
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.textContent = "That's incorrect. Try again!"; // Step 5b: failure
            feedbackDiv.style.color = "#dc3545";
        }
    } else {
        feedbackDiv.textContent = "Please select an answer before submitting."; // no selection case
        feedbackDiv.style.color = "#dc3545";
    }
}

// Step 6: Add event listener
const submitBtn = document.getElementById("submit-answer");
submitBtn.addEventListener("click", checkAnswer);
