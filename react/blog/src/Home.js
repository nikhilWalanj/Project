import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  const{data:blogs, isPending, error}=useFetch("http://localhost:8000/blogs")


  // const [name, setName]=useState("Tom");
  // const [age,setAge]=useState("24");
  // const handleClick=()=>{
  //   setName("Nikhil");
  //   setAge(25);
  // }
  // // const handleClick=()=>{
  // //   console.log("hello")
  // // }

  //  const handleClickAgain=(name)=>{
  //   setName("Nikhil");
  //  }
  // return ( 
  //   <div>
  //     <h2>HomePage</h2>
  //     {/* <button onClick={handleClick}>Click me</button>
  //     <button onClick={(e)=>handleClickAgain("mario",e)}>Click me</button> */}

  //     {/* <h1>{`${name} is ${age} years old`}</h1> */}
  //     <h1>{name} is {age} years old</h1>
  //     <button onClick={handleClick}>Click ME</button>
  //   </div>
  //  );

  // const handleDelete=(id)=>{
  //     const newBlogs=blogs.filter(blog=>blog.id!==id); 
  //     setBlogs(newBlogs);
  // }

 

  return(
    <div className="home">
     {/* <BlogList blogs={blogs} title="All Blogs"/>
     <BlogList blogs={blogs.filter((blog)=>blog.author === "mario")} title="Mario's Blogs"/> */}

     {error && <div> {error}</div>}

     {isPending && <div>Loading...</div>}

     {blogs && <BlogList blogs={blogs} title="All Blogs"/>}

     {/* <button onClick={()=>setName("nikhil")}>Click ME</button>
     <h2>{name}</h2> */}
    </div>
  )
}
 
export default Home;