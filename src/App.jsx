import { useState } from "react"
import Header from "./componnets/Header/Header"
import Main from "./componnets/Main/Main"
import Sidebar from "./componnets/Main/Sidebar"
import { BoardContext } from "./componnets/Content/BoardContext"


function App() {
const boarData = {
  active:0,
  boards:[
    {
      name:"My trello Board",
      bgcolor:"#069000",
      list:[
        {id:"1",title:"To do", items:[{id:"cdrft",title:"project Description 1"}]},
        {id:"2",title:"Progres", items:[{id:"cdrfv",title:"project Description 1"}]},
        {id:"3",title:"Done", items:[{id:"cdrfb",title:"project Description 1"}]}
      ]
    }
  ]
}
const [allboard, setAllBoard] = useState(boarData)
  return (
    <>
    <Header></Header>
    <BoardContext.Provider value={{allboard,setAllBoard}} >

    <div className="content flex">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
    </BoardContext.Provider>
    
    </>
  )
}

export default App
