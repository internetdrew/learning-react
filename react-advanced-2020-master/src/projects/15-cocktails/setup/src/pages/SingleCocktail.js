import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const res = await fetch(`${url}${id}`);
        if (!res.ok) {
          setCocktail(null);
        }
        const data = await res.json();
        const {
          strDrink: name,
          strAlcoholic: type,
          strCategory: category,
          strGlass: glass,
          strDrinkThumb: image,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];

        const newCocktail = {
          name,
          image,
          type,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>;
  }

  const { name, image, type, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>type:</span>
            {type}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions.split(',').map((instruction, index) => {
              return (
                <span key={index}>
                  {index + 1}. {instruction}
                </span>
              );
            })}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? (
                <span key={index}>
                  {ingredient}
                  {ingredients[index + 1] ? ',' : ''}
                </span>
              ) : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
