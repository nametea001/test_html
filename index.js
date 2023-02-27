async function getData() {
  const url = "http://localhost:8080/cats";

  let data;

  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (err) {
    data = null;
  }

  return data;
}

async function createItem() {
  let data = await getData();
  let cats = null;
  try {
    cats = data.pay_load;
  } catch (err) {
    cats = null;
  }
  // console.log(cats);
  if (cats) {
    let index = 0;
    colum = 4;
    row = Math.ceil(cats.length / colum);
    // console.log(row);
    for (let r = 0; r < row; r++) {
      // create rows
      let rows = document.createElement("div");
      rows.className = "rows";
      //   create item
      let countCol = 0;
      for (let i = index; i < cats.length; i++) {
        let item = document.createElement("div");
        item.className = "item";
        //   create item-child
        let itemChild = document.createElement("div");
        itemChild.className = "item-child";
        //   create img
        let img = document.createElement("img");
        img.className = "cat-img";
        img.setAttribute("src", cats[i].img);

        //   create cat data
        let catData = document.createElement("div");
        catData.className = "cat-data";

        let catData1 = document.createElement("h5");
        catData1.innerHTML = "พันธุ์ : " + cats[i].species;
        catData.appendChild(catData1);

        let catData2 = document.createElement("h5");
        let star = "";
        for (let point = 0; point < cats[i].friendly; point++) {
          star += "⭐";
        }
        catData2.innerHTML = "ความเป็นมิตร : " + star;
        catData.appendChild(catData2);

        let catData3 = document.createElement("h5");
        star = "";
        for (let point = 0; point < cats[i].friendly; point++) {
          star += "⭐";
        }
        catData3.innerHTML = "การปรับตัว : " + star;
        catData.appendChild(catData3);

        let catData4 = document.createElement("h5");
        star = "";
        for (let point = 0; point < cats[i].playful; point++) {
          star += "⭐";
        }
        catData4.innerHTML = "ความขี้เล่น : " + star;
        catData.appendChild(catData4);

        // button
        let aTag = document.createElement("a");
        let urlId = "./more.html?id=" + cats[i].id;
        aTag.setAttribute("href", urlId);
        aTag.setAttribute("target", "_blank");

        let bt = document.createElement("button");
        bt.setAttribute("type", "button");
        bt.className = "btn btn-primary bt";
        bt.innerHTML = "More";
        aTag.appendChild(bt);

        // add img cat data to item child
        itemChild.appendChild(img);
        itemChild.appendChild(catData);
        itemChild.append(aTag);
        // add itemChild to item
        item.appendChild(itemChild);
        // add item to rows
        rows.appendChild(item);
        countCol++;
        if (countCol == colum) {
          index = i + 1;
          break;
        }
      }
      document.getElementById("main").appendChild(rows);
    }
  } else {
    console.log("ERR 2");
    let dataErr = document.createElement("h1");
    dataErr.innerHTML = "ไม่มีข้อมูล";
    document.getElementById("main").appendChild(dataErr);
  }
}

createItem();
