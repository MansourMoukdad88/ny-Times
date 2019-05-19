import React, { Component} from 'react';
import ArticleList from './ArticleList';
import axios from "axios"

class Article extends Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  componentDidMount=()=>{
    axios.get("https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=qG808Xn6G5zAb6Wm0e6hS52JQjS6L2Er")
    .then(response => {
      console.log(response.data.results)
      this.setState({
        data:response.data.results
    })
    })
  }
  render(){
    //console.log("data",this.state.data)
    return (
      <div>
        {this.state.data.map((ele, i)=>{
          return <ArticleList key={i} ele={ele}/>
        })}              
      </div>
    )
  }
}

export default Article;