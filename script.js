let addButton = $("button");
let templateTaskContainer = $("#taskContainerTemplate");
$(function(){
    addButton.click(function (addEvent) { 
        newTask = templateTaskContainer.clone();
        newTask.removeClass("hidden");
        newTask.children('.task').text($("#taskInput").val());
        $("#taskInput").val('');
        newTask.children('.btnDone').click(function(doneEvent){
            $(this).parent().toggleClass("TaskDone");
        });
        newTask.children('.btnDelete').click(function(deleteEvent){
            $(this).parent().remove();
        });

        $(".tasksBox").append(newTask);
    });
});
