import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App, Home } from 'containers';

/* Set local */
import { addLocaleData, IntlProvider } from 'react-intl';
import * as locale from 'locale';
import getLang from 'utils/getLang';

import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';

addLocaleData([...en, ...ko]);

const defaultLang = getLang().split('-')[0];

ReactDOM.render(
  <IntlProvider locale={defaultLang} messages={locale[defaultLang]}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </IntlProvider>,
  document.getElementById('root')
);
