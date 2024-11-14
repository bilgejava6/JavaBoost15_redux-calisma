import React from 'react'
import { IProduct } from '../../models/IProduct'
interface IUrunCardProps{
    urun: IProduct,
    sepeteEkle: (urun: IProduct)=>void
}
function UrunCard(props: IUrunCardProps) {
  const urun = props.urun
  console.log('ürün kart render');
  return (
    <div className="col-4 mt-3">
        <div className="card">
            <div className='p-3'>
                <img src={urun.thumbnail} className="card-img-top"  />
            </div>
            <div className="card-body">
                <h5 className="card-title">{urun.category}</h5>
                <p className="card-text">{urun.title}</p>
                <p className="card-text">{urun.price} $</p>
                <div className="d-grid">
                    <input onClick={()=>props.sepeteEkle(urun)} type="button" value="Sepete Ekle" className='btn btn-outline-info' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UrunCard