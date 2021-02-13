import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    let petType = event.target.value
    this.setState({
      filters: {
        ...this.state.filters,
        type: petType
      } 
    })
  }

  onFindPetsClick = () => {
    let petsURL = "/api/pets"
    let petType = this.state.filters.type

    if (petType !== "all") {
      petsURL = petsURL + `?type=${petType}`
    }

    fetch(petsURL)
    .then(response => response.json())
    .then(petList => this.updatePets(petList))
  }

  updatePets = (petList) => {
    this.setState({
      pets: petList
    })
  }

  onAdoptPet = (petID) => {
    let pets = this.state.pets.map(pet => {
      return pet.id === petID ? {...pet, isAdopted: true} : pet
    })
    this.setState({
      pets: pets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
