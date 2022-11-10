import React from 'react'
import axios from 'axios'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () =>{
  const id = useParams()
  // console.log(id._id);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [ line, setLine] = useState("")
  const [current , setCurrent ] = useState([])
//  console.log(title,description,line);

  
    useEffect(()=>{
        const getOne = async()=>{
          try {
            const res = await axios.get("https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/verse/"+id._id)
            // console.log(res.data);
            setCurrent(res.data)
          } catch (error) {
            console.log(error);
          }
        }
        getOne()
    },[])

    const update = async(e) =>{
      e.preventDefault()
        try {
          const res=await axios.put("https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/updateVerse/"+id._id,
          {title,description,line}
          )
         console.log(res.data);
        } catch (error) {

          
        }
    }

  return (
  
    <form >
     { current &&
     <>
    <div className="input-container">
        <label>title </label>

        <input 
        type="text" 
        value={title}
        defaultValue={current.bible?.title}
        placeholder={current.bible?.title}
        onChange={(e) => setTitle(e.target.value) }
        />
  
      </div>
      <div className="input-container">
        <label>description</label>
        <input
         type="text"
         defaultValue={current.bible?.description}
        placeholder={current.bible?.description}
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
          />
  
      </div>
      <div className="input-container">
        <label>line </label>
        <input 
        type="text"
        defaultValue={current.bible?.title}
        placeholder={current.bible?.line}
         value={line}
         onChange = {(e) => setLine(e.target.value)}
         />
        
      </div>
      <div className="button-container">
        <input type="submit" onClick={update} />
      </div>
      </>
}
    </form>
  
  );

}
export default Update
