document.addEventListener(
    "DOMContentLoaded",
    loadProduct
);
async function loadProduct() {

    const titleEl = document.getElementById("productTitle");
    if (!titleEl) return;
    
    const params =
        new URLSearchParams(
            window.location.search
        );

    const productId =
        Number(
            params.get("id")
        );

    const products =
        await getProducts();

    const product =
        products.find(
            p => p.id === productId
        );

    if (!product) {
        return;
    }

    document.getElementById(
        "productTitle"
    ).textContent =
        product.name;

    document.getElementById(
        "productDescription"
    ).textContent =
        product.description;

    document.getElementById(
        "productPrice"
    ).textContent =
        product.price + " MDL";

    document.getElementById(
        "productWeight"
    ).textContent =
        product.weight + " g";

    const image =
        document.getElementById(
            "productImage"
        );

    image.src =
        product.image;

    image.alt =
        product.name;
}
