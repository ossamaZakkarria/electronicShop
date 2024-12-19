fetch("https://electronicapi.onrender.com/items")
  .then((res) => res.json())
  .then((items) => {
    const laptopsSection = document.querySelector("#laptops-section");
    const phonesSection = document.querySelector("#phones-section");
    const headphonesSection = document.querySelector("#headphones-section");

    const createCard = (item) => `
      <div class="col">
        <div class="p-3">
          <div class="card" style="width: 18rem">
            <img src="${
              item.Image || "placeholder.jpg"
            }" class="card-img-top" alt="${item.Name}" />
            <div class="card-body">
              <h5 class="card-title">${item.Name}</h5>
              <p class="card-text">Price: $${item.Price}</p>
              <p class="card-text">Condition: ${item.Condition}</p>
              <p class="card-text">Specs: ${item.Specs}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    laptopsSection.innerHTML = items.slice(0, 3).map(createCard).join("");
    phonesSection.innerHTML = items.slice(3, 6).map(createCard).join("");
    headphonesSection.innerHTML = items.slice(6, 9).map(createCard).join("");
  })
  .catch((error) => {
    console.error("Error fetching items:", error);
  });
