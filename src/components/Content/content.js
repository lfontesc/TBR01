import React, { useState ,useEffect } from 'react';

export function Content(props) {
  
  const fontSize = 36;
  const [ name, setName ] = useState()

  useEffect(() => {
    const timer = setTimeout(() => {
      setName(props.nome);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ color: 'white', fontSize: fontSize }}>
      Parabéns { name }, você finalizou o seu mini-teste.
    </div>
  );
}