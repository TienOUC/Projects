$(
    $(".turn i").click(() => {
      $(".back").toggleClass("back-turn");
      $(".front").toggleClass("front-turn");
    })
  );