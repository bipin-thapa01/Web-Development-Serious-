function Card(props){
  return(
    <div className="card">
      <img className="card-img" src={props.contentURL} alt={props.contentName} />
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
          <span className="age-rating">{props.ageRating}</span>
          <span>{props.isMovie ? props.duration : props.season}</span>
          <span className="quality">{props.quality}</span>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  contentURL : "",
  contentName : "Unknown",
  ageRating : 'N/A',
  isMovie : true,
  duration : 'N/A',
  season : 'Limited Series',
  quality : 'HD', 
};

export default Card;