import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';



function SkinsCard({Skins}) {
const id=useParams();


const item=Skins[id.id]
console.log(item)

  return (
    
    <div className='homeimg'>
 {item.Skins?.map(e=><div className='allskins'>

  <h1 className='skin'>{e.skinsname}</h1>
  <h1 className='skinimg'>{e.price}</h1>
<img src={e.imglink }></img>
  
 </div>)}
 

    </div>

  );
}

export default SkinsCard;