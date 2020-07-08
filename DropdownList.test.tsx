import React from 'react';
//import classes from './DropdownList.module.scss';
import DropdownList from './DropdownList';

import { shallow, ShallowWrapper } from 'enzyme';

describe('DropdownList test suite', () => {
  let wrapper: ShallowWrapper;
  const mockFunction = jest.fn();
  const mockValues = [
    { id: '1', text: 'One' },
    { id: '2', text: 'Two' },
  ];

  beforeEach(() => {
    wrapper = shallow(<DropdownList values={mockValues} value={mockValues[1]} onValueSelect={mockFunction} />);
  });

  it('Should display correct amount of options', () => {
    expect(wrapper.find('option')).toHaveLength(2);
  });

  it('Should call onChange when user selects an item', () => {
    const selectItem = wrapper.find('select');
    selectItem.simulate('change', { currentTarget: { value: '1' } });

    expect(mockFunction).toHaveBeenCalledWith({ id: '1', text: 'One' });
  });

  it('Should display correct value when changed', () => {
    let selectItem = wrapper.find('select');
    expect(selectItem.props().value).toEqual('2');

    wrapper.setProps({ value: mockValues[0] });
    selectItem = wrapper.find('select');

    expect(selectItem.props().value).toEqual('1');
  });
});
