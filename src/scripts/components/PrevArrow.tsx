import React from 'react';
import '../../fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowProps } from '../../interfaces/ArrowProps';


const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div className="customArrow customArrowPrev" onClick={onClick}>
        <FontAwesomeIcon icon = 'chevron-left' />
      </div>
    );
  };


export default PrevArrow;