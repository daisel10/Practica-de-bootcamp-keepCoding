import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';



const Advert = ({ createdAt ,name, sale, price,tags}) => {
    return (
      <article className="advert bordered">
        
        <div className="right">
          <div className="advert-header">
            <p className="advert-name">nombre: {name}</p>           
            <span className="advert-username">{
            sale ? 'Sell' : 'Buy'
            }</span>
            <br/>
            <span className="advert-separator">price: {price}</span><br/>
            <span>tags: {tags[0]}</span><br/>
            <time dateTime={createdAt}>{formatDistanceToNow(new Date())}</time>
          </div>
        </div>
      </article>
    );
  };
  
  export default Advert;
  