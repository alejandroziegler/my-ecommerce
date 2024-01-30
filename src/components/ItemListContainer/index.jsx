import ItemCount from "../ItemCount";
import React from "react";
import Title from "../Title";

export const ItemListContainer = ({texto}) => {

    return ( 
        <>
            <Title greeting={texto}/>
            <ItemCount />
        </>
    );
}

export default ItemListContainer;