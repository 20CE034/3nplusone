var run = document.getElementById("run");

run.addEventListener("click", function (e) {
  e.preventDefault();

  var stdin = document.getElementById("stdin");
  var output = document.getElementById("output");

  output.innerHTML = "Loading...";

  console.log(stdin.value);
  
  var n = parseInt(stdin.value);
  var cc = 0;
  var sequence = '';

  while (n !== 1 && cc < 100) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    sequence += n + '<br>';
    cc++;
  }

  sequence += "<br>Levels: " + cc;
  output.innerHTML = sequence;

  // No need for the credit calculation part as it's not relevant here.
});


//16
google.charts.load("current", { packages: ["corechart", "line"] });
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
  var data = new google.visualization.DataTable();
  data.addColumn("number", "X");
  data.addColumn("number", "N value");

  data.addRows([
    [0, 0],
    [1, 1],
    [2, 2],
    [4, 3],
    [8, 4],
    [16, 5],
  ]);

  var options = {
    hAxis: {
      title: "N",
    },
    vAxis: {
      title: "Y",
    },
    backgroundColor: "white",
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}

//19
google.charts.load("current", { packages: ["corechart", "line"] });
google.charts.setOnLoadCallback(drawBackgroundColor1);

function drawBackgroundColor1() {
  var data = new google.visualization.DataTable();
  data.addColumn("number", "X");
  data.addColumn("number", "N value");

  data.addRows([
    [0, 0],
    [1, 1],
    [2, 2],
    [4, 3],
    [8, 4],
    [16, 5],
    [5, 6],
    [10, 7],
    [20, 8],
    [40, 9],
    [13, 10],
    [26, 11],
    [52, 12],
    [17, 13],
    [34, 14],
    [11, 15],
    [22, 16],
    [44, 17],
    [88, 18],
    [29, 19],
    [58, 20],
    [19, 21],
  ]);

  var options = {
    hAxis: {
      title: "N",
    },
    vAxis: {
      title: "Y",
    },
    backgroundColor: "white",
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div1")
  );
  chart.draw(data, options);
}

(function () {
  var cors_api_host = "cors-anywhere.herokuapp.com";
  var cors_api_url = "https://" + cors_api_host + "/";
  var slice = [].slice;
  var origin = window.location.protocol + "//" + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    var args = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    if (
      targetOrigin &&
      targetOrigin[0].toLowerCase() !== origin &&
      targetOrigin[1] !== cors_api_host
    ) {
      args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
  };
})();
