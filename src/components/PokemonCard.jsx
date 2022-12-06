import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../actions/actions';

const PokemonCard = ({ name, image, types, id, favorite }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addFavorites({ id: id }));
  }

  return(
    <Card style={{width: "240px"}}
    title={name}
    cover={<img src={image} alt={name} />}
    extra={<StarButton isFavorite={favorite} handleClick={handleClick} />}
    >
      <Meta description={types}/>
    </Card>
  )
}

export default PokemonCard;
