
// Manipulating styles Portion

// $(document).ready(function() { 
//     $("h1").css('color', 'red'); // as long as script tags at bottom before </body> I dont need to worry about this
// })

$("h1").css('color', 'red'); // select the H1, select its css color and change it to red

$("button") // selects all 5 buttons on screen, slect 1 and select all work the same way

$('h1').css('font-size', '2.5em') // Change the h1 font size to 1.2 em

$('h1').css('color', 'black') // change the H1 back to black

// May be better to keep styles and JS sepearate, so maybe I'll add css like this... 

$('h1').addClass('big-title') 
// can remove class with removeClass
$('h1').removeClass('big-title')
// to add multiple classes keep them all inside the same qoutes but seperated by a space
$('h1').addClass('big-title padding-30')
// To check if an element has a certain class
$('h1').hasClass('big-title') // returns true if the element has a matching class, false if nothing





// Manipulating text portion 


$('h1').text('A little jQuery Practice (:') // Change text content of my h1

$('button').text('Im a button') // Can change text on ALL selected elements

$('div').html('<li><ul>I put these</ul><ul>list items in</ul><ul>With jQuery</ul></li>') // innerHTML method 






//Manipulating attributes Portion

$('img').attr('src') // this just get you a particular attribute attached to the img 
// To actually change an attribute....
$('a').attr('href','https://www.yahoo.com') // originally Google, switched to yahoo

// a CSS class is also an attribute, so when an item has a class you can change it
$('h2').attr('class','classTwo')



// adding event listeners portion 

// click event, then I change the css to add a border, than I take it away after 2 seconds
$('h3').click(() => {
    $('h3').css('border', '5px solid black')

    setTimeout(() => {
        $('h3').css('border', 'none')
    }, 2000)
})

// click event put on all buttons, in vanilla I would need to querySelectorAll then loop over the buttons to add event to each
$('button').click(() => {
    alert('Thanks for clicking, now go home')
})


// keydown event 

$('input').keydown((e) => { // logs whatever key event is typed in our input
    console.log(e.key)
})


$(document).keydown((e) => {
    $('h4').css('font-size','5em') // keydown event on the document
    $('h4').text(e.key)
})


// simpler way to do ALL event listeners in jQuery 
$('p').on('click', (e) => {
    alert('ya clicked the paragraph')
})







// Add and remove new elements portions 

$('p').before('<button>button before</button>') // adds html before an element, .after will add it after the element

// .prepend & .append will add the code inside your selected element at the beggining or end depending on which you used

// if you use .remove it gets rid of all selected elements





// Jquery animations 


$('h5').on('click', () => { // you can also add .toggle  to something like button to switch the H5 on and off
    $('h5').hide()
    setTimeout(() => {
        $('h5').show()
    },2000)
})


$('h6').css('font-size','30px')// just to make h6 bigger 

// fadeOut fadeIn fadeToggle
$('h6').on('click', () => {
    $('h6').fadeOut()
})

// aslo has slideUP, slideDown, and slideToggle


$('#btn').on('click', () => {
    $('h1').animate({margin: '20px'})
})

// can chain them together
.slideUp().slideDown().animate({padding: '20px'})






















