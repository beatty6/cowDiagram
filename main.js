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
    $("#round").click(function () {
        $("#roundInfobox").css({
            "visibility": 'visible'
        });
        $(".infobox-wrapper div").not("#roundInfobox").css({
            "visibility": 'collapse'
        });

    });
    $("#rump").click(function () {
        $("#rumpInfobox").css({
            "visibility": 'visible'
        });
        $(".infobox-wrapper div").not("#rumpInfobox").css({
            "visibility": 'collapse'
        });

    });
    $("#flank").click(function () {
        $("#flankInfobox").css({
            "visibility": 'visible'
        });
        $(".infobox-wrapper div").not("#flankInfobox").css({
            "visibility": 'collapse'
        });

    });
    $("#shank").click(function () {
        $("#shankInfobox").css({
            "visibility": 'visible'
        });
        $(".infobox-wrapper div").not("#shankInfobox").css({
            "visibility": 'collapse'
        });

    });
    $("#plate").click(function () {
        $("#plateInfobox").css({
            "visibility": 'visible'
        });
        $(".infobox-wrapper div").not("#plateInfobox").css({
            "visibility": 'collapse'
        });

    });

    $(".redletters").mouseover(function () {
        $(this).children().css({
            "strokeWidth": "1",
            "stroke": "blue",
            "fill": "white"
        });


        anime({
            targets: '.redletters path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 500,
            loop: false,
            direction: 'alternate',
        });


    });
    $(".redletters").mouseleave(function () {
        $(this).children().css({
            "strokeWidth": "0",
            "stroke": "blue",
            "fill": "#ce003a"
        });
    });



});


const cuts = [{
        name: 'BackRibscopy',
        calories: 250,
        fat: 4,
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
        name: 'StripLoinRoastcopy',
        calories: 150,
        fat: 1.9,
        protein: 26
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
        name: 'Coulottecopy',
        calories: 160,
        fat: 2.6,
        protein: 23
    },
    {
        name: 'TopSirloinFilet_Tiedcopy',
        calories: 140,
        fat: 1.5,
        protein: 24
    },
    {
        name: 'BallTip_FatOncopy',
        calories: 160,
        fat: 2.6,
        protein: 23
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
        name: 'SirloinBavettecopy',
        calories: 150,
        fat: 2.1,
        protein: 23
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
        name: 'TenderloinButtcopy',
        calories: 170,
        fat: 2.8,
        protein: 26
    },
    {
        name: 'TenderloinTailcopy',
        calories: 150,
        fat: 2.5,
        protein: 23
    },
    {
        name: 'TenderloinTipscopy',
        calories: 160,
        fat: 2.5,
        protein: 25
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
    {
        name: 'ShortRibs_Chuckcopy',
        calories: 160,
        fat: 2.5,
        protein: 25
    },
    {
        name: 'ChuckTenderSteakcopy',
        calories: 160,
        fat: 2.5,
        protein: 24
    },
    {
        name: 'ChuckTendercopy',
        calories: 160,
        fat: 2.6,
        protein: 23
    },
    {
        name: 'ArmRoastcopy',
        calories: 140,
        fat: 1.5,
        protein: 24
    },
    {
        name: 'BladeChuckRoastcopy',
        calories: 140,
        fat: 2.6,
        protein: 24
    },
    {
        name: 'AmericasBeefRoastcopy',
        calories: 160,
        fat: 2.8,
        protein: 23
    },
    {
        name: 'DelmonicoSteakcopy',
        calories: 140,
        fat: 2.5,
        protein: 26
    },
    {
        name: 'CountryStyleRibscopy',
        calories: 140,
        fat: 2.5,
        protein: 25
    },
    {
        name: 'RanchSteakcopy',
        calories: 150,
        fat: 2.8,
        protein: 23
    }]

function cut(name, id) {

    for (let i = 0; i <= cuts.length - 1; i++) {
        if (name === cuts[i].name) {
            
            // find substring 'copy' and remove 
            let altered = cuts[i].name.replace("copy", "");
            document.getElementById('name').innerHTML = altered;



            document.getElementById('cals').innerHTML = cuts[i].calories;
            document.getElementById('calSlider').style.left = 0.5 * cuts[i].calories + 'px';

            document.getElementById('fat').innerHTML = cuts[i].fat;
            document.getElementById('fatSlider').style.left = 40 * cuts[i].fat + 'px';
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


//CUTS PAGE - BUTTON FILLED WITH ID NAME
