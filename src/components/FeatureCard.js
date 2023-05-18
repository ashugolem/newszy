import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function FeatureCard(props) {
    const [CounterOn, setCounterOn] = useState(false)
    let end = props.value;
   return (
      <div className="col">
        <div data-aos={`fade-${props.animation}`} data-aos-delay="450">
          <ScrollTrigger onEnter={() =>{setCounterOn(true)}} onExit={() =>{setCounterOn(false)}}>
            <span className="fs-2 fw-bold text-primary bg-warning rubberBand animated">
                {CounterOn && <CountUp start={0} end = {end} delay={0.2}/>}+
            </span>
          </ScrollTrigger>
          <p className="fw-normal text-muted">{props.text}</p>
        </div>
      </div>
  )
}

