import './App.css';
import { Component } from 'react';
import {SearchCmp} from './component/search/search.component'
import {CardList} from './component/card-list/card-list.component';
class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchtxt:''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(response=>this.setState({monsters:response}))
  }

 render(){
  const {monsters,searchtxt}= this.state;
  const filteredMonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchtxt.toLowerCase()));
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchCmp placeholderTxt="Search Monster" handleChange={e=>{
          this.setState({searchtxt:e.target.value})}} />
        <CardList monsters={filteredMonster}/>
        
       </div>
  );
 }
}

export default App;
