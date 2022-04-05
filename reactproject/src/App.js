import './App.css';
import { useEffect, useState } from "react";
import * as api from "./service";
import Edit from "./components/edit";
import Delete from "./components/delete";
const axios = require('axios');

function App() {
  const [isGetList, setIsGetList] = useState(true);
  const [getList, setGetList] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  useEffect(() => {
    if (isGetList) {
      new Promise(function (resolve) {
        resolve(api.get('/number'));
      }).then(r => {
        setGetList(r);
        setName("");
        setPhone("");
        setIsGetList(false);
      });
    }
  }, [isGetList]);
  // useEffect(() => {
  //   if (isGetList) {
  //     axios.get('http://127.0.0.1:8000/api/number')
  //       .then(function (response) {
  //         setIsGetList(false);
  //         setGetList(response.data);
  //       })
  //       .catch(function (error) {
  //         setIsGetList(false);
  //       });
  //   }
  // }, [isGetList]);
  // useEffect(() => {
  //   if (isGetList) {
  //     new Promise(function (resolve) {
  //       resolve(api.get("/number"));
  //     }).then((r) => {
  //       setGetList(r);
  //       setIsGetList(false);
  //       setName("");
  //       setPhone("");
  //     });
  //   }
  // }, [isGetList]);


  const onClickSave = () => {
    axios.post('http://127.0.0.1:8000/api/number/save', { name, phone })
      .then(function (response) {
        setIsGetList(true);
      })
      .catch(function (error) {
      });
    setName("");
    setPhone("");
  }
  const onClickRow = (v) => {
    setSelectedRow(v);
  }
  //   return (
  //     <div className="App">

  //         <input onChange={e => setName(e.target.value)} value={name}/>
  //         <input onChange={e => setPhone(e.target.value)} value={phone}/>
  //         <button onClick={onClickSave}>Kaydet</button>
  //         <table className={"table table-striped table-hover"}>
  //             <thead>
  //             <tr>
  //                 <th></th>
  //                 <th>Adı</th>
  //                 <th>Telefon</th>
  //                 <th></th>
  //             </tr>
  //             </thead>
  //             {
  //                 getList.map((v, i) => {
  //                     if (v === selectedRow) {
  //                         return <Edit row={v} index={i} list={(e)=> setIsGetList(e)}/>
  //                     } else {
  //                         return <tr key={i}>
  //                             <td>{v.id}</td>
  //                             <td>{v.name}</td>
  //                             <td>{v.phone}</td>
  //                             <td></td>
  //                         </tr>
  //                     }
  //                 })
  //             }
  //         </table>
  //     </div>
  // );
  // }

  // export default App;

  return (
    <form>
      <div className="App">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="isim giriniz" className="m-3" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="numarayı giriniz" className="m-3" /> <br></br>
        <button onClick={onClickSave}>Kaydet</button>

        <table className={"table table-striped table-hover"}>
          <thead>
            <tr>
              <th>İd</th>
              <th>İsim</th>
              <th>phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              // getList.map((v, i) => {
              //   if (v === selectedRow) {
              //     return <td><Edit row={v} index={i} list={(e) => setIsGetList(e)} /></td>

              //   }
              //   else {
              //     return <tr onClick={() => onClickRow(v)} key={i}>
              //       <td>{v.id}</td>
              //       <td>{v.name}</td>
              //       <td>{v.phone}</td>
              //       <td></td>
              //     </tr>
              //   }
              // })
              getList.map((v, i) => {
                if (v === selectedRow) {
                  return <Edit key={i} row={v} list={(e) => setIsGetList(e)} />

                } else {
                  return <tr onDoubleClick={() => onClickRow(v)} key={i}>
                    <td>{v.id}</td>
                    <td>{v.name}</td>
                    <td>{v.phone}</td>
                    <td><Delete key={i} row={v} list={(e) => setIsGetList(e)} /></td>
                  </tr>
                }
              })
            }
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default App;