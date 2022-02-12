import PropTypes from 'prop-types';
import { Component } from 'react';
import dropdownIcon from '../../../assets/icons/dropdownIcon.svg';
import { CATALOG_ROUTE } from '../../../config/constants';
import { Button } from '../../atoms/buttons/Button';
import NavButton from '../../atoms/buttons/NavButton';
import { PopoverOverlay } from '../../molecules/overlays/Overlay';
import { Popover } from '../../molecules/Popover/inex';
import PopoverBody from '../../molecules/Popover/PopoverBody';
import PopoverTrigger from '../../molecules/Popover/PopoverTrigger';
import VStack from '../../molecules/VStack';
import { styleClasses } from './styleClasses';

class MoreCategories extends Component {
  render() {
    const { categories, isOpen, onToggle } = this.props;
    const { dropdownClass } = styleClasses.call(this);
    return (
      <Popover className="category-popover">
        <PopoverOverlay isOpen={isOpen} cb={onToggle} />
        <PopoverTrigger>
          <Button onClick={onToggle}>
            <img
              src={dropdownIcon}
              className={dropdownClass}
              alt="open more categories"
            />
          </Button>
        </PopoverTrigger>
        <PopoverBody isOpen={isOpen} className="-bg-white">
          <VStack>
            {categories.map((category) => (
              <NavButton
                key={category}
                onClick={onToggle}
                to={`${CATALOG_ROUTE}/${category}`}
              >
                {category}
              </NavButton>
            ))}
          </VStack>
        </PopoverBody>
      </Popover>
    );
  }
}

MoreCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MoreCategories;
