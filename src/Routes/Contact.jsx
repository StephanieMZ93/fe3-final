import React, {useContext} from 'react'

import { DARK } from '../common/const';
import Form from '../Components/Form'
import ThemeContext from '../context/ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme === DARK ? 'dark' : 'light'}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact