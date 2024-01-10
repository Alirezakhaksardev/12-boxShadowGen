import { useState } from "react"

function App() {

  const [FormData , setFormData] = useState({
    hori : 0,
    veri : 0,
    blur : 10,
    spread : 10,
    color : 'black',
  });

  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormData({...FormData , [name] : value});
  }

  return (
    <>
    <div className="app">
        <div className="control">
          <div className="form-group">
             <label>طول افقی</label>
             <input type="range" 
             min="-200"
             max="200"
             className="form-range"
             name="hori"
             value={FormData.hori}
             onChange={e=> handleChange(e)}
             />
          </div>
          <div className="form-group">
             <label>طول عمودی</label>
             <input type="range" 
             min="-200"
             max="200"
             className="form-range"
             name="veri"
             value={FormData.veri}
             onChange={e=> handleChange(e)}
             />
          </div>
          <div className="form-group">
             <label>تاری</label>
             <input type="range"
             min="0"
             max="100"
             className="form-range" 
             name="blur"
             value={FormData.blur}
             onChange={e=> handleChange(e)}
             />
          </div>
          <div className="form-group">
             <label>گسترش رنگ</label>
             <input type="range" 
             min="-100"
             max="50"
             className="form-range" 
             name="spread"
             value={FormData.spread}
             onChange={e=> handleChange(e)}
             />
          </div>
          <div className="form-group">
             <label>رنگ</label>
             <input type="color" 
             name="color"
             value={FormData.color}
             onChange={e=> handleChange(e)}
             />
          </div>
        </div>
        <div className="outpot">
          <div className="box" style={{boxShadow : `${FormData.hori}px ${FormData.veri}px ${FormData.blur}px ${FormData.spread}px ${FormData.color}`}}>
            <p>box-shadow: {`${FormData.hori}px ${FormData.veri}px ${FormData.blur}px ${FormData.spread}px ${FormData.color}`} </p>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
