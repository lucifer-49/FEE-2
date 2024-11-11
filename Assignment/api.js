document.getElementById('fetchQuestions').addEventListener('click', fetchQuestions);

function fetchQuestions() {
    fetch('') // idhar aapni api ka url dalna hai 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayQuestions(data.questions);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function displayQuestions(questions) {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = ''; 
    questions.forEach(question => {
        const questionDiv = document.createElement('div');
                questionDiv.className = 'question';
            });
        }