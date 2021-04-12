import './QuickStats.scss';

const QuickStats = ({ data }) => {
  const current = data[data.length-1];
  const previous = data[data.length-2];
  const { date: cDate, total_active: cActive } = current;
  const { total_active: pActive } = previous;

  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateString = new Date(cDate).toLocaleDateString('en-US', dateOptions);

  const difference = cActive - pActive;
  const direction = difference > 0 ? 'Up' : 'Down';

  const population = 1109909;
  const perHundThou = Math.round(cActive / population * 100000);

  return (
    <section className='QuickStats'>
      <h3 className='QuickStats__heading'>
        <span className='QuickStats__number'>{cActive}</span> active cases on <span className='QuickStats__number'>{dateString}</span>
      </h3>
      <p className='QuickStats__paragraph'>
        Roughly {perHundThou} per 100,000 people
      </p>
      <p className='QuickStats__paragraph'>
      <span className={`QuickStats__${direction === 'Down' ? 'down' : 'up'}`}>{direction} {Math.abs(difference)}</span> from the day before
      </p>
    </section>
  )
}

export default QuickStats;