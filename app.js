// connecting jQuery
$(document).ready(function () {

    // For MVP for the project I built an array of fighters and key values that i can use to make attack and defensive options. 
    const fighters = {
        goku: {
            name: "Goku",
            age: 37,
            health: 100,
            attacks: [{
                name: "spirit bomb",
                attkPoints: 100

            },

            {
                name: "Ultra Instinct",
                attkPoints: 99
            },

            {
                name: "Kamehameha",
                attkPoints: 70
            },
            {
                name: "Kaio-Ken",
                attkPoints: 60
            },
            {
                name: "Solar Disc",
                attkPoints: 50
            }

            ],
            isAttacking: true,
            defense: [{
                name: "Solar Flare",
                defPoints: 45
            },
            {
                name: "Power Stance",
                defPoints: 60
            },
            {
                name: "Instant Transmission",
                defPoints: 100
            }
            ],

            imgURL: "./images/goku.jpeg",
            gokusMove: function () {

                console.log(fighters.goku.attacks[userMove].attkPoints)


            }

        },
        naurto: {
            name: "Naurto",
            age: 17,
            health: 100,
            attacks: [{

                name: "Rasengan",
                attkPoints: 75
            },

            {
                name: "Tailed Beast Rasenshuriken",
                attkPoints: 100
            },

            {
                name: "Clone Technique",
                attkPoints: 50
            },
            {
                name: "attack 7",
                attkPoints: 100
            },


            ],

            isAttacking: true,
            defense: [{
                name: "Clone Technique",
                defPoints: 90
            },
            {
                name: "pervy clones",
                defPoints: 98
            },
            {
                name: "Def 3",
                defPoints: 100
            },
            {
                name: "Sage Mode",
                defPoints: 80
            }
            ],
            isDefending: false,
            imgURL: "./images/naruto.jpeg",


        },
        // izukuMidoriya: {
        //     name: "Deku",
        //     age: 15,
        //     attacks: ["One For All", "Delaware Smash"],
        //     isAttacking: false,
        //     defense: ["Counter1", "Counter2"],
        //     imgURL: "./images/deku.jpeg",
        //     dekusMove: function () {
        //         if (this.isAttacking === true) {
        //             console.log("an attack should be randomly  chosen from the attack array")
        //         }
        //         else {
        //             console.log("a defensive move should be randomly picked")
        //         }


        //     }

        // }


    }
    // Attack calls for both fighters that will be chosen at random each click of the button and updated on screen.
    function attackCallOne() {
        let indexOne = Math.floor(Math.random() * fighters.goku.attacks.length)
        console.log(indexOne)
        let randomAttack = fighters.goku.attacks[indexOne].attkPoints;
        let randomAttackName = fighters.goku.attacks[indexOne].name;
        updatedHealth = fighters.naurto.health - randomAttack;


        if (updatedHealth <= 0) {
            alert(" Congrats fighter you have won! Like to play again, just  refresh the page!")

        } else
            updatedHealth--

        $("#gokus-attack-choice").text("Your attack choice is:" + " " + randomAttackName)
        $("#gokus-attack-power").text("Your attack power is:" + " " + randomAttack)
        $("#gokus-opp-health").text("Your opponents new health is:" + " " + updatedHealth)

        chooseGoku()
    };

    function attackCallTwo() {
        let indexTwo = Math.floor(Math.random() * fighters.naurto.attacks.length)
        console.log(indexTwo)
        let randomAttackTwo = fighters.naurto.attacks[indexTwo].attkPoints;
        let updatedHealthTwo = fighters.goku.health - randomAttackTwo;
        let randomAttackNameTwo = fighters.naurto.attacks[indexTwo].name;
        if (updatedHealthTwo <= 0) {
            alert("you have won! to play again refresh the page")
        } else updatedHealthTwo--
        // console.log(updatedHealthTwo)
        $("#naurto-attack-choice").text("Your attack choice is:" + " " + randomAttackNameTwo)
        $("#naurto-attack-power").text("Your attack power is:" + " " + randomAttackTwo)
        $("#naurto-opp-health").text("Your opponents new health is:" + " " + updatedHealthTwo)




        chooseNaurto();
    };

    // defensive call for fighter one that should randomize an attack move from fighter two and a defensive move from fighter one and subtract the difference and make an update
    function defenseCallOne() {

        let randomDefenseFinderOne = Math.floor(Math.random() * fighters.goku.defense.length);
        let randomDefenseOne = fighters.goku.defense[randomDefenseFinderOne].defPoints;
        // console.log(randomDefenseOne);
        let findNaurtosAttack = Math.floor(Math.random() * fighters.naurto.attacks.length);
        let randomDefenseName = fighters.goku.defense[randomDefenseFinderOne].name;
        // console.log(findNaurtosAttack);
        let naurtoAttacksYou = fighters.naurto.attacks[findNaurtosAttack].attkPoints;
        let newHealthOne = naurtoAttacksYou - randomDefenseOne;
        if (newHealthOne <= 0) {
            alert("Unfortunately you are not the strongest fighter. Refresh and try again. Fighters current health" + " " + newHealthOne)
        }

        else 
        $("#gokus-defensive-choice").text("Your fighter chose:" + " " + randomDefenseName);
        $("#gokus-health").text("updated health:" + " " + newHealthOne);


    };

    // defensive call for fighter two that should randomize an attack move from fighter one and a defensive move from fighter two and subtract the difference and make an update
    function defenseCallTwo() {
        let randomDefenseFinder = Math.floor(Math.random() * fighters.naurto.defense.length);
        let randomDefense = fighters.naurto.defense[randomDefenseFinder].defPoints;
        let randomDefenseNameTwo = fighters.naurto.defense[randomDefenseFinder].name;
        let findGokusAttack = Math.floor(Math.random() * fighters.goku.attacks.length)
        let gokuAttacksYou = fighters.goku.attacks[findGokusAttack].attkPoints;
        let newHealthTwo = gokuAttacksYou - randomDefense
        if (newHealthTwo <= 0) {
            alert("Unfortunately you are not the strongest fighter. Refresh and try again. Fighters current health" + " " + newHealthTwo)
        }

        else
        $("#naurto-defensive-choice").text("Your fighter chose:" + " " + randomDefenseNameTwo);
         $("#naurto-health").text("this is your updated health" + " " + newHealthTwo);

    };

    // will show fighters once user clicks the lets fight button
    function showFighter() {
        $(".selection").attr("style", "display:block")
        // $("#selectFighter").attr("style", "display:block");

    };

    // user will have an option to select one out of two fighters and doing so will block the view of the other fighter
    function chooseGoku() {
        $("#naurto").attr("style", "display:none");
        // $("#deku").attr("style", "display:none");
    };

    function chooseNaurto() {
        $("#goku").attr("style", "display:none");
        // $("#deku").attr("style", "display:none");
    };

    // function chooseDeku() {
    //     $("#goku").attr("style", "display:none");
    //     $("#naurto").attr("style", "display:none");
    // }


    // here we use jQuery to select the button via the ID with #getStarted with an on click event listener 
    $("#getStarted").on("click", function () {
        showFighter()

    });
    // event listener for an on click event that will trigger either attack for both fighters

    $("#goku-btn").on("click", attackCallOne);
    $("#naurto-btn").on("click", attackCallTwo);

    // event listener for an on click event that will trigger either defensive move  for both fighters

    $("#naurto-def-btn").on("click", defenseCallTwo);
    $("#goku-def-btn").on("click", defenseCallOne);

    // $("#goku-reset-btn").on("click").empty()

    // $("#deku-btn").on("click", function () {
    //     chooseDeku()
    //     console.log("You picked Deku")
    // });



})