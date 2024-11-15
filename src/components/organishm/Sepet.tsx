import React from 'react'
import UrunItem from '../molecules/UrunItem'
import { IProduct } from '../../models/IProduct'
import { useAppSelector } from '../../store'
import { getDatabase, ref, set, onChildAdded,onChildChanged  } from "firebase/database";
function Sepet() {
  const sepetList: IProduct[] = useAppSelector(state=>state.product.sepetListesi);
    const db = getDatabase();
    const coomentRef =  ref(getDatabase(),'users')
   onChildAdded(coomentRef,(snapshot) => {
    const user = snapshot.val();
    console.log('Yeni kullanıcı eklendi:', user);
    })    

    onChildChanged(coomentRef, (snapshot) => {
    const user = snapshot.val();
    console.log('Kullanıcı güncellendi:', user);
    });

  console.log('sepet render');
  return (
    <div className="row p-3 rounded-3 ms-2" style={{boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.46)'}}>
        <div className="col">
            <div className="row">
                <div className="col">
                    <label className='form-label'>Sepet</label>
                </div>
                <div className="col text-end">
                    <label className='form-label'>5 adet ürün</label>
                </div>
                <hr />
            </div>
            <div className="row text-end">
                {
                    sepetList.map((urun,index)=>{
                        return  <UrunItem key={index} image={urun.thumbnail} title={urun.title} price={urun.price} />
                    })
                }              
                
                <hr />
                <label className='form-label'>Toplam   : 125.000₺</label>    
                <label className='form-label'>Kdv      :  25.000₺</label>    
                <label className='form-label'>G.Toplam : 150.000₺</label>    
                
            </div>
            <div className="row d-grid">
                <input type="button" className='btn btn-success' value="Satın Al" />
            </div>
        </div>
    </div>
  )
}

export default Sepet