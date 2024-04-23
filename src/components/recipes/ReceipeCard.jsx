import PropTypes from 'prop-types';
import { Icon } from '@iconify-icon/react';

export default function ReceipeCard({ item }) {
  var stopwatch = "raphael:stopwatch"
  //spinning="svg-spinners:clock"
  //static="raphael:stopwatch"
  return (
    <div className='card'>
      <img src={item.source} alt={`An image of ${item.title}`}
        className='rounded w-full object-cover h-32 sm:h-48 lg:h-64' />
      <div className='m-3'>
        <span className='font-extrabold text-lg capitalize'>{item.title} </span>
        <span className='block text-secondary-200 text-sm capitalize'>Recipe by: {item.author}</span>
      </div>
      <div className='timeBadge'>
        <Icon icon={stopwatch} className='inline-block self-start text-lg' />
        <span className='inline-block'>{item.time} mins</span>
      </div>
    </div>
  )
}


ReceipeCard.propTypes = {
  item: PropTypes.shape({
    source: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    time: PropTypes.number
  })
}