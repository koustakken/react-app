import React from 'react';

import './App.css';

import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Body from './layouts/Body/Body'

import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'title 1',
	// 	date: new Date(),
	// 	text: 'text 1'
	// },
	// {
	// 	id: 2,
	// 	title: 'title 2',
	// 	date: new Date(),
	// 	text: 'text 2'
	// },
	// {
	// 	id: 3,
	// 	title: 'title 3',
	// 	date: new Date(),
	// 	text: 'text 3'
	// }
];

function App() {

	const [items, setItems] = React.useState(INITIAL_DATA);

	const addItem = (item) => {
		setItems(prev => [...prev, {
			text: item.post,
			title: item.title,
			date: new Date(item.date),
			id: prev > 0 ? Math.max(...prev.map(i => i.id)) + 1 : 1
		}]);
	}

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	);
}

export default App;