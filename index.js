let popover = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let nowPop = popover.map((okay) => { return new bootstrap.Popover(okay) })

const leagueInfo = [
    {
        leagueName: "Premier League",
        leagueLogo: "./league_logos/england.jpg",
        leagueFile: "premierPage",
        leagueInfos: [
            { id: 1, team1: "Chelsea", team2: "Tottenham Hotspur", score1: "2", score2: "2", time: "FT" },
            { id: 2, team1: "Liverpool", team2: "Arsenal", score1: "2", score2: "2", time: "FT" },
            { id: 3, team1: "Manchester City", team2: "Manchester United", score1: "6", score2: "3", time: "FT" }
        ]
    },
    {
        leagueName: "Laliga Santander",
        leagueLogo: "./league_logos/spain.jpg",
        leagueFile: "ligaPage",
        leagueInfos: [
            { id: 1, team1: "Athletico Madrid", team2: "Barcelona", score1: "0", score2: "1", time: "FT" },
            { id: 2, team1: "Real Madrid", team2: "Villareal", score1: "2", score2: "3", time: "FT" }
        ]
    },
    {
        leagueName: "Serie A",
        leagueLogo: "./league_logos/italy.jpg",
        leagueFile: "seriePage",
        leagueInfos: [
            { id: 1, team1: "Napoli", team2: "Atalanta", score1: "2", score2: "0", time: "FT" },
            { id: 2, team1: "Juventus", team2: "AC Milan", score1: "0", score2: "1", time: "FT" },
            { id: 3, team1: "Inter", team2: "Sassuolo", score1: "4", score2: "2", time: "FT" },
            { id: 4, team1: "Lazio", team2: "Roma", score1: "1", score2: "0", time: "FT" }
        ]
    },
    {
        leagueName: "Bundesliga",
        leagueLogo: "./league_logos/germany.jpg",
        leagueFile: "bundPage",
        leagueInfos: [
            { id: 1, team1: "Bayern Munich", team2: "Union Berlin", score1: "3", score2: "0", time: "FT" },
            { id: 3, team1: "Eintracht Frankfurt", team2: "RB Leipzig", score1: "0", score2: "0", time: "FT" },
            { id: 6, team1: "Borussia Dortmund", team2: "Borussia Monchengladbach", score1: "5", score2: "2", time: "FT" }
        ]
    },
    {
        leagueName: "Ligue 1",
        leagueLogo: "./league_logos/france.jpg",
        leagueFile: "liguePage",
        leagueInfos: [
            { id: 1, team1: "Lens FC", team2: "NICE", score1: "0", score2: "1", time: "FT" },
            { id: 2, team1: "Paris Saint-Germain", team2: "AC Ajaccio", score1: "5", score2: "0", time: "FT" },
            { id: 3, team1: "Lille", team2: "Marseille", score1: "2", score2: "1", time: "FT" },
            { id: 4, team1: "Strasbourg", team2: "Rennes", score1: "3", score2: "0", time: "FT" }
        ]
    },
]
let mainLinks = leagueInfo.map(({ leagueName, leagueLogo, leagueFile, leagueInfos }) => {
    return (
        `<section class="container-fluid px-3 my-3">
            <header class="bg-white mb-2 py-1 px-2 rounded-2 d-flex align-items-center gap-1">
                <img src=${leagueLogo} class="rounded-2" style="width: 2rem;" alt=${leagueName}">
                <p class="fw-bold text-black m-0 fontMed">${leagueName}</p>
            </header>
            ${leagueInfos.map(({ team1, team2, score1, score2, time }) => {
                return (
                    `<a class="text-decoration-none" href="${leagueFile}/${team1}_VS_${team2}.html">
                            <div class="d-flex justify-content-between border border-2 border-white my-1 px-2 py-1 text-white-50 fst-italic rounded-2">
                                <div class="flex-column">
                                    <p class="fw-light m-0 fontSmall">${team1}</p>
                                    <p class="fw-light m-0 fontSmall">${team2}</p>
                                </div>
                                <div class="d-flex align-items-center gap-5">
                                    <div class="flex-column">
                                      <p class="fw-light m-0 fontSmall">${score1}</p>
                                      <p class="fw-light m-0 fontSmall">${score2}</p>
                                    </div>
                                    <p class="fw-light m-0 fontSmall">${time}</p>
                                </div>
                            </div>
                        </a>`
                )
            }).join('')}
        </section>`
    );
}).join('');
document.getElementById("mainPage").innerHTML += mainLinks;



const createLeagueDetails = [
    { id: "premTitleDiv", tableLink: "tablePremLink", matchLink: "matchPremLink", table: "tablePrem", tableDetails: "premierTable", match: "matchPrem" },
    { id: "laligaTitleDiv", tableLink: "tableLaligaLink", matchLink: "matchLaligaLink", table: "tableLaliga", tableDetails: "laligaTable", match: "matchLaliga" },
    { id: "serieTitleDiv", tableLink: "tableSerieLink", matchLink: "matchSerieLink", table: "tableSerie", tableDetails: "serieTable", match: "matchSerie" },
    { id: "bundTitleDiv", tableLink: "tableBundLink", matchLink: "matchBundLink", table: "tableBund", tableDetails: "bundTable", match: "matchBund" },
    { id: "ligueTitleDiv", tableLink: "tableLigueLink", matchLink: "matchLigueLink", table: "tableLigue", tableDetails: "ligueTable", match: "matchLigue" },
]

let leagueDivs = createLeagueDetails.map(({ id, tableLink, matchLink, table, tableDetails, match }) => {
    return (
        `<div id=${id} class="position-fixed fixed-top w-100 h-100 bg-black p-3 overflow-auto display-overflow display-div">
            <div class="col-lg-6 mx-auto">
                <div class="w-75 mx-auto d-flex align-items-center gap-5 mb-5">
                    <i class="bi bi-arrow-left fw-bold cursor-pointer fontMed cancel-div"></i>
                    <ul class="w-100 d-flex justify-content-around border border-2 border-white py-2 nav nav-tabs" role="tablist">
                        <li class="nav-item" role="presentation"><a class="nav-link active bg-transparent border-0 fw-bold text-white text-decoration-none fontSmall" id=${tableLink} data-bs-toggle="tab" data-bs-target="#${table}" type="button" role="tab" aria-controls="tablePrem" aria-selected="true">Home</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link bg-transparent border-0 fw-bold text-white text-decoration-none fontSmall" id=${matchLink} data-bs-toggle="tab" data-bs-target="#${match}" type="button" role="tab" aria-controls="matchPrem" aria-selected="false">Profile</a></li>
                    </ul> 
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id=${table} role="tabpanel" aria-labelledby=${tableLink}>
                        <table id=${tableDetails} class="table table-bordered m-0 fontMicro"></table>
                    </div>
                    <div class="tab-pane fade" id=${match} role="tabpanel" aria-labelledby=${matchLink}></div>
                </div>
            </div>
        </div>`
    );
}).join("");
document.querySelector("body").innerHTML += leagueDivs;


const showDiv = document.getElementsByClassName("show-div");
const displayDiv = document.getElementsByClassName("display-div");
const cancelDiv = document.getElementsByClassName("cancel-div");
const displayDivFunc = (action, style) => {
    for (let x = 0; x < showDiv.length; x++) {
        action[x].addEventListener("click", () => {
            for (let i = 0; i < displayDiv.length; i++) {
                if (x === i) {
                    displayDiv[i].style.display = style;
                }
            }
        })
    }
}
displayDivFunc(showDiv, "block");
displayDivFunc(cancelDiv, "none");


const tableHead = ["n/m", "Teams", "Ptd", "W", "L", "D", "GF", "GA", "+/-", "pts"];
function openTable(leaTeam, id) {
    let table = `
    <tr>
        ${tableHead.map((details) => `<th class="bg-black text-white" scope="col">${details}</th>`).join('')}
    </tr>`;
    leaTeam.forEach((teams) => {
        table += `
        <tr>
            ${teams.map((details) => `<td class="bg-black text-white">${details}</td>`).join('')}
        </tr>`
    });
    document.getElementById(id).innerHTML += table;
}

let premierTeams = [
    [1, 'Manchester city', 38, 28, 5, 5, 94, 33, 61, 89],
    [2, 'Arsenal', 38, 26, 6, 6, 85, 43, 45, 84],
    [3, 'Manchester united', 38, 23, 9, 6, 58, 43, 15, 75],
    [4, 'Newcastle United', 38, 19, 5, 14, 68, 33, 35, 71],
    [5, 'Liverpool', 38, 19, 9, 10, 75, 47, 28, 67],
    [6, 'Brighton', 38, 18, 12, 8, 72, 53, 29, 62],
    [7, 'Aston Villa', 38, 18, 13, 7, 51, 46, 5, 61],
    [8, 'Tottenham', 38, 18, 14, 6, 70, 63, 7, 60],
    [9, 'Brentford', 38, 15, 9, 14, 58, 46, 12, 59],
    [10, 'Fulham', 38, 15, 16, 7, 55, 53, 2, 52],
    [11, 'Crystal Palace', 38, 11, 15, 12, 40, 49, -9, 45],
    [12, 'Chelse', 38, 11, 16, 11, 38, 47, -9, 44],
    [13, 'Wolves', 38, 11, 19, 8, 31, 58, -27, 41],
    [14, 'West Ham', 38, 11, 20, 7, 42, 55, -13, 40],
    [15, 'Bournemouth', 38, 11, 21, 6, 37, 71, -34, 39],
    [16, 'Nottm Forest', 38, 9, 18, 11, 38, 68, -30, 38],
    [17, 'Everton', 38, 8, 18, 12, 34, 57, -23, 36],
    [18, 'Leiceter City', 38, 9, 22, 7, 51, 68, -17, 34],
    [19, 'Leeds United', 38, 7, 21, 10, 48, 78, -30, 41],
    [20, 'Southampton', 38, 6, 25, 7, 36, 73, -37, 25]
];
let laligaTeams = [
    [1, 'Barcelona', 38, 28, 6, 4, 70, 20, 50, 88],
    [2, 'Real Madrid', 38, 24, 8, 6, 75, 36, 39, 78],
    [3, 'Athletico Madrid', 38, 23, 7, 8, 70, 33, 37, 77],
    [4, 'Real Sociedad', 38, 21, 9, 8, 51, 35, 16, 71],
    [5, 'Villareal', 38, 19, 12, 7, 59, 40, 19, 64],
    [6, 'Real Betis', 38, 17, 12, 9, 46, 41, 5, 60],
    [7, 'Osasuna', 38, 15, 15, 8, 37, 42, -5, 53],
    [8, 'Athletic Club', 38, 14, 15, 9, 47, 43, 4, 51],
    [9, 'Mallorca', 38, 14, 16, 8, 37, 43, -6, 50],
    [10, 'Girona', 38, 13, 15, 10, 58, 55, 3, 49],
    [11, 'Rayo Vallenco', 38, 13, 15, 10, 45, 53, -8, 49],
    [12, 'Sevilla', 38, 13, 15, 10, 47, 54, -7, 49],
    [13, 'Celta Vigo', 38, 11, 17, 10, 43, 53, -10, 43],
    [14, 'Cadiz', 38, 10, 16, 12, 30, 53, -23, 42],
    [15, 'Getafe', 38, 10, 16, 12, 34, 45, -11, 42],
    [16, 'Valencia', 38, 11, 18, 9, 42, 45, -3, 42],
    [17, 'Almeria', 38, 11, 19, 8, 49, 65, -16, 41],
    [18, 'Valladoid', 38, 11, 20, 7, 33, 63, -30, 40],
    [19, 'Espanyol', 38, 8, 17, 13, 52, 69, -17, 37],
    [20, 'Elche', 38, 5, 23, 10, 30, 67, -37, 26]
];
let serieTeams = [
    [1, 'Napoli', 38, 28, 4, 6, 77, 28, 49, 90],
    [2, 'Lazio', 38, 22, 8, 8, 60, 30, 30, 74],
    [3, 'Inter', 38, 23, 12, 3, 71, 42, 29, 72],
    [4, 'Milan', 38, 20, 8, 10, 64, 43, 21, 70],
    [5, 'Atalanta', 38, 19, 12, 7, 66, 48, 18, 64],
    [6, 'Roma', 38, 18, 11, 9, 50, 38, 12, 63],
    [7, 'Juventus', 38, 22, 10, 6, 56, 33, 23, 62],
    [8, 'Fiorentina', 38, 15, 12, 11, 53, 43, 10, 56],
    [9, 'Bologna', 38, 14, 12, 12, 53, 49, 4, 54],
    [10, 'Torino', 38, 14, 13, 11, 42, 41, 1, 53],
    [11, 'Monza', 38, 14, 14, 10, 48, 52, -4, 52],
    [12, 'Udinese', 38, 11, 14, 13, 47, 48, -1, 46],
    [13, 'Sassuolo', 38, 12, 17, 9, 47, 61, -14, 45],
    [14, 'Empoli', 38, 10, 15, 13, 37, 49, 12, 43],
    [15, 'Salernitana', 38, 9, 14, 15, 48, 62, -14, 42],
    [16, 'Lecce', 38, 8, 18, 12, 33, 46, -13, 36],
    [17, 'Spezia', 38, 6, 19, 13, 31, 62, -31, 31],
    [18, 'Verona', 38, 7, 21, 10, 31, 59, -28, 31],
    [19, 'Cremonese', 38, 5, 21, 12, 36, 69, -33, 27],
    [20, 'Sampdoria', 38, 3, 25, 10, 24, 71, -47, 19],
];
let bundTeams = [
    [1, 'Bayern Munich', 34, 21, 5, 8, 92, 38, 54, 71],
    [2, 'Dortmund', 34, 22, 7, 5, 83, 44, 39, 71],
    [3, 'RB Leipzig', 34, 20, 8, 6, 64, 41, 23, 66],
    [4, 'Union Berlin', 34, 18, 8, 8, 51, 38, 13, 62],
    [5, 'SC Freiburg', 34, 17, 9, 8, 51, 44, 7, 59],
    [6, 'Leverkusen', 34, 14, 12, 8, 57, 49, 8, 50],
    [7, 'Eintracht Frank...', 34, 13, 10, 11, 58, 52, 6, 50],
    [8, 'Wolfsburg', 34, 13, 11, 10, 57, 48, 9, 49],
    [9, 'Mainz', 34, 12, 12, 10, 54, 55, -1, 46],
    [10, 'Monchenglad..', 34, 11, 13, 10, 52, 55, -3, 43],
    [11, 'Koln', 34, 10, 12, 12, 49, 54, -5, 42],
    [12, 'Hoffenheim', 34, 10, 18, 6, 48, 57, -9, 36],
    [13, 'Werder', 34, 10, 18, 6, 51, 64, -13, 36],
    [14, 'Vfl Bochum', 34, 10, 19, 5, 40, 72, -32, 35],
    [15, 'Augsburg', 34, 9, 18, 7, 42, 63, -21, 34],
    [16, 'Vfb Stuttgart', 34, 7, 15, 12, 45, 57, -12, 33],
    [17, 'Schalke', 34, 7, 17, 10, 57, 71, -36, 31],
    [18, 'Hertha', 34, 7, 19, 8, 42, 69, -27, 29]
];
let ligueTeams = [
    [1, 'PSG', 38, 27, 7, 4, 89, 40, 49, 85],
    [2, 'Lens', 38, 25, 4, 9, 68, 29, 39, 84],
    [3, 'Marseille', 38, 22, 9, 7, 67, 40, 27, 73],
    [4, 'Rennes', 38, 21, 12, 5, 69, 39, 30, 68],
    [5, 'LOSC', 38, 19, 9, 10, 65, 44, 21, 67],
    [6, 'Monaco', 38, 19, 11, 8, 70, 58, 12, 65],
    [7, 'Lyon', 38, 18, 12, 8, 65, 47, 18, 62],
    [8, 'Clement Foot', 17, 27, 13, 8, 45, 49, -4, 59],
    [9, 'Nice', 38, 15, 10, 13, 48, 37, 11, 58],
    [10, 'Lorient', 38, 15, 13, 10, 52, 53, -1, 55],
    [11, 'Reims', 38, 12, 11, 15, 45, 45, 0, 51],
    [12, 'Montpellier', 38, 15, 18, 5, 65, 62, 3, 50],
    [13, 'Toulouse', 38, 13, 16, 9, 51, 57, -6, 48],
    [14, 'Brest', 38, 11, 16, 11, 44, 54, -10, 44],
    [15, 'Strasbourg', 38, 9, 16, 13, 51, 59, -8, 40],
    [16, 'Nantes', 38, 7, 16, 15, 37, 55, -18, 36],
    [17, 'Auxerre', 38, 8, 19, 11, 35, 63, -28, 35],
    [18, 'Ajaccio', 38, 7, 26, 5, 23, 74, -51, 26],
    [19, 'Troyes', 38, 4, 22, 12, 45, 81, -36, 24],
    [20, 'Angers', 38, 4, 28, 6, 33, 81, -48, 18],
];

const callTables = [
    { tableArray: premierTeams, tableName: "premierTable" },
    { tableArray: laligaTeams, tableName: "laligaTable" },
    { tableArray: serieTeams, tableName: "serieTable" },
    { tableArray: bundTeams, tableName: "bundTable" },
    { tableArray: ligueTeams, tableName: "ligueTable" }
];
for (let i = 0; i < callTables.length; i++) {
    openTable(callTables[i].tableArray, callTables[i].tableName);
};



function leagueMatchDayUpdate(leagueMatchDay, id) {
    let matchDiv = ``;
    leagueMatchDay.map(({matchDay, matchPlayed}) => {
        matchDiv +=
            `<section class="mb-3">
            <p class="fw-bold mb-1 fontSmall">${matchDay}</p>
            ${matchPlayed.map(({time, team1, team2, score1, score2}) => {
                return (
                    `<div class="d-flex justify-content-between my-1">
                        <div class="d-flex gap-3">
                            <p class="pe-3 border border-bottom-0 border-top-0 border-start-0 border-end-1 fontMicro">${time}</p>
                            <div class="flex-column">
                                <p class="m-0 fontMicro">${team1}</p>
                                <p class="m-0 fontMicro">${team2}</p>
                            </div>
                        </div>
                        <div class="flex-column">
                            <p class="m-0 fontMicro">${score1}</p>
                            <p class="m-0 fontMicro">${score2}</p>
                        </div>
                    </div>`
                );
            }).join('')}
        </section>`
    });
    document.getElementById(id).innerHTML = matchDiv;
};

const premMatchDay = [
    {
        matchDay: "Matchday 34",
        matchPlayed: [
            { id: 1, team1: "Leeds United", team2: "Newcastle United", score1: "0", score2: "0", time: `23 may <br>2023` }
        ]
    },
    {
        matchDay: "Matchday 35",
        matchPlayed: [
            { id: 1, team1: "Leeds United", team2: "Tottenham Hotspur", score1: "1", score2: "4", time: `28 match <br>2023` },
            { id: 1, team1: "Leeds United", team2: "Tottenham Hotspur", score1: "1", score2: "4", time: `28 match <br>2023` }
        ]
    }
];
const laligaMatchDay = [
    {
        matchDay: "Matchday 34",
        matchPlayed: [
            { id: 1, team1: "Villareal", team2: "Cadiz", score1: "3", score2: "2", time: `10 may <br>2023` }
        ]
    },
    {
        matchDay: "Matchday 35",
        matchPlayed: [
            { id: 3, team1: "Barcelona", team2: "Getafe", score1: "3", score2: "0", time: `28 match <br>2023` }
        ]
    }
];
const serieMatchDay = [
    {
        matchDay: "Matchday 34",
        matchPlayed: [
            { id: 1, team1: "Fiorentina", team2: "Roma", score1: "2", score2: "1", time: `25 may <br>2023` }
        ]
    },
    {
        matchDay: "Matchday 35",
        matchPlayed: [
            { id: 1, team1: "Napoli", team2: "Bologna", score1: "2", score2: "2", time: `28 may <br>2023` }
        ]
    }
];
const bundMatchDay = [
    {
        matchDay: "Matchday 34",
        matchPlayed: [
            { id: 1, team1: "Bayern Munich", team2: "RB Leipzig", score1: "2", score2: "4", time: `22 may <br>2023` }
        ]
    },
    {
        matchDay: "Matchday 35",
        matchPlayed: [
            { id: 3, team1: "Borussia Dortmund", team2: "Mainz", score1: "2", score2: "2", time: `28 match <br>2023` }
        ]
    }
];
const ligueMatchDay = [
    {
        matchDay: "Matchday 34",
        matchPlayed: [
            { id: 1, team1: "PSG", team2: "Ajaccio", score1: "5", score2: "0", time: `22 may <br>2023` }
        ]
    },
    {
        matchDay: "Matchday 35",
        matchPlayed: [
            { id: 3, team1: "lens FC", team2: "Lille", score1: "3", score2: "0", time: `28 match <br>2023` }
        ]
    }
];

const callMatchDay = [
    { leagueMatch: premMatchDay, leagueMatchText: "matchPrem" },
    { leagueMatch: laligaMatchDay, leagueMatchText: "matchLaliga" },
    { leagueMatch: serieMatchDay, leagueMatchText: "matchSerie" },
    { leagueMatch: bundMatchDay, leagueMatchText: "matchBund" },
    { leagueMatch: ligueMatchDay, leagueMatchText: "matchLigue" }
];

for (let i = 0; i < callMatchDay.length; i++) {
    leagueMatchDayUpdate(callMatchDay[i].leagueMatch, callMatchDay[i].leagueMatchText);
};