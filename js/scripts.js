var p = 0;

function Board(p, cell) {
  this.blank = true;
  this.cell = cell;
  this.p = p;
}


Board.prototype.mark = function() {
  if (this.blank == true) {
    if (this.p == 0) {
      $("#" + this.cell).text("X");
      p++;
      if (p > 1) {
        p = 0;
      }
    } else if (this.p == 1) {
      $("#" + this.cell).text("O");
      p++;
      if (p > 1) {
        p = 0;
      }
    }
  } else {
    alert("You can't go there!")
  }
}

$(document).ready(function() {



$("#form").children("button").each(function() {

  $(this).click(function(event){
    event.preventDefault();
    var cell = $(this).attr("id");
    var click = new Board(p, cell);
    click.mark();



  })
});


});
