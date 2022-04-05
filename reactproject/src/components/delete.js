import axios from "axios";  
export default function Delete(props) {
    const { row, list } = props;

    const onClickDelete = async  (e) => {
        e.preventDefault();
        await axios
            .delete("http://127.0.0.1:8000/api/number/delete/" + row.id )
            list(true);
    };
    return (
        <button onClick={onClickDelete}>Sil</button> 
    );
}