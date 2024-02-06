
import Header from "./Header.js";
import Content from "./Content";
import Footer from './Footer';
import { useState } from 'react';
import AddItem from "./AddItem.js";
import SearchItems from "./SearchItems.js";

function App(){
  const [items,setItems]=useState(JSON.parse
    (localStorage.getItem("todo_list")));

    const handleCheck=(id)=>{
      const listItems=items.map((item)=>
        item.id===id ? {...item,checked:!item.checked}:item)
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))

      }

   const handleDelete=(id)=>{
    const ItemList =items.filter((item)=>
      item.id!==id)
      setItems(ItemList)
      localStorage.setItem("todo_list",JSON.stringify(ItemList))
    }

    const [newItem,setNewItem]=useState('')
   
    const addItem=(item)=>{
      const id = items.length ? items[items.length-1].id +1 : 1 ;
    const addNewItem = {id,checked:false,item}
    const listItems =[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
     
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log('submitted')
      if(!newItem) return;
      addItem(newItem)
      setNewItem('')

    }
     
    const[search,setSearch]=useState('')
   
  return(
  <div className="App">
  <Header />

  <AddItem 
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmit={handleSubmit}
  />

  <SearchItems 
    search={search}
    setSearch={setSearch}
  />

  <Content
   items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
   handleCheck={handleCheck}
   handleDelete={handleDelete}
  />

  <Footer
    length={items.length}
  />
  </div>
  )
  }
export default App;
