$('#add_user').submit(function(event)
{
    alert('data inserted');
})

$('#update_user').submit(function(event)
{
    event.preventDefault();
    var Array=$(this).serializeArray();
    var data={}
    $.map(Array,function(n,i)
    {
        data[n['name']]=n['value']

    })
    console.log(Array);

    var request={
        'url': `http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response)
    {
        alert("data updated")
    })
})


if(window.location.pathname=='/')
{
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function()
    {
        var id=$(this).attr("data-id")
        var request={
            'url': `http://localhost:3000/api/users/${data.id}`,
            "method":"DELETE"
          
        }


        if(confirm('Do you really wanted to delete'))
        {
            
            $.ajax(request).done(function(response)
            {
                alert("data deleted")
            })
        }
    })
}