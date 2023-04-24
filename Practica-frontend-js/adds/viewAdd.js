export const buildAddsView = (product)=>{
  const type = product.isSell ? "venta" : "compra";

  return `
  <a href="/detailanuncios.html?id=${product.id}">
    <div class="product">
      <img src="${product.image}" alt="product image">
      <div>
        <span class="title">${product.title}</span>
        <span class="price"> - ${product.price}</span>
      </div>
      <p class="description">${product.description}</p>
      <span class="type ${type}">${type}</span>
    </div>
  </a>
  `;
}


