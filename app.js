// connecting jQuery
$(document).ready(function () {

    // For MVP for the project I 
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
                name: "attack 2",
                attkPoints: 50
            },

            {
                name: "attack 3",
                attkPoints: 85
            },
            {
                name: "attack 4",
                attkPoints: 100
            },
            {
                name: "attack 5",
                attkPoints: 50
            }

            ],
            isAttacking: true,
            defense: [{
                name: "Solar Flare",
                defPoints: 80
            },
            {
                name: "Power Stance",
                defPoints: 45
            },
            {
                name: "Def 3",
                defPoints: 22
            }
            ],
            // defense: ["Solar Flare", "Power Stance"],
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

                name: "attack 4",
                attkPoints: 45
            },

            {
                name: "attack 5",
                attkPoints: 88
            },

            {
                name: "attack 6",
                attkPoints: 100
            },
            {
                name: "attack 7",
                attkPoints: 100
            },
            {
                name: "attack 8",
                attkPoints: 10
            }

            ],
            // attacks: ["Rasengan", "Tailed Beast Rasenshuriken"],
            isAttacking: true,
            defense: [{
                name: "defense",
                defPoints: 45
            },
            {
                name: "def 2",
                defPoints: 60
            },
            {
                name: "Def 3",
                defPoints: 78
            }
            ],
            isDefending: false,
            imgURL: "./images/naruto.jpeg",
            // naurtosMove: function () {
            //     if (this.isAttacking === true) {
            //         var randomNaurtoAttack = Math.floor(Math.random() * fighters.naurto.attacks.length)
            //         console.log(randomNaurtoAttack)
            //         console.log(fighters.naurto.attacks[randomNaurtoAttack]);

            //     }
            //     else {
            //         console.log()
            //     }


            // }

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
    function attackCallOne() {
        let indexOne = Math.floor(Math.random() * fighters.goku.attacks.length)
        console.log(indexOne)
        let randomAttack = fighters.goku.attacks[indexOne].attkPoints;
        updatedHealth = fighters.naurto.health - randomAttack;


        if (updatedHealth <= 0) {
            alert("you have won! to play again refresh the page")
        } else
            updatedHealth--

        $("#gokus-attack-power").text("Your attack power is:" + " " + randomAttack)
       $("#gokus-opp-health").text("Your opponents new health is:" + " " + updatedHealth)
       
        chooseGoku()
    };

    function attackCallTwo() {
        let indexTwo = Math.floor(Math.random() * fighters.naurto.attacks.length)
        console.log(indexTwo)
        let randomAttackTwo = fighters.naurto.attacks[indexTwo].attkPoints;
        let updatedHealthTwo = fighters.goku.health - randomAttackTwo;
        if (updatedHealthTwo <= 0) {
            alert("you have won! to play again refresh the page")
        } else if (updatedHealthTwo--) {
            console.log(updatedHealthTwo)

        }
        console.log("Your attack power is" + " " + randomAttackTwo);
        console.log("Your opponents new health" + " " + updatedHealthTwo);

        chooseNaurto();
    };

    function defenseCallOne() {
        
        let randomDefenseFinderOne = Math.floor(Math.random() * fighters.goku.defense.length);
        let randomDefenseOne = fighters.goku.defense[randomDefenseFinderOne].defPoints;
        console.log(randomDefenseOne)
        let findNaurtosAttack = Math.floor(Math.random() * fighters.naurto.attacks.length)
        console.log(findNaurtosAttack);
        let naurtoAttacksYou = fighters.naurto.attacks[findNaurtosAttack].attkPoints;
        let newHealthOne = naurtoAttacksYou - randomDefenseOne;
        if(newHealthOne <=0){
            alert("Unfortunately you are not the strongest fighter. Refresh and try again. Fighters current health" + " " + newHealthOne )
        }
       
        else  $("#gokus-health").text("this is your updated health" + " " + newHealthOne) ;  
        

    };
    function defenseCallTwo() {
        let randomDefenseFinder = Math.floor(Math.random() * fighters.naurto.defense.length);
        let randomDefense = fighters.naurto.defense[randomDefenseFinder].defPoints;
        console.log(randomDefense)
        let findGokusAttack = Math.floor(Math.random() * fighters.goku.attacks.length)
        console.log(findGokusAttack);
        let gokuAttacksYou = fighters.goku.attacks[findGokusAttack].attkPoints;
        let newHealthTwo = gokuAttacksYou - randomDefense
        console.log("this is your updated health" + newHealthTwo)

    };


    function showFighter() {
        $(".selection").attr("style", "display:block")
        // $("#selectFighter").attr("style", "display:block");

    };

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

    $("#goku-btn").on("click", attackCallOne);
    $("#naurto-btn").on("click", attackCallTwo);

    $("#naurto-def-btn").on("click", defenseCallTwo);
    $("#goku-def-btn").on("click", defenseCallOne);
   


    // $("#deku-btn").on("click", function () {
    //     chooseDeku()
    //     console.log("You picked Deku")
    // });



})