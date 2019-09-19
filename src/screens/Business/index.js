import React from 'react'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Landing from './landing';

export default class BusinessDashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Footer />
      </div>
    )
  }
}