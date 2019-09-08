import React from 'react';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { danishCategories } from './data/danish';
import { AppState } from './store'
import { CategoryModel } from './models/Category';
import { connect } from 'react-redux';


interface AppProps {
  categories: CategoryModel[]
}



class App extends React.Component<AppProps> {
  constructor(props: AppProps){
    super(props);
    this.state = { };
}
  render() {
  return (
    <div className="App">
      <Header />
      <Main list={this.props.categories}/>
      <Footer/>
    </div>
  );
  }
}

const mapStateToProps = (state: AppState) => ({
  categories: state.word.categories,
})

export default connect(mapStateToProps)(App);

