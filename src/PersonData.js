import React from "react";

const PersonData = (props) => {
    const item = props.personInfo.item;
    const price = props.personInfo.price;
    const date = props.personInfo.date;
    const id = props.personInfo.id;
    // const image = props.personInfo.image;

    const color= "#fc7979";

    return(
    <div>
        <h2>Expense Item: <div style={{color}}>{item}</div></h2>
        <h2>Price: <div style={{color}}>{price}</div>$</h2>
        <h2>Date: <div style={{color}}>{date}</div></h2>
        <h2>Id: <div style={{color}}>{id}</div></h2>
        <div>
        {/* <img src={i} alt="..." style={{width:"400px"}}></img> */}
        </div>
    </div>
    );
}

export default PersonData;