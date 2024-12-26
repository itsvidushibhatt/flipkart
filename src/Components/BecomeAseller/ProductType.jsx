import React, { useEffect, useState } from 'react'
import '../../assets/css/Sidebar_Navbar.css'
import { FIREBASE_APP, FIREBASE_DB,storage } from '../../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";


export default function ProductType() {
  const [data, setData]=useState([]);
  const [categoryName, setCategoryName]=useState();
  const [description, setDescription]=useState();
  const [imageFile, setImageFile] = useState(null);
  const [userId, setUserId]= useState();
  const [updateCatName, setUpdateCatName]=useState('')
  const [updateDescription, setUpdateDescription]=useState('')
  const [updateImageFile, setUpdateImageFile]=useState(null)
 
  useEffect(()=>{
    getUserinfo();
   
  },[])

  const getUserinfo=()=>{
    const data= sessionStorage.getItem('userInfo');
    const parseData= JSON.parse(data)
     setUserId(parseData.userId)
     fetchCategoryData(parseData.userId)
  }

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
    console.log(event.target.files[0])
  };

  const handleUpdateFileChange = (event) => {
    setUpdateImageFile(event.target.files[0]);
    console.log(event.target.files[0])
  };

  async function uploadImage(file) {
    if (!file) return;
  
    try {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      console.log("Image uploaded to Firebase Storage");
  
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Image URL:", downloadURL);
  
    
      const docRef = doc(FIREBASE_APP, "images", file.name); 
      await setDoc(docRef, { imageUrl: downloadURL });
      console.log("Image URL saved to Firestore");
       console.log(downloadURL)
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }
  

  const AddCategory=async()=>{
     if(!categoryName || !imageFile || !description){
      return alert('All fields are required!')
     }
    try{
      const docRef = collection(doc(FIREBASE_DB, "categories", userId), 'category');

      await addDoc(docRef, {
        categoryName,
        imageFile:imageFile.name,
        description,
      });
     fetchCategoryData();
      alert("Data Added successfully!");
    }catch (e) {
    console.error("Error to storing data: ", e);
  }
  //   if (imageFile) {
  //     const url = await uploadImage(imageFile);
  //     if (url) {
  //       console.log("Image uploaded and URL saved:", url);
  //     }
  //   } else {
  //     alert("Please select an image first");
  //   }
     }

     const fetchCategoryData = async (uId=userId) => {
      try {
        const categoryRef = collection(doc(FIREBASE_DB, "categories", uId), 'category');
    
        // Fetch all documents from the 'category' subcollection
        const querySnapshot = await getDocs(categoryRef);
    
        const categories = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), 
        }));
    
        console.log('Fetched categories:', categories);
    
        setData(categories) 
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    const View=(categoryData)=>{
      console.log(categoryData)
       setUpdateCatName(categoryData.categoryName)
       setUpdateDescription(categoryData.description)
       setUpdateImageFile(categoryData.imageFile)
    }

  return (
    <>
      
   <main id="main" class="main">
   <div class="pagetitle">
     <button type="button" class="btn btn-sm btn-primary shadow-none fs-small px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Category</button>
  </div>
     <section class="section mt-4">
      <div class="row">

        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Categories</h5>
              <div class="search-bar d-flex justify-content-between">
                <div className=''>
                  <p className='fs-small'>Here is all Product categories in our Shop.</p></div>
                 <div class="search-form ">
                   <input type="text" className='fs-small' placeholder="Search" />
                 </div>
               </div>

              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead> 
                <tbody>
                 { data?.map((d,k)=>(
                       <tr>
                       <th scope="row"></th>
                       <td>{d.categoryName}</td>
                       <td>{d.description}</td>
                       <td><img src="https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg" class="img-fluid rounded mx-auto d-block" alt="..." style={{height: '35px', width: 'auto'}}/></td>
                       <td className='d-flex'>
                         <button type="button" class="btn btn-sm btn-primary shadow-none me-2" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={()=>View(d)} ><i class='bx bx-edit' ></i></button>
                         <button type="button" class="btn btn-sm btn-danger shadow-none"><i class='bx bxs-message-square-x '></i></button>
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
    </section>
    </main>
    
    {/* Add Product  type Modal */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">Add Category</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

      <div class="modal-body">
        <div className='row'>
        <div className='col col-md-6'>
            <label className='fs-small'>Category Name</label><br/>
            <input type='text' className='form-control form-control-sm shadow-none fs-small' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/>
        </div>
        <div className='col col-md-6'>
            <label className='fs-small'>Image</label><br/>
            <input type='file' className='form-control form-control-sm shadow-none'  onChange={handleFileChange}/>
        </div>
        <div className='col-md-12 col-sm-12 mt-2'>
            <label className='fs-small'>Description</label><br/>
            <textarea className='form-control form-control-sm shadow-none fs-small' value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
      </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal" onClick={AddCategory}>submit</button>
        <button type="button" class="btn btn-sm btn-primary">cancel</button>
      </div>
    </div>
  </div>
</div>

{/* Update Product Modal */}
<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">Update Category</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

      <div class="modal-body">
        <div className='row'>
        <div className='col col-md-6'>
            <label className='fs-small'>Category Name</label><br/>
            <input type='text' className='form-control form-control-sm shadow-none fs-small' value={updateCatName} onChange={(e)=>setUpdateCatName(e.target.value)}/>
        </div>
        <div className='col col-md-6'>
            <label className='fs-small'>Image</label><br/>
            <input type='file' className='form-control form-control-sm shadow-none' defaultValue={updateImageFile} onChange={handleUpdateFileChange}/>
        </div>
        <div className='col-md-12 col-sm-12 mt-2'>
            <label className='fs-small'>Description</label><br/>
            <textarea className='form-control form-control-sm shadow-none fs-small' value={updateDescription} onChange={(e)=>setUpdateDescription(e.target.value)}/>
        </div>
      </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">submit</button>
        <button type="button" class="btn btn-sm btn-primary">cancel</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
