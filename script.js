var run = document.getElementById("run");

run.addEventListener("click", function (e) {
  
  e.preventDefault();
  
  var stdin = document.getElementById("stdin");
  var form = document.getElementById("form");
  var credits = document.getElementById("credits");
  var output = document.getElementById("output");

  output.innerHTML = "Loading...";
  
  console.log(stdin.value);
  
  var obj1 = {};
  obj1["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
  obj1["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
  obj1["script"] = "import java.util.*;\r\n\r\npublic class calc{\r\n    \r\n    void logic_stuff(){\r\n        int i=0;\r\n        int cc=0;\r\n        Scanner sc=new Scanner(System.in);\r\n        long n;\r\n        n=sc.nextInt();  \r\n        \r\n        for(i=0;i<100;i++){\r\n            \r\n        if(n!=1){\r\n        if(n%2==0){\r\n            n=n/2;\r\n            cc++;\r\n        }\r\n        else{\r\n            n=(3*n)+1;\r\n            cc++;\r\n        }\r\n        System.out.println(n);\r\n        }\r\n        }\r\n        System.out.println(\"\\nlevels : \"+ cc);\r\n    }\r\n    public static void main(String []args){\r\n        calc o=new calc();\r\n        o.logic_stuff();\r\n    }\r\n}\r\n\r\n\r\n";
  obj1["language"] = "java";
  obj1["versionIndex"] = "0";
  obj1["stdin"] = stdin.value;
  var jsonStr = JSON.stringify(obj1);
  
  console.log(jsonStr);
  
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://api.jdoodle.com/v1/execute";
  fetch(proxyurl + url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    var outputStr = data.output;
    console.log(outputStr);
    var formattedOutput = outputStr.replace(/(?:\r\n|\r|\n)/g, '<br>');
    output.innerHTML = formattedOutput;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  
  const creditsUrl = "https://api.jdoodle.com/v1/credit-spent";
  fetch(proxyurl + creditsUrl, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    var creditsLeft = 200 - data.used;
    console.log(credits);
    console.log("Credits left = "+creditsLeft);
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

});

 
//16
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'N value');

      data.addRows([
        [0,0],[1,1],[2,2],[4,3],[8,4],[16,5]
      ]);


      var options = {
        hAxis: {
          title: 'N'
        },
        vAxis: {
          title: 'Y'
        },
        backgroundColor: 'white'
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }


//19
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor1);

function drawBackgroundColor1() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'N value');

      data.addRows([
        [0,0],
        [1,1],
        [2,2],
        [4,3],
        [8,4],
        [16,5],
        [5,6],
        [10,7],
        [20,8],
        [40,9],
        [13,10],
        [26,11],
        [52,12],
        [17,13],
        [34,14],
        [11,15],
        [22,16],
        [44,17],
        [88,18],
        [29,19],
        [58,20],
        [19,21]
      ]);


      var options = {
        hAxis: {
          title: 'N'
        },
        vAxis: {
          title: 'Y'
        },
        backgroundColor: 'white'
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));
      chart.draw(data, options);
    }
  
    (function() {
      var cors_api_host = 'cors-anywhere.herokuapp.com';
      var cors_api_url = 'https://' + cors_api_host + '/';
      var slice = [].slice;
      var origin = window.location.protocol + '//' + window.location.host;
      var open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function() {
          var args = slice.call(arguments);
          var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
          if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
              targetOrigin[1] !== cors_api_host) {
              args[1] = cors_api_url + args[1];
          }
          return open.apply(this, args);
      };
  })();