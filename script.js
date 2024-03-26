// Get the "Run" button element
var runButton = document.getElementById("run");

// Add event listener for the "Run" button click
runButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the input element for the number
  var numberInput = document.getElementById("stdin");

  // Get the output element where the sequence will be displayed
  var outputElement = document.getElementById("output");

  // Display a loading message
  outputElement.innerHTML = "Loading...";

  // Parse the input number
  var inputNumber = parseInt(numberInput.value);

  // Generate the sequence based on the input number
  var sequence = generateSequence(inputNumber);

  // Display the sequence
  outputElement.innerHTML = sequence;

  // Draw the chart based on the generated sequence
  drawChart(sequence);
});

// Function to generate the sequence based on the Collatz conjecture
function generateSequence(inputNumber) {
  var sequence = "";
  var currentNumber = inputNumber;
  var stepCount = 0;

  // Generate the sequence until reaching 1 or the step limit
  while (currentNumber !== 1 && stepCount < 100) {
    if (currentNumber % 2 === 0) {
      currentNumber = currentNumber / 2;
    } else {
      currentNumber = 3 * currentNumber + 1;
    }
    sequence += currentNumber + "<br>";
    stepCount++;
  }

  // Add information about the step count to the sequence
  sequence += "<br>Step Count: " + stepCount;

  return sequence;
}

// Function to draw the chart based on the generated sequence
function drawChart(sequence) {
  // Load the Google Charts library
  google.charts.load("current", { packages: ["corechart", "line"] });

  // Callback function when Google Charts library is loaded
  google.charts.setOnLoadCallback(function () {
    // Create a DataTable to hold the chart data
    var data = new google.visualization.DataTable();
    data.addColumn("number", "Step");
    data.addColumn("number", "Value");

    // Extract numbers from the sequence
    var numbers = sequence.match(/\d+/g);

    // Populate the DataTable with the sequence data
    var rows = [];
    for (var i = 0; i < numbers.length; i++) {
      var step = i;
      var value = parseInt(numbers[i]);
      rows.push([step, value]);
    }
    data.addRows(rows);

    // Set options for the chart
    var options = {
      hAxis: {
        title: "Step",
        viewWindowMode: "explicit",
        viewWindow: {
          min: 0,
          max: rows.length-1, // Adjust maximum step value
        },
        height: 700, 
      },
      vAxis: {
        title: "Value",
        height: 700, 
      },
      backgroundColor: "white",
    };

    // Select the chart container element
    var chartContainer = document.getElementById("chart_div");

    // Create a new LineChart instance
    var chart = new google.visualization.LineChart(chartContainer);

    // Draw the chart with the provided data and options
    chart.draw(data, options);
  });
}
