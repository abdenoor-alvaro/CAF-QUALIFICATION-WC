
const currentPage = window.location.pathname;
console.log(currentPage)
// Start page Header
let pageHeaderHtml = `
    <!-- Start Header -->
    <header>
        <div class="container">
            <div class="logo"><a href="index.html">ALVARO</a></div>
            <input type="checkbox" id="burger">
            <label class="burger" for="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="games-and-scores.html">Games & Scores</a></li>
                <li><a href="group-stage.html">Groups</a></li>
                <li><a href="knockout.html">Knockout</a></li>
                <li><a href="all-news.html">News</a></li>
                <li><a href="teams.html">Teams</a></li>
            </ul>
        </div>
    </header>
    <!-- End Header -->
`
let pageHeader = document.createElement("div")
let pageBody = document.querySelector("body")
if (!currentPage.includes("games-and-scores.html")) {
    pageHeader.innerHTML = pageHeaderHtml
    pageBody.prepend(pageHeader)
}
// End page Header


// Start Teams Data 
let allTeams = [
    {
        name: "ivory coast",
        subName: "CIV",
        flagPic: "Flag-Cote-dIvoire.webp",
        // players: {
        //     p1: {
        //         fName: "Santana",
        //         lName: "EDERSON",
        //         position: "GOALKEEPER",
        //         photo: "ederson.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p2: {
        //         fName: "Ruben",
        //         lName: "DIAS",
        //         position: "DEFENDER",
        //         photo: "ruben-dias.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p3: {
        //         fName: "Kyle",
        //         lName: "WALKER",
        //         position: "DEFENDER",
        //         photo: "kyle-walker.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p4: {
        //         fName: "Kevin",
        //         lName: "DE BRUYNE",
        //         position: "MIDFIELDER",
        //         photo: "kevin-de-bruyne.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p5: {
        //         fName: "Hernandez",
        //         lName: "RODRIGO",
        //         position: "MIDFIELDER",
        //         photo: "rodrigo.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p6: {
        //         fName: "Riyad",
        //         lName: "MAHREZ",
        //         position: "FORWARD",
        //         photo: "riyad-mahrez.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p7: {
        //         fName: "Erling",
        //         lName: "HAALAND",
        //         position: "FORWARD",
        //         photo: "erling-haaland.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     manager: {
        //         fName: "Pep",
        //         lName: "GUARDIOLA",
        //         position: "MANAGER",
        //         photo: "pep-guardiola.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     }
        // }
    },{
        name: "morocco",
        subName: "MAR",
        flagPic: "ma.png",
        // players: {
        //     p1: {
        //         fName: "Thibaut",
        //         lName: "COURTOIS",
        //         position: "GOALKEEPER",
        //         photo: "COURTOISthumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p2: {
        //         fName: "Daniel",
        //         lName: "CARVAJAL",
        //         position: "DEFENDER",
        //         photo: "CARVAJALThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p3: {
        //         fName: "Eder",
        //         lName: "MILITAO",
        //         position: "DEFENDER",
        //         photo: "MILITAO.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p4: {
        //         fName: "Luka",
        //         lName: "MODRIC",
        //         position: "MIDFIELDER",
        //         photo: "MODRICThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p5: {
        //         fName: "Toni",
        //         lName: "KROOS",
        //         position: "MIDFIELDER",
        //         photo: "KROOSThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p6: {
        //         fName: "Paixao de Oliveira",
        //         lName: "VINICIUS JR.",
        //         position: "FORWARD",
        //         photo: "VINICIUSThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p7: {
        //         fName: "Goes",
        //         lName: "RODRYGO",
        //         position: "FORWARD",
        //         photo: "RODRYGOThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     manager: {
        //         fName: "Carlo",
        //         lName: "ANCELOTTI",
        //         position: "MANAGER",
        //         photo: "ANCELOTTIThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     }
        // }
    },{
        name: "algeria",
        subName: "ALG",
        flagPic: "Flag_of_Algeria.svg",
        // players: {
        //     p1: {
        //         fName: "Ter",
        //         lName: "STEGEN",
        //         position: "GOALKEEPER",
        //         photo: "01-MARC-ANDRE_TER_STEGEN-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p2: {
        //         fName: "Ronald",
        //         lName: "ARAUJO",
        //         position: "DEFENDER",
        //         photo: "04-RONALD_ARAUJO_-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p3: {
        //         fName: "Eric",
        //         lName: "GARCIA",
        //         position: "DEFENDER",
        //         photo: "24-ERIC_GARCIA-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p4: {
        //         fName: "González López",
        //         lName: "PEDRI",
        //         position: "DEFENDER",
        //         photo: "08-PEDRI-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p5: {
        //         fName: "Frenkie",
        //         lName: "DE JONG",
        //         position: "MIDFIELDER",
        //         photo: "21-FRENKIE_DE_JONG-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p6: {
        //         fName: "Robert",
        //         lName: "LEWANDOWSKI",
        //         position: "FORWARD",
        //         photo: "09-ROBERT_LEWANDOWSKI-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p7: {
        //         fName: "&#8203;",
        //         lName: "RAPHINHA",
        //         position: "FORWARD",
        //         photo: "22-RAPHINHA-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     manager: {
        //         fName: "XAVI",
        //         lName: "HERNANDEZ",
        //         position: "MANAGER",
        //         photo: "00_XAVI_HERNANDEZ-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     }
        // }
    },{
        name: "south africa",
        subName: "RSA",
        flagPic: "Flag_of_South_Africa.svg.png"
    },{
        name: "senegal",
        subName: "SEN",
        flagPic: "Flag-Senegal.webp"
    },{
        name: "burkina faso", 
        subName: "BFA",
        flagPic: "Flag-Burkina-Faso.webp"
    },{
        name: "tunisia",
        subName: "TUN",
        flagPic: "1024px-Flag_of_Tunisia.png"
    },{
        name: "egypt",
        subName: "EGY",
        flagPic: "553_1600x.webp"
    },{
        name: "zambia", 
        subName: "ZAM",
        flagPic: "download.jpg"
    },{
        name: "equatorial guinea", 
        subName: "EQG",
        flagPic: "Flag-Equatorial-Guinea.webp"
    },{
        name: "nigeria", 
        subName: "NGA",
        flagPic: "nigeria-flag__68388.1639690373.1280.1280.webp"
    },{
        name: "guinea-bissau",
        subName: "GNB",
        flagPic: "istockphoto-1457742800-612x612.jpg"
    },{
        name: "cape verde",
        subName: "CPV",
        flagPic: "Flag-of-Cape-Verde-01.png"
    },{
        name: "mali",
        subName: "MLI",
        flagPic: "download.png"
    },{
        name: "guinea", 
        subName: "GUI",
        flagPic: "Flag-Guinea.webp"
    },{
        name: "ghana", 
        subName: "GHA",
        flagPic: "Flag-Ghana.webp"
    },{
        name: "angola", 
        subName: "ANG",
        flagPic: "Flag-Angola.webp"
    },{
        name: "tanzania",
        subName: "TAN",
        flagPic: "Flag-Tanzania.webp"
    },{
        name: "mozambique", 
        subName: "MOZ",
        flagPic: "Flag-Mozambique.webp"
    },{
        name: "dr congo", 
        subName: "COD",
        flagPic: "Flag-Democratic-Republic-of-the-Congo.webp"
    },{
        name: "mauritania", 
        subName: "MTN",
        flagPic: "Flag-Mauritania.webp"
    },{
        name: "gambia",
        subName: "GAM",
        flagPic: "Flag-of-The-Gambia.webp"
    },{
        name: "cameroon", 
        subName: "CMR",
        flagPic: "download (1).png"
    },{
        name: "namibia", 
        subName: "NAM",
        flagPic: "Flag-Namibia.webp"
    },{
        name: "sierra leone", 
        subName: "SLE",
        flagPic: "Sierra Leone.png"
    },{
        name: "ethiopia", 
        subName: "ETH",
        flagPic: "Flag_of_Ethiopia.svg.png"
    },{
        name: "djibouti", 
        subName: "DJI",
        flagPic: "Flag_of_Djibouti.svg.png"
    },{
        name: "togo",
        subName: "TOG",
        flagPic: "Flag_of_Togo.svg.png"
    },{
        name: "sudan",
        subName: "SDN",
        flagPic: "Flag-Sudan.webp"
    },{
        name: "south sudan",
        subName: "SSD",
        flagPic: "South Sudan.png"
    },{
        name: "benin", 
        subName: "BEN",
        flagPic: "Flag_of_Benin.svg.png"
    },{
        name: "zimbabwe",
        subName: "ZIM",
        flagPic: "Flag_of_Zimbabwe.svg.png"
    },{
        name: "rwanda",
        subName: "RWA",
        flagPic: "Rwanda.png"
    },{
        name: "lesotho",
        subName: "LES",
        flagPic: "Lesotho.png"
    },{
        name: "libya", 
        subName: "LBY",
        flagPic: "Libya.png"
    },{
        name: "eswatini",
        subName: "SWZ",
        flagPic: "Flag_of_Eswatini.svg.png"
    },{
        name: "mauritius",
        subName: "MRI",
        flagPic: "Flag_of_Mauritius.svg"
    },{
        name: "congo", 
        subName: "CGO",
        flagPic: "Flag_of_the_Republic_of_the_Congo.svg.png"
    },,{
        name: "niger",
        subName: "NIG",
        flagPic: "Flag_of_Niger_(3-2).svg.png"
    },{
        name: "gabon", 
        subName: "GAB",
        flagPic: "Flag_of_Gabon.svg.png"
    },{
        name: "kenya",
        subName: "KEN",
        flagPic: "Kenya.png"
    },{
        name: "burundi",
        subName: "BDI",
        flagPic: "Flag_of_Burundi.svg.png"
    },{
        name: "seychelles",
        subName: "SEY",
        flagPic: "Seychelles.png"
    },{
        name: "uganda",
        subName: "UGA",
        flagPic: "Flag_of_Uganda.svg.png"
    },{
        name: "somalia",
        subName: "SOM",
        flagPic: "Somalia.png"
    },{
        name: "botswana",
        subName: "BOT",
        flagPic: "Flag_of_Botswana.svg.png"
    },{
        name: "malawi",
        subName: "MWI",
        flagPic: "Flag-Malawi.webp"
    },{
        name: "liberia",
        subName: "LBR",
        flagPic: "Liberia.jpg"
    },{
        name: "sao tome & principe",
        subName: "STP",
        flagPic: "Flag_of_Sao_Tome_and_Principe.svg"
    },{
        name: "madagascar",
        subName: "MAD",
        flagPic: "Flag-Madagascar.webp"
    },{
        name: "chad",
        subName: "CHA",
        flagPic: "Chad.png"
    },{
        name: "comoros",
        subName: "COM",
        flagPic: "Flag-Comoros.webp"
    },{
        name: "central africa",
        subName: "CTA",
        flagPic: "Central African Republic.png"
    },
]
let AllTeams = Object.values(allTeams)
// End Teams Data


// Start All Games & Scores Data
let days = {
    day1: {
        date: "Wednesday 15 November 2023",
        game1: {
            teamOne: {
                name: "zimbabwe",
                flag: "Flag_of_Zimbabwe.svg.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "rwanda",
                flagPic: "Rwanda.png",
                score: 0,
                goals: {
                },
            },
            group: "Group C",
            time: "13:00 GMT",
            match: "Round One",
            city: "Butare",
            stadium: "Stade Huye",
            highlight: "9_typOLRgvI?si=N1xcrYhBObxlUHPr",
            id: "01"
        },
        game2: {
            teamOne: {
                name: "namibia",
                flagPic: "Flag-Namibia.webp",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "equatorial guinea",
                flagPic: "Flag-Equatorial-Guinea.webp", 
                score: 1,
                goals: {
                },
                winner: true
            },
            group: "Group H",
            time: "13:00 GMT",
            match: "Round One",
            city: "Malabo",
            stadium: "Nuevo Estadio de Malabo",
            highlight: "eK-749Ti9Ig?si=u2GVK9h5QZ6uA8VC",
            id: "02"
        },
        game3: {
            teamOne: {
                name: "dr congo", 
                flagPic: "Flag-Democratic-Republic-of-the-Congo.webp",
                score: 2,
                goals: {
                    
                },
                winner: true
            },
            teamTwo: {
                name: "mauritania", 
                flagPic: "Flag-Mauritania.webp",
                score: 0,
                goals: {
                },
            },
            group: "Group B",
            time: "16:00 GMT",
            match: "Round One",
            city: "Kinshasa",
            stadium: "Stade de Martyrs",
            highlight: "XzL_PgB_-nk?si=RJegldxTMTxc0Dge",
            id: "03"
        },
        game4: {
            teamOne: {
                name: "sierra leone", 
                flagPic: "Sierra Leone.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "ethiopia", 
                flagPic: "Flag_of_Ethiopia.svg.png",
                score: 0,
                goals: {
                },
            },
            group: "Group A",
            time: "19:00 GMT",
            match: "Round One",
            city: "El Jadida",
            stadium: "Stade El Abdi",
            highlight: "OoPP--gM3fY?si=ifLHs0sfUIx5y0fV",
            id: "04"
        },
    },
    day2: {
        date: "Thursday 16 November 2023",
        game1: {
            teamOne: {
                name: "gambia",
                flagPic: "Flag-of-The-Gambia.webp",
                score: 2,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "burundi",
                flagPic: "Flag_of_Burundi.svg.png",
                score: 3,
                goals: {
                },
                winner: true
            },
            group: "Group F",
            time: "13:00 GMT",
            match: "Round One",
            city: "Dar es Salaam",
            stadium: "Benjamin Mkapa (National Stadium)",
            highlight: "sOks3mzM7Z4?si=JjiVVIrIccC1nmIR",
            id: "05"
        },
        game2: {
            teamOne: {
                name: "botswana",
                flagPic: "Flag_of_Botswana.svg.png",
                score: 2,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "mozambique", 
                flagPic: "Flag-Mozambique.webp", 
                score: 3,
                goals: {
                },
                winner: true
            },
            group: "Group G",
            time: "13:00 GMT",
            match: "Round One",
            city: "Francistown",
            stadium: "Obed Itani Chilume Stadium",
            highlight: "hO5cNYVt4sA?si=sC8dbU5JU03nQqgE",
            id: "06"
        },
        game3: {
            teamOne: {
                name: "togo",
                flagPic: "Flag_of_Togo.svg.png",
                score: 1,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "sudan",
                flagPic: "Flag-Sudan.webp",
                score: 1,
                goals: {
                },
            },
            group: "Group B",
            time: "16:00 GMT",
            match: "Round One",
            city: "Baninah",
            stadium: "Benina Martyrs Stadium",
            highlight: "KOIycFBeQOE?si=3bhXm8kNUy4we6x_",
            id: "07"
        },
        game4: {
            teamOne: {
                name: "djibouti", 
                flagPic: "Flag_of_Djibouti.svg.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "egypt",
                flagPic: "553_1600x.webp",
                score: 6,
                goals: {
                },
                winner:true
            },
            group: "Group A",
            time: "16:00 GMT",
            match: "Round One",
            city: "Cairo",
            stadium: "Cairo International Stadium",
            highlight: "Mh8fhhjRRKY?si=WWcZvYu0IGHVs4ZT",
            id: "08"
        },
        game5: {
            teamOne: {
                name: "gabon", 
                flagPic: "Flag_of_Gabon.svg.png",
                score: 2,
                goals: {
                    
                },
                winner: true
            },
            teamTwo: {
                name: "kenya",
                flagPic: "Kenya.png",
                score: 1,
                goals: {
                },
            },
            group: "Group F",
            time: "16:00 GMT",
            match: "Round One",
            city: "Franceville",
            stadium: "Stade de Franceville",
            highlight: "#",
            id: "09"
        },
        game6: {
            teamOne: {
                name: "somalia",
                flagPic: "Somalia.png",
                score: 1,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "algeria",
                flagPic: "Flag_of_Algeria.svg", 
                score: 3,
                goals: {
                },
                winner: true
            },
            group: "Group G",
            time: "16:00 GMT",
            match: "Round One",
            city: "Baraki",
            stadium: "Stade Nelson Mandela",
            highlight: "#",
            id: "10"
        },
        game7: {
            teamOne: {
                name: "lesotho",
                flagPic: "Lesotho.png",
                score: 1,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "nigeria", 
                flagPic: "nigeria-flag__68388.1639690373.1280.1280.webp",
                score: 1,
                goals: {
                },
            },
            group: "Group C",
            time: "16:00 GMT",
            match: "Round One",
            city: "UYO",
            stadium: "Godswill Akpabio International Stadium",
            highlight: "#",
            id: "11"
        },
        game8: {
            teamOne: {
                name: "angola", 
                flagPic: "Flag-Angola.webp",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "cape verde",
                flagPic: "Flag-of-Cape-Verde-01.png",
                score: 0,
                goals: {
                },
            },
            group: "Group D",
            time: "19:00 GMT",
            match: "Round One",
            city: "Praia",
            stadium: "Estádio Nacional de Cabo Verde",
            highlight: "#",
            id: "12"
        },
    },
    day3: {
        date: "Friday 17 November 2023",
        game1: {
            teamOne: {
                name: "libya", 
                flagPic: "Libya.png",
                score: 1,
                goals: {
                    
                },
                winner: true
            },
            teamTwo: {
                name: "eswatini",
                flagPic: "Flag_of_Eswatini.svg.png",
                score: 0,
                goals: {
                }
            },
            group: "Group D",
            time: "13:00 GMT",
            match: "Round One",
            city: "Mbombela",
            stadium: "Mbombela Stadium",
            highlight: "#",
            id: "13"
        },
        game2: {
            teamOne: {
                name: "comoros",
                flagPic: "Flag-Comoros.webp",
                score: 4,
                goals: {
                    
                },
                winner: true
            },
            teamTwo: {
                name: "central africa",
                flagPic: "Central African Republic.png", 
                score: 2,
                goals: {
                }
            },
            group: "Group I",
            time: "13:00 GMT",
            match: "Round One",
            city: "MORONI",
            stadium: "Stade de Moroni",
            highlight: "#",
            id: "14"
        },
        game3: {
            teamOne: {
                name: "uganda",
                flagPic: "Flag_of_Uganda.svg.png",
                score: 1,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "guinea", 
                flagPic: "Flag-Guinea.webp",
                score: 2,
                goals: {
                },
                winner: true
            },
            group: "Group G",
            time: "13:00 GMT",
            match: "Round One",
            city: "Berkane",
            stadium: "Stade Municipal de Berkane",
            highlight: "#",
            id: "15"
        },
        game4: {
            teamOne: {
                name: "liberia",
                flagPic: "Liberia.jpg",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "malawi",
                flagPic: "Flag-Malawi.webp",
                score: 1,
                goals: {
                },
                winner:true
            },
            group: "Group H",
            time: "16:00 GMT",
            match: "Round One",
            city: "Paynesville",
            stadium: "Samuel Kanyon Doe Sports Complex",
            highlight: "#",
            id: "16"
        },
        game5: {
            teamOne: {
                name: "congo", 
                flagPic: "Flag_of_the_Republic_of_the_Congo.svg.png",
                score: 2,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "zambia", 
                flagPic: "download.jpg",
                score: 4,
                goals: {
                },
                winner: true
            },
            group: "Group E",
            time: "16:00 GMT",
            match: "Round One",
            city: "Ndola",
            stadium: "Levy Mwanawasa Stadium",
            highlight: "#",
            id: "17"
        },
        game6: {
            teamOne: {
                name: "madagascar", 
                flagPic: "Flag-Madagascar.webp",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "ghana", 
                flagPic: "Flag-Ghana.webp", 
                score: 1,
                goals: {
                },
                winner: true
            },
            group: "Group I",
            time: "16:00 GMT",
            match: "Round One",
            city: "Kumasi",
            stadium: "Baba Yara Stadium",
            highlight: "#",
            id: "18"
        },
        game7: {
            teamOne: {
                name: "mauritius",
                flagPic: "Flag_of_Mauritius.svg",
                score: 0,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "cameroon", 
                flagPic: "download (1).png",
                score: 3,
                goals: {
                },
                winner:true
            },
            group: "Group D",
            time: "19:00 GMT",
            match: "Round One",
            city: "Douala",
            stadium: "Japoma Stadium",
            highlight: "#",
            id: "19"
        },
        game8: {
            teamOne: {
                name: "sao tome & principe",
                flagPic: "Flag_of_Sao_Tome_and_Principe.svg",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                ame: "tunisia",
                flagPic: "1024px-Flag_of_Tunisia.png",
                score: 4,
                goals: {
                },
                winner:true
            },
            group: "Group H",
            time: "19:00 GMT",
            match: "Round One",
            city: "Rades",
            stadium: "Stade du 7 Novembre (Olympique)",
            highlight: "#",
            id: "20"
        },
        game9: {
            teamOne: {
                name: "guinea-bissau",
                flagPic: "istockphoto-1457742800-612x612.jpg",
                score: 1,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "burkina faso", 
                flagPic: "Flag-Burkina-Faso.webp",
                score: 1,
                goals: {
                }
            },
            group: "Group A",
            time: "19:00 GMT",
            match: "Round One",
            city: "Marrakesh",
            stadium: "Marrakech Stadium",
            highlight: "#",
            id: "21"
        },
        game10: {
            teamOne: {
                name: "chad",
                flagPic: "Chad.png",
                score: 1,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "mali",
                flagPic: "download.png", 
                score: 3,
                goals: {
                },
                winner: true
            },
            group: "Group I",
            time: "19:00 GMT",
            match: "Round One",
            city: "Bamako",
            stadium: "Stade du 26 mars (National Stadium)",
            highlight: "#",
            id: "22"
        },
        game11: {
            teamOne: {
                name: "seychelles",
                flagPic: "Seychelles.png",
                score: 0,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "ivory coast",
                flagPic: "Flag-Cote-dIvoire.webp",
                score: 9,
                goals: {
                },
                winner: true
            },
            group: "Group F",
            time: "19:00 GMT",
            match: "Round One",
            city: "Ebimpé",
            stadium: "Stade Olympique d'Ebimpé",
            highlight: "#",
            id: "23"
        },
    },
    day4: {
        date: "Saturday 18 November 2023",
        game1: {
            teamOne: {
                name: "benin", 
                flagPic: "Flag_of_Benin.svg.png",
                score: 1,
                goals: {
                    goal1: {
                        minute: "70'",
                        player: "Steve MOUNIE",
                        assist: false,
                        penalty: false
                    },
                }
            },
            teamTwo: {
                name: "south africa",
                flagPic: "Flag_of_South_Africa.svg.png",
                score: 2,
                goals: {
                    goal1: {
                        minute: "2'",
                        player: "Percy TAU",
                        assist: false,
                        penalty: false
                    },
                    goal2: {
                        minute: "45'+2'",
                        player: "Khuliso Mudau",
                        assist: false,
                        penalty:false
                    },
                    
                },
                winner: true
            },
            group: "Group C",
            time: "13:00 GMT",
            match: "Round One",
            city: "Durban",
            stadium: "Moses Mabhida Stadium",
            highlight: "#",
            id: "24"
        },
        game2: {
            teamOne: {
                name: "tanzania",
                flagPic: "Flag_of_Tanzania.svg.png",
                score: 1,
                goals: {
                    
                },
                winner: true
            },
            teamTwo: {
                name: "niger",
                flagPic: "Flag_of_Niger_(3-2).svg.png",
                score: 0,
                goals: {
                }
            },
            group: "Group E",
            time: "16:00 GMT",
            match: "Round One",
            city: "Marrakesh",
            stadium: "Marrakech Stadium",
            highlight: "#",
            id: "25"
        },
        game3: {
            teamOne: {
                name: "south sudan",
                flagPic: "South Sudan.png",
                score: 0,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "senegal",
                flagPic: "Flag-Senegal.webp",
                score: 4,
                goals: {
                },
                winner: true
            },
            group: "Group B",
            time: "19:00 GMT",
            match: "Round One",
            city: "DIAMNIADIO",
            stadium: "Stade Me Abdoulaye Wade",
            highlight: "#",
            id: "26"
        },
    },
    day5: {
        date: "Sunday 19 November 2023",
        game1: {
            teamOne: {
                name: "zimbabwe",
                flagPic: "Flag_of_Zimbabwe.svg.png",
                score: 1,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "nigeria", 
                flagPic: "nigeria-flag__68388.1639690373.1280.1280.webp",
                score: 1,
                goals: {
                }
            },
            group: "Group C",
            time: "13:00 GMT",
            match: "Round Two",
            city: "Butare",
            stadium: "Stade Huye",
            highlight: "#",
            id: "27"
        },
        game2: {
            teamOne: {
                name: "burundi",
                flagPic: "Flag_of_Burundi.svg.png",
                score: 1,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "gabon", 
                flagPic: "Flag_of_Gabon.svg.png", 
                score: 2,
                goals: {
                },
                winner: true
            },
            group: "Group F",
            time: "13:00 GMT",
            match: "Round Two",
            city: "Dar es Salaam",
            stadium: "Benjamin Mkapa (National Stadium)",
            highlight: "#",
            id: "28"
        },
        game3: {
            teamOne: {
                name: "mozambique", 
                flagPic: "Flag-Mozambique.webp",
                score: 0,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "algeria",
                flagPic: "Flag_of_Algeria.svg",
                score: 2,
                goals: {
                },
                winner: true
            },
            group: "Group G",
            time: "13:00 GMT",
            match: "Round Two",
            city: "Maputo",
            stadium: "Estadio do Zimpeto",
            highlight: "#",
            id: "29"
        },
        game4: {
            teamOne: {
                name: "sierra leone", 
                flagPic: "Sierra Leone.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "egypt",
                flagPic: "553_1600x.webp",
                score: 2,
                goals: {
                },
                winner:true
            },
            group: "Group A",
            time: "16:00 GMT",
            match: "Round Two",
            city: "Paynesville",
            stadium: "Samuel Kanyon Doe Sports Complex",
            highlight: "#",
            id: "30"
        },
        game5: {
            teamOne: {
                name: "sudan",
                flagPic: "Flag-Sudan.webp",
                score: 1,
                goals: {
                    
                },
                winner: true
            },
            teamTwo: {
                name: "dr congo", 
                flagPic: "Flag-Democratic-Republic-of-the-Congo.webp",
                score: 0,
                goals: {
                },
            },
            group: "Group B",
            time: "16:00 GMT",
            match: "Round Two",
            city: "Baninah",
            stadium: "Benina Martyrs Stadium",
            highlight: "#",
            id: "31"
        },
    },
    day6: {
        date: "Monday 20 November 2023",
        game1: {
            teamOne: {
                name: "djibouti", 
                flagPic: "Flag_of_Djibouti.svg.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "guinea-bissau",
                flagPic: "istockphoto-1457742800-612x612.jpg",
                score: 1,
                goals: {
                },
                winner:true
            },
            group: "Group A",
            time: "13:00 GMT",
            match: "Round Two",
            city: "Cairo",
            stadium: "Cairo International Stadium",
            highlight: "#",
            id: "32"
        },
        game2: {
            teamOne: {
                name: "gambia",
                flagPic: "Flag-of-The-Gambia.webp",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "ivory coast",
                flagPic: "Flag-Cote-dIvoire.webp",
                score: 2,
                goals: {
                },
                winner:true
            },
            group: "Group F",
            time: "16:00 GMT",
            match: "Round Two",
            city: "Dar es Salaam",
            stadium: "Benjamin Mkapa (National Stadium)",
            highlight: "#",
            id: "33"
        },
        game3: {
            teamOne: {
                name: "liberia",
                flagPic: "Liberia.jpg",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "equatorial guinea", 
                flagPic: "Flag-Equatorial-Guinea.webp",
                score: 1,
                goals: {
                },
                winner:true
            },
            group: "Group H",
            time: "16:00 GMT",
            match: "Round Two",
            city: "Paynesville",
            stadium: "Samuel Kanyon Doe Sports Complex",
            highlight: "#",
            id: "34"
        },
        game4: {
            teamOne: {
                name: "seychelles",
                flagPic: "Seychelles.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "kenya",
                flagPic: "Kenya.png",
                score: 5,
                goals: {
                },
                winner:true
            },
            group: "Group F",
            time: "19:00 GMT",
            match: "Round Two",
            city: "Abidjan",
            stadium: "Stade Felix Houphouet-Boigny",
            highlight: "#",
            id: "35"
        },
        game5: {
            teamOne: {
                name: "madagascar",
                flagPic: "Flag-Madagascar.webp",
                score: 3,
                goals: {
                    
                },
                winner:true
            },
            teamTwo: {
                name: "chad",
                flagPic: "Chad.png",
                score: 0,
                goals: {
                }
            },
            group: "Group I",
            time: "19:00 GMT",
            match: "Round Two",
            city: "Oujda",
            stadium: "Stade municipal d'Oujda",
            highlight: "#",
            id: "36"
        },
        game6: {
            teamOne: {
                name: "central africa",
                flagPic: "Central African Republic.png",
                score: 1,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "mali",
                flagPic: "download.png",
                score: 1,
                goals: {
                }
            },
            group: "Group I",
            time: "13:00 GMT",
            match: "Round Two",
            city: "Bamako",
            stadium: "Stade du 26 mars (National Stadium)",
            highlight: "#",
            id: "37"
        },
        
    },
    day7: {
        date: "Tuesday 21 November 2023",
        game1: {
            teamOne: {
                name: "rwanda",
                flagPic: "Rwanda.png",
                score: 2,
                goals: {
                    goal1: {
                        minute: "12'",
                        player: "Innocent Nshuti",
                        assist: false,
                        penalty: false
                    },
                    goalé: {
                        minute: "28'",
                        player: "Gilbert Mugisha",
                        assist: false,
                        penalty: false
                    },
                },
                winner: true
            },
            teamTwo: {
                name: "south africa",
                flagPic: "Flag_of_South_Africa.svg.png",
                score: 0,
                goals: {
                }
            },
            group: "Group C",
            time: "13:00 GMT",
            match: "Round Two",
            city: "Butare",
            stadium: "Stade Huye",
            highlight: "#",
            id: "38"
        },
        game2: {
            teamOne: {
                name: "ethiopia", 
                flagPic: "Flag_of_Ethiopia.svg.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "burkina faso", 
                flagPic: "Flag-Burkina-Faso.webp",
                score: 3,
                goals: {
                },
                winner: true
            },
            group: "Group A",
            time: "13:00 GMT",
            match: "Round Two",
            city: "El Jadida",
            stadium: "Stade El Abdi",
            highlight: "#",
            id: "39"
        },
        game3: {
            teamOne: {
                name: "lesotho",
                flagPic: "Lesotho.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "benin", 
                flagPic: "Flag_of_Benin.svg.png",
                score: 0,
                goals: {
                }
            },
            group: "Group C",
            time: "13:00 GMT",
            match: "Round Two",
            city: "Durban",
            stadium: "Moses Mabhida Stadium",
            highlight: "#",
            id: "40"
        },
        game4: {
            teamOne: {
                name: "malawi",
                flagPic: "Flag-Malawi.webp",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "tunisia",
                flagPic: "1024px-Flag_of_Tunisia.png",
                score: 1,
                goals: {
                },
                winner: true
            },
            group: "Group H",
            time: "13:00 GMT",
            match: "Round Two",
            city: "Lilongwe",
            stadium: "Bingu National Stadium",
            highlight: "#",
            id: "41"
        },
        game5: {
            teamOne: {
                name: "botswana",
                flagPic: "Flag_of_Botswana.svg.png",
                score: 1,
                goals: {
                    
                },
                winner: true
            },
            teamTwo: {
                name: "guinea", 
                flagPic: "Flag-Guinea.webp",
                score: 0,
                goals: {
                }
            },
            group: "Group G",
            time: "13:00 GMT",
            match: "Round Two",
            city: "Francistown",
            stadium: "Obed Itani Chilume Stadium",
            highlight: "#",
            id: "42"
        },
        game6: {
            teamOne: {
                name: "somalia",
                flagPic: "Somalia.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "uganda",
                flagPic: "Flag_of_Uganda.svg.png",
                score: 1,
                goals: {
                },
                winner: true
            },
            group: "Group G",
            time: "13:00 GMT",
            match: "Round Two",
            city: "Berkane",
            stadium: "Stade Municipal de Berkane",
            highlight: "#",
            id: "43"
        },
        game7: {
            teamOne: {
                name: "eswatini",
                flagPic: "Flag_of_Eswatini.svg.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "cape verde",
                flagPic: "Flag-of-Cape-Verde-01.png",
                score: 2,
                goals: {
                },
                winner: true
            },
            group: "Group D",
            time: "14:15 GMT",
            match: "Round Two",
            city: "Mbombela",
            stadium: "Mbombela Stadium",
            highlight: "#",
            id: "44"
        },
        game8: {
            teamOne: {
                name: "south sudan",
                flagPic: "South Sudan.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "mauritania", 
                flagPic: "Flag-Mauritania.webp",
                score: 0,
                goals: {
                }
            },
            group: "Group B",
            time: "16:00 GMT",
            match: "Round Two",
            city: "DIAMNIADIO",
            stadium: "Stade Me Abdoulaye Wade",
            highlight: "#",
            id: "45"
        },
        game9: {
            teamOne: {
                name: "togo",
                flagPic: "Flag_of_Togo.svg.png",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "senegal",
                flagPic: "Flag-Senegal.webp",
                score: 0,
                goals: {
                }
            },
            group: "Group B",
            time: "16:00 GMT",
            match: "Round Two",
            city: "Lomé",
            stadium: "Stade de Kégué",
            highlight: "#",
            id: "46"
        },
        game10: {
            teamOne: {
                name: "mauritius",
                flagPic: "Flag_of_Mauritius.svg",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "angola", 
                flagPic: "Flag-Angola.webp",
                score: 0,
                goals: {
                }
            },
            group: "Group D",
            time: "16:00 GMT",
            match: "Round Two",
            city: "SAINT PIERRE",
            stadium: "Côte d'Or National Sports Complex",
            highlight: "#",
            id: "47"
        },
        game11: {
            teamOne: {
                name: "sao tome & principe",
                flagPic: "Flag_of_Sao_Tome_and_Principe.svg",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "namibia", 
                flagPic: "Flag-Namibia.webp",
                score: 2,
                goals: {
                },
                winner: true
            },
            group: "Group H",
            time: "16:00 GMT",
            match: "Round Two",
            city: "Agadir",
            stadium: "Agadir Stadium",
            highlight: "#",
            id: "48"
        },
        game12: {
            teamOne: {
                name: "comoros",
                flagPic: "Flag-Comoros.webp",
                score: 1,
                goals: {
                    
                },
                winner: true
            },
            teamTwo: {
                name: "ghana", 
                flagPic: "Flag-Ghana.webp",
                score: 0,
                goals: {
                }
            },
            group: "Group I",
            time: "16:00 GMT",
            match: "Round Two",
            city: "MORONI",
            stadium: "Stade de Moroni",
            highlight: "#",
            id: "49"
        },
        game13: {
            teamOne: {
                name: "libya", 
                flagPic: "Libya.png",
                score: 1,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "cameroon", 
                flagPic: "download (1).png",
                score: 1,
                goals: {
                }
            },
            group: "Group D",
            time: "16:00 GMT",
            match: "Round Two",
            city: "Baninah",
            stadium: "Benina Martyrs Stadium",
            highlight: "#",
            id: "50"
        },
        game14: {
            teamOne: {
                name: "tanzania",
                flagPic: "Flag-Tanzania.webp",
                score: 0,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "morocco",
                flagPic: "ma.png",
                score: 2,
                goals: {
                },
                winner:true
            },
            group: "Group E",
            time: "19:00 GMT",
            match: "Round Two",
            city: "Dar es Salaam",
            stadium: "Benjamin Mkapa (National Stadium)",
            highlight: "#",
            id: "51"
        },
        game15: {
            teamOne: {
                name: "zambia", 
                flagPic: "download.jpg",
                score: 1,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "niger",
                flagPic: "Flag_of_Niger_(3-2).svg.png",
                score: 2,
                goals: {
                },
                winner:true
            },
            group: "Group E",
            time: "19:00 GMT",
            match: "Round Two",
            city: "Marrakesh",
            stadium: "Marrakech Stadium",
            highlight: "#",
            id: "52"
        },
        
    },
}
let dayss = Object.values(days)
// End All Games & Scores Data



// Start Groups Data
let groupA = ["djibouti", "ethiopia", "sierra leone", "guinea-bissau", "burkina faso", "egypt"]
let groupB = ["togo", "mauritania", "dr congo", "senegal", "sudan", "south sudan"]
let groupC = ["benin", "nigeria", "south africa", "zimbabwe", "rwanda", "lesotho"]
let groupD = ["libya", "mauritius", "eswatini", "cameroon", "angola", "cape verde"]
let groupE = ["congo", "zambia", "morocco", "tanzania", "niger"]
let groupF = ["gabon", "gambia", "ivory coast", "kenya", "burundi", "seychelles"]
let groupG = ["uganda", "botswana", "somalia", "mozambique",  "guinea", "algeria"]
let groupH = ["malawi", "sao tome & principe", "liberia", "namibia", "equatorial guinea", "tunisia"]
let groupI = ["central africa", "madagascar", "chad", "comoros", "ghana", "mali"]
// let thirdRanked = ["A3", "B3", "C3", "D3", "E3", "F3"]
// End Groups Data





// Start Latest News Data
let newsData = {
    news1: {
        img: "news1.jpeg",
        header: "AFCON 2023 | FINAL DRAW",
        description: `<b>Groups:</b>
<br>
<b>Group A:</b> Ivory Coast, Nigeria, Equatorial Guinea, Guinea Bissau
<br>
<b>Group B:</b> Egypt, Ghana, Cape Verde Islands, Mozambique
<br>
<b>Group C:</b> Senegal, Cameroon, Guinea, Gambia
<br>
<b>Group D:</b> Algeria, Burkina Faso, Mauritania, Angola
<br>
<b>Group E:</b> Tunisia, Mali, South Africa, Namibia
<br>
<b>Group F:</b> Morocco, DR Congo, Zambia, Tanzania`,
        date: "15 Oct 2023",
        lan: "english",
        postId: "n1",
        // video: "TVV95Cw05og?si=Vl6BRuQVvy3K1I77"
    },
}
let news = Object.values(newsData)
// End Latest News Data


// Start All News Page
if (currentPage.includes("all-news.html")) {
    function allNewsPageHtml(newsBoxes) {
        let allNewsPageHtml = `
        <div class="all-news-page">
            <div class="all-news-header">Latest News</div>
            <div class="all-news">
                ${newsBoxes}
            </div>
        </div>
        `
        pageBody.innerHTML += allNewsPageHtml
    }
    function newsBoxes(...list) {
        let newsBox = `
        <a href="#" class="news-box forNewsPage" id="${list[3]}" title="Read More">
            <div class="image">
                ${list[5]}
                <img src="images/${list[0]}" alt="">
            </div>
            <div class="news-header ${list[2]}">
                <p>${list[1]}</p>
            </div>
        </a>
        `
        list[4].innerHTML += newsBox
        console.log(list[4])
        return list[4].innerHTML
    }


    let newsBoxLocation = document.createElement("div")
    for (let i = 0; i < news.length; i++) {
        let post = Object.values(news[i])
        let video = " "
        if (post[6] !== undefined) {
            video = `<div class="video-icon-in-news-page"></div> `
        }
        let list = [post[0], post[1], post[4], post[5], newsBoxLocation, video]
        if (i === news.length - 1) {
            allNewsPageHtml(newsBoxes(...list))
        } else {
            newsBoxes(...list)
        }
    }
}

// End All News Page


// Start Latest News In Home Page
function postHtml(...list) {
    let postHtml = `
                <div class="post-slide">
                    <div class="post-img">
                        ${list[8]}
                        <img src="images/${list[0]}" alt="">
                        <a href="${list[5]}" class="over-layer forNewsPage" id="${list[7]}"><i class="fa fa-link"></i></a>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title ${list[4]}">
                            <a href="${list[5]}" class="forNewsPage" id="${list[7]}">${list[1]}</a>
                        </h3>
                        <p class="post-description ${list[4]}">${list[2]}</p>
                        <span class="post-date"><i class="fa fa-clock"></i>${list[3]}</span>
                        <a href="${list[5]}" class="read-more forNewsPage" id="${list[7]}">read more</a>
                    </div>
                </div>
    `
    list[6].innerHTML += postHtml
}


if (currentPage.includes("index.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    let position = document.querySelector("#news-slider")
    let newsContainer = document.querySelector(".news-container")
    let seeAllBtn = document.querySelectorAll(".see-all-btn")
    if (news.length === 0) {
        newsContainer.style.margin = "0px auto 20px"
        newsContainer.style.fontWeight = "500"
        seeAllBtn.forEach(element => {
            element.style.display = "none"
        });
        newsContainer.innerHTML += "No News Available Yet"
    }
    for (let i = 0; i < news.length; i++) {
        if (i === 6) {
            break;
        }
        let post = Object.values(news[i])
        let file = "#"
        let video = " "
        if (post[6] !== undefined) {
            video = `<a href="${file}" class="forNewsPage" id="${post[5]}"><div class="video-icon-in-post-slide"></div></a> `
        }
        let list = [post[0], post[1], post[2], post[3], post[4], file, position, post[5], video]
        
        postHtml(...list)
    }
    // $(document).ready(function() {
    //     $("#news-slider").owlCarousel({
    //         items : 3,
    //         itemsDesktop:[1199,3],
    //         itemsDesktopSmall:[980,2],
    //         itemsMobile : [600,1],
    //         navigation:true,
    //         navigationText:["",""],
    //         pagination:true,
    //         autoPlay:true
    //     });
    // });
}

// End Latest News In Home Page
// Start News Generate
function newsGenerateHtml(...list) {
    let newsGenerateHtml = `
    <div class="news-generate-page">
        <div class="container">
            <div class="header-section">
                <div class="news-header ${list[4]}">${list[1]}</div>
                <div class="date-section">
                    <p>published:</p>
                    <div class="date">${list[3]}</div>
                </div>
            </div>
            <div class="image">
                ${list[5]}
            </div>
            <div class="news ${list[4]}">
            ${list[2]}
            </div>
            <div class="fullscreen" id="fullscreen">
                <span class="close" onclick="closeFullscreen()">&times;</span>
                <img src="" alt="Fullscreen Image" class="fullscreen-image"id="fullscreen-image">
            </div>
            <div class="fullscreenHighlightNT" id="fullscreenHighlightNT">
                <span class="closee" onclick="closeFullscreenn()">&times;</span>
                Highlight Not Available
            </div>
        </div>
    </div>
    `
    pageBody.innerHTML += newsGenerateHtml
}
let clickednews = document.querySelectorAll('.forNewsPage');
let newsUrlParams = new URLSearchParams(window.location.search);
let newsId = newsUrlParams.get('id');

if (currentPage.includes("index.html") || currentPage.includes("all-news.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    clickednews.forEach(element => {
        element.addEventListener("click", () => window.location.href = `news-generate.html?id=${element.id}` );
    });
}

for (let i = 0; i < news.length; i++) {
    let post = Object.values(news[i])
    let newsMedia = `<img src="images/${post[0]}" alt="" class="thumbnail" onclick="openImage('images/${post[0]}')"></img>`
    if (post[6] !== undefined) {
        newsMedia = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${post[6]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
    if (newsId === post[5]) {
        let list = [post[0], post[1], post[2], post[3], post[4], newsMedia]
        newsGenerateHtml(...list)
    }
}

// End News Generate








// Start Games & Scores
// Start Games & Scores Functions
function dayHtml(location, date, games, groupsOrBrackets) {
    let day = `
                <div class="day">
                    <div class="day-info">
                        <div class="date">${date}</div>
                        ${groupsOrBrackets}
                    </div>
                    <div class="games">
                        ${games}
                    </div>
                </div>  `
    location.innerHTML += day
}
function gameHtml(penalties, playedOrNot, ...list) {
    let game = `        
                            <a class="game" href="game-generate.html?id=g${list[10]}" id="g${list[10]}">
                                <div class="game-body">
                                    <div class="game-number">${list[15]}, ${list[1]}</div>
                                    <div class="game-score">
                                        <div class="left-team">
                                            <div class="team-name">
                                                <div class="name">${list[3]}
                                                    ${list[13]}
                                                </div>
                                                <div class="flag" ${list[11]}><img src="images/${list[4]}" alt=""></div>
                                            </div>
                                            ${list[8]}
                                            ${list[7]}
                                        </div>
                                        <div class="right-team">
                                        ${list[9]}
                                            <div class="team-name">
                                                <div class="flag" ${list[12]}><img src="images/${list[6]}" alt=""></div>
                                                <div class="name">${list[5]}
                                                    ${list[14]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="${playedOrNot} time">${list[2]}</div>
                                </div>
                                ${penalties}
                            </a>
                        
    `
        list[0].innerHTML += game
        return list[0].innerHTML
}
function createDay(day, today, specialTeam) {
    let daysLocation = document.querySelector(".days-js")
    let div = document.createElement("div")
    let num =0
    for (let i = 0; i < day.length - 1; i++) {
        let forbid = 0
        for (let t = 0; t < day.length - 1; t++) {
            let game = Object.values(day[t + 1])
            let teamOne = Object.values(game[0])
            let teamTwo = Object.values(game[1])
            if (!(specialTeam === undefined)) {
                if (teamOne[0].toLowerCase() === specialTeam || teamTwo[0].toLowerCase() === specialTeam) {
                    forbid += 1
                }
            }
        }
        let game = Object.values(day[i + 1])
        let teamOne = Object.values(game[0])
        let teamTwo = Object.values(game[1])
        let time = game[3]
        let vs = " "
        let scoreOne = `<div class="team-score">${teamOne[2]}</div>`
        let scoreTwo = `<div class="team-score">${teamTwo[2]}</div>`
        let flagOne = `full`
        let flagTwo = `full`
        let groupsOrBrackets = `<a href="knockout.html">View Brackets</a>`
        let playedOrNot = ""
        let penalties = ``
        let winnerOne = " "
        let winnerTwo = " "
        if (screen.width < 768) {
            if (game[3].split(" ").length > 1) {
                time = game[3].split(" ")[0]
            } else {
                time = game[3]
            }
        }

        if (teamOne[2] === false || teamTwo[2] === false) {
            vs = '<div class="vs">VS</div>'
            scoreOne = ``
            scoreTwo = ``
            playedOrNot = "notPlayedYet"
        } 

        if (teamOne[1] === "empty.png") {
            flagOne = `style="border: 3px solid rgb(16, 30, 63);"`
        } 
        if (teamTwo[1] === "empty.png") {
            flagTwo = `style="border: 3px solid rgb(16, 30, 63);"`
        }
        
        if (teamOne[4] !== undefined) {
            winnerOne =  `<div class="winner"></div>`
        }
        if (teamTwo[4] !== undefined) {
            winnerTwo =  `<div class="winner"></div>`
        }
        list = [div, game[2], time, teamOne[0], teamOne[1], teamTwo[0], teamTwo[1], vs, scoreOne, scoreTwo, game[8], flagOne, flagTwo, winnerOne, winnerTwo,game[4]]


        if (game[2].includes("Group")) {
            groupsOrBrackets = `<a href="group-stage.html">View Groups</a>`
        }

        if (game[9] !== undefined) {
            let drawInfo = Object.values(game[8])
            penalties = `
            <div class="penalties">
                <div class="penalties-score">${drawInfo[1]} <span class="empty-span"></span> <span class="dot-span">.</span> ${drawInfo[2]}</div>
                <p>${drawInfo[0]} wins ${drawInfo[1]} - ${drawInfo[2]} on penalties</p>
            </div>
            `
        }
        
        if (specialTeam === undefined) {
            if (i === day.length - 2) {
                dayHtml(daysLocation, today, gameHtml(penalties, playedOrNot, ...list), groupsOrBrackets)
            } else {
                gameHtml(penalties, playedOrNot, ...list)
            }
        } else {
            if (teamOne[0].toLowerCase() === specialTeam || teamTwo[0].toLowerCase() === specialTeam) {
                num += 1
                if ((forbid === 1)) {
                    dayHtml(daysLocation, today, gameHtml(penalties, playedOrNot, ...list), groupsOrBrackets)    
                }
                if ((forbid >= 2)) {
                    if (num === forbid) {
                        dayHtml(daysLocation, today, gameHtml(penalties, playedOrNot, ...list), groupsOrBrackets)    
                        
                    } else {
                        gameHtml(penalties, playedOrNot, ...list)
                        
                    }
                }
                
                
            }
        }
        
    }
}
// End Games & Scores Functions

// Start Games And Scores In Home Page
var date = new Date()
let dayName = date.getDay() + 1
let dayNumber = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let beginDay = "Saturday 13 January 2024"
let splitedBeginDay = beginDay.split(" ")

let montht = splitedBeginDay[2]
switch (montht) {
    case "January":
        montht = 1;
        break
    case "February":
        montht = 2;
        break
    case "March":
        montht = 3;
        break
    case "April":
        montht = 4;
        break
    case "May":
        montht = 5;
        break
    case "June":
        montht = 6;
        break
    case "July":
        montht = 7;
        break
    case "August":
        montht = 8;
        break
    case "September":
        montht = 9;
        break
    case "October":
        montht = 10;
        break
    case "November":
        montht = 11;
        break
    case "December":
        montht = 12;
        break
}
let daysNum = year * 364 + month * 30 + dayNumber
let daysNumBeginDay = parseInt(splitedBeginDay[3])* 364 + montht * 30 + parseInt(splitedBeginDay[1])
// console.log((daysNumBeginDay - year/4) - (daysNum - year/4))

// console.log(daysNum - year/4)


let sundayNum = 1
let sundayTest = 0
let mondayNum = 2 
let mondayTest = 0
let tuesdayNum = 3
let tuesdayTest = 0
let wednesdayNum = 4
let wednesdayTest = 0
let thursdayNum = 5
let thursdayTest = 0
let fridayNum = 6
let fridayTest = 0
let saturdayNum = 7
let saturdayTest = 0
function dateConventer(dayName, dayNumber, month, year) {
    if (dayName === sundayNum || dayName === -6) {
        if (dayName === -6 && sundayTest === 0) {
            sundayNum -= 14
        } else {
            sundayNum -= 7
        }
        dayName = "Sunday"
        sundayTest += 1
    }
    if (dayName === mondayNum || dayName === -5) {
        if (dayName === -5 && mondayTest === 0) {
            mondayNum -= 14
        } else {
            mondayNum -= 7
        }
        dayName = "Monday"
        mondayTest += 1
    }
    if (dayName === tuesdayNum || dayName === -4) {
        if (dayName === -4 && tuesdayTest === 0) {
            tuesdayNum -= 14
        } else {
            tuesdayNum -= 7
        }
        dayName = "Tuesday"
        tuesdayTest += 1
    }
    if (dayName === wednesdayNum || dayName === -3) {
        if (dayName === -3 && wednesdayTest === 0) {
            wednesdayNum -= 14
        } else {
            wednesdayNum -= 7
        }
        dayName = "Wednesday"
        wednesdayTest += 1
    }
    if (dayName === thursdayNum || dayName === -2) {
        if (dayName === -2 && thursdayTest === 0) {
            thursdayNum -= 14
        } else {
            thursdayNum -= 7
        }
        dayName = "Thursday"
        thursdayTest += 1
    }
    if (dayName === fridayNum || dayName === -1) {
        if (dayName === -1 && fridayTest === 0) {
            fridayNum -= 14
        } else {
            fridayNum -= 7
        }
        dayName = "Friday"
        fridayTest += 1
    }
    if (dayName === saturdayNum || dayName === 0) {
        if (dayName === 0 && saturdayTest === 0) {
            saturdayNum -= 14
        } else {
            saturdayNum -= 7
        }
        dayName = "Saturday"
        saturdayTest += 1
    }
    switch (month) {
        case 1:
            month = "January";
            break
        case 2:
            month = "February";
            break
        case 3:
            month = "March";
            break
        case 4:
            month = "April";
            break
        case 5:
            month = "May";
            break
        case 6:
            month = "June";
            break
        case 7:
            month = "July";
            break
        case 8:
            month = "August";
            break
        case 9:
            month = "September";
            break
        case 10:
            month = "October";
            break
        case 11:
            month = "November";
            break
        case 12:
            month = "December";
            break
    }
    let fullDate = `${dayName} ${dayNumber} ${month} ${year}`
    // console.log(fullDate)
    let dateNumber = fullDate.split(" ")[1]
    if (dateNumber.length < 2) {
        fullDate = `${dayName} 0${dayNumber} ${month} ${year}`
    }
    
    
    return fullDate
}
function creatDayInHomePage(fullDate, forScrollingToDate) {
    let num = 0
    for (let j = 0; j < dayss.length; j++) {
        let day = Object.values(dayss[j])
        if (day[0] === fullDate) {
            if (forScrollingToDate === undefined) {
                if (dayss[j - 1] !== undefined) {
                    let day = Object.values(dayss[j - 1])
                    createDay(day, day[0])
                }
                
                fullDate = dateConventer(dayName, dayNumber, month, year)
                day = Object.values(dayss[j])
                if (day[0] === fullDate) {
                    createDay(day, "Today")
                } else {
                    createDay(day, day[0])
                }

                // if (dayss[j + 1] !== undefined) {
                //     let day = Object.values(dayss[j + 1])
                //     createDay(day, day[0])
                // }
            }
            num += 1
        }
    }
    return num
}
function gettingTheImportantDate(forScroll) {
    let fullDate = dateConventer(dayName , dayNumber, month, year) 
    let returnedNum = creatDayInHomePage(fullDate)
    let monthChangingNum = dayNumber
    let monthsWith31 = [1, 3, 5, 7, 8, 10, 12]
    let monthsWith28 = [2]
    for (let i = 1; i < 100; i++) {
        if (monthChangingNum === 1) {
            month = month - 1
            if (monthsWith31.includes(month)) {
                dayNumber += 31
                monthChangingNum += 31
            } else if (monthsWith28.includes(month)) {
                dayNumber += 28
                monthChangingNum += 28
            } else {
                dayNumber += 30
                monthChangingNum += 30
            }
        }
        monthChangingNum -= 1
        if (returnedNum === 0) {
            fullDate = dateConventer(dayName - i, dayNumber - i, month, year)
            fullDateForScroll = fullDate
            returnedNum = creatDayInHomePage(fullDate, forScroll)
        }
        if (returnedNum > 0) {
            break
        }
    }

    if (returnedNum === 0 && forScroll === undefined) {
        createDay(Object.values(dayss[0]), Object.values(dayss[0])[0])
        createDay(Object.values(dayss[1]), Object.values(dayss[1])[0])
    }
}
let fullDateForScroll = ""
if (currentPage.includes("index.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    gettingTheImportantDate()
}
// End Games And Scores In Home Page

// Start scroll to todays date function in Games & Scores
function getElementPosition(element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return rect.top + scrollTop
}
if (currentPage.includes("games-and-scores.html")) {
    // gettingTheImportantDate(false)

    let position = 0
    for (let j = 0; j < dayss.length; j++) {
        let day = Object.values(dayss[j])
        createDay(day, day[0])
    }
    
    let special = document.querySelectorAll(".date")
    let fixed = document.querySelector(".fixed")
    for (let i = 0; i < special.length; i++) {
        if (special[i].innerText === fullDateForScroll) {

            position = getElementPosition(special[i]) - 130;

            if (i !== 0) {
                window.scrollTo({ top: position, behavior: "auto" });
            }
        } 
    }
    window.onscroll = function () {
        if (window.scrollY - 1 < position) {
            fixed.style.position = "fixed"
            fixed.style.top = "0"
            fixed.style.marginTop = `0`
        } else {
            fixed.style.marginTop = `${position}`
            fixed.style.position = "absolute"
        }
    }
    
    
}
// End scroll to todays date function in Games & Scores
// End Games & Scores



// Start Group Stage
// Start Group Stage Functions
function groupCreat(groupName, location, teamLine, gs, gc) {
    let boxHeader = `
                        <h3>${groupName}</h3>
                        <div class="spans">
                            <span title="Played">P</span>
                            <span title="Win">W</span>
                            <span title="Draw">D</span>
                            <span title="Lose">L</span>
                            ${gs}
                            ${gc}
                            <span title="Goal Diffirence">GD</span>
                            <span title="Points">Pts</span>
                        </div>
                    `
    let groupBox = `
                <div class="box">
                    <div class="box-header box-header-js">
                        ${boxHeader}
                    </div>
                    <div class="teams">
                        ${teamLine}
                    </div>
                </div>
                `
    location.innerHTML += groupBox
}
function teamlines(...list) {
    let teamLine = `
                        <div class="team" ${list[12]} title="${list[15]}">
                            <div class="info">
                                <span class="qualified">${list[8]}</span>
                                <a href="team-profile-generate.html?id=${list[10]}" class="teamForProfile" id="${list[10]}" >
                                    <div class="flag"><img src="images/${list[7]}" alt=""></div>
                                    <div class="name">${list[6]}
                                    <div class="qualifiedText">${list[11]}</div>
                                    </div>
                                </a>
                            </div>
                            <div class="stats">
                                <span>${list[0]}</span> <!-- games played -->
                                <span>${list[1]}</span> <!-- games win -->
                                <span>${list[2]}</span> <!-- games draw -->
                                <span>${list[3]}</span> <!-- games lose -->
                                ${list[13]} <!-- goals scored -->
                                ${list[14]} <!-- goals conceded -->
                                <span>${list[4]}</span> <!-- goal difference -->
                                <span>${list[5]}</span> <!-- points -->
                            </div>
                        </div>
                `
    list[9].innerHTML += teamLine
    return list[9].innerHTML
}
function alreadyQualified(group) {
    let firtsTeamQualified = 0
    let secondTeamQualified = 0
    let thirdTeamQualified = 0
    let forthTeamQualified = 0
    let fifthTeamQualified = 0
    let sixthTeamQualified = 0
    let totalGamesInGroupStageForOneTeam = group.length - 1
    let actualPoints = []
    let maxPoints = []
    let playedArray = []
    for (let b = 0; b < group.length; b++) {
        let teamName = group[b]
        let played = 0
        let win = 0
        let draw = 0
        let lose = 0
        let points = 0
        let totalGoalScored = 0
        let totalGoalConceded = 0
        for (let i = 0; i < dayss.length; i++) {
            let day = Object.values(dayss[i])
            for (let j = 0; j < day.length - 1; j++) {
                let game = Object.values(day[j + 1])
                let teamOne = Object.values(game[0])
                let teamTwo = Object.values(game[1])
                if ((teamOne[0] === teamName && teamOne[2] !== false) && (game[2].includes("Group"))) {
                    played += 1
                    let goalScored = parseInt(teamOne[2])
                    let goalConceded = parseInt(teamTwo[2])
                    totalGoalScored += parseInt(teamOne[2])
                    totalGoalConceded += parseInt(teamTwo[2])
                    if (goalScored > goalConceded) {
                        win += 1
                    }
                    if (goalScored < goalConceded) {
                        lose += 1
                    }
                    if (goalScored === goalConceded) {
                        draw += 1
                    }
                }
                if ((teamTwo[0] === teamName && teamTwo[2] !== false) && (game[2].includes("Group"))) {
                    played += 1
                    let goalScored = parseInt(teamTwo[2])
                    let goalConceded = parseInt(teamOne[2])
                    totalGoalScored += parseInt(teamTwo[2])
                    totalGoalConceded += parseInt(teamOne[2])
                    if (goalScored > goalConceded) {
                        win += 1
                    }
                    if (goalScored < goalConceded) {
                        lose += 1
                    }
                    if (goalScored === goalConceded) {
                        draw += 1
                    }
                }
            }
        }
        goalDifference = totalGoalScored - totalGoalConceded
        points = win * 3 + lose * 0 + draw * 1
        if (b === 0) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 1) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 2) {
            actualPoints.push(points)
            maxPoints.push( points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 3) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 4) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 5) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
    }
    
    for (let h = 0; h < actualPoints.length; h++) {
        let teamPoints = actualPoints[h]
        let aboveFirst = []
        for (let u = 0; u < maxPoints.length; u++) {
            if (h !== u) {
                if (teamPoints <= maxPoints[u]) {
                    if (h === 0) {
                        if (((teamPoints === maxPoints[u]) && (playedArray[0] === totalGamesInGroupStageForOneTeam && playedArray[u] === totalGamesInGroupStageForOneTeam))) {
                            firtsTeamQualified -= 1
                        }
                        aboveFirst.push(group[u])
                        firtsTeamQualified += 1
                    }
                    if (h === 1) {
                        secondTeamQualified += 1
                    }
                    if (h === 2) {
                        thirdTeamQualified += 1
                    }
                    if (h === 3) {
                        forthTeamQualified += 1
                    }
                    if (h === 4) {
                        fifthTeamQualified += 1
                    }
                    if (h === 5) {
                        sixthTeamQualified += 1
                    }
                    
                }
            }
        }
        if (aboveFirst.length === 2) {
            for (let i = 0; i < dayss.length; i++) {
                let day = Object.values(dayss[i])
                for (let j = 0; j < day.length - 1; j++) {
                    let game = Object.values(day[j + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if (((teamOne[0] === aboveFirst[0] || teamTwo[0] === aboveFirst[0]) && (teamOne[0] === aboveFirst[1] || teamTwo[0] === aboveFirst[1])) && (teamOne[2] === false && teamTwo[2] === false)) {
                        firtsTeamQualified -= 1
                    }
                }
            }
        }
        
    }
    if (firtsTeamQualified > 1) {
        firtsTeamQualified = false
    } else {
        firtsTeamQualified = true
    }
    if (secondTeamQualified > 1) {
        secondTeamQualified = false
    } else {
        secondTeamQualified = true
    }
    if (thirdTeamQualified > 1) {
        thirdTeamQualified = false
    } else {
        thirdTeamQualified = true
    }
    if (forthTeamQualified > 1) {
        forthTeamQualified = false
    } else {
        forthTeamQualified = true
    }
    if (fifthTeamQualified > 1) {
        fifthTeamQualified = false
    } else {
        fifthTeamQualified = true
    }
    if (sixthTeamQualified > 1) {
        sixthTeamQualified = false
    } else {
        sixthTeamQualified = true
    }
    let totalNumberOfGroupGames = sortedGroups[0].length * (sortedGroups[0].length - 1)
    let playedNumberOfGroupGames = 0
    for (let j = 0; j < playedArray.length; j++){
        playedNumberOfGroupGames += playedArray[j]
    }
    
    if (totalNumberOfGroupGames === playedNumberOfGroupGames) {
        firtsTeamQualified = true
        secondTeamQualified = true
    }
    return [firtsTeamQualified , secondTeamQualified]
}
// End Group Stage Functions
// Start Sorting Group Teams
let groups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH, groupI]
for (let n = 0; n < groups.length; n++) {
    let sortedGroup = []
    for (let x = 0; x < groups[n].length; x++) {
        let firstP = " "
        let pointsFirstP = -1
        let goalDifferenceFirstP = 0
        let totalGoalScoredFirstP = 0
        for (let b = 0; b < groups[n].length; b++) {
            let teamName = groups[n][b]
            let played = 0
            let win = 0
            let draw = 0
            let lose = 0
            let points = 0
            let totalGoalScored = 0
            let totalGoalConceded = 0
            let goalDifference = 0
            for (let i = 0; i < dayss.length; i++) {
                let day = Object.values(dayss[i])
                for (let j = 0; j < day.length - 1; j++) {
                    let game = Object.values(day[j + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if ((teamOne[0] === teamName && teamOne[2] !== false) && (game[2].includes("Group"))) {
                        played += 1
                        let goalScored = parseInt(teamOne[2])
                        let goalConceded = parseInt(teamTwo[2])
                        totalGoalScored += parseInt(teamOne[2])
                        totalGoalConceded += parseInt(teamTwo[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                        if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                    if ((teamTwo[0] === teamName && teamTwo[2] !== false) && (game[2].includes("Group"))) {
                        played += 1
                        let goalScored = parseInt(teamTwo[2])
                        let goalConceded = parseInt(teamOne[2])
                        totalGoalScored += parseInt(teamTwo[2])
                        totalGoalConceded += parseInt(teamOne[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                            if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                }
                goalDifference = totalGoalScored - totalGoalConceded
                points = win * 3 + lose * 0 + draw * 1
            }
            
            if (sortedGroup.includes(teamName)) {
                // console.log("heloo")
            } else {
                if (points > pointsFirstP) {
                    pointsFirstP = points
                    goalDifferenceFirstP = goalDifference
                    totalGoalScoredFirstP = totalGoalScored
                    firstP = teamName
                } else if (points === pointsFirstP) {
                    if (goalDifference > goalDifferenceFirstP) {
                        goalDifferenceFirstP = goalDifference
                        totalGoalScoredFirstP = totalGoalScored
                        firstP = teamName
                    } else if (goalDifference === goalDifferenceFirstP) {
                        if (totalGoalScored > totalGoalScoredFirstP) {
                            totalGoalScoredFirstP = totalGoalScored
                            firstP = teamName
                        }
                    }
                }
            }
        }
        sortedGroup.push(firstP)
    }
    if (n === 0) {
        groupA = sortedGroup
    } else if (n === 1) {
        groupB = sortedGroup
    } else if (n === 2) {
        groupC = sortedGroup
    } else if (n === 3) {
        groupD = sortedGroup
    } else if (n === 4) {
        groupE = sortedGroup
    } else if (n === 5) {
        groupF = sortedGroup
    } else if (n === 6) {
        groupG = sortedGroup
    } else if (n === 7) {
        groupH = sortedGroup
    } else if (n === 8) {
        groupI = sortedGroup
    }
}
let sortedGroups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH, groupI]
// End Sorting Group Teams
// Start Group Stage Page
if (currentPage.includes("group-stage.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    let groupNames = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F", "Group G", "Group H", "Group I"]
    for (let n = 0; n < sortedGroups.length; n++) {
        let div = document.createElement("div")
        for (let b = 0; b < sortedGroups[n].length; b++) {
            let teamName = sortedGroups[n][b]
            let file = teamNameId(sortedGroups[n][b])
            let changeBg = " "
            let qualified = " "
            let gs = " "
            let gc = " "
            let gsScore = " "
            let gcScore = " "
            let played = 0
            let win = 0
            let draw = 0
            let lose = 0
            let points = 0
            let totalGoalScored = 0
            let totalGoalConceded = 0
            let goalDifference = 0
            let subName = " "
            let flagPic = " "
            allTeams.forEach(team => {
                if (teamName === team.name) {
                    subName = team.subName
                    flagPic = team.flagPic
                }
            })
            for (let i = 0; i < dayss.length; i++) {
                let day = Object.values(dayss[i])
                for (let j = 0; j < day.length - 1; j++) {
                    let game = Object.values(day[j + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if (teamOne[0] === teamName && teamOne[2] !== false) {
                        played += 1
                        let goalScored = parseInt(teamOne[2])
                        let goalConceded = parseInt(teamTwo[2])
                        totalGoalScored += parseInt(teamOne[2])
                        totalGoalConceded += parseInt(teamTwo[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                        if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                    if (teamTwo[0] === teamName && teamTwo[2] !== false) {
                        played += 1
                        let goalScored = parseInt(teamTwo[2])
                        let goalConceded = parseInt(teamOne[2])
                        totalGoalScored += parseInt(teamTwo[2])
                        totalGoalConceded += parseInt(teamOne[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                        if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                }
            }
            goalDifference = totalGoalScored - totalGoalConceded
            points = win * 3 + lose * 0 + draw * 1
            
            
            if (b === 0) {
                if (alreadyQualified(sortedGroups[n])[0] === true) {
                    qualified = "qualified"
                }
            }
            // if (b === 1) {
            //     if (alreadyQualified(sortedGroups[n])[1] === true) {
            //         qualified = "qualified"
            //     }
            // }
            let infoList = [played, win, draw, lose, goalDifference, points, subName, flagPic, b + 1, div, file, qualified, changeBg, gsScore, gcScore, capitalize(teamName)]
            let location = document.querySelector(".bjs")
            if (b === sortedGroups[n].length - 1) {
                groupCreat(groupNames[n], location, teamlines(...infoList), gs, gc)
                
                break
            } else {
                teamlines(...infoList)
            }
        }
        
    }
    
    let qualifiedElement = document.querySelectorAll(".qualifiedText")
    for (let i = 0; i < qualifiedElement.length; i++) {
        if (qualifiedElement[i].innerHTML > " ") {
            qualifiedElement[i].style.color = "#76b300"
            qualifiedElement[i].style.fontSize = "10px"
        }
    }
    
    let qualified = document.querySelectorAll(".qualified")

    for (let i = 0; i < qualified.length; i++) {
        if (qualified[i].innerHTML === "1") {
            qualified[i].style.borderLeft = "2px solid #76b300"
        }
        if (qualified[i].innerHTML === "2") {
            qualified[i].style.borderLeft = "2px solid #f59e0b"
        }
    }
}
// End Group Stage Page
// End Group Stage



// Start Knockout
// Start Knockout Functions
function addKnockoutBox(...list) {
    let knockoutBox = `
                        <div class="box game" id="g${list[11]}" title="Match ${list[11]}">
                        ${list[8]}
                            <div class="box-body">
                                <div class="left-team" title="${list[12]}">
                                    <div class="flag"><img ${list[9]} src="images/${list[1]}" alt=""></div>
                                    <div class="name">${list[0]}</div>
                                </div>
                                ${list[4]}
                                <div class="right-team" title="${list[13]}">
                                    <div class="flag"><img ${list[10]} src="images/${list[3]}" alt=""></div>
                                    <div class="name">${list[2]}</div>
                                </div>
                            </div>
                            <span>${list[5]}</span>
                            ${list[6]}
                        </div>
`
list[7].innerHTML += knockoutBox
}
function gameInfo(gameNumber, stage, final) {
    for (let j = 0; j < dayss.length; j++) {
        let day = Object.values(dayss[j])
        for (let i = 0; i < day.length - 1; i++) {
            let game = Object.values(day[i + 1])
            let teamOne = Object.values(game[0])
            let teamTwo = Object.values(game[1])
            if (game[4] === gameNumber) {
                let teamOneName = teamOne[0];
                let teamTwoName = teamTwo[0];
                let time = `<!-- -->`
                let penalties = `<!-- -->`
                let score = `<div class="score">${teamOne[2]} - ${teamTwo[2]}</div>`
                let flagTeamOne = ` `
                let flagTeamTwo = ` `
                if (teamOne[0].toLowerCase().includes("winner") || teamOne[0].toLowerCase().includes("loser")) {
                    let winner = teamOne[0].split(" ")
                    teamOneName = winner[0][0] + winner[1]
                }
                if (teamTwo[0].toLowerCase().includes("winner") || teamTwo[0].toLowerCase().includes("loser")) {
                    let winner = teamTwo[0].split(" ")
                    teamTwoName = winner[0][0] + winner[1]
                }
                allTeams.forEach(team => {
                    if (teamOne[0].toLowerCase() === team.name) {
                        teamOneName = team.subName
                    } else if (teamTwo[0].toLowerCase() === team.name) {
                        teamTwoName = team.subName
                    }
                })
        
                if (teamOne[2] === false || teamTwo[2] === false) {
                    if (day[0] === "NY") {
                        score = day[0]
                    } else {
                        let dayDate = day[0].split(" ")
                        let dayNum = dayDate[1]
                        let year = dayDate[3].slice(2)
                        let month = dayDate[2]
                
                        switch (month) {
                            case "January":
                                month = "01";
                                break
                            case "February":
                                month = "02";
                                break
                            case "March":
                                month = "03";
                                break
                            case "April":
                                month = "04";
                                break
                            case "May":
                                month = "05";
                                break
                            case "June":
                                month = "06";
                                break
                            case "July":
                                month = "07";
                                break
                            case "August":
                                month = "08";
                                break
                            case "September":
                                month = "09";
                                break
                            case "October":
                                month = "10";
                                break
                            case "November":
                                month = "11";
                                break
                            case "December":
                                month = "12";
                                break
                        }
                        if (game[3].split(" ").length > 1) {
                            time = game[3].split(" ")[0]
                        } else {
                            time = game[3]
                        }
                        
                        score = `<div class="score">${dayNum}/${month}/${year}</div>`
                    }
                }
                if (game[8] !== undefined) {
                    let drawInfo = Object.values(game[8])
                    penalties = `<p>${drawInfo[0]} wins <span>${drawInfo[1]} - ${drawInfo[2]}</span> on penalties</p>`
                }
                if (final === undefined) {
                    final = `<!-- -->`
                }

        
                if (teamOne[1] === "empty.png") {
                    flagTeamOne = `style="border: 3px solid rgb(16, 30, 63);"`
                } 
                if (teamTwo[1] === "empty.png") {
                    flagTeamTwo =`style="border: 3px solid rgb(16, 30, 63);"`
                } 

                let list = [teamOneName, teamOne[1], teamTwoName, teamTwo[1], score, time, penalties, stage, final, flagTeamOne, flagTeamTwo, game[4], teamOne[0], teamTwo[0]]
        
                addKnockoutBox(...list)
            }
        }
    }
}
// End Knockout Functions
// Start Knockout Page
// if (currentPage.includes("knockout.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
//     let finalHeader = `<h3>FINAL</h3>`

//     let leftRoundOf16Upper = document.querySelector(".leftRoundOf16Upper")
//     gameInfo("37", leftRoundOf16Upper)
//     gameInfo("38", leftRoundOf16Upper)

//     let leftRoundOf16Lower = document.querySelector(".leftRoundOf16Lower")
//     gameInfo("41", leftRoundOf16Lower)
//     gameInfo("44", leftRoundOf16Lower)

//     let rightRoundOf16Upper = document.querySelector(".rightRoundOf16Upper")
//     gameInfo("40", rightRoundOf16Upper)
//     gameInfo("39", rightRoundOf16Upper)
    
//     let rightRoundOf16Lower = document.querySelector(".rightRoundOf16Lower")
//     gameInfo("42", rightRoundOf16Lower)
//     gameInfo("43", rightRoundOf16Lower)

//     let leftQuarterFinal = document.querySelector('.leftQuarterFinal')
//     gameInfo("45", leftQuarterFinal)
//     gameInfo("48", leftQuarterFinal)

//     let rightQuarterFinal = document.querySelector('.rightQuarterFinal')
//     gameInfo("46", rightQuarterFinal)
//     gameInfo("47", rightQuarterFinal)

//     let rightSemiFinal = document.querySelector(".rightSemiFinal")
//     gameInfo("50", rightSemiFinal)

//     let leftSemiFinal = document.querySelector(".leftSemiFinal")
//     gameInfo("49", leftSemiFinal)
    
//     let thirdPlace = document.querySelector(".third-place")
//     gameInfo("51", thirdPlace)
    
//     let final = document.querySelector(".final")
//     gameInfo("52", final, finalHeader)
// }
// End Knockout Page
// End Knockout



// Start Teams
// Start Teams Functions
function addTeam(...list) {
    teamBox = `
                <a href="team-profile-generate.html?id=${list[3]}"class="team teamForProfile" id="${list[3]}">
                    <img src="images/${list[2]}" alt="">
                    <h3>${list[0]}</h3>
                    <span>(${list[1]})</span>
                </a>
    `
    list[4].innerHTML += teamBox
}
function capitalize(sentence) {
    let teamName = sentence.split(" ")
    for (let j = 0; j < teamName.length; j++) {
        teamName[j] = `${teamName[j].charAt(0).toUpperCase()}${teamName[j].slice(1)}`
    }
    return  teamName.join(" ")
}
// End Teams Functions
// Start Teams Page
if (currentPage.includes("teams.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    let teamsLocation = document.querySelector(".teamsJs")
    allTeams.forEach(team => {
        let teamName = team.name.split(" ")
        let teamNameWithoutSpaceForId = team.name
        if (teamName.length > 1) {
            teamNameWithoutSpaceForId = `${teamName[0]}_${teamName[1]}`
        }
        let list = [capitalize(team.name), team.subName.toUpperCase(), team.flagPic, teamNameWithoutSpaceForId, teamsLocation]
        addTeam(...list)
    })
}
// End Teams Page
// End Teams



// Start Teams Profiles 
// Start Teams Profiles Functions
function openImage(imageSrc) {
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = imageSrc;
    fullscreen.style.display = 'block';
}
function closeFullscreen() {
    const fullscreen = document.getElementById('fullscreen');
    fullscreen.style.display = 'none';
}
function redirectToTeamPage(teamId) {
    window.location.href = `team-profile-generate.html?id=${teamId}`;
}
function teamNameId(teamName) {
    let teamNameSplited = teamName.split("")
    let teamNameWithoutSpaceForId =""
    for (let j = 0; j < teamNameSplited.length; j++) {
        if (teamNameSplited[j] === " ") {
            teamNameSplited[j] = "_"
        }
        teamNameWithoutSpaceForId += teamNameSplited[j] 
    }
    return teamNameWithoutSpaceForId
}


    
function teamHtml(...list) {
    let struct = `
    <div class="fullscreen" id="fullscreen">
        <span class="close" onclick="closeFullscreen()">&times;</span>
        <img src="" class="fullscreen-image"  alt="Fullscreen Image" id="fullscreen-image">
    </div>
    <div class="header">
        <div class="container" >
            <img src="images/${list[0]}" alt="" class="thumbnail" onclick="openImage('images/${list[0]}')">
            <p>${list[1]}</p>
        </div>
    </div>
    <div class="body">
        <div class="container">
            <div class="games-score">
                <h2 class="special-header">Games & Scores</h2>
                <div class="inner-container days-js">
                    
                </div>
            </div>

            <!-- Start Group Stage -->
            <div class="group-stage" id="group-stage">
                <div class="container" style="padding: 0">
                    <h2 class="special-header">Group</h2>
                    <div class="boxes bjs">
                        
                    </div>
                </div>
            </div>
            <!-- End Group Stage -->

            <div class="manager">
                <h2 class="special-header">Manager</h2>
                <div class="boxes manager-box">
                    
                </div>
            </div>
            <div class="squad-list">
                <h2 class="special-header">Squad List</h2>
                <div class="boxes squad-list-boxes">
                    
                </div>
            </div>
        </div>
    </div>
    `
    pageBody.innerHTML += struct
}
function playerCardHTML(...infolist) {
    let playerCardHTML =`
                    <div class="card">
                        <div class="content">
                            <div class="front">
                                <img src="images/${infolist[8]}" alt="">
                                <div class="player-image">
                                    <img src="images/${infolist[3]}" alt="">
                                </div>
                                <div class="info">
                                    <span>${infolist[0]}</span>
                                    <span>${infolist[1]}</span>
                                    <span>${infolist[2]}</span>
                                </div>
                            </div>
                            <div class="back">
                                <div class="personal-details">Personal Details</div>
                                <div class="pd">
                                    <p>City</p>
                                    <p>${infolist[4]}</p>
                                </div>
                                <div class="pd">
                                    <p>Age</p>
                                    <p>${infolist[5]}</p>
                                </div>
                                <div class="pd">
                                    <p>Height</p>
                                    <p>${infolist[6]}</p>
                                </div>
                                <div class="pd">
                                    <p>Profesional Club</p>
                                    <p>${infolist[7]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
    infolist[9].innerHTML += playerCardHTML
}
// End Teams Profiles Functions

let clickedTeam = document.querySelectorAll('.teamForProfile');
let teamUrlParams = new URLSearchParams(window.location.search);
let teamId = teamUrlParams.get('id');

if (currentPage.includes("teams.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage.includes("group-stage.html")   ) {
    clickedTeam.forEach(element => {
        element.addEventListener("click", () => redirectToTeamPage(element.id));
    });
}

if (currentPage.includes("team-profile-generate.html")) {
    allTeams.forEach(team => {
    // for (let i = 0; i < AllTeams.length; i++) {
        // let team = Object.values(AllTeams[i])
        let teamName = teamNameId(team.name)
        if (teamId === teamName) {
            let list = [team.flagPic, capitalize(team.name)]
            teamHtml(...list)
            let teamName = team.name.toLowerCase()
            for (let j = 0; j < dayss.length; j++) {
                let day = Object.values(dayss[j])
                let replecatedDate = " "
                for (let i = 0; i < day.length - 1; i++) {
                    let game = Object.values(day[i + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if (teamOne[0].toLowerCase() === teamName || teamTwo[0].toLowerCase() === teamName) {
                        document.querySelector('title').textContent = teamName.toUpperCase()
                        if (replecatedDate !== day[0]) {
                            createDay(day, day[0], teamName)
                            replecatedDate = day[0]
                        }
                        
                    }
                }
            }

            let groupNames = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F", "Group G", "Group H", "Group I"]
            for (let n = 0; n < sortedGroups.length; n++) {
                let div = document.createElement("div")
                
                for (let b = 0; b < sortedGroups[n].length; b++) {
                    let teamName = sortedGroups[n][b]
                    if (teamName === team.name) {
                        for (let b = 0; b < sortedGroups[n].length; b++) {
                            let location = document.querySelector(".bjs")
                            let teamName = sortedGroups[n][b]
                            let file = teamNameId(sortedGroups[n][b])
                            let changeBg = " "
                            let qualified = " "
                            let gs = " "
                            let gc = " "
                            let gsScore = " "
                            let gcScore = " "
                            let played = 0
                            let win = 0
                            let draw = 0
                            let lose = 0
                            let points = 0
                            let totalGoalScored = 0
                            let totalGoalConceded = 0
                            let goalDifference = 0
                            let subName = " "
                            let flagPic = " "
                            allTeams.forEach(team => {
                                if (teamName === team.name) {
                                    subName = team.name.toUpperCase()
                                    flagPic = team.flagPic
                                    if (screen.width < 768) {
                                        subName = team.subName
                                    }
                                }
                            })
                            for (let i = 0; i < dayss.length; i++) {
                                let day = Object.values(dayss[i])
                                for (let j = 0; j < day.length - 1; j++) {
                                    let game = Object.values(day[j + 1])
                                    let teamOne = Object.values(game[0])
                                    let teamTwo = Object.values(game[1])
                                    
                                    if ((teamOne[0] === teamName && teamOne[2] !== false) && (game[2].includes("Group"))) {
                                        played += 1
                                        let goalScored = parseInt(teamOne[2])
                                        let goalConceded = parseInt(teamTwo[2])
                                        totalGoalScored += parseInt(teamOne[2])
                                        totalGoalConceded += parseInt(teamTwo[2])
                                        if (goalScored > goalConceded) {
                                            win += 1
                                        }
                                        if (goalScored < goalConceded) {
                                            lose += 1
                                        }
                                        if (goalScored === goalConceded) {
                                            draw += 1
                                        }
                                    }
                                    if ((teamTwo[0] === teamName && teamTwo[2] !== false) && (game[2].includes("Group"))) {
                                        played += 1
                                        let goalScored = parseInt(teamTwo[2])
                                        let goalConceded = parseInt(teamOne[2])
                                        totalGoalScored += parseInt(teamTwo[2])
                                        totalGoalConceded += parseInt(teamOne[2])
                                        if (goalScored > goalConceded) {
                                            win += 1
                                        }
                                        if (goalScored < goalConceded) {
                                            lose += 1
                                        }
                                        if (goalScored === goalConceded) {
                                            draw += 1
                                        }
                                    }
                                }
                            }
                            goalDifference = totalGoalScored - totalGoalConceded
                            points = win * 3 + lose * 0 + draw * 1
                            
                            if (teamName === team[0]) {
                                changeBg = `style="background-color:#faf7f7;"`                               
                            }
                            if (screen.width > 399) {
                                gs = "<span>GS</span>"
                                gc = "<span>GC</span>"
                                gsScore = `<span>${totalGoalScored}</span>`
                                gcScore = `<span>${totalGoalConceded}</span>`
                            }
                            if (b === 0) {
                                if (alreadyQualified(sortedGroups[n])[0] === true) {
                                    qualified = "qualified"
                                }
                            }
                            if (b === 1) {
                                if (alreadyQualified(sortedGroups[n])[1] === true) {
                                    qualified = "qualified"
                                }
                            }
                            let infoList = [played, win, draw, lose, goalDifference, points, subName, flagPic, b + 1, div, file, qualified, changeBg, gsScore, gcScore, capitalize(teamName)]
                            
                            location.style.gridTemplateColumns = "1fr"
                            if (b === sortedGroups[n].length - 1) {
                                groupCreat(groupNames[n], location, teamlines(...infoList), gs, gc)
                                break
                            } else {
                                teamlines(...infoList)
                            }
                        }
                        let qualifiedElement = document.querySelectorAll(".qualifiedText")
                        for (let i = 0; i < qualifiedElement.length; i++) {
                        if (qualifiedElement[i].innerHTML > " ") {
                                qualifiedElement[i].style.color = "#76b300"
                                qualifiedElement[i].style.fontSize = "10px"
                            }
                        }
                        
                        let qualified = document.querySelectorAll(".qualified")
                    
                        for (let i = 0; i < qualified.length; i++) {
                            if (qualified[i].innerHTML === "1") {
                                qualified[i].style.borderLeft = "2px solid #76b300"
                            }
                            if (qualified[i].innerHTML === "2") {
                                qualified[i].style.borderLeft = "2px solid #f59e0b"
                            }
                        }
                    }
                }
            }



            if (team[3] !== undefined) {
                let players = Object.values(team[3])
                let manager = Object.values(players[7])
                let clubFlag = team[2]
                let playersLocation = document.querySelector(".squad-list-boxes")
                let managerLocation = document.querySelector(".manager-box")

                let infoListManager = [manager[0], manager[1], manager[2], manager[3], manager[4], manager[5], manager[6], manager[7], clubFlag, managerLocation]
                playerCardHTML(...infoListManager)
                for (let i = 0; i < players.length - 1; i++) {
                    let player = Object.values(players[i])
                    let infoListPlayer = [player[0], player[1], player[2], player[3], player[4], player[5], player[6], player[7], clubFlag, playersLocation]
                    playerCardHTML(...infoListPlayer)
                }
            }
        }
    })

    
}
// End Teams Profiles




// Start Game Profiles
// Start Game Profiles Functions
function openVideoFullscreen(id) {
    const fullscreen = document.getElementById('fullscreenn');
    fullscreen.style.display = 'block';
    const videoIdOrUrl = id;
    console.log('hello')
    const iframe = document.getElementById('fullscreen-video');
    if (videoIdOrUrl.includes('youtube.com')) {
        const videoId = videoIdOrUrl.split('v=')[1];
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
    } else {
        iframe.src = `https://www.youtube.com/embed/${videoIdOrUrl}`;
    }
}
function openHighlightNTFullscreen() {
    const fullscreenHighlightNT = document.getElementById('fullscreenHighlightNT');
    fullscreenHighlightNT.style.display = 'block';
}
function closeFullscreenn() {
    const fullscreen = document.getElementById('fullscreenn');
    fullscreen.style.display = 'none';
    const fullscreenHighlightNT = document.getElementById('fullscreenHighlightNT');
    fullscreenHighlightNT.style.display = 'none';

    // Pause the YouTube video by resetting the iframe source
    const iframe = document.getElementById('fullscreen-video');
    iframe.src = '';
}


function gameProfileHtml(leftTeamGoals, rightTeamGoals, ...list) {
    gameHtml = `
            <div class="stage-and-date">
                <div class="stage">${list[7]}, ${list[5]}</div>
                <div class="date">${list[6]}, ${list[8]}</div>
            </div>
            <div class="teams">
                <div class="left-team">
                    <a href="team-profile-generate.html?id=${list[18]}" class="team teamForProfile" id="${list[18]}">
                        <div class="team-name" >${list[1]} ${list[20]}</div>
                        <div class="flag"><img ${list[12]} src="images/${list[2]}" alt=""></div>
                    </a>
                </div>
                <div class="score">
                    ${list[9]}
                </div>
                <div class="right-team">
                    <a href="team-profile-generate.html?id=${list[19]}" class="team teamForProfile" id="${list[19]}">
                        <div class="flag"><img ${list[13]} src="images/${list[4]}" alt=""></div>
                        <div class="team-name">${list[3]} ${list[21]}</div>
                    </a>
                </div>
            </div>
            ${list[10]}
            ${list[11]}
            <div class="goals">
                <div class="left-team-goals">
                    ${leftTeamGoals}
                </div>
                <div class="empty-div"></div>
                <div class="right-team-goals">
                    ${rightTeamGoals}
                </div>
            </div>
            
            <div class="competition">
                african cup of nation's
            </div>
            <div class="location">
                <div class="city"><p>${list[16]}</p></div>
                <div class="dot">●</div>
                <div class="stadium">${list[17]}</div>
            </div>
            ${list[15]}
            <div class="fullscreenn" id="fullscreenn">
                <span class="closee" onclick="closeFullscreenn()">&times;</span>
                <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id="fullscreen-video"></iframe>
            </div>
            <div class="fullscreenHighlightNT" id="fullscreenHighlightNT">
                <span class="closee" onclick="closeFullscreenn()">&times;</span>
                Highlight Not Available
            </div>

    `
    list[0].innerHTML = gameHtml
}
function goalHtmlTeamOne(...list) {
    let goal = `
                        <div class="goal">
                            <div class="penalty">${list[4]}</div>
                            <div class="minute">${list[1]}</div>
                            <div class="player">
                                <div class="player-goal">${list[2].toUpperCase()}</div>
                                <div class="player-assist">${list[3]}</div>
                            </div>
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>    
                        </div>
    `
    list[0].innerHTML += goal
    return list[0].innerHTML
}
function goalHtmlTeamTwo(...list) {
    let goal = `
                        <div class="goal">
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div> 
                            <div class="player">
                                <div class="player-goal">${list[2].toUpperCase()}</div>
                                <div class="player-assist">${list[3]}</div>
                            </div>   
                            <div class="minute">${list[1]}</div>
                            <div class="penalty">${list[4]}</div>
                        </div>
    `
    list[0].innerHTML += goal
    return list[0].innerHTML
}    
function redirectToGamePage(gameId) {
    window.location.href = `game-generate.html?id=${gameId}`;
}
// End Game Profiles Functions

const clickedGame = document.querySelectorAll('.game');
clickedGame.forEach(element => {
    element.addEventListener("click", () => redirectToGamePage(element.id));
});
let gameContent = document.querySelector(".gameGenerateJs")
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id');


for (let i = 0; i < dayss.length; i++) {
    let day = Object.values(dayss[i])
    for (let j = 0; j < day.length - 1; j++) {
        let game = Object.values(day[j + 1])
        let teamOne = Object.values(game[0])
        let teamTwo = Object.values(game[1])
        let goalsTeamOne = []
        let goalsTeamTwo = []
        if (teamOne[3] !== undefined) {
            goalsTeamOne = Object.values(teamOne[3])
        }
        if (teamTwo[3] !== undefined) {
            goalsTeamTwo = Object.values(teamTwo[3])
        }
        let date = "NY"
        if (day[0] !== "NY") {
            let dateArray = day[0].split(" ")
            date = `${dateArray[1]} ${dateArray[2].slice(0, 3).toUpperCase()} ${dateArray[3]}`
        }
        let score
        let penalties = ` `
        let fullTime = `<div class="full-time">Full Time</div>`
        let leftTeamName = teamOne[0]
        let rightTeamName = teamTwo[0]
        let leftTeamPageLink = `${teamOne[0]}.html`
        let rightTeamPageLink = `${teamTwo[0]}.html`
        let leftFlag = ` `
        let rightFlag = ` `
        let winnerTeamLeft = ` `
        let winnerTeamRight = ` `
        let divTeamOne = document.createElement("div")
        let divTeamTwo = document.createElement("div")
        let goals = `
        <div class="goals">
                <div class="left-team-goals">
                    <div>
                        <div class="goal">
                            <div class="penalty">(P)</div>
                            <div class="minute">42'</div>
                            <div class="player">
                                <div class="player-goal">ORSIC</div>
                                <div class="player-assist">ORSIC</div>
                            </div>
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>    
                        </div>
                        <div class="goal">
                            <div class="penalty">(P)</div>
                            <div class="minute">42'</div>
                            <div class="player">Mislav</div>
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>    
                        </div>
                    </div>
                </div>
                <div class="empty-div"></div>
                <div class="right-team-goals">
                    <div class="goal">
                        <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>  
                        <div class="player">ORSSAFSHJ</div>
                        <div class="minute">42'</div>  
                        <div class="penalty">(P)</div>
                    </div>
                </div>
            </div>
        `
        let highlight = `
            <div class="highlights-btn">
                <a href="#" id="playButton" onclick="openVideoFullscreen('${game[7]}')">
                    <i class="fa fa-play"></i>
                highlights
                </a>
            </div>
        `
        console.log(game[7])
        // console.log(highlight)
        if (game[7] === "#") {

            highlight = `
            <div class="highlights-btn">
                <a href="#" id="playButton"  onclick="openHighlightNTFullscreen()">
                    <i class="fa fa-play"></i>
                highlights
                </a>
            </div>
            `
        }
        // console.log(highlight)
        if (screen.width < 768) {
            allTeams.forEach(team => {
                if (team.name === teamOne[0].toLowerCase()) {
                    leftTeamName = team.subName
                }
                if (team.name === teamTwo[0].toLowerCase()) {
                    rightTeamName = team.subName
                }
            })
            if (teamTwo[0].toLowerCase().includes("loser") || teamTwo[0].toLowerCase().includes("winner")) {
                rightTeamName = `${teamTwo[0].split(" ")[0].charAt(0)}${teamTwo[0].split(" ")[1]}`
            }
            if (teamOne[0].toLowerCase().includes("loser") || teamOne[0].toLowerCase().includes("winner")) {
                leftTeamName = `${teamOne[0].split(" ")[0].charAt(0)}${teamOne[0].split(" ")[1]}`
            }
        }


        if (teamOne[2] === false || teamTwo[2] === false) {
            score = `<p>VS</p>`
            goals = " "
            highlight = " "
            fullTime =  " "
        } else {
            score = `<p>${teamOne[2]}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;${teamTwo[2]}</p>`
            
        }

        if (game[9] !== undefined) {
            let drawInfo = Object.values(game[8])
            penalties = `<div class="penalties">${drawInfo[0]} wins ${drawInfo[1]} - ${drawInfo[2]} on penalties</div>`
            score = `
            <span>(${drawInfo[2]})</span>
            <p>${teamOne[2]}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;${teamTwo[2]}</p>
            <span>(${drawInfo[1]})</span>
            `
        }
        if (teamOne[1] === "empty.png") {
            leftFlag = `style="border: 5px solid rgb(16, 30, 63);"`
        }
        if (teamTwo[1] === "empty.png") {
            rightFlag = `style="border: 5px solid rgb(16, 30, 63);"`
        }
        
        if (teamOne[4] !== undefined) {
            winnerTeamLeft = `<div class="winner"></div>`
        }
        if (teamTwo[4] !== undefined) {
            winnerTeamRight = `<div class="winner"></div>`
        }

        if (goalsTeamOne.length > 0) {
            for (let n = 0; n < goalsTeamOne.length; n++) {
                let goal = Object.values(goalsTeamOne[n])
                let assist = goal[2]
                let penalty = goal[3]
                let goalScorer = goal[1]
                if (screen.width < 768 && goal[2] !== false) {
                    assist = goal[2].split(" ")
                    assist = assist[assist.length - 1]
                }
                if (goal[2] === false) {
                    assist = ` `
                }
                if (goal[3] === false) {
                    penalty = ` `
                }
                if (screen.width < 768) {
                    goalScorer = goal[1].split(" ")
                    goalScorer = goalScorer[goalScorer.length - 1]
                }
                let listTeamOne = [divTeamOne, goal[0], goalScorer, assist, penalty]


                if (goalsTeamOne.length - 1 === n) {
                    break
                } else {
                    goalHtmlTeamOne(...listTeamOne)
                }
            }
        } 
        for (let n = 0; n < goalsTeamTwo.length; n++) {
            let goal = Object.values(goalsTeamTwo[n])
            let goalScorer = goal[1]
            let assist = goal[2]
            let penalty = goal[3]
            if (screen.width < 768 && goal[2] !== false) {
                assist = goal[2].split(" ")
                assist = assist[assist.length - 1]
            }
            if (goal[2] === false) {
                assist = ` `
            }
            if (goal[3] === false) {
                penalty = ` `
            }
            if (screen.width < 768) {
                goalScorer = goal[1].split(" ")
                goalScorer = goalScorer[goalScorer.length - 1]
            }
            let listTeamTwo = [divTeamTwo, goal[0], goalScorer, assist, penalty]


            if (goalsTeamTwo.length - 1 === n) {
                break
            } else {
                
                goalHtmlTeamTwo(...listTeamTwo)
            }
        }

        
        let functionCallTeamOne = " " 
        let functionCallTeamTwo = " " 
        if (goalsTeamOne.length > 0) {
            let goal = Object.values(goalsTeamOne[goalsTeamOne.length - 1])
            let assist = goal[2]
            let penalty = goal[3]
            let goalScorer = goal[1]
            if (screen.width < 768 && goal[2] !== false) {
                assist = goal[2].split(" ")
                assist = assist[assist.length - 1]
            }
            if (goal[2] === false) {
                assist = ` `
            }
            if (goal[3] === false) {
                penalty = ` `
            }
            if (screen.width < 768) {
                goalScorer = goal[1].split(" ")
                goalScorer = goalScorer[goalScorer.length - 1]
            }
            let listTeamOne = [divTeamOne, goal[0], goalScorer, assist, penalty]

            functionCallTeamOne = goalHtmlTeamOne(...listTeamOne)
            
        }
        if (goalsTeamTwo.length > 0) {
            let goal = Object.values(goalsTeamTwo[goalsTeamTwo.length - 1])
            let goalScorer = goal[1]
            let assist = goal[2]
            let penalty = goal[3]
            if (screen.width < 768 && goal[2] !== false) {
                assist = goal[2].split(" ")
                assist = assist[assist.length - 1]
            }
            if (goal[2] === false) {
                assist = ` `
            }
            if (goal[3] === false) {
                penalty = ` `
            }
            if (screen.width < 768) {
                goalScorer = goal[1].split(" ")
                goalScorer = goalScorer[goalScorer.length - 1]
            }
            let listTeamTwo = [divTeamTwo, goal[0], goalScorer, assist, penalty]
            functionCallTeamTwo = goalHtmlTeamTwo(...listTeamTwo)
        }
        if (gameId === `g${game[8]}`) {
            document.querySelector('title').textContent = `${game[0].name} vs ${game[1].name}`
            let list = [gameContent, leftTeamName, teamOne[1], rightTeamName, teamTwo[1], game[2], game[3], game[4], date, score, penalties, fullTime, leftFlag, rightFlag, goals, highlight, game[5], game[6], teamNameId(teamOne[0]), teamNameId(teamTwo[0]), winnerTeamLeft, winnerTeamRight]
            gameProfileHtml(functionCallTeamOne, functionCallTeamTwo, ...list)
        }
    } 
}


// End Game Profiles








let clickedTeamm = document.querySelectorAll('.teamForProfile');
if (currentPage.includes("news-generate.html")) {
    clickedTeamm.forEach(element => {
        element.addEventListener("click", () => redirectToNewsPage(element.id));
    });
}