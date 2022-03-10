import './App.css';
import React from 'react'
import BasicInfo from './components/BasicInfo'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: '',
        number: '',
        birthDate: '',
      },
      people: [
        {
          name: "Billy Shmilly",
          number: "504-774-4564",
          birthDate: "08/20/2000",
        },
        {
          name: "Zeke Shmeke",
          number: "124-254-4004",
          birthDate: "01/04/1999",
        },
        {
          name: "Bart Simpson",
          number: "747-865-4323",
          birthDate: "09/13/2002",
        },
      ]
  }
}
  render() {
    return this.state.people.map(function (person, index) {
      return <BasicInfo key="{index}" person={person} />;
    })
  };
}


export default App;
