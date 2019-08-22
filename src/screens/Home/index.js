import React from 'react'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Landing from './landing';
import Welcome from './welcome';
import Join from './join';
import Business from './business';
import Food from './food';

export default class HomeDashboard extends React.Component {
  render() {
    return (
      <div>

        <Header />

        <Landing />
        <Welcome />

        <Join />
        <Food />

        <Business />
        
        <Footer />

      </div>
    )
  }
}