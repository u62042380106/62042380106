import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:1001/create', {name, code})
    .then(res => {
      console.log(res);
      navigate('/');
      alert('success');
  }).catch(err => console.log(err));
  }

  return (
    <div className='Create'>
      <form onSubmit={handleSubmit}>
        <h1>Create Users NAJA</h1>
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
        <button>กดเพิ่มข้อมูลตรงนี้ครับ</button>
      </form>
    </div>
  )
}

export default Create