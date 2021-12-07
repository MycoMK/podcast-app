// check off specific to do lists bt clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on span to delete x

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.StopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabing new todo text from input
        val = todoText = $(this).val();
        $(this).val("");
        // creating new li to add to ul
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
    }
})

$(".fa-podcast").click(function(){
    $(input[type='text']).fadeToggle();
});