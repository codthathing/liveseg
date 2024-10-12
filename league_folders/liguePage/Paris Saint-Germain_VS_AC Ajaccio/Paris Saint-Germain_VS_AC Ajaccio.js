import { createMatchPage, createTeamPastMatches, createMatchDetails, createTeamMatchDayInfo, createTableH2H, createBothH2H } from "../../pages.js"

createMatchPage("../../../league_logos/france.jpg", "Ligue 1", "./images/hazard_logo.jpg", "none", "../ligueLogo/PSG-logo.png", "PSG", "../ligueLogo/ajaccio-logo.png", "AC Ajaccio", "15:00");

const teamPastMatches = [
  [
    { fontSize: "font-xs", dayMonth: "31 may", year: "2023", teamOne: "Chelsea", teamTwo: "Fulham", scoreOne: "0", scoreTwo: "0" },
    { fontSize: "font-xs", dayMonth: "31 may", year: "2023", teamOne: "Aston Villa", teamTwo: "Tottenham", scoreOne: "0", scoreTwo: "0" }
  ]
];
createTeamPastMatches(teamPastMatches);

const matchDetails = [
  "Date - 26 may 2023",
  "Referee(Country) - Antony Tailor(England)",
  "Stadium - Stamford Bridge"
];
createMatchDetails(matchDetails);

const teamMatchDayInfo = [
  {
    teamName: "Chelsea",
    teamGraphic: "./images/formation.jpg",
    teamSquad: [
      {
        teamSection: "Substitutes",
        teamSectionNames: ["Gallagher", "Havertz", "Mudryk", "Felix"]
      },
      {
        teamSection: "Injuries",
        teamSectionNames: ["Pulisic"]
      },
      {
        teamSection: "Suspension",
        teamSectionNames: ["Koulibaly"]
      }
    ]
  },
  {
    teamName: "Tottenham",
    teamGraphic: "./images/formation.jpg",
    teamSquad: [
      {
        teamSection: "Substitutes",
        teamSectionNames: ["L.Moura", "Richarlison", "Sanchez", "Davies"]
      },
      {
        teamSection: "Injuries",
        teamSectionNames: ["Bentacur"]
      },
      {
        teamSection: "Suspension",
        teamSectionNames: ["Hoijberg"]
      }
    ]
  }
]
createTeamMatchDayInfo(teamMatchDayInfo);

const tableH2H = [
  [{ scope: "col", dataStyle: "", dataDetail: "Match = 20" }, { scope: "col", dataStyle: "", dataDetail: "Chelsea" }, { scope: "col", dataStyle: "", dataDetail: "Tottenham" }],
  [{ scope: "row", dataStyle: "", dataDetail: "Win" }, { scope: "", dataStyle: "fw-light", dataDetail: "10" }, { scope: "", dataStyle: "fw-light", dataDetail: "3" }],
  [{ scope: "row", dataStyle: "", dataDetail: "Loss" }, { scope: "", dataStyle: "fw-light", dataDetail: "3" }, { scope: "", dataStyle: "fw-light", dataDetail: "10" }],
  [{ scope: "row", dataStyle: "", dataDetail: "Draw" }, { scope: "", dataStyle: "fw-light", dataDetail: "7" }, { scope: "", dataStyle: "fw-light", dataDetail: "7" }]
];
createTableH2H(tableH2H);

const bothHTH = [
  { fontSize: "font-sm", dayMonth: "20 may", year: "2023", teamOne: "Chelsea", teamTwo: "Tottenham", scoreOne: "2", scoreTwo: "0" },
  { fontSize: "font-sm", dayMonth: "29 June", year: "2024", teamOne: "Tottenham", teamTwo: "Chelsea", scoreOne: "0", scoreTwo: "5" },
]
createBothH2H(bothHTH);