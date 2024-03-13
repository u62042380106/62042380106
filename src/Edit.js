import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const {id} = useParams();
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    axios.put('http://localhost:1001/edit/'+id, {id, name, code})
    .then(res => {
      console.log(res);
      navigate('/');
      alert('success edit');
  }).catch(err => console.log(err));
  }

  return (
    <div className='Edit'>
      <form onSubmit={handleSubmit}>
        <h1>PATIHAN Edit Users </h1>
        <div>
          <label>กรอกชื่อด้วยหนา</label><br></br>
          <input type='text' name="name" placeholder='Enter Name' 
          onChange={e => setName(e.target.value)} 
          />
        </div><br></br>
        <div>
          <label>รหัสนักศึกษา</label><br></br>
          <input type='code' name="code" placeholder='Enter Name' 
          onChange={e => setCode(e.target.value)}
          />
        </div><br></br>
        <button>ตรงนี้ครับ</button>
      </form>
    </div>
  )
}

export default Edit