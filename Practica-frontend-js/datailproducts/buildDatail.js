export function buildDetail(add) {
    const type = add.isSell ? "Compra" : "Venta";
    const img = add.image === undefined ? '':'src="${add.image}"';

    
    
    

    return `
    <div class="product-detail">
      <img ${img} alt="product image">
      <span class="type">${type}</span>
      <div>
        <span class="title">${add.title}</span>
        <span class="description"> - ${add.price}</span>
      </div>
      <p class="description">${add.description}</p>
      <button style="display: none">Borrar producto</button>
    </div>
    `;
  }
  