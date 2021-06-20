import React from 'react';
import { Item } from './Item';

export const ItemList = ({producto}) => {
    
    const listaItems = producto.data.length?producto.data.map((data) => {

    return(
        <Item data={data}/>
    )
    }):<tr><td colSpan={6}>Loading...</td></tr>;

    return (
        <div className="container my-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Titulo</th>
                        <th className="text-center">Descripcion</th>
                        <th className="text-center">Precio</th>
                        <th className="text-center">Imagen</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaItems}
                </tbody>
            </table>
        </div>
    )
}