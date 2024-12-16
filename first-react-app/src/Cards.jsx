import './main.css'

function Card({containerName,cards = []}) {
  const itemList = cards;
  const listItems = itemList.map(item => {
    return (
      <>
        <div key={item.key} className="card">
          <img className="card-img" src={item.url} alt={item.contentName} />
          <div className="card-hover-content">
            <div className="card-button-container">
              <div className="card-button-container1">
                <button className="card-button card-button1"><i className="fa-solid fa-play card-button1"></i></button>
                <button className="card-button card-button2">+</button>
                <button className="card-button"><i className="fa-solid fa-thumbs-up card-button3"></i></button>
              </div>
              <div>
                <button className="card-button"><i className="fa-solid fa-chevron-down"></i></button>
              </div>
            </div>
            <div className="card-details">
              <span className="age-rating">{item.ageRating}</span>
              <span>{item.isMovie ? item.duration : item.season}</span>
              <span className="quality">{item.quality}</span>
            </div>
          </div>
        </div>
      </>)
  });
  return (
    <>
      <div className='card-container-header'>{containerName}</div>
      <div className='card-container'>{listItems}</div>
    </>
  );
}
export default Card;