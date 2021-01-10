function myfun() {
  var myDate = document.getElementById("dateInput");
  var dateValue = myDate.value.slice(5);
  var days = dateValue.slice(3);
  var month = dateValue.slice(0, 2);
  var loader = document.getElementById("loader");
  var sign = document.getElementById("sign");
  var image = document.getElementById("signImage");
  var desc = document.getElementById("description");
  var headline = document.getElementById("headline");
  if ((month == 03 && days >= 21) || (month == 04 && days <= 19)) {
    loader.style.display = "block";
    function show() {
      console.log("mycheck" + sign);
      loader.style.display = "none";
      sign.innerHTML = zodiacs.aries.name;
      image.innerHTML = zodiacs.aries.img;
      desc.innerHTML = zodiacs.aries.desc;
      headline.innerHTML = zodiacs.aries.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 04 && days >= 20) || (month == 05 && days <= 20)) {
    loader.style.display = "block";
    function show() {
      loader.style.display = "none";
      sign.innerHTML = zodiacs.taurus.name;
      image.innerHTML = zodiacs.taurus.img;
      desc.innerHTML = zodiacs.taurus.desc;
      headline.innerHTML = zodiacs.taurus.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 05 && days >= 21) || (month == 06 && days <= 20)) {
    loader.style.display = "block";
    function show() {
      loader.style.display = "none";
      sign.innerHTML = zodiacs.gemini.name;
      image.innerHTML = zodiacs.gemini.img;
      desc.innerHTML = zodiacs.gemini.desc;
      headline.innerHTML = zodiacs.gemini.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 06 && days >= 21) || (month == 07 && days <= 22)) {
    loader.style.display = "block";
    function show() {
      loader.style.display = "none";
      sign.innerHTML = zodiacs.cancer.name;
      image.innerHTML = zodiacs.cancer.img;
      desc.innerHTML = zodiacs.cancer.desc;
      headline.innerHTML = zodiacs.cancer.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 07 && days >= 23) || (month == 08 && days <= 22)) {
    loader.style.display = "block";
    function show() {
      loader.style.display = "none";
      sign.innerHTML = zodiacs.leo.name;
      image.innerHTML = zodiacs.leo.img;
      desc.innerHTML = zodiacs.leo.desc;
      headline.innerHTML = zodiacs.leo.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 08 && days >= 23) || (month == 09 && days <= 22)) {
    loader.style.display = "block";
    function show() {
      loader.style.display = "none";
      sign.innerHTML = zodiacs.virgo.name;
      image.innerHTML = zodiacs.virgo.img;
      desc.innerHTML = zodiacs.virgo.desc;
      headline.innerHTML = zodiacs.virgo.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 09 && days >= 23) || (month == 10 && days <= 22)) {
    loader.style.display = "block";
    function show() {
      document.getElementById("loader").style.display = "none";
      sign.innerHTML = zodiacs.libra.name;
      image.innerHTML = zodiacs.libra.img;
      desc.innerHTML = zodiacs.libra.desc;
      headline.innerHTML = zodiacs.libra.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 10 && days >= 23) || (month == 11 && days <= 21)) {
    loader.style.display = "block";
    function show() {
      document.getElementById("loader").style.display = "none";
      sign.innerHTML = zodiacs.scorpio.name;
      image.innerHTML = zodiacs.scorpio.img;
      desc.innerHTML = zodiacs.scorpio.desc;
      headline.innerHTML = zodiacs.scorpio.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 11 && days >= 22) || (month == 12 && days <= 21)) {
    loader.style.display = "block";
    function show() {
      loader.style.display = "none";
      sign.innerHTML = zodiacs.sagittaurus.name;
      image.innerHTML = zodiacs.sagittaurus.img;
      desc.innerHTML = zodiacs.sagittaurus.desc;
      headline.innerHTML = zodiacs.sagittaurus.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 12 && days >= 22) || (month == 01 && days <= 19)) {
    loader.style.display = "block";
    function show() {
      loader.style.display = "none";
      sign.innerHTML = zodiacs.capricorn.name;
      image.innerHTML = zodiacs.capricorn.img;
      desc.innerHTML = zodiacs.capricorn.desc;
      headline.innerHTML = zodiacs.capricorn.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 01 && days >= 20) || (month == 02 && days <= 18)) {
    loader.style.display = "block";
    function show() {
      loader.style.display = "none";
      sign.innerHTML = zodiacs.aquarius.name;
      image.innerHTML = zodiacs.aquarius.img;
      desc.innerHTML = zodiacs.aquarius.desc;
      headline.innerHTML = zodiacs.aquarius.headline;
    }
    setTimeout(show, 2000);
  } else if ((month == 02 && days >= 19) || (month == 03 && days <= 20)) {
    loader.style.display = "block";
    function show() {
      loader.style.display = "none";
      sign.innerHTML = zodiacs.pisces.name;
      image.innerHTML = zodiacs.pisces.img;
      desc.innerHTML = zodiacs.pisces.desc;
      headline.innerHTML = zodiacs.pisces.headline;
    }
    setTimeout(show, 2000);
  }
}
