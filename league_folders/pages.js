export const createMatchPage = (leagueLogo, leagueName, videoPoster, video, teamOneLogo, teamOneName, teamTwoLogo, teamTwoName, matchTime) => {
  const matchPage =
    `
      <nav class="navbar navbar-expand p-3 border border-white border-2 border-bottom-1 border-start-0 border-top-0 border-end-0">
        <ul class="navbar-nav w-100 d-flex justify-content-between align-items-center">
          <li class="nav-item"><a href="../../../index.html" class="text-white"><i class="fw-bold bi bi-arrow-left font-md"></i></a></li>
          <li class="nav-item d-flex align-items-center gap-2">
            <img src=${leagueLogo} class="rounded-2" style="width: 2rem;" alt=${leagueName}>
            <p class="fw-bold nav-text m-0 font-md">${leagueName}</p>
          </li>
          <li class="nav-item"><i class="fw-bold bi bi-star font-md"></i></li>
        </ul>
      </nav>

      <div class="p-3">
        <video src=${video} class="img-fluid border border-2 border-white" poster=${videoPoster} controls></video>
      </div>

      <section class="d-flex justify-content-around align-items-center py-2 border border-white border-2 border-bottom-1 border-start-0 border-top-0 border-end-0">
        <div class="flex-column text-center w-25">
          <img src=${teamOneLogo} alt=${teamOneName} style="width: 2.5rem;">
          <p class="m-0 font-sm">${teamOneName}</p>
        </div>
        <div class="flex-column text-center w-25">
          <p class="m-0 font-sm">VS</p>
          <p class="m-0 font-sm">${matchTime}</p>
        </div>
        <div class="flex-column text-center w-25">
          <img src=${teamTwoLogo} style="width: 2.5rem;" alt=${teamTwoName}>
          <p class="m-0 font-sm">${teamTwoName}</p>
        </div>
      </section>

      <div class="p-3">
        <ul class="px-3 py-2 d-flex justify-content-between border border-2 border-white nav nav-tabs nav-justify">
          <li class="nav-item"><a class="text-white text-decoration-none active font-sm" href="#details" data-bs-toggle="tab">Details</a></li>
          <li class="nav-item"><a class="text-white text-decoration-none font-sm" href="#line" data-bs-toggle="tab">Team News</a></li>
          <li class="nav-item"><a class="text-white text-decoration-none font-sm" href="#face" data-bs-toggle="tab">H2H</a></li>
        </ul>

        <div class="tab-content mt-3">
          <div class="tab-pane fade show active" id="details">
            <div id="matchesDiv" class="mb-3">
              <p class="mb-1 font-sm">- Teams last 5 matches</p>
              <table class="table m-0" id="lastMatchTable"></table>
            </div>
            <div id="detailsDiv">
              <p class="mb-1 font-sm">- Match details</p>
              <div class="px-3" id="matchDetails"></div>
            </div>
          </div>
          <div class="tab-pane fade" id="line">
            <div class="d-flex justify-content-between gap-4" id="matchDayInfos"></div>
          </div>
          <div class="tab-pane fade" id="face">
            <table class="table mb-3" id="tableH2H"></table>
            <div id="bothHTH"><p class="mb-2 font-sm">Last 5 matches</p></div>
          </div>
        </div>
      </div>
    `
  document.getElementById("matchPage").innerHTML = matchPage;
};



const matchDiv = ({ fontSize, dayMonth, year, teamOne, teamTwo, scoreOne, scoreTwo }) => {
  return (
    `
      <div class="d-flex align-items-center justify-content-between mb-1 text-white my-2 ${fontSize}">
        <div class="d-flex align-items-center gap-3">
          <p class="fw-light m-0 pe-3 border border-1 border-bottom-0 border-top-0 border-start-0 border-end-1">${dayMonth} <br>${year}</p>
          <div class="flex-column">
            <p class="fw-light m-0">${teamOne}</p>
            <p class="fw-light m-0">${teamTwo}</p>
          </div>
        </div>
        <div class="flex-column">
          <p class="fw-light m-0">${scoreOne}</p>
          <p class="fw-light m-0">${scoreTwo}</p>
        </div>
      </div>
    `
  );
};



export const createTeamPastMatches = (teamPastMatches) => {
  document.getElementById("lastMatchTable").innerHTML = teamPastMatches.map((lastMatch) => {
    return (
      `
        <tr class="d-flex gap-5 px-3">
          ${lastMatch.map(({ fontSize, dayMonth, year, teamOne, teamTwo, scoreOne, scoreTwo }) => {
            return (
              `
                <td class="w-50 bg-black border-0 p-0">
                  ${matchDiv({ fontSize, dayMonth, year, teamOne, teamTwo, scoreOne, scoreTwo })}
                </td>
              `
            );
          }).join("")}
        </tr>
      `
    );
  }).join("");
};



export const createMatchDetails = (matchDetails) => {
  document.getElementById("matchDetails").innerHTML = matchDetails.map((detail) => {
    return `<p class="fw-light m-0 font-sm">${detail}</p>`;
  }).join("");
};



export const createTeamMatchDayInfo = (teamMatchDayInfo) => {
  document.getElementById("matchDayInfos").innerHTML = teamMatchDayInfo.map(({ teamName, teamGraphic, teamSquad }) => {
    return (
      `
        <div class="w-100">
          <p class="m-0 font-sm">${teamName}</p>
          <div class="my-2">
            <img src=${teamGraphic} alt=${teamName} class="img-fluid">
          </div>
          ${teamSquad.map(({ teamSection, teamSectionNames }) => {
            return (
              `
                <div class="mb-2">
                  <p class="mb-1 font-sm">${teamSection}</p>
                  <div>
                    ${teamSectionNames.map((names) => `<p class="fw-light m-0 font-sm">- ${names}</p>`).join("")}
                  </div>
                </div>
              `
            );
          }).join("")}
        </div>
      `
    );
  }).join("");
};



export const createTableH2H = (tableH2H) => {
  document.getElementById("tableH2H").innerHTML = tableH2H.map((tableRow) => {
    return (
      `
        <tr>
          ${tableRow.map(({ scope, dataStyle, dataDetail }) => {
            return `<td class="bg-black text-white font-sm ${dataStyle}" scope=${scope}>${dataDetail}</td>`
          }).join("")}
        </tr>
      `
    );
  }).join("");
};



export const createBothH2H = (bothHTH) => {
  const matchH2H = bothHTH.map(({ fontSize, dayMonth, year, teamOne, teamTwo, scoreOne, scoreTwo }) => {
    return matchDiv({ fontSize, dayMonth, year, teamOne, teamTwo, scoreOne, scoreTwo });
  }).join("");
  document.getElementById("bothHTH").innerHTML += matchH2H;
};