import React from 'react';
import '../../fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowProps } from '../../interfaces/ArrowProps';


const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div className="custom-arrow custom-arrow-next" onClick={onClick}>
        <FontAwesomeIcon icon = 'chevron-right' />
      </div>
    );
  };

  export default NextArrow;