import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

    getMovies = async () => {
      const {
        data:{
          data:{ movies }
        }
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    
      this.setState({ movies, isLoading: false})
  };      //async await : (js에게) 조금 시간이 필요하니 잠시 기다리라고 하는것

  componentDidMount(){
    this.getMovies(); 
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container"> {isLoading ?                                          //삼항연산(조건) 
        (<div className="loader"><span className="loader__text">Loading...</span></div>) :  //삼항연산(참일때)
        (<div className="movies">{movies.map(movie=>{                                       //삼항연산(거짓일때)
              return <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}>
              </Movie>
            })}
          </div>
         )}
      </section>
    )
  }
}
  
export default App;
