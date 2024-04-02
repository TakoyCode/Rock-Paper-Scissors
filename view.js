// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    
    <h1>Rock - Paper - Scissors</h1>
    <div class="choices">
        <button onclick="playGame('rock')">👊</button>
        <button onclick="playGame('paper')">✋</button>
        <button onclick="playGame('scissors')">✌</button>
    </div>

    <div class="playerDisplay">PLAYER: ${model.playerChoice ?? ""}</div>
    <div class="computerDisplay">COMPUTER: ${model.computerChoice ?? ""}</div>
    <div class="resultDisplay ${model.whatColor ?? ""}">${model.result ?? ""}</div>

    <div class="scoreDisplay">Player Score: 
        <span class="playerScoreDisplay">${model.playerScore}</label>
    </div>

    <div class="scoreDisplay">Computer Score: 
        <span class="computerScoreDisplay">${model.computerScore}</label>
    </div>

    `;
    app.innerHTML = html;
}
