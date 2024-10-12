const matchDiv = ({ dayMonth, year, teamOne, teamTwo, scoreOne, scoreTwo }) => {
  return (
    `
      <div class="d-flex align-items-center justify-content-between mb-1 text-white my-2">
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
          ${lastMatch.map(({ dayMonth, year, teamOne, teamTwo, scoreOne, scoreTwo }) => {
            return (
              `
                <td class="w-50 bg-black border-0 p-0">
                  ${matchDiv({ dayMonth, year, teamOne, teamTwo, scoreOne, scoreTwo })}
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
    return `<p class="fw-light m-0">${detail}</p>`;
  }).join("");
};



export const createTeamMatchDayInfo = (teamMatchDayInfo) => {
  document.getElementById("matchDayInfos").innerHTML = teamMatchDayInfo.map(({ teamName, teamGraphic, teamSquad }) => {
    return (
      `
        <div class="w-100">
          <p class="m-0">${teamName}</p>
          <div class="my-2">
            <img src=${teamGraphic} alt=${teamName} class="img-fluid">
          </div>
          ${teamSquad.map(({ teamSection, teamSectionNames }) => {
            return (
              `
                <div class="mb-2">
                  <p class="mb-1">${teamSection}</p>
                  <div>
                    ${teamSectionNames.map((names) => `<p class="fw-light m-0">- ${names}</p>`).join("")}
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
            return `<td class="bg-black text-white ${dataStyle}" scope=${scope}>${dataDetail}</td>`
          }).join("")}
        </tr>
      `
    );
  }).join("");
};



export const createBothH2H = (bothHTH) => {
  const matchH2H = bothHTH.map(({ dayMonth, year, teamOne, teamTwo, scoreOne, scoreTwo }) => {
    return matchDiv({ dayMonth, year, teamOne, teamTwo, scoreOne, scoreTwo });
  }).join("");
  document.getElementById("bothHTH").innerHTML += matchH2H;
};