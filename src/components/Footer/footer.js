import React, {useState, useEffect} from 'react';

export function Footer(props) {

  const [ year, setYear ] = useState("")
  useEffect(() => {
    const timer = setTimeout(() => {
      setYear(props.year)
        }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer style={{ position: 'absolute', bottom: 0, color: 'white', padding: '15px' }}>
      footer da Brisanet, { year }
    </footer>
  );
}