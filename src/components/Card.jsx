const Card = ({ image, selected, onClick }) => {


  return (
    <>
      <div className="card">
        <div className={selected && 'selected'}>
          <img src={image} className="card-face" />

          <img
            className="card-back"
            src={'/assets/question.png'}
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};

export default Card;