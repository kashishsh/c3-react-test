import React from 'react';
import { shallow } from 'enzyme';

import PearsonUsers from './PearsonUsers';
import User from './../user/User';

const mockUsersWithDuplicates = [
  {id:1},
  {id:1},
  {id:2},
  {id:3}
];

describe('PearsonUsers', () => {
  let component;
  fetch.mockResponse(JSON.stringify({ data: [] }))

  beforeEach(() => {
    component = shallow(<PearsonUsers />);
  });

  it('should render a heading', () => {
    const header = component.find('.heading');

    expect(header.text()).toEqual('Pearson User Management');
  });

  it('should render user component for all user entries in state', (done) => {
    const existingUsersCount = component.state().users.length;

    expect(component.find(User)).toHaveLength(existingUsersCount);
    done();
  });

  it('should be able to remove duplicate users by using removeDuplicateUsers method', () => {
    const users = [...mockUsersWithDuplicates];

    const result = component.instance().removeDuplicateUsers(users);

    expect(result).toEqual(users.slice(1));
  });

  it('should be able to delete user from state by using deleteUser method', () => {
    component.instance().deleteUser(4);

    expect(component.instance().state.users.some(user => user.id === 4)).toEqual(false);
  });
});
