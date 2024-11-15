import React, { useState } from 'react'
import UrunArama from '../components/molecules/UrunArama'
import UrunListesi from '../components/organishm/UrunListesi'
import Sepet from '../components/organishm/Sepet'
import { IProduct } from '../models/IProduct';
import { getDatabase, ref, set } from "firebase/database";
function ProductPage() {
  //const [sepetList, setSepetList] = useState<IProduct[]>([]);
  /**
   * liste = [4,7,9,1,3]
   * ...liste -> 4,7,9,1,3
   * ...liste, 12 -> 4,7,9,1,3,12
   * [...liste,12] -> [4,7,9,1,3,12]
   * sepetList = [{u1},{u2},{u3},{u4}]
   * urun = {u5}
   * [...sepetList,urun] -> [{u1},{u2},{u3},{u4},{u5}]
   */
 // const ahmetAbiSepeteEkle = (urun: IProduct)=>{
 //     setSepetList([...sepetList, urun]);
 // }
 const db = getDatabase();
  set(ref(db, 'users/1'), {
    username: 'muhammet',
    email: 'muhammet@gmail.com',
    profile_picture : 'https://picsum.photos/100/100'
  });
  console.log('producr page render');
  return (
    <div className="container">
        <div className="row mt-4 ">
            <div className="col-8">                               
                <div className="row">
                    <UrunArama />
                </div>
                <div className="row">
                    <UrunListesi  />
                </div>
            </div>
            <div className="col-4">
                    <Sepet />
            </div>
        </div>
    </div>
  )
}

export default ProductPage