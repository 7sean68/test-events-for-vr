import "./App.css";
import { useEffect, useState } from "react";

const EVENTS_TO_TEST = [
  // mouse events
  "click",
  "contextmenu",
  "dblclick",
  "mousedown",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "wheel",

  // touch events
  "touchcancel",
  "touchend",
  "touchmove",
  "touchstart",

  // scroll
  "scroll",

  // drag
  "drag",
  "dragend",
  "dragenter",
  "dragleave",
  "dragover",
  "dragstart",
  "drop",
];

function App() {
  const [firedEvents, setFiredEvents] = useState([]);
  useEffect(() => {
    const listeners = EVENTS_TO_TEST.map((ev) => ({
      event: ev,
      listener: () => setFiredEvents((events) => [...events, ev]),
    }));
    listeners.forEach((listener) => {
      window.addEventListener(listener.event, listener.listener);
    });

    return () => {
      listeners.forEach((listener) => {
        window.removeEventListener(listener.event, listener.listener);
      });
    };
  }, []);

  const firedEventsSet = new Set(firedEvents);
  return (
    <div className="App">
      <ul>
        {[...firedEventsSet].map((ev) => (
          <li key={ev}>{ev}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
