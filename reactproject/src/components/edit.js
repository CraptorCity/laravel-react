import axios from "axios";
import { useState } from "react";


export default function Edit(props) {
    const { row, index, list } = props;

    const [name, setName] = useState(row.name);
    const [phone, setPhone] = useState(row.phone);

    const onClickUpdate = async () => {
        await axios
        .post('http://127.0.0.1:8000/api/number/update/' + row.id, { name, phone });
        list(true);
    }

    return <tr key={index}>
        <td>{row.id}</td>
        <td><input onChange={(e) => setName(e.target.value)} value={name} type="text"/></td>
        <td><input onChange={(e) => setPhone(e.target.value)} value={phone} type="text"/></td>
        <td>
            <button onClick={onClickUpdate} className={"savebutton"}>Düzenle</button>
        </td>
    </tr>
}