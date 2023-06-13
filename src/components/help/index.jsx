import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MdClose } from 'react-icons/md';
import styles from './help.module.scss';
import msg from '../../images/msg.svg';
import calendly from '../../images/calendly.svg';
import email from '../../images/email.svg';
import call from '../../images/call.svg';

function Help() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMailTo = () => {
    setIsOpen(!isOpen);
    window.location.href = 'mailto:example@example.com';
  };

  const handleCallTo = () => {
    setIsOpen(!isOpen);
    window.location.href = 'tel:+1234567890';
  };

  const handleSendMessage = () => {
    setIsOpen(!isOpen);
    setOpen(!open)
  };

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
    setOpen(!open)
  };


  const changeData = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      setUserMsg({ ...userMsg, [e.target.id]: e.target.value });
    } else if (e.key === "Enter") {
      sendData(e)
    }
    setUserMsg({ ...userMsg, [e.target.id]: e.target.value });
  };
  function sendData(e) {
    e.preventDefault();
    console.log(userMsg);
    setUserMsg({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <div className={styles.help}>
      <div className={styles.help__box} >
        {isOpen && (
          <div className={styles.help__list}>
            <button onClick={handleSendMessage} className={styles.help__button}>
              <img src={calendly} alt="calendly" />
            </button>
            <button onClick={handleMailTo} className={styles.help__button}>
              <img src={email} alt="email" />
            </button>
            <button onClick={handleCallTo} className={styles.help__button}>
              <img src={call} alt="call" />
            </button>
          </div>
        )}
        <button className={styles.help__dropdown} onClick={toggleDropdown}>
          <img src={msg} alt="message" />
        </button>
      </div>
      {open && (
        <div className={styles.help__block}>
          <form className={styles.help__form} onSubmit={sendData}>
            <button className={styles.help__close} onClick={() => setOpen(!open)}>
              <MdClose />
            </button>
            <h2 className={styles.help__title}>Book a meeting</h2>
            <p className={styles.help__text}>To book a meeting, fill out the form</p>
            <TextField
              id="name"
              label={"Name"}
              placeholder="John"
              multiline
              value={userMsg.name}
              onChange={changeData}
              onKeyDown={changeData}
              className={styles.help__input}
              variant="standard"
            />
            <TextField
              id="email"
              label={"E-mail"}
              placeholder="example@gmail.com"
              multiline
              value={userMsg.email}
              onChange={changeData}
              onKeyDown={changeData}
              className={styles.help__input}
              variant="standard"
            />
            <TextField
              id="company"
              label={"Сompany"}
              placeholder="Fantom"
              multiline
              onChange={changeData}
              onKeyDown={changeData}
              value={userMsg.company}
              className={styles.help__input}
              variant="standard"
            />
            <TextField
              id="message"
              label={"Message"}
              placeholder="Hi Dear, how are you ?"
              multiline
              rows={2}
              onChange={changeData}
              onKeyDown={changeData}
              value={userMsg.message}
              className={styles.help__input}
              variant="standard"
            />
            <button className={styles.help__send} type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Help;