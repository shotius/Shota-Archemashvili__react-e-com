import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { styleClasses } from './styleClasses';

// style depends if attribute is swatch or if it selected
class AttributeButton extends Component {
  render() {
    const { attr, value, selectedAttributes, ...rest } = this.props;
    const { sizeButtonClass } = styleClasses();

    // If type is swatch 
    const isSwatch = attr.type === 'swatch';
    const isSelected = selectedAttributes[attr.id] === value;

    return (
      <Button
        className={sizeButtonClass({
          isSelected,
          isSwatch,
        })}
        style={{
          backgroundColor: isSwatch && value,
          transform: isSelected && isSwatch && 'scale(1.2)',
        }}
        {...rest}
      >
        {!isSwatch && value}
      </Button>
    );
  }
}

AttributeButton.propTypes = {
  attr: PropTypes.any,
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  selectedAttributes: PropTypes.object,
};

export default AttributeButton;
