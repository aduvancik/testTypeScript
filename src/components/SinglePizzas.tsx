import React, { FC, useState } from "react";
import Pizza from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}
const SinglePizza: FC<SinglePizzaProps> = ({
    pizza,
    updatePizza,
    deletePizza,
}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    };

    const handleDeletePizza = () => {
        deletePizza(pizza.id);
    }

    return (
        <>
            <div className="pizza">
                {!edit ? (
                    <>
                        <img src={`/images/${pizza.img}.img`} alt={pizza.img} />
                        <h2>{pizza.title}</h2>
                        <span>{pizza.price} грн</span>
                        <button type="button" onClick={handleToggleEdit}>
                            Редагувати
                        </button>
                        <button type="button" onClick={handleDeletePizza}>
                            видалити
                        </button>
                    </>
                ) : (
                    <EditPizzaForm
                        data={pizza}
                        updatePizza={updatePizza}
                        handleToggleEdit={handleToggleEdit}
                    />
                )}
            </div>
        </>
    );
};

export default SinglePizza;
