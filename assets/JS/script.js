  // Instructs engine to load both HTML & CSS before running the JS
  $(document).ready(function () {

    // Create a variable and use query selector to display current date and time
    var displayTime = document.querySelector("#currentDay");
  
    // Use dayjs to display current date and time in given format
    var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
  
    displayTime.textContent = currentTime;
  
    // Set up a click listener for the saveBtn, capture the user input's row id, and store it in the local storage
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // Save text in local storage
      localStorage.setItem(time, text);
    });
  
    function hourTracker() {
      var currentHour = dayjs().hour();
    
      // Loop over time blocks
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
        // Check the time and add the classes for background indicators
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
    hourTracker();
  
  // Created a function to loop over time blocks to retrieve and display data from the individuals local storage
  function displayText() {
    $(".time-block").each(function () {
      var blockHour = $(this).attr("id");
      $(this).children(".description").val(localStorage.getItem(blockHour));
    });
  }
  displayText();
  });

  //Clear button function to clear the content on page and the local storage
   $("#clearFieldsBtn").click(function(event) {
      event.preventDefault;
      $("textArea").val("");
      localStorage.clear();
  });