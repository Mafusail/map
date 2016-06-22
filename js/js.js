$(document).ready(function(){


    // Canvas ABSD
    
    $('.point_a').click(function () {
        $('.text_pointer').hide();

        $('.text_pointer_a').css({
            "color": "#ffffff"
        });
        $('.text_pointer_b').css({
            "color": "#ffffff"
        });
        $('.text_pointer_c').css({
            "color": "#ffffff"
        });
        $('.text_pointer_d').css({
            "color": "#ffffff"
        });




        $('#canvas_abcd').show();


    });
    $('#canvas_abcd').click(function () {
        $('.text_pointer').show();

        $('.text_pointer_a').css({
            "color": "transparent"
        });
        $('.text_pointer_b').css({
            "color": "transparent"
        });
        $('.text_pointer_c').css({
            "color": "transparent"
        });
        $('.text_pointer_d').css({
            "color": "transparent"
        });

        $('#canvas_abcd').hide();
    });



    // Canvas ABSD

    var canvas = document.getElementById('canvas_abcd');
    var context = canvas.getContext('2d');

    // Кординаты Point A
    var leftA = 200 + 20;
    var topA =  150 + 5;

    // Кординаты Point B
    var leftB = 450 + 20;
    var topB =  350 + 5;

    // Кординаты Point C
    var leftC = 800 + 20;
    var topC =  200 + 5;

    // Кординаты Point D
    var leftD = 700 + 20;
    var topD =  400 + 5;


    
    var midAC =  Math.sqrt(Math.pow((topC - topA),2) + Math.pow((leftC - leftA),2)) ;
    
    var midAB =  Math.sqrt(Math.pow((topB - topA),2) + Math.pow((leftB - leftA),2)) + 80;
    // (355-155)^2 + (470-220)^2 = корень 40000 + 62500 = 320
    
    var midAD =  Math.sqrt(Math.pow((topD - topA),2) + Math.pow((leftD - leftA),2));
    // (355-155)^2 + (470-220)^2 = корень 40000 + 62500 = 320



    
    
    context.beginPath();
    context.moveTo(leftA, topA);
    context.quadraticCurveTo(midAB, 150, leftB, topB);
    context.moveTo(leftA, topA);
    context.quadraticCurveTo(midAC, 0, leftC, topC);



    context.lineWidth = 2;

    // line color
    context.strokeStyle = 'white';
    context.stroke();








    // Штрих-пунктир

    context.beginPath();
    context.moveTo(leftA, topA);
    context.quadraticCurveTo(midAD, 100, leftD, topD);
    context.setLineDash([15, 15]);



    context.lineWidth = 2;

    // line color
    context.strokeStyle = 'white';
    context.stroke();









    // Canvas BA


    $('.point_b').click(function () {
        $('.text_pointer').hide();

        $('.text_pointer_a').css({
            "color": "#ffffff"
        });
        $('.text_pointer_b').css({
            "color": "#ffffff"
        });
        $('#canvas_ba').show();


    });
    $('#canvas_ba').click(function () {
        $('.text_pointer').show();

        $('.text_pointer_a').css({
            "color": "transparent"
        });
        $('.text_pointer_b').css({
            "color": "transparent"
        });

        $('#canvas_ba').hide();
    });

    
    var canvas = document.getElementById('canvas_ba');
    var context = canvas.getContext('2d');


    context.beginPath();
    context.moveTo(leftA, topA);
    context.quadraticCurveTo(midAB, 150, leftB, topB);


    context.lineWidth = 2;

    // line color
    context.strokeStyle = 'white';
    context.stroke();





    // Canvas CA


    $('.point_c').click(function () {
        $('.text_pointer').hide();

        $('.text_pointer_a').css({
            "color": "#ffffff"
        });
        $('.text_pointer_c').css({
            "color": "#ffffff"
        });
        $('#canvas_ca').show();


    });
    $('#canvas_ca').click(function () {
        $('.text_pointer').show();

        $('.text_pointer_a').css({
            "color": "transparent"
        });
        $('.text_pointer_c').css({
            "color": "transparent"
        });

        $('#canvas_ca').hide();
    });




    var canvas = document.getElementById('canvas_ca');
    var context = canvas.getContext('2d');



    context.beginPath();
    context.moveTo(leftA, topA);
    context.quadraticCurveTo(midAC, 0, leftC, topC);


    context.lineWidth = 2;

    // line color
    context.strokeStyle = 'white';
    context.stroke();




    // Canvas DA


    $('.point_d').click(function () {
        $('.text_pointer').hide();

        $('.text_pointer_a').css({
            "color": "#ffffff"
        });
        $('.text_pointer_d').css({
            "color": "#ffffff"
        });
        $('#canvas_da').show();


    });
    $('#canvas_da').click(function () {
        $('.text_pointer').show();

        $('.text_pointer_a').css({
            "color": "transparent"
        });
        $('.text_pointer_d').css({
            "color": "transparent"
        });

        $('#canvas_da').hide();
    });


    

    var canvas = document.getElementById('canvas_da');
    var context = canvas.getContext('2d');



    // Штрих-пунктир

    context.beginPath();
    context.moveTo(leftA, topA);
    context.quadraticCurveTo(midAD, 100, leftD, topD);
    context.setLineDash([15, 15]);



    context.lineWidth = 2;

    // line color
    context.strokeStyle = 'white';
    context.stroke();






});



