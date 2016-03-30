$(function(){
  // var fName = "";
  // var lName = "";
  // var title = "";
  // var salary = 0;
  // var reviewScore = 0;


  $(document).on("click", ".removeButton", function(){
    $(this).parent().parent().remove();
  });


  $(document).on("click", ".sendIt", function(event) {
    event.preventDefault();
    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var title = $("#titleSelect").val();
    var salary = $("#salaryList").val();
    var reviewScore = parseInt($("#reviewScore").val());
    var newEmp = new Employee(fName, lName, title, salary, reviewScore);
    var buttonHTML = "<button class=\"removeButton\">Remove</button>";
    $("#employeePrintout").append("<div id=\"niceDisplay\"><p>" + newEmp + "</p><br><p>" + buttonHTML + "</p></div>");
    ratingColor(newEmp.reviewScore);
  });

  function ratingColor(reviewScore){
    switch (reviewScore) {
      case 1:
        $("#employeePrintout").children().last().addClass("rating1");
        break;
      case 2:
      $("#employeePrintout").children().last().addClass("rating2");
        break;
      case 3:
      $("#employeePrintout").children().last().addClass("rating3");
        break;
      case 4:
      $("#employeePrintout").children().last().addClass("rating4");
        break;
      case 5:
      $("#employeePrintout").children().last().addClass("rating5");
        break;
      default:
        console.log("not working ... but running");
    }
  }

  var empNum = 1000;
  var employeeList = [];
  function Employee(fname, lname, title, sal, score) {

    this.firstName = fname;
    this.lastName = lname;
    this.employeeNumber = empNum;
    this.jobTitle = title;
    this.reviewScore = score;
    this.salary = sal;

    empNum ++;
    // firstNames.push(fName);
    // lastNames.push(lName);

    employeeList.push(this);
    this.toString = function() {
      return this.firstName + " " + this.lastName + "<br> Employee number: " + this.employeeNumber + "<br>" + this.jobTitle + "<br> Salary: " + this.salary + "<br>Last review score : " + this.reviewScore;
    }


  }


  });
