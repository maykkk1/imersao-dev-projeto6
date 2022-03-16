const playerList = [];
const table = document.getElementById("tabelaJogadores");

const createTable = (playerPhoto, playerName, wins, loses, draws, points) => {
  table.innerHTML += `<tr>
        <td class="playerAvatar"><img src="${playerPhoto}" alt=""></td>
      <td>${playerName}</td>
      <td>${wins}</td>
      <td>${draws}</td>
      <td>${loses}</td>
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
    if (
      playerList.filter((element) => {
        return element.name === playerName;
      }).length > 0
    )
      return false;
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

const resetRegisterTable = () => {
  document.getElementById("registerError").style.opacity = "0";
  document.getElementById("playerOne").value = "";
  document.getElementById("playerTwo").value = "";
  document.getElementById("registerModal").style.display = "none";
};

const addPlayerBtn = document.getElementById("addPlayerBtn");
addPlayerBtn.addEventListener("click", function () {
  addPlayer();
});

const validatePlayer = (playerName) => {
  if (
    playerList.filter((element) => {
      return element.name === playerName;
    }).length > 0
  )
    return true;
  return false;
};

const showRegisterModal = () => {
  const registerModal = document.getElementById("registerModal");
  registerModal.style.display = "flex";
  document.getElementById("whenPlayerOneWins").innerHTML =
    document.getElementById("playerOne").value;
  document.getElementById("whenPlayerTwoWins").innerHTML =
    document.getElementById("playerTwo").value;
};

const register = () => {
  const errorMenssage = document.getElementById("registerError");
  const playerOne = document.getElementById("playerOne").value;
  const playerTwo = document.getElementById("playerTwo").value;
  validatePlayer(playerOne) &&
  validatePlayer(playerTwo) &&
  playerOne != playerTwo
    ? showRegisterModal()
    : (errorMenssage.style.opacity = "1");
};

const whenPlayerOneWinsBtn = document.getElementById("whenPlayerOneWins");
const whenPlayerTwoWinsBtn = document.getElementById("whenPlayerTwoWins");

whenPlayerOneWinsBtn.addEventListener("click", () => {
  const playerOne = document.getElementById("playerOne").value;
  const playerTwo = document.getElementById("playerTwo").value;
  updateScore(playerOne, playerTwo);
});

whenPlayerTwoWinsBtn.addEventListener("click", () => {
  const playerOne = document.getElementById("playerOne").value;
  const playerTwo = document.getElementById("playerTwo").value;
  updateScore(playerTwo, playerOne);
});

const drawMatch = () => {
  const playerOne = document.getElementById("playerOne").value;
  const playerTwo = document.getElementById("playerTwo").value;
  if (
    validatePlayer(playerOne) &&
    validatePlayer(playerTwo) &&
    playerOne != playerTwo
  ) {
    for (player of playerList) {
      if (player.name === playerOne) {
        player.draws++;
        player.score++;
      }
      if (player.name === playerTwo) {
        player.draws++;
        player.score++;
      }
    }
  }
  tableRender();
  resetRegisterTable();
};

const updateScore = (winningPlayer, loserPlayer) => {
  for (player of playerList) {
    if (player.name === winningPlayer) {
      player.wins++;
      player.score += 3;
    }
    if (player.name === loserPlayer) {
      player.loses++;
    }
  }
  tableRender();
  resetRegisterTable();
};

const resetScores = () => {
  for(player of playerList) {
    player.wins = 0;
    player.loses = 0;
    player.draws = 0;
    player.score = 0;
  }
  resetRegisterTable()
  tableRender()
};
