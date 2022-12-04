import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = ({ name, image, types }) => {
  return(
    <Card style={{width: "240px"}}
    title={name}
    cover={<img src={image} alt={name} />}
    extra={<StarOutlined />}
    >
      <Meta description={types}/>
    </Card>
  )
}

export default PokemonCard;
