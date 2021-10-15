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
  obj1["script"] = "import java.util.*;\r\n\r\npublic class calc{\r\n    \r\n    void logic_stuff(){\r\n        int i=0;\r\n        Scanner sc=new Scanner(System.in);\r\n        int n;\r\n        n=sc.nextInt();  \r\n        for(i=0;i<100;i++){\r\n        if(n!=1){\r\n        if(n%2==0){\r\n            n=n/2;\r\n        }\r\n        else{\r\n            n=(3*n)+1;\r\n        }\r\n        System.out.println(\"\\n\"+n);\r\n        }\r\n        }\r\n     \r\n    }\r\n    public static void main(String []args){\r\n        calc o=new calc();\r\n        o.logic_stuff();\r\n    }\r\n}\r\n\r\n\r\n";
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