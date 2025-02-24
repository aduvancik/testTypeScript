import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import Pizza from "../models/Pizza";

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

const initState = {
    title: "",
    price: "",
    img: "",
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = useState<{
        title: string;
        price: string;
        img: string;
    }>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target;
        setNewPizza({
            ...newPizza,
            [name]: value
        })        
    };
    console.log(newPizza);
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {title, price, img} = newPizza;

        if(title && price && img) {
            addPizza({
                title,
                price: Number(price),
                img,
                id: Date.now()
            });
            setNewPizza(initState);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Назва"
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                type="text"
                name="price"
                placeholder="Ціна"
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                type="text"
                name="img"
                placeholder="Фото"
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type="submit">+ Додати в меню</button>
        </form>
    );
};

export default AddPizzaForm;
