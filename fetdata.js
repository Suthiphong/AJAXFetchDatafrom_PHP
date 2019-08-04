$(document).ready(function(){
    $.ajax({
        url:"/projectDATA/Backend/API/echoJSON.php",
        data: JSON,
        success:function(response){
            var data = JSON.parse(response)
            
            console.log(data)

            $('#content').html(`
            <table>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                </tr>
                ${data.map((item, key) => (
                    `
                     <tr style="text-align: left">
                        <th>${item.id}</th>
                        <th>${item.first_name}</th>
                        <th>${item.last_name}</th>
                        <th>${item.email}</th>
                    </tr>
                    `
                ))}
            
            </table>
            
            `)
        }
    })
})