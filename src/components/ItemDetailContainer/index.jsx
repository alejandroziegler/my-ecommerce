import React,{useState, useEffect} from 'react';

import ItemDetail from '../ItemDetail'
import {useParams} from 'react-router-dom';
const {categiriaId} = usePatams();
const films = [
    { id: 1, image: "https://hbomax-images.warnermediacdn.com/images/GYGP7pwOv_OjDXAEAAAFc/tileburnedin?size=1280x720&partner=hbomaxcom&language=es-4198v=a286f1f6bfc7903f33b83456e214c8&host-art-gallery-latam.api.hbo.comßw=1280", categori:'films', title: "Interestellar" },

    {id: 2, image: "https://walmarthn.vtexassets.com/arquivos/ids/248906/Manzana-Verde-Unidad-1-24949.jpg?v=637969954121000000", categori:'films', title: "Star trek" },

    {id: 3, image: "https://www.lavidalucida.com/wp-content/uploads/2017/04/Tarta-de-manzana.jpg",
    categori:'series', title: "Ronin" },
];

export const ItemDetailComponent = () => {
    const [data, setbata] = usestate({});
    const {detalleId} = usePatams();
    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout (() => {
                resolve(films);
            },3000);
        });
        getData. then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailComponent;