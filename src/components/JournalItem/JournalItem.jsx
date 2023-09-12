import './JournalItem.css'

function JournalItem({ data }) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(data.date)
	return (
		<>
			<h2 className='jouranl-item__header'>{data.title}</h2>
			<h2 className='jouranl-item__body'>
				<div className='jouranl-date'>{formatedDate}</div>
				<div className='jouranl-item__text'>{data.text}</div>
			</h2>
		</>
	)
}

export default JournalItem