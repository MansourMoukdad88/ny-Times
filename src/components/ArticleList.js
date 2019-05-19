import React from 'react';

const ArticleList = (props) => {
  if( props.ele.byline === "" ){
    return (
      <div className="data-container">
        <div className="content">
            <div className="circle"></div>
            <div className="date-content-container">
            <a className="articleTitle" href={props.ele.url}><div>{props.ele.title}</div></a>
              <div className="date-author ">
              <span className="author"></span>
                <span > <i className="fa fa-calendar" aria-hidden="true" style={{color: "gray"}}></i>{props.ele.published_date}</span>
              </div>
            </div>
            <a href={props.ele.url}><div className="next"><i className="fa fa-angle-right" style={{fontSize:36, color: "gray"}}></i></div></a> 
        </div>
      </div>
    );
  } else {
      return(
        <div className="data-container">
          <div className="content">
            <div className="circle"></div>
            <div className="date-content-container">
            <a className="articleTitle" href={props.ele.url}><div>{props.ele.title}</div></a>
              <div className="date-author">
                <span className="author">{props.ele.byline}</span>
                <span ><i className="fa fa-calendar" aria-hidden="true" style={{color: "gray"}}></i>{props.ele.published_date}</span>
              </div>
            </div>
            <a href={props.ele.url}><div className="next"><i className="fa fa-angle-right" style={{fontSize:36, color: "gray"}}></i></div></a> 
          </div>
        </div>
      );
    }
}
   
export default ArticleList;