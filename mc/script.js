/*global alert */
/*global $ */

$(document).ready(function () {
  "use strict";

  var Server, temp, servers, i, j;
  
  Server = function () {
    this.IP = "67.162.103.239";
//    this.port = "25565";
    this.status = "Running";
  };

  Server.prototype.name = function (name) {
    this.name = name;
  };

  Server.prototype.port = function (port) {
    this.port = port;
  };

  Server.prototype.mode = function (mode) {
    switch (mode) {
    case 0:
      this.mode = "Survival";
      break;
    case 1:
      this.mode = "Creative";
      break;
    }
  };

  Server.prototype.id = function (id) {
    this.id = id;
  };

  Server.prototype.overviewer = function () {
    return "http://" + this.IP + "/mc/" + this.id + "/index.html";
  };

  Server.prototype.append = function () {
    $("div#server-list").append(
      $("<h3>").text(this.name),
      $("<table>").attr("class", "table table-striped table-bordered").attr("id", this.id).append(
        $("<tr>").append(
          $("<td>").text("IP"),
          $("<td>").text(this.IP + ':' + this.port)
        ),
        $("<tr>").append(
          $("<td>").text("Status"),
          $("<td>").text(this.status)
        ),
        $("<tr>").append(
          $("<td>").text("Game Mode"),
          $("<td>").text(this.mode)
        ),
        $("<tr>").append(
          $("<td>").text("Overviewer"),
          $("<td>").append(
            $("<a>").attr("href", this.overviewer()).text("link")
          )
        )
      )
    );
  };
  
  servers = [
    ["Server 1", "25565", 0, "server1"],
    ["Server 2", "9999", 0, "server2"]
  ];
  
  for (i = 0; i < servers.length; i += 1) {
    temp = new Server();
    temp.name(servers[i][0]);
    temp.port(servers[i][1]);
    temp.mode(servers[i][2]);
    temp.id(servers[i][3]);
    temp.append();
  }
});
