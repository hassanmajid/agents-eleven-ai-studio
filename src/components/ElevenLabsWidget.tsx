import { useEffect, useRef } from 'react';

const ElevenLabsWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('elevenlabs-convai')) {
      const widget = document.createElement('elevenlabs-convai');
      widget.setAttribute('agent-id', 'agent_0401k9vt3aqxef2r710y5jt66mm8');
      containerRef.current.appendChild(widget);
    }
  }, []);

  return <div ref={containerRef} />;
};

export default ElevenLabsWidget;
