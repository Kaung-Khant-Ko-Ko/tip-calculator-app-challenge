$(".error").slideUp(0);

let invalid_input = [".", "e", "+", "-"];
let total = 0;
let tip_perct = 0;
let tip = 0;
let tip_per_person = 0;

$("#bill").keydown(function (event) {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "e" ||
    event.key === "+" ||
    event.key === "-"
  ) {
    event.preventDefault();
  }
  $(".error").slideUp();

  if (
    this.value.length > 0 &&
    this.value.slice(0, 1) === "0" &&
    this.value.slice(1, 2) !== "."
  ) {
    this.value = this.value.slice(1);
  }

  if (this.value.slice(0, 1) === ".") {
    this.value = "0" + this.value;
  }

  setTimeout(() => {
    if (
      this.value !== "" &&
      ($("#num_people").val() === "0" || $("#num_people").val() === "")
    ) {
      $(".error").slideDown();
    } else {
      $(".error").slideUp();
    }

    if (
      this.value !== "" &&
      $("#num_people").val() !== "0" &&
      $("#num_people").val() !== "" &&
      tip_perct !== 0
    ) {
      tip = Number(this.value) * tip_perct * 0.01;
      tip_per_person = tip / Number($("#num_people").val());
      total = (Number(this.value) + tip) / Number($("#num_people").val());

      $("#tip").text("$" + tip_per_person.toFixed(2));
      $("#total").text("$" + total.toFixed(2));
    }
  }, 400);
});

$(".tip__percentage").click(function () {
  $(".tip__percentage").css("background-color", "hsl(183, 100%, 15%)");
  $(".tip__percentage").css("color", "hsl(0, 0%, 100%)");
  $("#perc_cust").val("");
  $(this).css("background-color", "hsl(172, 67%, 45%)");
  $(this).css("color", "hsl(183, 100%, 15%)");

  tip_perct = Number(this.value.slice(0, -1));

  if (
    $("#bill").val() !== "" &&
    $("#num_people").val() !== "0" &&
    $("#num_people").val() !== "" &&
    tip_perct !== 0
  ) {
    tip = Number($("#bill").val()) * tip_perct * 0.01;
    tip_per_person = tip / Number($("#num_people").val());
    total = (Number($("#bill").val()) + tip) / Number($("#num_people").val());

    $("#tip").text("$" + tip_per_person.toFixed(2));
    $("#total").text("$" + total.toFixed(2));
  }
});

$("#perc_cust").click(function () {
  $(".tip__percentage").css("background-color", "hsl(183, 100%, 15%)");
  $(".tip__percentage").css("color", "hsl(0, 0%, 100%)");
});

$("#perc_cust").keydown(function (event) {
  if (
    event.key === "e" ||
    event.key === "+" ||
    event.key === "-" ||
    (event.key === "ArrowDown" && (this.value === "" || Number(this.value) < 1))
  ) {
    event.preventDefault();
  }

  if (
    this.value.length > 0 &&
    this.value.slice(0, 1) === "0" &&
    this.value.slice(1, 2) !== "."
  ) {
    this.value = this.value.slice(1);
  }

  if (this.value.slice(0, 1) === ".") {
    this.value = "0" + this.value;
  }

  setTimeout(() => {
    if (this.value !== "") {
      tip_perct = Number(this.value);
    }
    if (
      $("#bill").val() !== "" &&
      $("#num_people").val() !== "0" &&
      $("#num_people").val() !== "" &&
      tip_perct !== 0
    ) {
      tip = Number($("#bill").val()) * tip_perct * 0.01;
      tip_per_person = tip / Number($("#num_people").val());
      total = (Number($("#bill").val()) + tip) / Number($("#num_people").val());

      $("#tip").text("$" + tip_per_person.toFixed(2));
      $("#total").text("$" + total.toFixed(2));
    }
  }, 400);
});

$("#num_people").keydown(function (event) {
  if (
    invalid_input.includes(event.key) ||
    (event.key === "ArrowDown" && (this.value === "" || Number(this.value) < 1))
  ) {
    event.preventDefault();
    $(".error").slideUp();
    setTimeout(() => {
      $(".error").slideDown();
    }, 400);
  }

  setTimeout(() => {
    if ((this.value === "0" || this.value === "") && $("#bill").val() !== "") {
      $(".error").slideDown();
    } else {
      $(".error").slideUp();
    }

    if (
      this.value !== "0" &&
      this.value !== "" &&
      $("#bill").val() !== "" &&
      tip_perct !== 0
    ) {
      tip = Number($("#bill").val()) * tip_perct * 0.01;
      tip_per_person = tip / Number(this.value);
      total = (Number($("#bill").val()) + tip) / Number(this.value);

      $("#tip").text("$" + tip_per_person.toFixed(2));
      $("#total").text("$" + total.toFixed(2));
    }
  }, 400);
});

$("#reset").click(function () {
  total = 0;
  tip_perct = 0;
  tip = 0;
  tip_per_person = 0;

  $(".tip__percentage").css("background-color", "hsl(183, 100%, 15%)");
  $(".tip__percentage").css("color", "hsl(0, 0%, 100%)");
  $("#perc_cust").val("");

  $("#tip").text("$0.00");
  $("#total").text("$0.00");
});
