 $(function () {
     $('.emptable').dataTable();
     var employees = getDataFromLocalStorage();
     showEmployee(employees);
     $("#addEmp").click(function () {
         var empno = $('#empno').val();
         var name = $('#name').val();
         var email = $('#email').val();
         var mobile = $('#mobile').val();
         var designation = $('#desig').val();
         var department = $('#branch').val();
         var qualifi = $('#qualifi').val();
         var salary = $('#salary').val();

         employee = {
             "empno": empno,
             "name": name,
             "email": email,
             "mobile": mobile,
             "designation": designation,
             "department": department,
             "qualifi": qualifi,
             "salary": salary,
         }
         var employees = addEmployee(employee);
         showEmployee(employees);
     });

     function showEmployee(employees) {
         var employee = getDataFromLocalStorage();
         var data = "";

         if (employee.length == 0)
             data = "<h2>No employees yet...</h2>";
         else {
             data += "<table class='empTable'><thead><tr>";
             data += "<th>#</th>";
             data += "<th> Empno</th>";
             data += "<th> Name</th>";
             data += "<th> Email</th>";
             data += "<th> Mobile</th>";
             data += "<th> Designation</th>";
             data += "<th> Department</th>";
             data += "<th> Qualification</th>";
             data += "<th> salary</th>";
             data += "</tr></thead>";

             for (var i = 0; i < employee.length; i++) {
                 var j = i + 1;
                 data += "<tbody><tr>";
                 data += "<td>" + j + "</td>";
                 data += "<td>" + employee[i].empno + "</td>";
                 data += "<td>" + employee[i].name + "</td>";
                 data += "<td>" + employee[i].email + "</td>";
                 data += "<td>" + employee[i].mobile + "</td>";
                 data += "<td>" + employee[i].designation + "</td>";
                 data += "<td>" + employee[i].department + "</td>";
                 data += "<td>" + employee[i].qualifi + "</td>";
                 data += "<td>" + employee[i].salary + "</td>";
                 data += "</tr>";
             }
             data += "</tbody></table>";
         }
         $(".content").html(data);
         $(".empTable").dataTable();
     }
 
 });
