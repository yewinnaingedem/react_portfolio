import React from "react" ;
import "../../index.css";

class Drum extends React.Component {

    constructor (props) {
        super(props) ;
        this.state = {
            powerOn : true ,
            input : "" ,
        }
        this.DrumHandle = this.DrumHandle.bind(this);
        this.stateToggle = this.stateToggle.bind(this);
        this.hadleChange = this.hadleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    stateToggle (event) {
        this.setState(state => ({
            powerOn : !state.powerOn ,
        }));
    }
    
    componentDidMount () {
        document.addEventListener('keydown' , this.handleKeyDown);
    }
    handleKeyDown (event) {
        
        this.props.palySong.row1.forEach(el => {
            if (event.key === el.symbol.toLowerCase()) {
                this.DrumHandle(event, el.name);
                return ;
            }
        });
        this.props.palySong.row2.forEach(el => {
            if (event.key === el.symbol.toLowerCase()) {
                this.DrumHandle(event, el.name);
                return ;
            }
        });
        this.props.palySong.row3.forEach(el => {
            if (event.key === el.symbol.toLowerCase()) {
                this.DrumHandle(event, el.name);
                return ;
            }
        });
        
    }
    DrumHandle (event , name){
        if(this.state.powerOn) {
            const parentClass = event.currentTarget ;
            const audioElement = event.currentTarget.querySelector('audio');
            const modifiedName = name.toUpperCase();
            if (audioElement) {
                this.setState({
                    input : modifiedName ,
                });
                audioElement.play().catch(error => {
                    console.error('Error playing the audio:', error);
                });
            } 
        }else {
            alert('Power is OFF!');
        }
    }
    hadleChange (event) {
        this.setState({
            input : event.target.vlaue ,
        })
    }
    render () {
        return (
            <div className="container-fluid drum">
                <div className="drum-container rounded shadow bg-info py-2 px-3" id="drum-machine">
                    <div className="row mb-3">
                        <div className="header col-md-4">
                            <h3 className="">
                                <small className="text-muted text-white"><strong>FCC </strong></small>
                            </h3>
                        </div>
                        <div className="header d-flex justify-content-center align-items-center col-md-4">
                            <input type="text" id='display' value={this.state.input} onChange={this.hadleChange} className="btn bg-white fw-bold text-danger font-monospace"/>
                        </div>
                        <div className="header col-md-4 text-end" >
                            <input type="checkbox" className="btn-check" onChange={this.stateToggle} id="btn-check-outlined" autoComplete="off"  />
                            <label className="btn btn-outline-primary " htmlFor="btn-check-outlined">Power </label>
                        </div>
                    </div>
                    <div className="drum-body ">
                        <div className="row w-100 m-auto gap-1 mb-2">
                            {this.props.palySong.row1.map((el, index) => (
                                <div className="col rounded drum-play    shadow bg-warning cursor-pointer" key={index} onClick={(event) => this.DrumHandle(event, el.name)}>
                                    <div className="d-flex w-100 drum-pad  justify-content-center align-items-center" >
                                        <strong className="">{el.symbol}</strong>
                                        <audio className="d-none" id={el.symbol} src={el.musice}  controls  />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row w-100 m-auto gap-1 mb-2">
                            {this.props.palySong.row2.map((el,index) => (
                                <div className="col rounded drum-play shadow bg-warning cursor-pointer" key={index} onClick={(event) => this.DrumHandle(event, el.name)}>
                                    <div className="d-flex w-100 drum-pad justify-content-center align-items-center " >
                                        <strong>{el.symbol}</strong>
                                        <audio className="d-none" id={el.symbol} src={el.musice}  controls />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row w-50 m-auto gap-1 mb-2">
                            {this.props.palySong.row3.map((el ,index) => (
                                <div className="col rounded drum-play shadow bg-warning cursor-pointer"  key={index} onClick={(event) => this.DrumHandle(event, el.name)}>
                                    <div className="d-flex drum-pad w-100  justify-content-center align-items-center ">
                                        <strong>{el.symbol}</strong>
                                        <audio className="d-none" id={el.symbol} src={el.musice}  controls />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const palySong = {
    row1 :  [
        {name : "header 1" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" , symbol : "Q"},
        {name : "header 2" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" , symbol : "W"},
        {name : "header 3" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" , symbol : "E"},
        {name : "header 4" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" , symbol : "A"},
    ] ,
    row2 : [
        {name : "clap" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" , symbol : "S"},
        {name : "open HH" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" , symbol : "D"},
        {name : "kick Not Hat" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" , symbol : "Z"},
    ] ,
    row3 : [
        {name : "kick" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" , symbol : "X"},
        {name : "close" , musice  : "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" , symbol : "C"},
    ]
}
Drum.defaultProps = {
    palySong 
}

export default Drum ;