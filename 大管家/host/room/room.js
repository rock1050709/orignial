document.addEventListener("DOMContentLoaded", function () {
    // 預設所有 .options 下的 <span> 點擊時互動
    document.querySelectorAll(".filter-group .options").forEach(group => {
      group.addEventListener("click", function (e) {
        if (e.target.tagName.toLowerCase() === "span") {
          // 是否單選？這裡可根據 data-single 控制
          const isSingle = group.dataset.single === "true";
  
          if (isSingle) {
            // 單選：移除其他 active
            group.querySelectorAll("span").forEach(span => span.classList.remove("active"));
          }
  
          // toggle 選擇狀態
          e.target.classList.toggle("active");
        }
      });
    });
  });

  


 // 縣市搜尋
  // room.js

const cityTownData = {
  "新竹市": ["東區", "北區", "香山區"],
  "新竹縣": ["竹北市", "湖口鄉", "新豐鄉", "新埔鎮", "關西鎮", "芎林鄉", "寶山鄉", "竹東鎮", "五峰鄉", "橫山鄉", "尖石鄉", "北埔鄉", "峨眉鄉"]
};

function populateCities() {
  const citySelect = document.getElementById("city-select");
  for (const city in cityTownData) {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  }
}

function updateTowns() {
  const citySelect = document.getElementById("city-select");
  const townSelect = document.getElementById("town-select");
  const selectedCity = citySelect.value;

  townSelect.innerHTML = '<option value="">選擇鄉鎮</option>';

  if (cityTownData[selectedCity]) {
    cityTownData[selectedCity].forEach((town) => {
      const option = document.createElement("option");
      option.value = town;
      option.textContent = town;
      townSelect.appendChild(option);
    });
  }
}

function searchRooms() {
  const city = document.getElementById("city-select").value;
  const town = document.getElementById("town-select").value;

  const filter = { city, town };
  console.log("查詢條件：", filter);

  // TODO: 將這裡改成真正的搜尋或渲染邏輯
}

document.addEventListener("DOMContentLoaded", () => {
  populateCities();

  const citySelect = document.getElementById("city-select");
  const townSelect = document.getElementById("town-select");

  citySelect.addEventListener("change", () => {
    updateTowns();
    searchRooms();
  });

  townSelect.addEventListener("change", searchRooms);
});
