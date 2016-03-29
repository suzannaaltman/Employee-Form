$(function(){
  // var fName = "";
  // var lName = "";
  // var title = "";
  // var salary = 0;
  // var reviewScore = 0;

  $("button").on("click", function(event) {
    event.preventDefault();
    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var title = $("#titleSelect").val();
    var salary = $("#salaryList").val();
    var reviewScore = $("#reviewScore").val();
    var newEmp = new Employee(fName, lName, title, salary, reviewScore);
    var buttonHTML = "<button id=removeButton>Remove</button>";
    $("#employeePrintout").append("<div id=\"niceDisplay\"><p>" + newEmp + "</p><br><p>" + buttonHTML + "</p></div>");
    ratingColor(newEmp.reviewScore);
  });


  function ratingColor(reviewScore){
    switch (reviewScore) {
      case 1:
        $("#employeePrintout").lastChild().addClass("rating1");
        break;
      case 2:
      $("#employeePrintout").lastChild().addClass("rating2");
        break;
      case 3:
      $("#employeePrintout").lastChild().addClass("rating3");
        break;
      case 4:
      $("#employeePrintout").lastChild().addClass("rating4");
        break;
      case 5:
      $("#employeePrintout").lastChild().addClass("rating5");
        break;
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