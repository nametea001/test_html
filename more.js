function getParam() {
  const queryString = window.location.search;
  // console.log(queryString);
  const param = queryString.split("?id=");
  let ID = null;
  try {
    ID = parseInt(param[1]);
    // console.log(ID);
  } catch {
    ID = null;
  }
  return ID;
}

async function getData() {
  const url = "http://localhost:8080/cat_id?id=" + getParam();

  let data;

  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (err) {
    data = null;
  }

  return data;
}

async function showData() {
  let data = await getData();
  let cat = null;
  try {
    cat = data.pay_load;
  } catch (err) {
    cat = null;
  }

  if (cat) {
    cat.map((c) => {
      // console.log(c);
      document.getElementById("img2").setAttribute("src", c.img_2);

      let name = document.getElementsByClassName("punCat");
      for (let i = 0; i < name.length; i++) {
        name[i].innerHTML = c.species;
      }

      document.getElementById("data1").innerHTML = c.experimental;
      document.getElementById("data2").innerHTML = c.health;
    });
  }
}

showData();
