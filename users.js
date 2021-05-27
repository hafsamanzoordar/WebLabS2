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
                $('#t_body').append("<tr ><td>"+temp.name+"</td><td>"+temp.email+"</td><td><a href='./user_album.html?id="+temp.id+"'><button data-id="+temp.id+" class='btn btn-primary albums'>Albums</button></a></td><td><button class='btn btn-primary update' >Update</button></td></tr>");
            });
            $('.update').click(function(){
                tr = $(this).parent().parent().children();
                {
                    var person = prompt("Enter New Email",tr[1].innerText);
                    if(person == null || person == '')
                    {
                        alert('Cannot enter empty value');
                    }else if (person != null) {
                        if(person.search('@')>=0 && person.search('.')>=0)
                            {
                                tr[1].innerText = person;
                            }else
                                {
                                    alert('Entered Text is Not Email');   
                                }
                    }
                }
            });
        } 
    });   
}
