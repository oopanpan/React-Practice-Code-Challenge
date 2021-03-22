import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import axios from 'axios'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    sushiIndex: 0,
    startMoney: 100,
    eatenSushiID: []
  }

  componentDidMount(){
    this.getAllSushi()
  }

  getAllSushi = async () => {
    await axios.get(API).then( r => this.setState({allSushi: r.data}))
  }

  currentSushi = () => this.state.allSushi.slice(this.state.sushiIndex, this.state.sushiIndex+4)

  moreSushi = () => {
    if(this.state.sushiIndex+4 >= this.state.allSushi.length){
      this.setState({
        sushiIndex: 0
      })
    } else{
    this.setState( prevState => ({ 
      sushiIndex: prevState.sushiIndex+4 
    }))}
  }

  eatSushi = (id, price) => {
    if(this.state.startMoney - price >= 0){
    this.setState(prevState => ({
      eatenSushiID : [...prevState.eatenSushiID, id],
      startMoney : prevState.startMoney - price
    }))}
    else{
      alert("BOOM SHAKALAKABOOM SHAKALAKA BOOM BOOM")
    }
  }

  addMoney = (e) =>{
    e.preventDefault()
    const additionalMoney = e.target.amount.value
    this.setState(prevState =>({
      startMoney: prevState.startMoney + additionalMoney
    }))
  }

  render() {
    return (
      <div className="app">
        <h1>Hello</h1>
        {console.log(this.currentSushi())}
        <SushiContainer 
                        currentSushi={this.currentSushi()}
                        moreSushi={this.moreSushi}
                        eatSushi={this.eatSushi}
                        eatenSushiID={this.state.eatenSushiID}
                        
        />
        <Table 
                wallet={this.state.startMoney}
                eatenSushi={this.state.eatenSushiID}
                addMoney={this.addMoney}
        />
      </div>
    );
  }
}

export default App;