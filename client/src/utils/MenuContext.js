import { createContext, useContext } from 'react';

import { useItemReducer } from './reducers';

const MenuContext = createContext();
const { Provider } = MenuContext;

const MenuProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useItemReducer({
		items: [],
		cart: [],
		cartOpen: false,
	});

	return <Provider value={[state, dispatch]} {...props} />;
};

const useMenuContext = () => {
	return useContext(MenuContext);
};

export { MenuProvider, useMenuContext };
