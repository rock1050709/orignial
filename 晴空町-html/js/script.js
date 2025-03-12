let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} 已加入購物車`);
}

function viewCart() {
    if (cart.length === 0) {
        alert("購物車是空的！");
        return;
    }
    
    let cartDetails = "您的購物車：\n";
    let total = 0;
    cart.forEach(item => {
        cartDetails += `${item.productName} - $${item.price}\n`;
        total += item.price;
    });
    cartDetails += `\n總價：$${total}`;
    alert(cartDetails);
}
