import React from "react";
import {
  Button,
  Cards,
  MainContainer,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";


const RecipeCard = () => {

  return (
    <MainContainer>
    hjghjg
      {[].map((a) => (
        <Cards >
          <RecipeHeader> </RecipeHeader>

          <RecipeImage src={a.recipe.image} />
          <Button >
            Details
          </Button>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
