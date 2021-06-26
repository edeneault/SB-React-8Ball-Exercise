import React, { useState } from 'react';
import '../css/Eightball.css';

function random(arr) {
    const randId = Math.floor(Math.random() * arr.length);
    return arr[randId]
}

const EightBall = (props) => {
    const [wobble, setWobble] = useState(0);
    const [msg, setMsg] = useState("Think of a Question.");
    const [color, setColor] = useState("black");
    
    const runWobble = () => {
        const { msg, color } = random(props.answers);
        setWobble(1);    
        setMsg(msg);
        setColor(color);    
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(runWobble, 500);
        e.target.reset();
    }

    return (
        <>
            <div
                className={"eightball-shake"}
                onAnimationEnd={() => setWobble(0)}
                wobble={wobble}
            >
                <div className="eightball">
                    <div className="arrow-down"
                        style={{ borderBottomColor: color }}>
                        <p>{msg}</p>
                    </div> 
                </div>
                
                <form className="form" onSubmit={handleSubmit}>
                    <input type='text' name='title' placeholder='ask a question' />
                    <button type='submit'>Shake</button>   
                </form>

            </div>
            
        </>
    )
}

export default EightBall;