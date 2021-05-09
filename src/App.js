import React from "react";
import "./App.css";

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: "JSX"
    }
    this.onChangeVisibility = this.onChangeVisibility.bind(this);
  }

  onChangeVisibility(event) {
    this.setState({visible: event.target.value});
  }

  render() {
    const data = [
      {
        id: 1,
        title: "JSX",
        desc:
          "JSX — расширение языка JavaScript. JSX - это XML-подобное расширение синтаксиса для ECMAScript без какой-либо определенной семантики.",
      },
      {
        id: 2,
        title: "Компоненты",
        desc:
          "Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.",
      },
      {
        id: 3,
        title: "Пропсы",
        desc:
          "Props представляет коллекцию значений, которые ассоциированы с компонентом.",
      },
    ];

    const newsCard = ({ id, title, desc }) => {
      return (
        <div
          key={id}
          style={{
            boxSizing: "border-box",
            padding: "10px",
            border: "1px solid black",
            width: "30%",
            borderRadius: "10px",
            margin: "auto"
          }}
        >
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      );
    };

    const selectCard = ({ id, title }) => {
      return <option key={id}>{title}</option>;
    };

    return (
      <div className="App">
        <img
          style={{
            maxWidth: "100%",
          }}
          src="https://habrastorage.org/files/3e5/3da/c0f/3e53dac0f1ad421d84310b552058621f.jpg"
          alt="React"
        />
        <br />
        <select
          style={{
            height: "24px",
            fontSize: "20px",
            marginBottom: "10px",
          }}
          onChange={this.onChangeVisibility}
        >
          {data.map((props) => selectCard(props))}
        </select>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {data.map((props) => this.state.visible === props.title && newsCard(props))}
        </div>
      </div>
    );
  }
}
