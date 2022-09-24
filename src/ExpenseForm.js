import React, {useState} from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [item, changeitem] = useState();
    const [price, changePrice] = useState();
    const [date, changeDate]= useState();
    // const [image, setImage] = useState();

    const itemHandler = (event) => {
        changeitem(event.target.value);
    }
    const priceHandler = (event) => {
        changePrice(event.target.value);
    }
    const dateHandler = (event) => {
        changeDate(event.target.value);
    }
    // const imageHandler = (event) => {
    //     console.log(event.target.value);
    //     setImage(event.target.value);
    // }

    const submitHandler = (event) => {
        event.preventDefault();

        const person = {
            item: item,
            price: price,
            date: date
            // image: image
        }

        console.log(person);
        props.personData(person);
        
        changeitem('');
        changePrice('');
        changeDate('');
    }
    
    return(
        <div className="form">
            <form onSubmit={submitHandler}>
                <div>
                <h1>Expense Form</h1>
                Expense Item: 
                <input type="text" className="formitem" value={item} onChange={itemHandler} placeholder="Enter Item"/>
                </div>
                <div>
                Price: 
                <input type="number" className="formitem" value={price} onChange={priceHandler} placeholder="Enter Price"/>
                </div>
                Date:
                <input type="date" className="formitem" value={date} onChange={dateHandler}/><br/>
                {/* <input type="file" value={image} onChange={imageHandler}/> */}
                <input type="submit" className="formitem" id="submit"/>
            </form>
        </div>
    );
}

export default ExpenseForm;