import React from 'react';

import './AppBody.css';

const AppBody: React.FC<{ header: string; quote: string }> = ({ header, quote, children }) => (
  <section className="app-body">
    <section className="body-content">
      <h2>{header}</h2>
      <blockquote>{quote}</blockquote>
    </section>
    {children && <div className="children-area">{children}</div>}
  </section>
);

export default AppBody;
