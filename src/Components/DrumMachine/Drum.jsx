import React from "react" ;
import "../../index.css";

const palySong = [
    {name : "header1" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"},
    {name : "header2" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"},
    {name : "header3" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"},
    {name : "header4" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"},
    {name : "clap" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"},
    {name : "openHH" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"},
    {name : "kickNotHat" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"},
    {name : "kick" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"},
    {name : "close" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"},
]

class Drum extends React.Component {

    constructor (props) {
        super(props) ;
        this.state = {
            powerOn : true ,
        }
        this.DrumHandle = this.DrumHandle.bind(this);
        this.stateToggle = this.stateToggle.bind(this);
    }
    stateToggle () {
        this.setState(state => ({
            powerOn : !state.powerOn ,
        }));
    }
    DrumHandle (event){
        if(this.state.powerOn) {
            const value = event.currentTarget.querySelector('strong').innerText ;
            console.log(value);
        }else {
            console.log('power of');
        }
    }
    render () {
        return (
            <div className="container-fluid drum">
                <div className="drum-container rounded shadow bg-info py-2 px-3 ">
                    <div className="row mb-3">
                        <div className="header col-md-4">
                            <h3 className="">
                                <small className="text-muted text-white"><strong>FCC </strong></small>
                            </h3>
                        </div>
                        <div className="header d-flex justify-content-center align-items-center col-md-4">
                            <input type="text" className="btn bg-white"/>
                        </div>
                        <div className="header col-md-4 text-end" onClick={this.stateToggle}>
                            <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off"  />
                            <label className="btn btn-outline-primary bg-black" htmlFor="btn-check-outlined">Power </label>
                        </div>
                    </div>
                    <div className="drum-body ">
                        <div className="row w-100 m-auto gap-1 mb-2">
                            <div className="col rounded drum-pad shadow bg-warning" onClick={this.DrumHandle}>
                                <div className="d-flex w-100  justify-content-center align-items-center ">
                                    <strong>Q</strong>
                                </div>
                            </div>
                            <div className="col rounded drum-pad bg-warning" onClick={this.DrumHandle}>
                                <div className="d-flex w-100  justify-content-center align-items-center ">
                                    <strong>W</strong>
                                </div>
                            </div>
                            <div className="col rounded drum-pad bg-warning " onClick={this.DrumHandle} >
                                <div className="d-flex w-100  justify-content-center align-items-center ">
                                    <strong>E</strong>
                                </div>
                            </div>
                            <div className="col rounded drum-pad bg-warning" onClick={this.DrumHandle}>
                                <div className="d-flex w-100  justify-content-center align-items-center ">
                                    <strong>A</strong>
                                </div>
                            </div>
                        </div>
                        <div className="row w-100 m-auto gap-1 mb-2">
                            <div className="col rounded drum-pad bg-warning" onClick={this.DrumHandle} >
                                <div className="d-flex w-100  justify-content-center align-items-center ">
                                    <strong>S</strong>
                                </div>
                            </div>
                            <div className="col rounded drum-pad bg-warning" onClick={this.DrumHandle} >
                                <div className="d-flex w-100  justify-content-center align-items-center ">
                                    <strong>D</strong>
                                </div>
                            </div>
                            <div className="col rounded drum-pad bg-warning" onClick={this.DrumHandle}>
                                <div className="d-flex w-100  justify-content-center align-items-center ">
                                    <strong>Z</strong>
                                </div>
                            </div>
                        </div>
                        <div className="row w-50 m-auto gap-1 mb-2">
                            <div className="col rounded drum-pad bg-warning" onClick={this.DrumHandle} >
                                <div className="d-flex w-100  justify-content-center align-items-center ">
                                    <strong>X</strong>
                                </div>
                            </div><div className="col rounded drum-pad bg-warning"onClick={this.DrumHandle} >
                                <div className="d-flex w-100  justify-content-center align-items-center ">
                                    <strong>C</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Drum ;