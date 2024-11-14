import React, { useEffect, useState } from 'react'
import UrunCard from '../molecules/UrunCard'
import { IProduct } from '../../models/IProduct';
import { fetchGetAllProducts } from '../../store/feature/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ProductDispatch, useAppSelector } from '../../store';

function UrunListesi() {
  /**
   * DİKKAT!!!!
   * değişken tipi bir değere farklı bilgiler girilmesin
   * diye yapılır.
   * int sayi = "beş"; // yazılmaz çünkü değer türü int
   * 
   */
  const dispatch = useDispatch<ProductDispatch>();
  const liste = useAppSelector(gState=> gState.product.productList);
  const isLoding = useAppSelector(s=> s.product.isProductListLoading);
  /**
   * DİKKAT!!!!
   * bir sayfayı render etmek için React in değişiklik algılaması gerekli
   * bunu yapan şey useState dir, bizin sayfamızda liste dğeişkeni 
   * güncellenmek için setListe() methodu kullanılır. burada fetch 
   * işleminini sonucunda list set edilir. Yani react e sayfanın 
   * render edilmesi gerektiği iletilir. bu da sonsuz bir döngüye 
   * sebebiyet verir.
   * ÇÖZÜM;
   * react hookslarında useEffect kullanılarak JAva da constrcutor 
   * benzeri bir yapı kurulur ve böylece fetch işleminin tek bir 
   * sefer çalıştırılması sağlanır.
   * 
   */
  //const [liste, setListe] = useState<IProduct[]>();
  /**
   * use effect, kendisine verilen bileşenler takip eder, eğer bu bileşenlerde
   * bir değşiklik olur ise içerisinde var olan arrowfunction ı tetikler.
   * Burada boş bir array kullanılır, böylece boş array hiç bir zaman değişmeyeceği için
   * useEffect içerisi sadece sayfa yüklenirken 1 defa çalışır ve bir daha çalışmaz.
   */
  useEffect(()=>{
    /**
     * DİKKAT!!!!
     * asyncThunk tanımlarını direkt çağıramazsınız
     * çalıştırmak için useDispatch kullanmalısınız
     */
     dispatch(fetchGetAllProducts());
  },[]);
  
 console.log('ürün listesi render');
  return (
    <div className="col p-3 rounded-3 mt-4" style={{boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.46)'}}>
        <label className='form-label'>Ürün listesi</label>
        <div className="row"> 
          {
            isLoding ? 
            <iframe src="https://lottie.host/embed/b75e387b-4df1-4d28-a9d1-54d9e4eb109e/AHKNVAPkRe.json"></iframe> 
            : null
          }       
            {
              liste?.map((urun,index)=>{
                return <UrunCard key={index} urun={urun} />
              })
            }
        </div>
    </div>
  )
}

export default UrunListesi