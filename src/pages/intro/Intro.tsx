
import { useEffect, useRef, useState } from 'react';
import './Intro.css'
function Intro() {

    const svgRef = useRef<HTMLDivElement>(null);
    const topRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const [ show, setShow ] = useState(true);
    const closeTitle = () =>{
        let top = topRef.current;
        let bottom = bottomRef.current;
        if(top && bottom){
            top.className += " close_active";
            bottom.className += " close_active";
        }
    }
    useEffect(()=>{
      let timer = setTimeout(()=>{ setShow(false) }, 5000);
      return ()=>{ clearTimeout(timer) }
    });
    return(
        <>
        <div ref={topRef} className="bar top">
            
        </div>
        <div className="intro_wrap" ref={svgRef}>
            <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet" />
            <svg viewBox="0 0 1320 300">
                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                    KEVIN`s WEB
                </text>
            </svg>
            {!show && <div className="intro_btn" onClick={closeTitle}>
                go site
            </div>	}
        </div>
        <div ref={bottomRef} className="bar bottom">
            
        </div>
        </>
    )
}

export default Intro;