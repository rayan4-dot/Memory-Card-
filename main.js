    const emojis = ['🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍉', '🍉', '🍒', '🍒', '🍓', '🍓', '🥑', '🥑', '🍍', '🍍'];
        let shuffledCards, selectedCards, matchedPairs;

        function startGame() {
            shuffledCards = [...emojis].sort(() => Math.random() - 0.5);
            selectedCards = [];
            matchedPairs = 0;
            document.getElementById('status').textContent = '';
            renderBoard();
        }

        function renderBoard() {
            const board = document.getElementById('game-board');
            board.innerHTML = '';
            shuffledCards.forEach((emoji, index) => {
                const card = document.createElement('div');
                card.className = 'bg-gray-700 text-2xl p-6 rounded cursor-pointer';
                card.dataset.index = index;
                card.onclick = () => flipCard(card, emoji);
                board.appendChild(card);
            });
        }

        function flipCard(card, emoji) {
            if (selectedCards.length < 2 && !card.textContent) {
                card.textContent = emoji;
                selectedCards.push({ card, emoji });
            }
            if (selectedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }

        function checkMatch() {
            const [card1, card2] = selectedCards;
            if (card1.emoji === card2.emoji) {
                matchedPairs++;
                if (matchedPairs === emojis.length / 2) {
                    document.getElementById('status').textContent = 'You Win!';
                }
            } else {
                card1.card.textContent = '';
                card2.card.textContent = '';
            }
            selectedCards = [];
        }

        startGame();
