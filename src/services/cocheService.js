import axios from "axios";

const url = "http://localhost:3000/coches";


const getCoches = () => axios.get(url);
const getModeloCoche = (modelo) => axios.get(`${url}?modelo=${modelo}`);
const getCochesId = (id) => axios.get(`${url}/${id}`);
const addCoche = (coche) => axios.post(url, coche);
const editCoche = (id, coche) => axios.put(`/coches/edit/${id}`, coche);
const deleteCoche = (id) => axios.delete(`${url}/${id}`);


export {
    getCoches,
    getModeloCoche,
    getCochesId,
    addCoche,
    editCoche,
    deleteCoche
}