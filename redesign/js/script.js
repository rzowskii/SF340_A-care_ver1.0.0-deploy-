
var age1 = document.getElementById("age1");
var height1 = document.getElementById("height1");
var weight1 = document.getElementById("weight1");
var male1 = document.getElementById("m1");
var female1 = document.getElementById("f1");
var form1 = document.getElementById("form1");
var sedentary = document.getElementById("sedentary");
var light = document.getElementById("light");
var moderate = document.getElementById("moderate");
var veryActive = document.getElementById("very-active");
var superActive = document.getElementById("super-active");
let resultArea1 = document.querySelector(".daily-calories");
let resultArea = document.querySelector(".comment");

function calculate1() {
  countBmi1();
}


function countBmi1() {
  var p = [age1.value, height1.value, weight1.value];
  if (male1.checked) {
    p.push("male");
  } else if (female1.checked) {
    p.push("female");
  }
  // calculate the initial BMR
  bmr = 10 * Number(p[2]) + 6.25 * Number(p[1]) - 5 * Number(p[0]);

  // gender specific adjustment
  if (p[3] === "male") {
    bmr += 5;
  } else if (p[3] === "female") {
    bmr -= 161;
  }

  sedentary.innerHTML = (bmr * 1.2).toFixed(0);
  light.innerHTML = (bmr * 1.375).toFixed(0);
  moderate.innerHTML = (bmr * 1.55).toFixed(0);
  veryActive.innerHTML = (bmr * 1.725).toFixed(0);
  superActive.innerHTML = (bmr * 1.9).toFixed(0);

  resultArea1.style.display = "block";
  document.querySelector("#result1").innerHTML = bmr.toFixed(0);

}


function calculate() {

  if (age1.value == '' || height1.value == '' || weight1.value == '' || (male1.checked == false && female1.checked == false)) {
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  } else {
    countBmi();
  }
}

function countBmi() {
  var p = [age1.value, height1.value, weight1.value];
  if (male1.checked) {
    p.push("male");
  } else if (female1.checked) {
    p.push("female");
  }

  var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

  var result = '';
  if (bmi < 18.5) {
    result = 'Underweight';
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = 'Healthy';
  } else if (25 <= bmi && bmi <= 29.9) {
    result = 'Overweight';
  } else if (30 <= bmi && bmi <= 34.9) {
    result = 'Obese';
  } else if (35 <= bmi) {
    result = 'Extremely obese';
  }

  resultArea.style.display = "block";
  document.querySelector(".comment").innerHTML = `<span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);

}

$(document).ready(function(){
    // navigation toggle
    $('.navbar-toggler-btn').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });
    // change navbar bg
    $(document).scroll(function(){
        var $nav = $('.navbar');
        $nav.toggleClass('change-on-scroll', $(this).scrollTop() > $nav.height());
    });

    // header slider
    $('.header-banner-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // courses slider
    $('.courses-content').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    // teachers slider
    $('.teachers-content').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // clients slider
    $('.clients-content').slick({
        arrows:false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    // blogs slider
    $('.blogs-content').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings:{
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});