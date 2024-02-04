import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import './App.css'
import CreatePost from "../components/CreatePost"
import PostList from "../components/PostList"
import { useState } from "react"
import PostListProvider from "../store/post-list-store"

function App() {

const[selectedTab, setSelectedTab] = useState("Home");


  return  <PostListProvider>

  
  <div className="app-container">
  
<Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
<div className="content">
    <Header></Header>

    <Outlet />
    
<Footer></Footer>
</div>
  </div>
  

  </PostListProvider>

  
  
  
       
    
  
}

export default App
