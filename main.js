$(document).ready(function () {
    console.log("ready!");


    $("#chuck").click(function () {
        $("#chuckInfobox").css({
            "visibility": 'visible'
        });
        $(".infobox-wrapper div").not("#chuckInfobox").css({
            "visibility": 'collapse'
        });
    });
    $("#rib").click(function () {
        $("#ribsInfobox").css({
            "visibility": 'visible'
        });
       $(".infobox-wrapper div").not("#ribsInfobox").css({
            "visibility": 'collapse'
        });
        
    });
  $("#sirloin").click(function () {
        $("#sirloinInfobox").css({
            "visibility": 'visible'
        });
       $(".infobox-wrapper div").not("#sirloinInfobox").css({
            "visibility": 'collapse'
        });
        
});
    $(".redletters").mouseover(function () {
        $(this).children().css({
            "strokeWidth": "1",
            "stroke": "blue",
            "fill": "white"
        });
    });
    $(".redletters").mouseleave(function () {
        $(this).children().css({
            "strokeWidth": "0",
            "stroke": "blue",
            "fill": "#ce003a"
        });
    });


    $("#plate").mouseover(function () {
        $("#loin").animate({
            left: "150%"
        }, "slow");

    });

});


const cuts = [
    {
        name: 'BackRibscopy',
        calories: 250,
        fat: 13,
        protein: 24
    },
    {
        name: 'RibeyeFiletcopy',
        calories: 170,
        fat: 2.7,
        protein: 24
    },
    {
        name: 'RibeyePetiteRoastcopy',
        calories: 150,
        fat: 2.2,
        protein: 24
    },
    {
        name: 'RibeyeRoastcopy',
        calories: 180,
        fat: 3.8,
        protein: 24
    },
    {
        name: 'RibeyeSteakcopy',
        calories: 90,
        fat: 4,
        protein: 23
    }, {
        name: 'BackRibscopy',
        calories: 250,
        fat: 13,
        protein: 24
    },
    {
        name: 'RibeyeFiletcopy',
        calories: 170,
        fat: 2.7,
        protein: 24
    },
    {
        name: 'RibeyePetiteRoastcopy',
        calories: 150,
        fat: 2.2,
        protein: 24
    },
    {
        name: 'RibeyeRoastcopy',
        calories: 180,
        fat: 3.8,
        protein: 24
    },
    {
        name: 'RibeyeSteakcopy',
        calories: 90,
        fat: 4,
        protein: 23
    },
    {
        name: 'ShankCrossCutcopy',
        calories: 170,
        fat: 1.9,
        protein: 28
    },
    {
        name: 'FlankSteakcopy',
        calories: 160,
        fat: 2.6,
        protein: 23
    },
    {
        name: 'T-BoneSteakcopy',
        calories: 180,
        fat: 3.5,
        protein: 23
    },
    {
        name: 'PorterhouseSteakcopy',
        calories: 180,
        fat: 3.4,
        protein: 24
    },
    {
        name: 'TopSirloinSteakcopy',
        calories: 150,
        fat: 1.9,
        protein: 26
    },
    {
        name: 'StripLoinPetiteRoast_Tiedcopy',
        calories: 160,
        fat: 2.5,
        protein: 25
    },
    {
        name: 'TopSirloinPetiteRoast_Tiedcopy',
        calories: 160,
        fat: 2.5,
        protein: 24
    },
    {
        name: 'TopSirloinFilet_Tiedcopy',
        calories: 140,
        fat: 1.5,
        protein: 24
    },
    {
        name: 'CoulotteTopSirloinCapSteakcopy',
        calories: 140,
        fat: 1.5,
        protein: 26
    },
    {
        name: 'SirloinBavetteSteakcopy',
        calories: 140,
        fat: 2.1,
        protein: 25
    },

    {
        name: 'PetiteSirloinSteakcopy',
        calories: 150,
        fat: 2.1,
        protein: 23
    },
    {
        name: 'Tri-TipSteakcopy',
        calories: 220,
        fat: 4.8,
        protein: 25
    },
    {
        name: 'Tri-Tipcopy',
        calories: 150,
        fat: 2.6,
        protein: 22
    },



    {
        name: 'TenderloinFiletcopy',
        calories: 170,
        fat: 2.8,
        protein: 26
    },
    {
        name: 'TenderloinRoastcopy',
        calories: 150,
        fat: 2.5,
        protein: 23
    },
];

function cut(name, id) {

    for (let i = 0; i <= cuts.length - 1; i++) {
        if (name === cuts[i].name) {
            document.getElementById('name').innerHTML = cuts[i].name;


            document.getElementById('cals').innerHTML = cuts[i].calories;
            document.getElementById('calSlider').style.left = cuts[i].calories + 'px';

            document.getElementById('fat').innerHTML = cuts[i].fat;
            document.getElementById('fatSlider').style.left = 20 * cuts[i].fat + 'px';
            document.getElementById('protein').innerHTML = cuts[i].protein;
            document.getElementById('proteinSlider').style.left = 2 * cuts[i].protein + 'px';


        }
    }
}






anime({
    targets: '.cow path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    direction: 'alternate',
    loop: false
});

anime({
    targets: '.redletters path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    direction: 'alternate',
    delay: anime.stagger(200),
    loop: true
});


//CUTS PAGE - BUTTON FILLED WITH ID NAME
