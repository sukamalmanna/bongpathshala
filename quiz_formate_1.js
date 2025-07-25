let answeredQuestions = new Set();

        // Add click handlers to all option buttons
        document.querySelectorAll('.option-btn').forEach(button => {
            button.addEventListener('click', function () {
                const questionCard = this.closest('.question-card');
                const questionNum = questionCard.dataset.question;
                const isCorrect = this.dataset.answer === 'true';
                // Prevent multiple answers for the same question
                if (answeredQuestions.has(questionNum)) {
                    return;
                }

                // Mark question as answered
                answeredQuestions.add(questionNum);

                // Disable all buttons in this question
                questionCard.querySelectorAll('.option-btn').forEach(btn => {
                    btn.disabled = true;
                    // btn.classList.remove('hover:bg-white/20');
                });

                // Show visual feedback
                if (isCorrect) {
                    this.classList.add('bg-green-500/40', 'border-2', 'border-green-400');
                    // score++;
                } else {
                    this.classList.add('bg-red-500/30', 'border-2', 'border-red-400');

                    // Highlight the correct answer
                    questionCard.querySelectorAll('.option-btn').forEach(btn => {
                        if (btn.dataset.answer === 'true') {
                            // btn.classList.add('bg-green-500/30', 'border-2', 'border-green-400');
                            btn.classList.add('bg-green-500/40', 'border-2', 'border-green-400');
                        }
                    });
                }

                
            });
        });


        // Reset functionality
        document.getElementById('resetBtn').addEventListener('click', function () {
            // score = 0;
            answeredQuestions.clear();

            // Reset all buttons
            document.querySelectorAll('.question-card').forEach(card => {
                card.querySelectorAll('.option-btn').forEach(btn => {
                    btn.disabled = false;
                    // btn.className = 'option-btn w-full text-left p-3 bg-white/5 hover:bg-white/20 rounded text-white';
                    btn.className = 'option-btn w-full text-left p-3 bg-white/30 ';
                });
            });

           

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
