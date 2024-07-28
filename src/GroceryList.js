import { Component } from "react";
import check from './checked.png';

export class GroceryList extends Component {
    
        state = {
            userInput: "",
            groceryList: []

        }

        
        onChangeEvent(e){
            this.setState({userInput: e});
            
        }

        addItem(input) {
            if (input === '') {
                alert ('Plese enter an item!')
            }
            else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ""})
            }
        }

        crossedWord(event) {
            const li = event.target;
            li.classList.toggle('crossed');
        }

        deleteItem() {
            let listArray = this.state.groceryList;
            listArray = [];
            this.setState({groceryList: listArray})
        }
        onFormSubmit(e) {
            e.preventDefault();          
        }
    

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>  
            <div className="container">
                <input type="text" 
                placeholder="What do you want to buy today?" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
                
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => {
                   return <li onClick={this.crossedWord} key={index}>
                   <img src={check} width='30px' alt='bag'/>
                   {item}</li>
                })}
            </ul>
            <div className="container">
            <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>  
            </div>
        )
    }

}