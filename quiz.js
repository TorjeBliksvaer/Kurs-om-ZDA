var index = 0;
var poeng = 0;
var start = 0;
var sprsmlValg;

var svar = [document.getElementById("svar1"),
            document.getElementById("svar2"),
            document.getElementById("svar3"),
            document.getElementById("svar4")];

var svartekst = document.getElementById("sprsmlTekst");

var sprsml =    [
                    {
                        tekst : "Hvilket land var hovedmålet til Stuxnet angrepet?",
                        alt : [
                                "India",
                                "Iran",
                                "Indonesia",
                                "Afghanistan"
                        ],
                        koc : [0, 1, 0, 0]
                    },{
                        tekst : "Hva fikk Zero Day sårbarheten i 2012 hos Microsoft i CVSS grunnscore?",
                        alt : [
                                "8.0", 
                                "7.8", 
                                "9.8", 
                                "5.4"
                        ],
                        koc : [0, 1, 0, 0]
                    },{
                        tekst : "Hvor blir som regel bedrifter rammet av Zero Day angripere?",
                        alt : [
                                "Når man surfer på internett", 
                                "På internett", 
                                "På email", 
                                "I Zoom videomøter"
                        ],
                        koc : [0, 0, 1, 0]
                    },{
                        tekst : "Hva er det FØRSTE ansatte bør gjøre hvis de mistenker at bedriften har blitt angrepet?",
                        alt : [ 
                                "Si ifra til IT-teamet, selv om det kan være en falsk alarm",
                                "Åpne den mistenkelige mailen hvor det står FREE ANTI-VIRUS",
                                "Prøve å fikse det selv",
                                "Gå hjem, siden arbeidsdagen er over"
                        ],
                        koc : [1, 0, 0, 0]
                    },{
                        tekst : "Hvorfor er det viktig å kontrollere en ‘patch’ som skal fjerne en sårbarhet?",
                        alt : [ 
                                "Nye oppdateringer introduserer ofte nye sårbarheter",
                                "Det kan hende ansatte ikke oppdaterer PCen sin",
                                "Fordi ‘patcher’ er lite optimalisert og tar lang tid å laste ned",
                                "Fordi den er laget av en person som ikke har nok kunnskap alene"
                        ],
                        koc : [1, 0, 0, 0]
                    },{
                        tekst : "Hvorfor er det viktig å dele informasjon med ansatte etter et angrep?",
                        alt : [ 
                                "For å hindre at ansatte gjør samme feil/forverrer angrepet ved å for eksempel trykke på en link i en phishing e-mail",
                                "Fordi det gjør at ingen får panikk",
                                "Fordi de kan hjelpe hvis de vet hva som skjer",
                                "Hvis de ansatte vet hva som skjer kan de spørre sitt kontaktnett om hjelp"
                        ],
                        koc : [1, 0, 0, 0]
                    },{
                        tekst : "Hvilke av alternativene inneholder tre tiltak/metoder for å forebygge ZDA?",
                        alt : [ "Aldri åpne mail, NIPS, Backup", 
                                "Fuzzing, Oppdatere operativsystem, NIPS", 
                                "Unngå nettilkobling, gode sikkerhestrutiner, Backup", 
                                "Ansette sikkerhetseksperter, Begrense brukertilgang, Lagre all data på ett sted"
                        ],
                        koc : [0, 1, 0, 0]
                    },{
                        tekst : "Hvorfor er det viktig å ansette sikkerhetseksperter i en virksomhet? ",
                        alt : [ "De hjelper med vedlikehold av systemer", 
                                "De sikrer virksomhetens økonomi", 
                                "De hjelper med overvåking av nettverk",
                                "De hjelper med sikre de ansattes fysiske helse"
                            ],
                        koc : [0, 0, 1, 0]
                    },{
                        tekst : "Hva er hovedfunskjonen til fuzzing?",
                        alt : [ "Blokke uautorisert data på nettverket",
                                "Å teste systemet med tilfeldig eller uventet data",
                                "Å automatisere operativsystem oppdateringer",
                                "Brukes som en backup-løsning"
                        ],
                        koc : [0, 1, 0, 0]
                    }
                ];

function oppdaterQuiz() {

    // Hvis ingen valg er gjort
    if (sprsmlValg === null) {
        return;
    }
    
    // Hvis start
    if (start === 0) {
        document.getElementById("quizBtn").innerHTML = "Neste";
        start ++;
    // Hvis ikke start
    } else {
        
        if (sprsml[index].koc[sprsmlValg] === 1) {
            poeng++;
        }

        index ++;
        if (index === 8) {
            document.getElementById("quizBtn").innerHTML = "Resultater";
        }
    }

    svartekst.innerHTML = `Spørsmål ${index + 1} <br> ${sprsml[index].tekst}`;
    for (var i = 0; i < 4; i++) {
        svar[i].innerHTML = sprsml[index].alt[i];
    }

    knappValg(null);
}

function knappValg(x) {
    sprsmlValg = x;

    for (var i = 0; i < 4; i++) {
        svar[i].style.backgroundColor = "";
    }
    if (x != null) {
        svar[x].style.backgroundColor = "rgb(239, 144, 58)";
    }
}