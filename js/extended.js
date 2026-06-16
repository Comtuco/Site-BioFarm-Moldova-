document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");

    const titles = {
        fructe:  "Fructe",
        legume:  "Legume",
        animale: "Produse din animale"
    };

    document.getElementById("categoryTitle").textContent = titles[cat] || cat;

    const products = await getProducts();
    const filtered = products.filter(p => {
        const map = {
            fructe:  "fructe",
            legume:  "legume",
            animale: "produse animale"
        };
        return p.category === map[cat];
    });

    const items = document.querySelectorAll(".product-item");

    filtered.forEach((product, i) => {
        if (!items[i]) return;

        items[i].style.backgroundImage = `url('${product.image}')`;
        items[i].style.backgroundSize = "cover";
        items[i].style.backgroundPosition = "center";

        const link = items[i].querySelector("a");
        link.href = `produs-exemplu.html?id=${product.id}`;
        link.textContent = product.name;
    });
});