// connecting jQuery
$(document).ready(function () {
    // const showFighters = document.getElementById("#selectFighter");
    // checking connection in the browser 
    // console.log("jQuery is working")

    // where the objects for our fighters will be 
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
                // if (this.isAttacking === true) {
                //     var userMove = Math.floor(Math.random() * fighters.goku.attacks.length)
                //    for(i = 0; i < fighters.goku.attacks.length; i++){
                //        console.log(i)
                //    }
                console.log(fighters.goku.attacks[userMove].attkPoints)
                // console.log(userMove)
                // }
                // else {
                //     console.log("a defensive move should be randomly picked")
                // }
                // i would like to add an on click event listener for when goku is selected it will render is image and have him attack or defend 


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

        console.log("Your attack power is" + " " + randomAttack)
        console.log("Your opponents new health" + " " + updatedHealth)
        console.log("You picked Goku")
        chooseGoku()
    }

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
        // updatedHealthTwo--
        console.log("Your attack power is" + " " + randomAttackTwo)
        console.log("Your opponents new health" + " " + updatedHealthTwo)

        chooseNaurto()
    }

    // function attackCallTwo(){
    //     let randomAttackTwo = fighters.naurto.attacks[1].attkPoints;
    //     updatedHealthTwo = randomAttackTwo - fighters.goku.health;


    //     console.log(randomAttackTwo)
    //     console.log(updatedHealthTwo)
    // }

    function defenseCallOne() {
        let randomDefenseFinderOne = Math.floor(Math.random() * fighters.goku.defense.length);
        let randomDefenseOne = fighters.goku.defense[randomDefenseFinderOne].defPoints;
        console.log(randomDefenseOne)
        let findNaurtosAttack = Math.floor(Math.random() * fighters.naurto.attacks.length)
        console.log(findNaurtosAttack);
        let naurtoAttacksYou = fighters.naurto.attacks[findNaurtosAttack].attkPoints;
        let newHealthOne = naurtoAttacksYou - randomDefenseOne;
        console.log("this is your updated health" + " " + newHealthOne);

    }
    function defenseCallTwo() {
        let randomDefenseFinder = Math.floor(Math.random() * fighters.naurto.defense.length);
        let randomDefense = fighters.naurto.defense[randomDefenseFinder].defPoints;
        console.log(randomDefense)
        let findGokusAttack = Math.floor(Math.random() * fighters.goku.attacks.length)
        console.log(findGokusAttack);
        let gokuAttacksYou = fighters.goku.attacks[findGokusAttack].attkPoints;
        let newHealthTwo = gokuAttacksYou - randomDefense
        console.log("this is your updated health" + newHealthTwo)

    }


    // attackCallOne()
    // attackCallTwo()
    // defenseCallTwo()

    // fighters.goku.gokusMove()
    // fighters.naurto.naurtosMove()
    // console.log(fighters.goku.gokusMove())
    // console.log()
    // console.log(fighters.goku.attacks[0].attkPoints)

    // functions that should run
    function showFighter() {
        $(".selection").attr("style", "display:block")
        // $("#selectFighter").attr("style", "display:block");

    }

    function chooseGoku() {
        $("#naurto").attr("style", "display:none");
        // $("#deku").attr("style", "display:none");
    }

    function chooseNaurto() {
        $("#goku").attr("style", "display:none");
        // $("#deku").attr("style", "display:none");
    }

    // function chooseDeku() {
    //     $("#goku").attr("style", "display:none");
    //     $("#naurto").attr("style", "display:none");
    // }
    // here we use jQuery to select the button via the ID with #getStarted with an on click event listener 
    $("#getStarted").on("click", function () {
        showFighter()

        // function showFighter(){
        //   $("#selectFighter").style(display, "block");

        // } document.getElementById("#selectFighter").style.display = block

        console.log("displayed worked")
        // }
        // showFighter()
    })
    $("#goku-btn").on("click", attackCallOne)
    // if (fighters.goku.health === 0) {
    //     console.log("Your health has reached 0")
    // } else {





    // chooseGoku()
    // attackCallOne()
    // console.log("You picked Goku")


    $("#naurto-btn").on("click", attackCallTwo);
    // function attackCallTwo() {
    //     let randomAttackTwo = fighters.naurto.attacks[1].attkPoints;
    //     updatedHealthTwo = randomAttackTwo - fighters.goku.health;


    //     console.log(randomAttackTwo)
    //     console.log(updatedHealthTwo)
    // }




    // if (fighters.goku.health >= 0) {
    //     attackCallOne()

    // } else {

    // }

    $("#deku-btn").on("click", function () {
        chooseDeku()
        console.log("You picked Deku")
    });

    $(".attackOptions1").on("click", function () {
        console.log("You picked an Attack")
    })

    $(".defenseOptions1").on("click", function () {
        console.log("You picked a counter")
    })

    $("#naurto-def-btn").on("click", defenseCallTwo);
    $("#goku-def-btn").on("click", defenseCallOne);



    // $(("#goku").on("click" , function(){
    //     chooseGoku()
    //     console.log("you picked Goku")

    // }));

    // $(("#naruto").on("click" , function(){
    //     chooseNaruto
    //     console.log("you picked Naruto")

    // }));





})