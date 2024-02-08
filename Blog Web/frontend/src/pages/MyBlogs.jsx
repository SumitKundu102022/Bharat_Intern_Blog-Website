import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import HomePosts from "../components/HomePosts"
import ProfilePosts from "../components/ProfilePosts"
import Loader from "../components/Loader"


const MyBlogs = () => {

    const navigate=useNavigate()
  const userId=useParams()
  const {user}=useContext(UserContext)
  const [myPosts,setMyPosts]=useState([])
  const [loader,setLoader]=useState(false)
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [file,setFile]=useState()
  const [userIdx,setUserIdx]=useState("")
  const [updated,setUpdated]=useState(false)
  const [confirmDelete,setConfirmDelete]=useState(false)

 

//   const doDelete=async()=>{
//     try{
//       await axios.delete(URL+"/api/users/user/"+userId.id)
//       .then((res)=>{
//         // console.log('user deleted!')
//         axios.get(URL+'/api/auth/logout')
//        .then((response)=>{
//         navigate('/login')
//        })
//        .catch((err)=>{
//         console.log(err)
//        })
//         navigate("/login")
//       })

//     }
//     catch(err){
//       console.log(err)
//     }
//   }
  

  const fetchUserData=async ()=>{
        
    axios.get(URL+'/api/users/user/'+userId.id)
    .then((res)=>{
        setUserIdx(res.data._id)
        setUsername(res.data.username)
        setEmail(res.data.email)
        setPassword(res.data.password)

    })
    .catch(err=>{
        console.log(err)
    })
}

useEffect(()=>{

  fetchUserData()

},[userId.id])

//   const handleUpdate=async(e)=>{
//     e.preventDefault()

//     const newUser={
//       username:username,
//       email:email,
//       password:password
//     }

//     if(file){
//       const data=new FormData();
//       const filename=Date.now()+file.name;
//       data.append("name",filename)
//       data.append("file",file)
//       newUser.profilePic=filename;
//       console.log(newUser)
//       try{
//        await axios.post(URL+"/api/upload",data)
//       }
//       catch(err){
//         console.log(err)
//       }
//     }
//  try{
//  const res=await axios.put(URL+"/api/users/user/"+userId.id,newUser)
//  fetchUserData()
//  console.log(res.data)
//  setUpdated(true)
//  navigate("/profile/"+res.data._id)
// //  setUpdated(false)
//  }
//  catch(err){
//   console.log(err)
//   setUpdated(false)
//  }

//   }
    
    // console.log(userId.id)
    const fetchPosts=()=>{
      setLoader(true)
        axios.get(URL+"/api/posts/all/"+userId.id)
        .then((res)=>{
            // console.log(res.data)
            setMyPosts(res.data)
            setLoader(false)
           
        })
        .catch(err=>{
            console.log(err)
            setLoader(true)
        })
    }

    useEffect(()=>{
      fetchPosts()
    },[userId.id])
//     const {search}=useLocation()
//   // console.log(search)
//   const [posts,setPosts]=useState([])
//   const [myPosts, setMyPosts] = useState([]);
//   const [noResults,setNoResults]=useState(false)
//   const [loader,setLoader]=useState(false)
//   const {user}=useContext(UserContext)
//   // console.log(user)

//   const fetchPosts=async()=>{
//     setLoader(true)
//     try{
//       const res=await axios.get(URL+"/api/posts/user/"+user._id)
//       // console.log(res.data)
//       setPosts(res.data)
//       if(res.data.length===0){
//         setNoResults(true)
//       }
//       else{
//         setNoResults(false)
//       }
//       setLoader(false)
      
//     }
//     catch(err){
//       console.log(err)
//       setLoader(true)
//     }
//   }

//   useEffect(()=>{
//     fetchPosts()

//   },[search])

  return (
    <div>
      <Navbar />
      <div className=" px-6 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse">
        <div className="flex flex-col md:w-[100%]">
          <h1 className="text-xl font-bold mt-16 md:mt-0 ">Your Posts:</h1>
          {!loader ? (
            myPosts.map((post) => (
              <>
                <Link to={user ? `/posts/post/${post._id}` : "/login"}>
                  <ProfilePosts key={post._id} post={post} />
                </Link>
              </>
            ))
          ) : (
            <div className="h-screen flex justify-center items-center">
              <Loader />
            </div>
          )}
        </div>
      </div>
      {/* <div className="px-8 md:px-[200px] min-h-[80vh]">
        {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
        posts.map((post)=>(
          <>
          <Link to={user?`/posts/post/${post._id}`:"/login"}>
          <HomePosts key={post._id} post={post}/>
          </Link>
          </>
          
        )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
        </div> */}
      {/* <Footer/> */}
    </div>
  );
}

export default MyBlogs