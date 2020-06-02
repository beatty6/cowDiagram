$(document).ready(function () {
    console.log("ready!");


   

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
    },
];

      function cut( name, id) {
          for(let i = 0; i <=cuts.length -1;  i++){
              if(name === cuts[i].name){
                document.getElementById('name').innerHTML = cuts[i].name;
                document.getElementById('cals').innerHTML = cuts[i].calories;
                document.getElementById('buttonid').innerHTML = cuts[i].fat;
                  
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
    loop: true
});


//CUTS PAGE - BUTTON FILLED WITH ID NAME



