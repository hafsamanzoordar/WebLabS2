$(document).ready(function () {
    display_users();
});
function display_users(){
    $.ajax({
        meyhod : 'GET',
        url: "https://jsonplaceholder.typicode.com/users",
        success: function (response) 
        {
            response.forEach(function(temp) 
            {
                // console.log(temp.name);
                $('#t_body').append("<tr ><td>"+temp.name+"</td><td>"+temp.email+"</td><td><a  href='./albums/"+temp.id+"'><button  class='btn btn-primary albums'>Albums</button></a></td><td><button class='btn btn-primary update' >Update</button></td></tr>");
            });
        }
    });
}