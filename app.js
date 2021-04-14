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
            health:100,
            attacks: [{
                name: "spirit bomb",
                attkPoints: 90

            },

            {
                name: "attack 2",
                attkPoints: 20
            },

            {
                name: "attack 3",
                attkPoints: 40
            }

            ],
            isAttacking: true,
            defense:[{
                name:"Solar Flare",
                defPoints: 80
            },
            {
                name:"Power Stance",
                defPoints: 45
            },
            {
                name:"Def 3",
                defPoints: 22
            }
        ],
            // defense: ["Solar Flare", "Power Stance"],
            imgURL: "./images/goku.jpeg",
            gokusMove: function () {
                if (this.isAttacking === true) {
                    var userMove = Math.floor(Math.random() * fighters.goku.attacks.length)
                    //    for(i = 0; i < fighters.goku.attacks.length; i++){
                    //        console.log(i)
                    //    }
                    console.log(fighters.goku.attacks[userMove])
                    // console.log(userMove)
                }
                else {
                    console.log("a defensive move should be randomly picked")
                }
                // i would like to add an on click event listener for when goku is selected it will render is image and have him attack or defend 


            }

        },
        naurto: {
            name: "Naurto",
            age: 17,
            health:100, 
            attacks:[{

                name:"attack 4",
                attkPoints: 45
            },

            {
                name:"attack 5",
                attkPoints: 88
            },

            {
                name:"attack 6",
                attkPoints: 100
            }

        ],
            // attacks: ["Rasengan", "Tailed Beast Rasenshuriken"],
            isAttacking: true,
            defense:[{
                name:"defense",
                defPoints: 45
            },
            {
                name:"55",
                defPoints: 60
            },
            {
                name:"Def 3",
                defPoints: 78
            }
        ],
            isDefending: false,
            imgURL: "./images/naruto.jpeg",
            naurtosMove: function () {
                if (this.isAttacking === true) {
                    var randomNaurtoAttack = Math.floor(Math.random() * fighters.naurto.attacks.length)
                    console.log(randomNaurtoAttack)
                    console.log(fighters.naurto.attacks[randomNaurtoAttack]);
                    
                }
                else {
                    console.log()
                }


            }

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
    fighters.goku.gokusMove()
    fighters.naurto.naurtosMove()
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
        $("#deku").attr("style", "display:none");
    }

    function chooseNaurto() {
        $("#goku", "#deku").attr("style", "display:none");
        $("#deku").attr("style", "display:none");
    }

    function chooseDeku() {
        $("#goku").attr("style", "display:none");
        $("#naurto").attr("style", "display:none");
    }
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
    $("#goku-btn").on("click", function () {
        chooseGoku()
        console.log("You picked Goku")
    });

    $("#naurto-btn").on("click", function () {
        chooseNaurto()
        console.log("You picked Naurto")
    });

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

    // $(("#goku").on("click" , function(){
    //     chooseGoku()
    //     console.log("you picked Goku")

    // }));

    // $(("#naruto").on("click" , function(){
    //     chooseNaruto
    //     console.log("you picked Naruto")

    // }));





})