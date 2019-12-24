var on1 = false
var on2 = false
var on3 = false
var on4 = false
var on5 = false
var on6 = false
var on7 = false
var on8 = false
var on9 = false
var on10 = false
var on11 = false
var on12 = false
var on13 = false
var on14 = false
var on15 = false
var on16 = false

var box1 = $('<div>')
var box2 = $('<div>')
var box3 = $('<div>')
var box4 = $('<div>')
var box5 = $('<div>')

$(document).ready(function() {

    $('#h1b').on('click', function() {

        if (on1 == false) {
            box5.empty()
            var $div = $('<div>')
            $div.addClass('temp1')
            var car = $('<img>')
            car.attr('src', './image/髮型長藍.png')
            car.addClass('move5')
            $div.append(car)
            box5.append($div)
            $('.closet').append(box5)

            on1 = true
        } else {
            $('.temp1').empty()
            on1 = false
        }
    })
})
$(document).ready(function() {

    $('#h2b').on('click', function() {

        if (on2 == false) {
            box5.empty()
            var $div = $('<div>')
            $div.addClass('temp2')
            var car = $('<img>')
            car.attr('src', './image/髮型盤棕.png')
            car.addClass('move5')
            $div.append(car)
            box5.append($div)
            $('.closet').append(box5)

            on2 = true
        } else {
            $('.temp2').empty()
            on2 = false
        }
    })
})
$(document).ready(function() {

    $('#h3b').on('click', function() {

        if (on3 == false) {
            box5.empty()
            var $div = $('<div>')
            $div.addClass('temp3')
            var car = $('<img>')
            car.attr('src', './image/髮型辮灰.png')
            car.addClass('move5')
            $div.append(car)
            box5.append($div)
            $('.closet').append(box5)
            on3 = true
        } else {
            $('.temp3').empty()
            on3 = false
        }
    })
})
$(document).ready(function() {

    $('#h4b').on('click', function() {

        if (on4 == false) {
            box5.empty()
            var $div = $('<div>')
            $div.addClass('temp4')
            var car = $('<img>')
            car.attr('src', './image/髮型短黑.png')
            car.addClass('move5')
            $div.append(car)
            box5.append($div)
            $('.closet').append(box5)
            on4 = true
        } else {
            $('.temp4').empty()
            on4 = false
        }
    })
})

$(document).ready(function() {

    $('#h5b').on('click', function() {

        if (on5 == false) {
            box4.empty()
            var $div = $('<div>')
            $div.addClass('temp5')
            var car = $('<img>')
            car.attr('src', './image/衣服短棕.png')
            car.addClass('move4')
            $div.append(car)
            box4.append($div)
            $('.closet').append(box4)
            on5 = true
        } else {
            $('.temp5').empty()
            on5 = false
        }
    })
})
$(document).ready(function() {

    $('#h6b').on('click', function() {

        if (on6 == false) {
            box4.empty()
            var $div = $('<div>')
            $div.addClass('temp6')
            var car = $('<img>')
            car.attr('src', './image/衣服短黑.png')
            car.addClass('move4')
            $div.append(car)
            box4.append($div)
            $('.closet').append(box4)
            on6 = true
        } else {
            $('.temp6').empty()
            on6 = false
        }
    })
})
$(document).ready(function() {

    $('#h14b').on('click', function() {

        if (on14 == false) {
            box4.empty()
            var $div = $('<div>')
            $div.addClass('temp14')
            var car = $('<img>')
            car.attr('src', './image/衣服中紅.png')
            car.addClass('move4')
            $div.append(car)
            box4.append($div)
            $('.closet').append(box4)
            on14 = true
        } else {
            $('.temp14').empty()
            on14 = false
        }
    })
})
$(document).ready(function() {

    $('#h7b').on('click', function() {

        if (on7 == false) {
            box3.empty()
            var $div = $('<div>')
            $div.addClass('temp7')
            var car = $('<img>')
            car.attr('src', './image/裙子長麻.png')
            car.addClass('move3')
            $div.append(car)
            box3.append($div)
            $('.closet').append(box3)
            on7 = true
        } else {
            $('.temp7').empty()
            on7 = false
        }
    })
})
$(document).ready(function() {

    $('#h8b').on('click', function() {

        if (on8 == false) {
            box3.empty()
            var $div = $('<div>')
            $div.addClass('temp8')
            var car = $('<img>')
            car.attr('src', './image/裙子窄藍.png')
            car.addClass('move3')
            $div.append(car)
            box3.append($div)
            $('.closet').append(box3)
            on8 = true
        } else {
            $('.temp8').empty()
            on8 = false
        }
    })
})
$(document).ready(function() {

    $('#h15b').on('click', function() {

        if (on15 == false) {
            box3.empty()
            var $div = $('<div>')
            $div.addClass('temp15')
            var car = $('<img>')
            car.attr('src', './image/褲子長黑.png')
            car.addClass('move3')
            $div.append(car)
            box3.append($div)
            $('.closet').append(box3)
            on15 = true
        } else {
            $('.temp15').empty()
            on15 = false
        }
    })
})
$(document).ready(function() {

    $('#h9b').on('click', function() {

        if (on9 == false) {
            box2.empty()
            var $div = $('<div>')
            $div.addClass('temp9')
            var car = $('<img>')
            car.attr('src', './image/鞋子靴黑.png')
            car.addClass('move2')
            $div.append(car)
            box2.append($div)
            $('.closet').append(box2)
            on9 = true
        } else {
            $('.temp9').empty()
            on9 = false
        }
    })
})
$(document).ready(function() {

    $('#h10b').on('click', function() {

        if (on10 == false) {
            box2.empty()
            var $div = $('<div>')
            $div.addClass('temp10')
            var car = $('<img>')
            car.attr('src', './image/鞋子包白.png')
            car.addClass('move2')
            $div.append(car)
            box2.append($div)
            $('.closet').append(box2)
            on10 = true
        } else {
            $('.temp10').empty()
            on10 = false
        }
    })
})
$(document).ready(function() {

        $('#h16b').on('click', function() {

            if (on16 == false) {
                box2.empty()
                var $div = $('<div>')
                $div.addClass('temp16')
                var car = $('<img>')
                car.attr('src', './image/鞋子球紅.png')
                car.addClass('move2')
                $div.append(car)
                box2.append($div)
                $('.closet').append(box2)
                on16 = true
            } else {
                $('.temp16').empty()
                on16 = false
            }
        })
    })
    // $(document).ready(function() {

//     $('#h11b').on('click', function() {

//         if (on11 == false) {
//             box1.empty()
//             var $div = $('<div>')
//             $div.addClass('temp11')
//             var car = $('<img>')
//             car.attr('src', './image/底圖可愛.png')
//             car.addClass('move1')
//             $div.append(car)
//             box1.append($div)
//             $('.closet').append(box1)
//             on11 = true
//         } else {
//             $('.temp11').empty()
//             on11 = false
//         }
//     })
// })
// $(document).ready(function() {

//     $('#h12b').on('click', function() {

//         if (on12 == false) {
//             box1.empty()
//             var $div = $('<div>')
//             $div.addClass('temp12')
//             var car = $('<img>')
//             car.attr('src', './image/底圖自然.png')
//             car.addClass('move1')
//             $div.append(car)
//             box1.append($div)
//             $('.closet').append(box1)
//             on12 = true
//         } else {
//             $('.temp12').empty()
//             on12 = false
//         }
//     })
// })
// $(document).ready(function() {

//     $('#h13b').on('click', function() {

//         if (on13 == false) {
//             box1.empty()
//             var $div = $('<div>')
//             $div.addClass('temp13')
//             var car = $('<img>')
//             car.attr('src', './image/底圖演唱.png')
//             car.addClass('move1')
//             $div.append(car)
//             box1.append($div)
//             $('.closet').append(box1)
//             on13 = true
//         } else {
//             $('.temp13').empty()
//             on13 = false
//         }
//     })
// })