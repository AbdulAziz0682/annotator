import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Routes from './routes';

import { Provider } from 'react-redux';
import store from './redux/store';

import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import {create} from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';

import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

const customTheme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#1f2b36d9',
		},
		secondary: {
			main: '#E94646',
			light: '#f1f1f1',
		},
	}
})

const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, jssExtend(), rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});

export default function App(){
	return (
		<ErrorBoundary>
		<Provider store={store}>
			<StylesProvider jss={jss} generateClassName={createGenerateClassName()}>
				<ThemeProvider theme={customTheme}>
					<Routes />
				</ThemeProvider>
			</StylesProvider>
		</Provider>
		</ErrorBoundary>
	)
}