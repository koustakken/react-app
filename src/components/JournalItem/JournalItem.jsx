import './JournalItem.css';

function JournalItem({ title, date, text }) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);
	return (
		<>
			<h2 className='jouranl-item__header'>{title}</h2>
			<h2 className='jouranl-item__body'>
				<div className='jouranl-date'>{formatedDate}</div>
				<div className='jouranl-item__text'>{text}</div>
			</h2>
		</>
	);
}

export default JournalItem;