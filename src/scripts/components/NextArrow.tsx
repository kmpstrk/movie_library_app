import React from 'react';
import '../../fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowProps } from '../../interfaces/ArrowProps';


const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div className="customArrow customArrowNext" onClick={onClick}>
        <FontAwesomeIcon icon = 'chevron-right' />
      </div>
    );
  };

  export default NextArrow;