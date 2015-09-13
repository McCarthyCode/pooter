/*global alert */
/*global $ */

$(document).ready(function () {
  "use strict";

  var Server, temp, servers, i, j;
  
  Server = function () {
    this.IP = "65.79.132.130";
    this.status = "Running";
  };

  Server.prototype.name = function (name) {
    this.name = name;
  };

  Server.prototype.srv = function (srv) {
    this.srv = srv;
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
    return "http://" + this.IP + ":100/mc/" + this.id + "/index.html";
  };

  Server.prototype.append = function () {
    $("div#server-list").append(
      $("<h3>").text(this.name),
      $("<table>").attr("class", "table table-striped table-bordered").attr("id", this.id).append(
        $("<tr>").append(
          $("<td>").text("IP"),
          $("<td>").text(this.srv + ".mattmc318.tk")
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
    ["Mushroom Kingdom", "mc1", 0, "server1"],
    ["Survival", "mc2", 0, "server2"],
    ["Creative", "mc3", 1, "server3"],
    ["Asshole Town", "mc4", 1, "server4"],
    ["Ocarina of Time", "mc5", 1, "server5"],
    ["Twilight Forest Mod", "mc6", 0, "server6"]
  ];
  
  for (i = 0; i < servers.length; i += 1) {
    temp = new Server();
    temp.name(servers[i][0]);
    temp.srv(servers[i][1]);
    temp.mode(servers[i][2]);
    temp.id(servers[i][3]);
    temp.append();
  }
});
