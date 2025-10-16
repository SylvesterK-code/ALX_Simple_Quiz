# -ALX_Simple_Quiz
 Simple_Quiz_App



ni styles.css
ni index.html
ni quiz.js


# ALX Simple Quiz

## 📝 Project Overview

This project is part of the **Deep Dive into JavaScript** module.  
It focuses on enhancing your understanding of **DOM manipulation**, **event handling**, and **conditional logic** in JavaScript by implementing a simple interactive quiz.

You will use **HTML**, **CSS**, and **JavaScript** to build a functional quiz that responds dynamically to user input and provides immediate feedback based on the correctness of the chosen answer.

---

## 🎯 Learning Objectives

By completing this project, you will be able to:

- Create interactive web applications using JavaScript.
- Use **event listeners** to respond to user actions.
- Manipulate the **DOM** to retrieve user input and display results.
- Apply **conditional statements** to evaluate answers.
- Provide real-time **feedback** to enhance user experience.

---

## 🗂️ Project Structure

ALX_Simple_Quiz/
├── index.html
├── styles.css
└── quiz.js

markdown
Copy code

### **index.html**
Defines the quiz structure, including:
- The question text
- Multiple-choice options (radio buttons)
- A submit button
- A feedback display area

### **styles.css**
Styles the quiz layout and elements to make it visually appealing and user-friendly.

### **quiz.js**
Implements quiz functionality:
- Captures the selected answer
- Checks correctness
- Displays real-time feedback
- Responds to the submit button click event

---

## 💻 How It Works

1. The user reads the quiz question: **“What is 2 + 2?”**  
2. They select one of the radio button options (4, 22, or 3).
3. Upon clicking **Submit Answer**, the script runs:
   - Retrieves the selected value.
   - Compares it to the correct answer (`4`).
   - Displays either:
     - ✅ **“Correct! Well done.”** (for a correct answer), or  
     - ❌ **“That's incorrect. Try again!”** (for a wrong answer).

---

## ⚙️ Code Highlights (quiz.js)

```js
function checkAnswer() {
    const correctAnswer = "4";
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";

    if (userAnswerElement) {
        userAnswer = userAnswerElement.value;
    }

    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545";
    }
}

const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
🚀 How to Run
Clone this repository:

bash
Copy code
git clone https://github.com/<your-username>/ALX_Simple_Quiz.git
Navigate into the project folder:

bash
Copy code
cd ALX_Simple_Quiz
Open index.html in your web browser.

Interact with the quiz and observe dynamic feedback.

🧠 Concepts Covered
JavaScript functions

DOM selection and manipulation

Event listeners (addEventListener)

Conditional statements (if/else)

User interaction handling

🏁 Author
Sylvester Kormla Nyadzinnor
📧 LinkedIn
💻 GitHub

📚 License
This project is licensed under the MIT License.






























# ____________________________________________________________________________________________________________

ni calculator.html
ni calculator.css
ni calculator.js

