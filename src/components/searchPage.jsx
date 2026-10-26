import { InputSearch } from "./inputSearch";
import { SelectSearch } from "./selectSearch";

export const SearchPage = () => {
    const list = [{ nom: "banane", type: "fruit" }, { nom: "orange", type: "fruit" }, { nom: "pomme", type: "fruit" }, { nom: "raisins", type: "fruit" }, { nom: "kiwi", type: "fruit" }, { nom: "tomate", type: "legume" }, { nom: "carotte", type: "legume" }, { nom: "pomme de terre", type: "legume" }, { nom: "navet", type: "legume" }, { nom: "poivron", type: "legume" }]

    return (

        <div>
            <InputSearch />
            <SelectSearch list={list}/>
        </div>

    );
}