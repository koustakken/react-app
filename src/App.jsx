import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';

function App() {

	const data = [
		{
			title: 'title 1',
			date: new Date(),
			text: 'text 1'
		}, {
			title: 'title 2',
			date: new Date(),
			text: 'text 2'
		},
		{
			title: 'title 3',
			date: new Date(),
			text: 'text 3'
		}];
	return (
		<>
			<h1>Text</h1>
			<Button />
			<CardButton>
				New
			</CardButton>
			<CardButton>
				<JournalItem
					title={data[0].title}
					date={data[0].date}
					text={data[0].text}
				/>
			</CardButton>
		</>
	);
}

export default App;