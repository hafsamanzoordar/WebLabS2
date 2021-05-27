$(document).ready(function () {
    show_albums(); 
});
function show_albums (){
     $.ajax({
        meyhod : 'GET',
        url: "https://jsonplaceholder.typicode.com/albums",
        success: function (response) {
            response.forEach(function(temp) {
                $('#t_body').append("<tr ><td>"+temp.id+"</td><td>"+temp.title+"</td><td><button data-id = "+temp.id+" class='btn btn-primary update' >Update</button></td></tr>");
            });
            $('.update').click(function (e) {
                
                
            });
        }
    });
}
