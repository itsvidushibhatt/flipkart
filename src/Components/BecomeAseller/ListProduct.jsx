import { collection, getDocs,doc, addDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { FIREBASE_DB } from '../../firebaseConfig';

export default function ListProduct() {
  const [data, setData]=useState([])
  const [userId, setUserId]=useState()
  const [categoryData, setCategoryData]=useState([])
  const [catName, setCatName]=useState();
  const [productName, setProductName]=useState()
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription]=useState();
  const [price, setPrice]=useState();

  const [updateCatName, setUpdateCatName]=useState('');
  const [updateProductName, setUpdateProductName]=useState('');
  const [updateImageFile, setUpdateImageFile] = useState(null);
  const [updateDescription, setUpdateDescription]=useState('');
  const [updatePrice, setUpdatePrice]=useState('');


  useEffect(()=>{
       getUserinfo();
  },[])

  const getUserinfo=()=>{
    const data= sessionStorage.getItem('userInfo');
    const parseData= JSON.parse(data)
     setUserId(parseData.userId)
     fetchCategoryNames(parseData.userId)
     fetchProductData(parseData.userId)
  }

  const fetchCategoryNames = async (userId) => {
    try {
      const categoryRef = collection(doc(FIREBASE_DB, "categories", userId), 'category');
  
      const querySnapshot = await getDocs(categoryRef);
  
      const categoryNames = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        categoryName: doc.data().categoryName,
      }));
  
      console.log('Fetched category names:', categoryNames);
      setCategoryData(categoryNames)
    } catch (error) {
      console.error('Error fetching category names:', error);
    }
  }

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
    console.log(event.target.files[0])
  };
  const handleUpdateFileChange = (event) => {
    setUpdateImageFile(event.target.files[0]);
    console.log(event.target.files[0])
  };

  const AddProduct=async()=>{
    if(!catName || !productName || !imageFile || !price || !description){
      return alert('All fields are required!')
     }
    try{
      const docRef = collection(doc(FIREBASE_DB, "products", userId), 'ourProducts');

      await addDoc(docRef, {
        category:catName,
        productName,
        imageFile:imageFile.name,
        description,
        price
      });
      fetchProductData();
      alert("Data Added successfully!");
    }catch (e) {
    console.error("Error to storing data: ", e);
  }
  }

  
  const fetchProductData = async (uId=userId) => {
    try {
      const categoryRef = collection(doc(FIREBASE_DB, "products", uId), 'ourProducts');
  
      const querySnapshot = await getDocs(categoryRef);
  
      const categories = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), 
      }));
  
      console.log('Fetched products:', categories);
  
      setData(categories) 
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  var updatedId;
  const View=(pData)=>{
    updatedId= pData.id;
    console.log(updatedId)
    setUpdateCatName(pData.category);
    setUpdateProductName(pData.productName);
    setUpdateImageFile(pData.imageFile);
    setUpdatePrice(pData.price);
    setUpdateDescription(pData.description)
  }

  const UpdateProduct=()=>{
    console.log(updatedId)
  }


  return (
    <>
<main id="main" class="main">
   <div class="pagetitle">
     <button type="button" class="btn btn-sm btn-primary shadow-none fs-small px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Product</button>
  </div>
     <div class="section mt-4">
      <div class="row">

        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Product</h5>
              <div class="search-bar d-flex justify-content-between">
                <div className=''>
                  <p className='fs-small'>Here is all Product in our Shop.</p></div>
                 <div class="search-form ">
                   <input type="text" className='fs-small' placeholder="Search" />
                 </div>
               </div>

              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                { data.map((d,k)=>(
                     <tr>
                     <th scope="row"></th>
                     <td>{d.productName}</td>
                     <td>{d.category}</td>
                     <td>{d.description}</td>
                     <td>{d.price}</td>
                     <td><img src="https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg" class="img-fluid rounded mx-auto d-block" alt="..." style={{height: '35px', width: 'auto'}}/></td>
                     <td className='d-flex'>
                       <button type="button" class="btn btn-sm btn-primary shadow-none me-2" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={()=>View(d)}><i class='bx bx-edit'></i></button> 
                       <button type="button" class="btn btn-sm btn-danger shadow-none" ><i class='bx bxs-message-square-x '></i></button>
                      </td>
                   </tr>
                 )) 
                }
                </tbody>
              </table>

            </div>
          </div>

        </div>
      </div>
    </div>
    </main>

    {/* Add Product Modal */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">Add Product</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

      <div class="modal-body">
        <div className='row'>
        <div className=' col-md-6 col-sm-12'>
        <label className='fs-small'>Category</label><br/>
          <select className='form-select form-select-sm shadow-none fs-extra-small' value={catName} onChange={(e)=>setCatName(e.target.value)}>
            <option disabled selected>--select--</option>
             {categoryData?.map((d,k)=>(
                 <option value={d.categoryName}>{d.categoryName}</option>
             ))
             }
           </select>
           </div>
        <div className='col-md-6 col-sm-12'>
            <label className='fs-small'>Product Name</label><br/>
            <input type='text' className='form-control form-control-sm shadow-none fs-small' value={productName} onChange={(e)=>setProductName(e.target.value)}/>
        </div>
        <div className='col-md-6 col-sm-12 mt-3'>
            <label className='fs-small'>Image</label><br/>
            <input type='file' className='form-control form-control-sm shadow-none'  onChange={handleFileChange}/>
        </div>
        <div className='col-md-6 col-sm-12 mt-3'>
            <label className='fs-small'>Price</label><br/>
            <input type='text' className='form-control form-control-sm shadow-none fs-small' value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div className='col-md-12 col-sm-12 mt-2'>
            <label className='fs-small'>Description</label><br/>
            <textarea className='form-control form-control-sm shadow-none fs-small' value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
      </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal" onClick={AddProduct}>submit</button>
        <button type="button" class="btn btn-sm btn-primary">cancel</button>
      </div>
    </div>
  </div>
</div>

{/* Update Modal */}
<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">Update Product</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

      <div class="modal-body">
        <div className='row'>
        <div className='col-md-6 col-sm-12'>
        <label className='fs-small'>Category</label><br/>
          <select className='form-select form-select-sm shadow-none fs-extra-small' value={updateCatName} onChange={(e)=>setUpdateCatName(e.target.value)}>
            <option disabled selected>--select--</option>
            {categoryData?.map((d,k)=>(
                 <option value={d.categoryName}>{d.categoryName}</option>
             ))
             }
           </select>
           </div>
        <div className='col-md-6 col-sm-12'>
            <label className='fs-small'>Product Name</label><br/>
            <input type='text' className='form-control form-control-sm shadow-none fs-small' value={updateProductName} onChange={(e)=>setUpdateProductName(e.target.value)}/>
        </div>
        <div className='col-md-6 col-sm-12 mt-3'>
            <label className='fs-small'>Image</label><br/>
            <input type='file' className='form-control form-control-sm shadow-none' defaultValue={updateImageFile} onChange={handleUpdateFileChange}/>
        </div>
        <div className='col-md-6 col-sm-12 mt-3'>
            <label className='fs-small'>Price</label><br/>
            <input type='text' className='form-control form-control-sm shadow-none fs-small' value={updatePrice} onChange={(e)=>setUpdatePrice(e.target.value)}/>
        </div>
        <div className='col-md-12 col-sm-12 mt-2'>
            <label className='fs-small'>Description</label><br/>
            <textarea className='form-control form-control-sm shadow-none fs-small' value={updateDescription} onChange={(e)=>setUpdateDescription(e.target.value)}/>
        </div>
      </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal" onClick={UpdateProduct}>submit</button>
        <button type="button" class="btn btn-sm btn-primary">cancel</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
