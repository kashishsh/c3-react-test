import React from 'react';
import { shallow } from 'enzyme';

import User from './User';

const mockUser = {
  "id":5,
  "first_name":"Charles",
  "last_name":"Morris",
  "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
};

describe('User', () => {
  let component;
  const onDelete = jest.fn();
  beforeEach(() => {
    component = shallow(<User user={mockUser} onDelete={onDelete}/>);
  });

  it('renders avatar for a user', () => {
    const avatar = component.find('.user__avatar');

    expect(avatar.length).toEqual(1);
  });

  it('renders user name for a user', () => {
    const name = component.find('.user__name');

    expect(name.length).toEqual(1);
  });

  it('renders delete button for a user', () => {
    const button = component.find('.user__delete');

    expect(button.length).toEqual(1);
  });

  it('should call the function passed in props:onDelete as user clicks on delete', () => {
    const fn = jest.fn();
    component.setProps({ onDelete: fn });

    const button = component.find('.user__delete');
    button.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
