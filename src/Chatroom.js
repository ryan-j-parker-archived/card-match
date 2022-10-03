import './Chatroom.css';

function Chatroom() {
  return (
    <>
      <div>
        <div className="chatroom">
          <h1>Chatroom</h1>
          <div className="messages">messages</div>
          <div className="squawk">
            <input className="message-input" placeholder="say something" />
            <button className="send-message">Say it!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatroom;