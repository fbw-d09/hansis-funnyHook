import React, { useState, useEffect } from 'react';

const FunnyEmojiHook = () => {
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const emojis = ['😄', '😆', '😂', '😜', '🤪'];
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const randomEmoji = emojis[randomIndex];
      setEmoji(randomEmoji);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{emoji}</p>
    </div>
  );
};

export default FunnyEmojiHook;