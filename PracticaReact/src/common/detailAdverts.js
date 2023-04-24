import placeholder from '../assets/images/placeholder.png'
const AdvertDetail =({id,createdAt,name,sale,price,tags,photo}) =>{

    return(
    <div>
        <p>{name}</p>
      <p>{sale ? 'Sell' : 'Buy'}</p>
      <p>{tags}</p>
      <p>{price}</p>
      <img
        src={photo || placeholder}
        alt={name}
        width="200"
        height="200"
        style={{ objectFit: 'contain' }}
      />
    </div>
    );
}

export default AdvertDetail;