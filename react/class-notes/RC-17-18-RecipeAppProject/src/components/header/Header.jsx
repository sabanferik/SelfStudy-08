import React, { useContext } from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./HeaderStyles";
import { RecipeContext } from "../../context/RecipeProvider";
import Login from "../../pages/login/Login";

const Header = () => {

const {setQuery,setMealtype,getData}=useContext(RecipeContext)

const handleSubmit=(e)=>{
e.preventDefault()
getData()
}
  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>

      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e)=>setQuery(e.target.value)}
        />

        <Button type="submit">Search</Button>

        <Select
          name="ogunTypes"
          id="ogunTypes"

          onChange={(e)=>setMealtype(e.target.value)}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="TeaTime">TeaTime</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
