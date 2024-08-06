import React, { useState, useEffect } from 'react';

const App = () => {
  const imageUrl = "https://dog.ceo/api/breeds/image/random";
  const [img, setImg] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(imageUrl)
      .then((response) => response.json())
      .then((data) => {
        setImg(data.message);
        setIsLoaded(true);
      });
  }, []);

  // if the data hasn't been loaded, show a loading indicator
  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <img src={img} alt="A Random Dog" />
    </div>
  );
};

export default App;
