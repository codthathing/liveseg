let popover = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let nowPop = popover.map((okay)=>{return new bootstrap.Popover(okay)})

const matches = document.getElementById('matches')

function league_matchDay(league, id, leagueFile) {
    let main =``
    league.map((infos) => {
        main = `<main class="mb-1 main">
                   <a class="text-decoration-none" href="${leagueFile}/${infos.team1}_VS_${infos.team2}.html">
                       <div style="font-weight: bold; font-size: 1rem; font-style: italic;" 
                         class="border d-flex justify-content-between border-2 border-white p-1 text-white-50 rounded-2">
                           <div class="flex-column">
                               <p style="font-size: 1rem; font-weight: 200;" class="m-0">${infos.team1}</p>
                               <p style="font-size: 1rem; font-weight: 200;" class="m-0">${infos.team2}</p>
                           </div>
                           <div class="d-flex">
                               <div class="flex-column mx-5">
                                 <p style="font-size: 1rem; font-weight: 200;" class="m-0">${infos.score1}</p>
                                 <p style="font-size: 1rem; font-weight: 200;" class="m-0">${infos.score2}</p>
                               </div>
                               <p style="font-size: 1rem; font-weight: 200;" class="m-0">${infos.time}<span></span></p>
                           </div>
                       </div>
                   </a>
               </main>` 
        document.getElementById(id).innerHTML += main
    })
}

const premierInfo =[
    { id:1, team1:"Chelsea", team2:"Tottenham Hotspur", score1:"2", score2:"2", time:"FT"},
    { id:2, team1:"Liverpool", team2:"Arsenal", score1:"2", score2:"2", time:"FT" },
    { id:3, team1:"Manchester City", team2:"Manchester United", score1:"6", score2:"3", time:"FT" }
]
league_matchDay(premierInfo, 'premierDiv', 'premierPage')

const laligaInfo =[
    { id:1, team1:"Athletico Madrid", team2:"Barcelona", score1:"0", score2:"1", time:"FT" },
    { id:2, team1:"Real Madrid", team2:"Villareal", score1:"2", score2:"3", time:"FT"} 
]
league_matchDay(laligaInfo, 'laligaDiv', 'ligaPage')

const serieInfo =[
    { id:1, team1:"Napoli", team2:"Atalanta", score1:"2", score2:"0", time:"FT" },
    { id:2, team1:"Juventus", team2:"AC Milan", score1:"0", score2:"1", time:"FT" },
    { id:3, team1:"Inter", team2:"Sassuolo", score1:"4", score2:"2", time:"FT" },
    { id:4, team1:"Lazio", team2:"Roma", score1:"1", score2:"0", time:"FT" }
]
league_matchDay(serieInfo, 'serieDiv', 'seriePage')

const bundInfo =[
    { id:1, team1:"Bayern Munich", team2:"Union Berlin", score1:"3", score2:"0", time:"FT" },
    { id:3, team1:"Eintracht Frankfurt", team2:"RB Leipzig", score1:"0", score2:"0", time:"FT" },
    { id:6, team1:"Borussia Dortmund", team2:"Borussia Monchengladbach", score1:"5", score2:"2", time:"FT"}
]
league_matchDay(bundInfo, 'bundDiv', 'bundPage')

const ligueInfo =[
    { id:1, team1:"Lens FC", team2:"NICE", score1:"0", score2:"1", time:"FT" },
    { id:2, team1:"Paris Saint-Germain", team2:"AC Ajaccio", score1:"5", score2:"0", time:"FT" },
    { id:3, team1:"Lille", team2:"Marseille", score1:"2", score2:"1", time:"FT"},
    { id:4, team1:"Strasbourg", team2:"Rennes", score1:"3", score2:"0", time:"FT"}
]
league_matchDay(ligueInfo, 'ligueDiv', 'liguePage')


const openDivs = (directionTitle, directionDiv) => {
    document.getElementById(directionTitle).addEventListener("click", ()=> {
        document.getElementById(directionDiv).style.display="block"
        document.getElementById(directionDiv).style.overflowY="auto"
    })
}
const closeDivs = (directionTitle, directionDiv) => {
    document.getElementById(directionTitle).addEventListener("click", ()=> {
        document.getElementById(directionDiv).style.display="none"
        document.querySelector("body").style.overflowY="scroll"
    })
}

let reBody = document.getElementsByClassName('reBody')
for(let x=0; x<reBody.length; x++) {
    reBody[x].addEventListener("click", ()=> {
        document.querySelector("body").style.overflowY="hidden"
    })
}


openDivs('premierTitle','premTitleDiv')
closeDivs('cloPremier','premTitleDiv')

openDivs('laligaTitle','laligaTitleDiv')
closeDivs('cloLaliga','laligaTitleDiv')

openDivs('serieTitle','serieTitleDiv')
closeDivs('cloSerie','serieTitleDiv')

openDivs('bundTitle','bundTitleDiv')
closeDivs('cloBund','bundTitleDiv')

openDivs('ligueTitle','ligueTitleDiv')
closeDivs('cloLigue','ligueTitleDiv')


function openTable(leaTeam, id) {
    let table =``
    leaTeam.map((teams)=> {
        table = `
        <tr>
            <td style="background-color: black; color: white;" class="m-0">${teams.id}</td>
            <td style="background-color: black; color: white;" class="m-0">${teams.team}</td>
            <td style="background-color: black; color: white;" class="m-0">${teams.played}</td>
            <td style="background-color: black; color: white;" class="m-0">${teams.win}</td>
            <td style="background-color: black; color: white;" class="m-0">${teams.loss}</td>
            <td style="background-color: black; color: white;" class="m-0">${teams.draw}</td>
            <td style="background-color: black; color: white;" class="m-0">${teams.gf}</td>
            <td style="background-color: black; color: white;" class="m-0">${teams.ga}</td>
            <td style="background-color: black; color: white;" class="m-0">${teams.diff}</td>
            <td style="background-color: black; color: white;" class="m-0">${teams.pts}</td>
        </tr>
    `
    document.getElementById(id).innerHTML += table
    })
}

let premierTeams = [
    { id:1, team:'Manchester city', played: 38, win: 28, loss: 5, draw: 5, gf:94, ga:33, diff: 61, pts: 89 },
    { id:2, team:'Arsenal', played: 38, win: 26, loss: 6, draw: 6, gf:88, ga:43, diff: 45, pts: 84 },
    { id:3, team:'Manchester united', played: 38, win: 23, loss: 9, draw: 6, gf:58, ga:43, diff: 15, pts: 75 },
    { id:4, team:'Newcastle United', played: 38, win: 19, loss: 5, draw: 14, gf:68, ga:33, diff: 35, pts: 71 },
    { id:5, team:'Liverpool', played: 38, win: 19, loss: 9, draw: 10, gf:75, ga:47, diff: 28, pts: 67 },
    { id:6, team:'Brighton', played: 38, win: 18, loss: 12, draw: 8, gf:72, ga:53, diff: 29, pts: 62 },
    { id:7, team:'Aston Villa', played: 38, win: 18, loss: 13, draw: 7, gf:51, ga:46, diff: 5, pts: 61 },
    { id:8, team:'Tottenham', played: 38, win: 18, loss: 14, draw: 6, gf:70, ga:63, diff: 7, pts: 60 },
    { id:9, team:'Brentford', played: 38, win: 15, loss: 9, draw: 14, gf:58, ga:46, diff: 12, pts: 59 },
    { id:10, team:'Fulham', played: 38, win: 15, loss: 16, draw: 7, gf:55, ga:53, diff: 2, pts: 52 },
    { id:11, team:'Crystal Palace', played: 38, win: 11, loss: 15, draw: 12, gf:40, ga:49, diff: -9, pts: 45 },
    { id:12, team:'Chelse', played: 38, win: 11, loss: 16, draw: 11, gf:38, ga:47, diff: -9, pts: 44 },
    { id:13, team:'Wolves', played: 38, win: 11, loss: 19, draw: 8, gf:31, ga:58, diff: -27, pts: 41 },
    { id:14, team:'West Ham', played: 38, win: 11, loss: 20, draw: 7, gf:42, ga:55, diff:-13, pts: 40 },
    { id:15, team:'Bournemouth', played: 38, win: 11, loss: 21, draw: 6, gf:37, ga:71, diff:-34, pts: 39 },
    { id:16, team:'Nottm Forest', played: 38, win: 9, loss: 18, draw: 11, gf:38, ga:68, diff:-30, pts: 38 },
    { id:17, team:'Everton', played: 38, win: 8, loss: 18, draw: 12, gf:34, ga:57, diff:-23, pts: 36 },
    { id:18, team:'Leiceter City', played: 38, win: 9, loss: 22, draw: 7, gf:51, ga:68, diff:-17, pts: 34 },
    { id:19, team:'Leeds United', played: 38, win: 7, loss: 21, draw: 10, gf:48, ga:78, diff:-30, pts: 41 },
    { id:20, team:'Southampton', played: 38, win: 6, loss: 25, draw: 7, gf:36, ga:73, diff:-37, pts: 25 },
]
openTable(premierTeams, 'premierTable')
let laligaTeams = [
    { id:1, team:'Barcelona', played: 38, win: 28, loss: 6, draw: 4, gf: 70, ga: 20, diff: 50, pts: 88 },
    { id:2, team:'Real Madrid', played: 38, win: 24, loss: 8, draw: 6, gf: 75, ga: 36, diff: 39, pts: 78 },  
    { id:3, team:'Athletico Madrid', played: 38, win: 23, loss: 7, draw: 8, gf: 70, ga: 33, diff: 37, pts: 77 },  
    { id:4, team:'Real Sociedad', played: 38, win: 21, loss: 9, draw: 8, gf: 51, ga: 35, diff: 16, pts: 71 },    
    { id:5, team:'Villareal', played: 38, win: 19, loss: 12, draw: 7, gf: 59, ga: 40, diff: 19, pts: 64 },  
    { id:6, team:'Real Betis', played: 38, win: 17, loss: 12, draw: 9, gf: 46, ga: 41, diff: 5, pts: 60 },  
    { id:7, team:'Osasuna', played: 38, win: 15, loss: 15, draw: 8, gf: 37, ga: 42, diff: -5, pts: 53 },  
    { id:8, team:'Athletic Club', played: 38, win: 14, loss: 15, draw: 9, gf: 47, ga: 43, diff: 4, pts: 51 },  
    { id:9, team:'Mallorca', played: 38, win: 14, loss: 16, draw: 8, gf: 37, ga: 43, diff: -6, pts: 50 },  
    { id:10, team:'Girona', played: 38, win: 13, loss: 15, draw: 10, gf: 58, ga: 55, diff: 3, pts: 49 },  
    { id:11, team:'Rayo Vallenco', played: 38, win: 13, loss: 15, draw: 10, gf: 45, ga: 53, diff: -8, pts: 49 }, 
    { id:12, team:'Sevilla', played: 38, win: 13, loss: 15, draw: 10, gf: 47, ga: 54, diff: -7, pts: 49 },   
    { id:13, team:'Celta Vigo', played: 38, win: 11, loss: 17, draw: 10, gf: 43, ga: 53, diff: -10, pts: 43 },  
    { id:14, team:'Cadiz', played: 38, win: 10, loss: 16, draw: 12, gf: 30, ga: 53, diff: -23, pts: 42 },  
    { id:15, team:'Getafe', played: 38, win: 10, loss: 16, draw: 12, gf: 34, ga: 45, diff: -11, pts: 42 }, 
    { id:16, team:'Valencia', played: 38, win: 11, loss: 18, draw: 9, gf: 42, ga: 45, diff: -3, pts: 42 }, 
    { id:17, team:'Almeria', played: 38, win: 11, loss: 19, draw: 8, gf: 49, ga: 65, diff: -16, pts: 41 }, 
    { id:18, team:'Valladoid', played: 38, win: 11, loss: 20, draw: 7, gf: 33, ga: 63, diff: -30, pts: 40 }, 
    { id:19, team:'Espanyol', played: 38, win: 8, loss: 17, draw: 13, gf: 52, ga: 69, diff: -17, pts: 37 }, 
    { id:20, team:'Elche', played: 38, win: 5, loss: 23, draw: 10, gf: 30, ga: 67, diff: -37, pts: 26 }, 
]
openTable(laligaTeams, 'laliga_table')
let serieTeams = [
    { id:1, team:'Napoli', played: 38, win: 28, loss: 4, draw: 6, gf: 77, ga: 28, diff: 49, pts: 90 },
    { id:2, team:'Lazio', played: 38, win: 22, loss: 8, draw: 8, gf: 60, ga: 30, diff: 30, pts: 74 },
    { id:3, team:'Inter', played: 38, win: 23, loss: 12, draw: 3, gf: 71, ga: 42, diff: 29, pts: 72 },
    { id:4, team:'Milan', played: 38, win: 20, loss: 8, draw: 10, gf: 64, ga: 43, diff: 21, pts: 70 },
    { id:5, team:'Atalanta', played: 38, win: 19, loss: 12, draw: 7, gf: 66, ga: 48, diff: 18, pts: 64 },
    { id:6, team:'Roma', played: 38, win: 18, loss: 11, draw: 9, gf: 50, ga: 38, diff: 12, pts: 63 },
    { id:7, team:'Juventus', played: 38, win: 22, loss: 10, draw: 6, gf: 56, ga: 33, diff: 23, pts: 62 },
    { id:8, team:'Fiorentina', played: 38, win: 15, loss: 12, draw: 11, gf: 53, ga: 43, diff: 10, pts: 56 },
    { id:9, team:'Bologna', played: 38, win: 14, loss: 12, draw: 12, gf: 53, ga: 49, diff: 4, pts: 54 },
    { id:10, team:'Torino', played: 38, win: 14, loss: 13, draw: 11, gf: 42, ga: 41, diff: 1, pts: 53 },
    { id:11, team:'Monza', played: 38, win: 14, loss: 14, draw: 10, gf: 48, ga: 52, diff: -4, pts: 52 },
    { id:12, team:'Udinese', played: 38, win: 11, loss: 14, draw: 13, gf: 47, ga: 48, diff: -1, pts: 46 },
    { id:13, team:'Sassuolo', played: 38, win: 12, loss: 17, draw: 9, gf: 47, ga: 61, diff: -14, pts: 45 },
    { id:14, team:'Empoli', played: 38, win: 10, loss: 15, draw: 13, gf: 37, ga: 49, diff: 12, pts: 43 },
    { id:15, team:'Salernitana', played: 38, win: 9, loss: 14, draw: 15, gf: 48, ga: 62, diff: -14, pts: 42 },
    { id:16, team:'Lecce', played: 38, win: 8, loss: 18, draw: 12, gf: 33, ga: 46, diff: -13, pts: 36 },
    { id:17, team:'Spezia', played: 38, win: 6, loss: 19, draw: 13, gf: 31, ga: 62, diff: -31, pts: 31 },
    { id:18, team:'Verona', played: 38, win: 7, loss: 21, draw: 10, gf: 31, ga: 59, diff: -28, pts: 31 },
    { id:19, team:'Cremonese', played: 38, win: 5, loss: 21, draw: 12, gf: 36, ga: 69, diff: -33, pts: 27 },
    { id:20, team:'Sampdoria', played: 38, win: 3, loss: 25, draw: 10, gf: 24, ga: 71, diff: -47, pts: 19 },
]
openTable(serieTeams, 'serie_table')
let bundTeams = [
    { id:1, team:'Bayern Munich', played: 34, win: 21, loss: 5, draw: 8, gf: 92, ga:38, diff: 54, pts: 71 },
    { id:2, team:'Dortmund', played: 34, win: 22, loss: 7, draw: 5, gf: 83, ga:44, diff: 39, pts: 71 },
    { id:3, team:'RB Leipzig', played: 34, win: 20, loss: 8, draw: 6, gf: 64, ga:41, diff: 23, pts: 66 },
    { id:4, team:'Union Berlin', played: 34, win: 18, loss: 8, draw: 8, gf: 51, ga:38, diff: 13, pts: 62 },
    { id:5, team:'SC Freiburg', played: 34, win: 17, loss: 9, draw: 8, gf: 51, ga:44, diff: 7, pts: 59 },
    { id:6, team:'Leverkusen', played: 34, win: 14, loss: 12, draw: 8, gf: 57, ga:49, diff: 8, pts: 50 },
    { id:7, team:'Eintracht Frank...', played: 34, win: 13, loss: 10, draw: 11, gf: 58, ga:52, diff: 6, pts: 50 },
    { id:8, team:'Wolfsburg', played: 34, win: 13, loss: 11, draw: 10, gf: 57, ga:48, diff: 9, pts: 49 },
    { id:9, team:'Mainz', played: 34, win: 12, loss: 12, draw: 10, gf: 54, ga:55, diff: -1, pts: 46 },
    { id:10, team:'Monchenglad..', played: 34, win: 11, loss: 13, draw: 10, gf: 52, ga:55, diff: -3, pts: 43 },
    { id:11, team:'Koln', played: 34, win: 10, loss: 12, draw: 12, gf: 49, ga:54, diff: -5, pts: 42 },
    { id:12, team:'Hoffenheim', played: 34, win: 10, loss: 18, draw: 6, gf: 48, ga:57, diff: -9, pts: 36 },
    { id:13, team:'Werder', played: 34, win: 10, loss: 18, draw: 6, gf: 51, ga:64, diff: -13, pts: 36 },
    { id:14, team:'Vfl Bochum', played: 34, win: 10, loss: 19, draw: 5, gf: 40, ga:72, diff: -32, pts: 35 },
    { id:15, team:'Augsburg', played: 34, win: 9, loss: 18, draw: 7, gf: 42, ga:63, diff: -21, pts: 34 },
    { id:16, team:'Vfb Stuttgart', played: 34, win: 7, loss: 15, draw: 12, gf: 45, ga:57, diff: -12, pts: 33 },
    { id:17, team:'Schalke', played: 34, win: 7, loss: 17, draw: 10, gf: 57, ga:71, diff: -36, pts: 31 },
    { id:18, team:'Hertha', played: 34, win: 7, loss: 19, draw: 8, gf: 42, ga:69, diff: -27, pts: 29 }
]
openTable(bundTeams, 'bund_table')
let ligueTeams = [
    { id:1, team:'PSG', played: 38, win: 27, loss: 7, draw:4, gf: 89, ga: 40, diff: 49, pts: 85 },
    { id:2, team:'Lens', played: 38, win: 25, loss: 4, draw:9, gf: 68, ga: 29, diff: 39, pts: 84 },
    { id:3, team:'Marseille', played: 38, win: 22, loss: 9, draw:7, gf: 67, ga: 40, diff: 27, pts: 73 },
    { id:4, team:'Rennes', played: 38, win: 21, loss: 12, draw:5, gf: 69, ga: 39, diff: 30, pts: 68 },
    { id:5, team:'LOSC', played: 38, win: 19, loss: 9, draw:10, gf: 65, ga: 44, diff: 21, pts: 67 },
    { id:6, team:'Monaco', played: 38, win: 19, loss: 11, draw:8, gf: 70, ga: 58, diff: 12, pts: 65 },
    { id:7, team:'Lyon', played: 38, win: 18, loss: 12, draw:8, gf: 65, ga: 47, diff: 18, pts: 62 },
    { id:8, team:'Clement Foot', played: 17, win: 27, loss: 13, draw:8, gf: 45, ga: 49, diff: -4, pts: 59 },
    { id:9, team:'Nice', played: 38, win: 15, loss: 10, draw:13, gf: 48, ga: 37, diff: 11, pts: 58 },
    { id:10, team:'Lorient', played: 38, win: 15, loss: 13, draw:10, gf: 52, ga: 53, diff: -1, pts: 55 },
    { id:11, team:'Reims', played: 38, win: 12, loss: 11, draw:15, gf: 45, ga: 45, diff: 0, pts: 51 },
    { id:12, team:'Montpellier', played: 38, win: 15, loss: 18, draw:5, gf: 65, ga: 62, diff: 3, pts: 50 },
    { id:13, team:'Toulouse', played: 38, win: 13, loss: 16, draw:9, gf: 51, ga: 57, diff: -6, pts: 48 },
    { id:14, team:'Brest', played: 38, win: 11, loss: 16, draw:11, gf: 44, ga: 54, diff: -10, pts: 44 },
    { id:15, team:'Strasbourg', played: 38, win: 9, loss: 16, draw:13, gf: 51, ga: 59, diff: -8, pts: 40 },
    { id:16, team:'Nantes', played: 38, win: 7, loss: 16, draw:15, gf: 37, ga: 55, diff: -18, pts: 36 },
    { id:17, team:'Auxerre', played: 38, win: 8, loss: 19, draw:11, gf: 35, ga: 63, diff: -28, pts: 35 },
    { id:18, team:'Ajaccio', played: 38, win: 7, loss: 26, draw:5, gf: 23, ga: 74, diff: -51, pts: 26 },
    { id:19, team:'Troyes', played: 38, win: 4, loss: 22, draw:12, gf: 45, ga: 81, diff: -36, pts: 24 },
    { id:20, team:'Angers', played: 38, win: 4, loss: 28, draw:6, gf: 33, ga: 81, diff: -48, pts: 18 },
]
openTable(ligueTeams, 'ligue_table')



function lastMatches(match, id) {
    let matchDiv =``
    match.map((lastMatch)=> {
        matchDiv = `
        <div class="m-0 my-1">
            <div class="d-flex justify-content-between my-2 text-white pe-3">
                <div class="d-flex">
                <p style="font-size: 1rem;" class="m-0 me-3">${lastMatch.time}</p>
                    <div class="flex-column ps-3 border border-1 border-bottom-0 border-top-0 border-start-1 border-end-0">
                        <p style="font-size: 1rem;" class="m-0">${lastMatch.team1}</p>
                        <p style="font-size: 1rem;" class="m-0">${lastMatch.team2}</p>
                    </div>
                </div>
                <div class="flex-column">
                    <p style="font-size: 1rem;" class="m-0">${lastMatch.score1}</p>
                    <p style="font-size: 1rem;" class="m-0">${lastMatch.score2}</p>
                </div>
            </div>
        </div>
        `
        document.getElementById(id).innerHTML += matchDiv        
    })
}



const last_PremMatch1 = [
    { id:1, team1:"Leeds United", team2:"Newcastle United", score1:"0", score2:"0", time:`23 may <br>2023` }
]
lastMatches(last_PremMatch1, 'match_one')
const last_PremMatch2 = [
    { id:1, team1:"Leeds United", team2:"Tottenham Hotspur", score1:"1", score2:"4", time:`28 match <br>2023` },
    { id:1, team1:"Leeds United", team2:"Tottenham Hotspur", score1:"1", score2:"4", time:`28 match <br>2023` }
]
lastMatches(last_PremMatch2, 'match_two')


const laliga_one = [
    { id:1, team1:"Villareal", team2:"Cadiz", score1:"3", score2:"2", time:`10 may <br>2023` }
]
lastMatches(laliga_one, 'laliga_one')
const laliga_two = [
    { id:3, team1:"Barcelona", team2:"Getafe", score1:"3", score2:"0", time:`28 match <br>2023` }
]
lastMatches(laliga_two, 'laliga_two')


const serie_one = [
    { id:1, team1:"Fiorentina", team2:"Roma", score1:"2", score2:"1", time:`25 may <br>2023` }
]
lastMatches(serie_one, 'serie_one')
const serie_two = [
    { id:1, team1:"Napoli", team2:"Bologna", score1:"2", score2:"2", time:`28 may <br>2023` }
]
lastMatches(serie_two, 'serie_two')


const bund_one = [
    { id:1, team1:"Bayern Munich", team2:"RB Leipzig", score1:"2", score2:"4", time:`22 may <br>2023` }
]
lastMatches(bund_one, 'bund_one')
const bund_two = [
    { id:3, team1:"Borussia Dortmund", team2:"Mainz", score1:"2", score2:"2", time:`28 match <br>2023` }
]
lastMatches(bund_two, 'bund_two')


const ligue_one = [
    { id:1, team1:"PSG", team2:"Ajaccio", score1:"5", score2:"0", time:`22 may <br>2023` }
]
lastMatches(ligue_one, 'ligue_one')
const ligue_two = [
    { id:3, team1:"lens FC", team2:"Lille", score1:"3", score2:"0", time:`28 match <br>2023` }
]
lastMatches(ligue_two, 'ligue_two')