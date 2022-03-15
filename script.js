const playerList = [];
const table = document.getElementById("tabelaJogadores");

const createTable = (playerPhoto, playerName, wins, loses, draws, points) => {
  table.innerHTML += `<tr>
        <td class="playerAvatar"><img src="${playerPhoto}" alt=""></td>
      <td>${playerName}</td>
      <td>${wins}</td>
      <td>${loses}</td>
      <td>${draws}</td>
      <td>${points}</td>
      </tr>
      `;
};

const addPlayer = () => {
  const playerName = document.getElementById("playerName").value;
  const playerPhoto = document.getElementById("playerPhoto").value;
  if (playerName.length > 0 && playerPhoto.length > 0) {
    const player = {
      playerPhoto: playerPhoto,
      name: playerName,
      wins: 0,
      loses: 0,
      draws: 0,
      score: 0,
    };
    playerList.push(player);
    tableRender();
  }
};

const tableRender = () => {
  table.innerHTML = "";
  playerList.forEach((element) => {
    createTable(
      element.playerPhoto,
      element.name,
      element.wins,
      element.loses,
      element.draws,
      element.score
    );
  });
};

const addPlayerBtn = document.getElementById("addPlayerBtn");
addPlayerBtn.addEventListener("click", function () {
  addPlayer();
});
