import { createContext, useState } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [ person, setPerson ] = useState({});
    // Provides the current user state (person) and a function to update it (setPerson) to child components through the UserContext
  
    return (
        <UserContext.Provider value={{ person, setPerson }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;