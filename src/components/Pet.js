import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a href="#here" className="header">
            {/*'♀' OR '♂' */}
            <span>{this.props.pet.name}</span> <span style={{ fontSize: 27, lineHeight: 1, position: "relative", top: 3 }}>{(this.props.pet.gender === "female") ? "♀" : "♂"}</span>
          </a>
          <div className="meta">
            <span className="type" style={{ textTransform: "capitalize" }}>{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} yrs</p>
            <p>Weight: {this.props.pet.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.pet.isAdopted ? 
          (<button className="ui disabled button">Already adopted</button>) :
          (<button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>)
        }
        </div>
      </div>
    )
  }
}

export default Pet
