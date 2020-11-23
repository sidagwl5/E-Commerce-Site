import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Container } from 'react-bootstrap';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { getUserList, deleteUser } from '../Store/actions/adminActions';

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const userInfo = useSelector((state) => state.loginUser);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUserList());
    } else {
      history.push('/login');
    }
  }, [userInfo]);

  return (
    <>
      <Container>
        {userList.length > 0 ? (
          <Table bordered responsive hover striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {userList.map((user) => {
                return (
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin.toString()}</td>
                    <td>
                      <Button
                        onClick={() => {
                          if (
                            window.confirm(
                              'You really want to delete the user?'
                            )
                          ) {
                            dispatch(deleteUser(user._id));
                          }
                        }}
                        size='sm'
                        variant='danger'
                      >
                        <MdDelete size='20' />
                      </Button>
                      <Button size='sm' variant='light'>
                        <MdEdit size='20' />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <p>No users present...</p>
        )}
      </Container>
    </>
  );
};

UserListScreen.propTypes = {};

export default UserListScreen;
