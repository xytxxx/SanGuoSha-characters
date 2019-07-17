

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        characters: CHA,
        appName: 'Search SanGuoSha Characters',
        result: undefined };
  
    }
    searchData(e) {
      let input = e.target.value.trim().toUpperCase();
      
      if (input != '' && input in this.state.characters) {
        console.log(input);
        this.setState({ result: this.state.characters[input] });
      } else {
        this.setState({ result: null });
      }
    }
    render() {
      return (
        React.createElement("div", null,
        React.createElement(Header, { name: this.state.appName }),
        React.createElement(SearchBar, { search: this.searchData.bind(this) }),
        React.createElement(Character, { result: this.state.result })));
    }}
  
  class Header extends React.Component {
    render() {
      return (
        React.createElement("div", null,
        React.createElement("h1", null, this.props.name)));
    }}
  
  class SearchBar extends React.Component {
    render() {
      return (
        React.createElement("div", null,
        React.createElement("input", { onChange: this.props.search, 
            placeholder: "Search Card Number on Bottom Right (e.g. WU001)" })));
    }}
  
  class SearchResult extends React.Component {
    render() {
      return (
        React.createElement("div", null,
        React.createElement("ul", null,
        this.props.data.map(function (value) {
          return React.createElement(Item, { key: value, val: value });
        }))));
    }}

  class Character extends React.Component {
    
    render() {
      if (this.props.result) {
        let c = this.props.result;
        return (
          React.createElement("div", null, 
          [
            React.createElement("h3", {key: "name"}, c.name),
            c.abilities.map((desc) => {
              return React.createElement('p', {key: Math.random()}, desc);
            })
          ])
        );
      } else {
        return null;
      }
    }
  }
  
  class Item extends React.Component {
    render() {
      return (
        React.createElement("li", null,
        this.props.val));
    }}
  
  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));