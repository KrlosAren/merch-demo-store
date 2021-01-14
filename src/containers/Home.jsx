import React from 'react';

import { Helmet } from 'react-helmet';

import initialState from '../initialState';
import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PlatziConf Merch - Productos</title>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@krlosaren' />
        <meta name='twitter:creator' content='@krlosaren' />
        <meta name='twitter:title' content='Platzi Conf Store' />
        <meta name='twitter:description' content='Platzi Conf Store' />
        <meta
          name='twitter:image'
          content='https://s3.amazonaws.com/gndx.dev/gndxdev.png'
        />
        <meta property='og:title' content='Platzi Conf Store' />
        <meta property='og:description' content='Platzi Conf Store' />
        <meta
          property='og:image'
          content='https://s3.amazonaws.com/gndx.dev/gndxdev.png'
        />
        <meta property='og:url' content='platzistore.xyz' />
        <meta property='og:site_name' content='Platzi Conf Store' />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:type' content='article' />
        <meta property='fb:app_id' content='788028837' />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
};

export default Home;
