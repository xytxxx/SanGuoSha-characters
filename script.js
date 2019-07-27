

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        characters: CHA,
        appName: 'Search SanGuoSha Characters',
        result: undefined };
  
    }
    searchData(e) {
      let input = e.target.value.trim().toUpperCase().replace(" ","").replace(".","");
      
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
        [
          React.createElement("h1", null, this.props.name),
          React.createElement("h2", null, "with the number on the bottom right of the character card")
        ])
      );
    }}
  
  class SearchBar extends React.Component {
    render() {
      return (
        React.createElement("div", null,
        React.createElement("input", { onChange: this.props.search, 
            placeholder: "e.g. 'WU001' or 'wu 003'" })));
    }}
  
  class Character extends React.Component {
    
    render() {
      if (this.props.result) {
        let c = this.props.result;
        var uri = encodeURI("https://www.google.com/search?tbm=isch&q=" + 
                c.name + " Sanguosha")
        return (
          React.createElement("div", null, 
          [
            React.createElement("h2", {key: "name"}, c.name),
            React.createElement("a", {href: uri, key: "link"}, "images"),
            c.abilities.map(function(desc) {
              return React.createElement('p', {key: Math.random()}, desc);
            })
          ])
        );
      } else {
        return null;
      }
    }
  }
  
  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));