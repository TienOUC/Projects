$("#login").click(function() {
    $(".switch span").removeClass("active");
    $(this).addClass("active");

    $(this)
      .parents(".content")
      .removeClass("signup");
    $(this)
      .parents(".content")
      .addClass("login");

    $("form button").text("LOGIN");
  });

  $("#signup").click(function() {
    $(".switch span").removeClass("active");
    $(this).addClass("active");

    $(this)
      .parents(".content")
      .removeClass("login");
    $(this)
      .parents(".content")
      .addClass("signup");

    $("form button").text("SIGNUP");
  });

  $(".input input").on("focus", function() {
    $(this)
      .parent()
      .addClass("focus");
  });

  $(".input input").on("blur", function() {
    if ($(this).val() === "")
      $(this)
        .parent()
        .removeClass("focus");
  });