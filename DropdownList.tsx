import classes from './DropdownList.module.scss';
import React from 'react';

export type DropdownItem = {
  id: string;
  text: string;
};

interface DropdownListProps {
  values: DropdownItem[];
  value: DropdownItem;
  onValueSelect: (newValue: DropdownItem) => void;
}

const DropdownList: React.FunctionComponent<DropdownListProps> = ({ values, value, onValueSelect }) => {
  const listItems = values.map(value => (
    <option key={value.id} value={value.id}>
      {value.text}
    </option>
  ));

  const onValueSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = values.find(value => value.id === event.currentTarget.value) || values[0];

    onValueSelect(selectedValue);
  };

  return (
    <div className={classes.DropdownList}>
      <select className={classes.dropdown} value={value.id} onChange={onValueSelected}>
        {listItems}
      </select>
    </div>
  );
};

export default DropdownList;
