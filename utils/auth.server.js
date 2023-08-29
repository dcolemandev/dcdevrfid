import { getObj } from './session.server'; // Import your storage functions

// Define a constant for the user key
const USER_KEY = 'user';

// Function to check if a user is authenticated
export const isAuthenticated = async () => {
  try {
    const user = await getObj(USER_KEY);
    return !!user; // Returns true if a user object exists, false otherwise
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false; // Return false in case of an error
  }
};

// Function to get the authenticated user
export const getAuthenticatedUser = async () => {
  try {
    const user = await getObj(USER_KEY);
    return user || null; // Returns the user object or null if not found
  } catch (error) {
    console.error('Error getting authenticated user:', error);
    return null; // Return null in case of an error
  }
};
