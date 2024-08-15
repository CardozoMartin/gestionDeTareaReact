import Header from "./componnets/Header/Header"
import Main from "./componnets/Main/Main"
import Sidebar from "./componnets/Main/Sidebar"


function App() {


  return (
    <>
    <Header></Header>
    <div className="content flex">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
    </>
  )
}

export default App
