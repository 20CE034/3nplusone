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