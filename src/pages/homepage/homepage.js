import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles/styles.scss';
import Directory from '../../components/directory/directory';

const HomePage = ({ history }) => (
  <div className='homepage'>
    <button onClick={() => history.push('/ds')}>Click</button>
    <Directory />
  </div>
);
export default withRouter(HomePage);
