

/*房屋資訊*/
fetch('roomlist.json')
  .then(res => res.json())
  .then(data => {
    const path = window.location.pathname;

    if (path.includes('index.html') || path === '/' || path === '/index') {
      renderList(data);
    } else if (path.includes('house-detail.html')) {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
      const house = data.find(item => item.id === id);
      renderDetail(house);
    }
  });

function renderList(houses) {
  const container = document.getElementById('listing-container');
  container.innerHTML = '';

  houses.forEach(house => {
    const card = document.createElement('a');
    card.href = `house-detail.html?id=${house.id}`;
    card.className = 'listing-card';
    card.innerHTML = `
      <article>
        <section class="listing-images">
          ${house.images.slice(0, 6).map(src => `<img src="${src}" alt="房屋照片" loading="lazy">`).join('')}
          <div class="more-photos">查看更多 ${house.images.length} 張照片</div>
        </section>
        <section class="listing-info">
          <h2>${house.title}</h2>
          <div class="listing-tags">
            ${house.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="listing-detail">
            <span>${house.type}</span> ・
            <span>${house.size}</span> ・
            <span>${house.floor}</span> ・
            <span>${house.building}</span>
          </div>
          <div class="listing-price">
            <strong class="price">${Number(house.price).toLocaleString()} 元 / 月</strong> ・
            <span class="deposit">${house.deposit}</span>
          </div>
        </section>
        <section class="agent-info">
          <img src="${house.agent.avatar}" alt="仲介頭像">
          <div>
            <div class="agent-name">仲介：${house.agent.name}（收服務費）</div>
            <div class="agency">${house.agent.company}</div>
            <a href="tel:${house.agent.phone}" class="call-btn">📞 ${house.agent.phone}</a>
          </div>
        </section>
      </article>
    `;
    container.appendChild(card);
  });
}

function renderDetail(house) {
  const container = document.getElementById('detail-container');
  if (!house) {
    container.innerHTML = `<p>找不到該房屋資料。</p>`;
    return;
  }

  container.innerHTML = `
    <h1>${house.title}</h1>
    <div>
      ${house.images.map(src => `<img src="${src}" alt="房屋照片" style="width:150px;margin:5px;">`).join('')}
    </div>
    <p>型態：${house.type}</p>
    <p>坪數：${house.size}</p>
    <p>樓層：${house.floor}</p>
    <p>建物：${house.building}</p>
    <p>租金：${Number(house.price).toLocaleString()} 元 / 月</p>
    <p>押金：${house.deposit}</p>
    <p>仲介：${house.agent.name}（${house.agent.company}）</p>
    <p>聯絡電話：<a href="tel:${house.agent.phone}">${house.agent.phone}</a></p>
    <a href="index.html">← 回房屋列表</a>
  `;
}



