function submitQuestion() {
    const question = document.getElementById("user-question").value.trim();
    if (!question) {
      alert("Please enter your question.");
      return;
    }
  
    document.getElementById("ai-answer").innerText = `AI Response to: "${question}"`;
    document.getElementById("question-form").style.display = "none";
    document.getElementById("ai-answer-box").style.display = "block";
  }
  
  function nextQuestion() {
    document.getElementById("user-question").value = '';
    document.getElementById("ai-answer-box").style.display = "none";
    document.getElementById("question-form").style.display = "block";
  }
  