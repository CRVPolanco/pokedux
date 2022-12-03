import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';

const RayquazaImg = "https://png.pngitem.com/pimgs/s/154-1548214_pokemon-rayquaza-hd-png-download.png";

const PokemonCard = ({ name }) => {
  return(
    <Card style={{width: "240px"}} title={name}
    cover={<img src={RayquazaImg} alt="Rayquaza"/>} extra={<StarOutlined />}>
      <Meta description="Dragon, Flyer"/>
    </Card>
  )
}

export default PokemonCard;
