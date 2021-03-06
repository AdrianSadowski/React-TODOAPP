import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { listData, pageContents } from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={listData.title} image={listData.image}/>
    <h2>{pageContents.infoTitle}</h2>
    <p>{pageContents.infoSubtitle}</p>
  </Container>
);

export default Info;