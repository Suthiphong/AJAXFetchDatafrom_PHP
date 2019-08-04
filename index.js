//ตัวอย่าง JSON  ที่รับมาจาก Database
//[{"Member_Num":"1","0":"1","Member_Name":"Suthphong","1":"Suthphong","Member_Email":"Suthiphong@mm.com","2":"Suthiphong@mm.com"},{"Member_Num":"2","0":"2","Member_Name":"AB","1":"AB","Member_Email":"AB@AB.com","2":"AB@AB.com"}]
$(document).ready (function() {
    $.ajax({
        url: "/projectDATA/Backend/API/fetchMember.php",
        success:function(response){
            //console.log(JSON.parse(response));
            let data = JSON.parse(response)
            console.log(data);
            $('#content').html(`<table>
            <tr>
                <td>ลำดับที่</td>
                <td>ชื่อ</td>
                <td>อีเมล์</td>
            </tr>

            ${data.map((item,key)=> (`
            <tr>
                <td key=${key}>${item.Member_Num}</td>
                <td>${item.Member_Name}</td>
                <td>${item.Member_Email}</td>
            
            </tr>

            `))}
            
            
            </table>`)



        }
    })
});
