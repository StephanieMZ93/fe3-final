import React, {useContext, useState} from 'react'

import { DARK } from '../common/const';
import Form from '../Components/form/Form'
import ThemeContext from '../context/ThemeContext';

const Contact = () => {
  const {theme} = useContext(ThemeContext);
  const [messageSuccess, setMessageSuccess] = useState();

  return (
    <div className={theme === DARK ? 'dark' : 'light'}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form setMessage={setMessageSuccess}/>
      {messageSuccess && <h4>{messageSuccess}</h4>}
    </div>
  )
}

export default Contact