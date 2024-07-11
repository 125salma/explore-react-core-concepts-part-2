import './App.css'
import Counter1 from './Counter1'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'



function App() {
  function handleClcik1(){
    alert('hellow')
  }
  const handleClcik2=()=>{
    alert('button Click')
  }
 const addToFive =num=>{
 alert(num+5)
 }

  return (
    <>

         <h3>React core concept 2</h3>
         <Friends></Friends>
         <Users></Users>
         <Team></Team>
         <Counter1></Counter1>
         
        
         <button onClick={handleClcik1}>Click me</button>
         <button onClick={handleClcik2}>Click me2</button>
         <button onClick={()=>alert('update button call')}>Click me3</button>
         <button onClick={()=>addToFive(25)}>Click me4</button>
      
    </>
  )
}

export default App
