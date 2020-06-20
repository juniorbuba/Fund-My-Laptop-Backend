/**
 * @author Buba Mohammed Auwal
 * *Task: Delete User Route (TEST)
 */
const dbHandler = require('./db-handler');
const userService = require('../src/services/UserService');
//delete this import before PR

beforeAll(async () => await dbHandler.connect());

// clear all test data after every test.
afterEach(async () => await dbHandler.clearDatabase());

// Remove and close the db and server.
afterAll(async () => await dbHandler.closeDatabase());

//make sure delete user functions exists
test('Delete user function exists', () => {
        expect(typeof functions.delete).toEqual('function');
});

describe('user', () => {
  it('can be deleted successfully', async () => {
    expect(async () => await userService.delete(mockUser))
      .not.toThrow();
  });
});

const mockUser = {
  name: 'Adiran Jackson',
  email: 'example@gmail.com',
  password: 'passwordispassword',
};

