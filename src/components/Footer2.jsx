import React, { Component } from 'react'


class Footer2 extends Component {
  constructor() {
    super();
    this.state = {
      key1: 'footer',
      
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ key1: "footer"})
      /* if (document.getElementById('footer').classList.contains('invisible')) {
        document.getElementById('footer').classList.remove('invisible')
        document.getElementById('footer').classList.add('footer')
      } */
    }, 2000)
  }


  render() {
    return (
      <div /* id='footer' */ className={this.state.key1}
      onClick={
        () => this.setState({ key1: "invisible"})}>{this.props.date}</div>
    )
  }
}

export default Footer2