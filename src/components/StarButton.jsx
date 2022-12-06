import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const StarButton = ({ isFavorite, handleClick }) => {

  return (
    <Button icon={isFavorite ? <StarFilled /> : <StarOutlined />} onClick={handleClick}></Button>
  )
}

export default StarButton;
