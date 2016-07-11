var selectElement = document.getElementById("fileList");
var textAreaElement = document.getElementById("textId");
var saveBtn = document.getElementById("saveBtn");




function request(options, callback) {
  var req = new XMLHttpRequest();
  req.open(options.method || "GET", options.pathname, true);
  req.addEventListener("load", function() {
    if (req.status < 400)
      callback(null, req.responseText);
    else
      callback(new Error("Request failed: " + req.statusText));
  });
  req.addEventListener("error", function() {
    callback(new Error("Network error"));
  });
  req.send(options.body || null);
}

function loadFileList() {
  request({pathname: "/"}, function(error, fileList) {
    if (error) throw error;
    var fileListArray = fileList.split('\n');
    for (var i = 0; i < fileListArray.length; i++) {
      var option = document.createElement("option");
      option.value = fileListArray[i];
      option.text = fileListArray[i];
      selectElement.add(option);
    }
    loadCurrentFile();
  }, "GET");
}

function loadCurrentFile () {
  var curOption = selectElement.value;
  request(curOption, function(error, fileText) {
    if (error) throw error; 
    textAreaElement.value = fileText;
  }, "GET");  
}

function saveChanges() {
  request({pathname: filelist.value,
           method: "PUT",
           body: textarea.value}, function(error) {
    if (error) throw error;
  });
}