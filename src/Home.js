import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {

  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:1001/')
    .then(res => setItem(res.data))
    .catch(err => console.log(err));
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:1001/home/'+id)
      window.location.reload();
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='Home'>
      <Link to="/Create" className='btn btn-success'>Add  +</Link>
      <table className='table'>
        <thead>
          <tr>
          <th>ชื่อ</th>
          <th>รหัสนักศึกษา</th>
          <th>ตัวเลือก</th>
          </tr>
        </thead>
        <tbody>
          {
            item.map((data, i)=> (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.code}</td>
                <td><Link to={`Edit/${data.id}`} className='btn'>Update</Link></td>
                <td><Link className='btn btn-danger' onClick={e => handleDelete(data.id)}>Delete</Link></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home