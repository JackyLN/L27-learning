var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    // VD đang ở hình cuối cùng của cái slide có tất cả 4 hình thì lúc này slideIndex = 4
    // Vậy khi bấm cộng: slideIndex +1 => slideIndex = 5
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // ở thời điểm này: n = 5
    // index
    var i;
    // slides: array, storage textures to show on slide.
    // array: https://www.w3schools.com/js/js_arrays.asp
    // mảng là biến dùng để lưu NHIỀU GIÁ TRỊ CÙNG LOẠI
    // What is i++, ++i: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
    var slides = document.getElementsByClassName("mySlides");
    // dots: array, use to storage the dot under the image.
    var dots = document.getElementsByClassName("dot");

    //----------------------
    // let x = 3
    // y = x++

    // the code above equals below
    // let x = 3
    // y = x
    // x = x + 1

    // let x = 3
    // y = ++x

    // the code above equals below
    // let x = 3
    // x = x+ 1
    // y = x
    //----------------------

    // loop, 
    // [0][1][2][4]
    // current: is the 4th texture, this mean now n = 5 or n > 4
    // slides.length = 4
    // n = 5 
    // n > slides.length = true (thoả mãn điều kiện)
    if (n > slides.length) {
        slideIndex = 1
    }
    // slideIndex = 1

    // -----------
    // VD: n = 0 
    // jump to the last texture of the array.
    if (n < 1) {
        slideIndex = slides.length
    }



    // this is an array (this array name fruit)
    // index:  [0]     [1]     [2]         [3]
    // value: [orange][apple][pineapple][grape]
    // fruit.length = 4
    // fruit[index of the elemenet that you wanna get the value]
    // i wanna get the pineapple
    // => fruit[2]

    // for (i = 0; i < fruit.lenght; i++)
    // {
    // Print out name of all elements inside the fruit array
    //  print(fruit[i]);
    // }

    // i = 4
    // i = 4 is < fruit.length? => false
    // for loop clause is broken and finished


    // if without for clause
    // print(fruit[0]) => orange
    // print(fruit[1]) => ...
    // print(fruit[2]) => ...
    // print(fruit[3]) => ...

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}