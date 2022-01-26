import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage: storage,
	
  };
const pReducer = persistReducer(persistConfig, reducers);

export 	let store = createStore(
		pReducer,
		composeWithDevTools(
			applyMiddleware(thunk)
		)
	)
export	let persistor = persistStore(store);
	
  

	
	


