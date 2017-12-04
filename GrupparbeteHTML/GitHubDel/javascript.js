console.log("Here is jQuery, hopefully: ", $);

$(document).ready(function () {
    var info = false;

    $('.moreInfo').on('click', function () {
        $(this).closest('.productPictureSize').find('ul').slideToggle();

        if ($(this).hasClass('.seperate')) {
            $(this).text('Mer info');
        }
        else {
            $(this).text('Mini');
        }
        $(this).toggleClass('.seperate');
    });
});
















///////////////////////////////SEVERAL PAGES///////////////////////////////////////
var gameState;

if (!gameState) {
    // no state was saved or loading failed, start from beginning
    gameState = {
        currentPage: 'beginning'
    };
}

function drawPage() {
    var page = pages[gameState.currentPage];
    $("#page h2").text(page.title);
    $("#page img").attr("src", page.imgUrl);
    $("#bread").html(page.bread);
    $("#page ul").empty(); //Remove all child nodes of the set of matched elements from the DOM.
    page.options.forEach(function (link, n) { //The forEach() method calls a provided function once for each element in an array, in order.
        var linkElem = $("<li></li>")
            .text(link.text)
            // ".attr" Get sthe value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element
            .attr("data-optNbr", n); // store link index for use in click handler
        $("#page ul").append(linkElem); //".append" Insert content, specified by the parameter, to the end of each element in the set of matched elements.
    });
}

// Event delegation, catch clicks on all future `li` inside `#page ul`
$("#page ul").on("click", "li", function (e) {
    var optNbr = $(e.target).attr("data-optNbr"); // option index, was stored in drawPage
    var page = pages[gameState.currentPage];
    var optionData = page.options[optNbr];
    var target = optionData.to;
    gameState.currentPage = target;

    drawPage();
});

drawPage();

///////////////////////////////SEVERAL PAGES///////////////////////////////////////












