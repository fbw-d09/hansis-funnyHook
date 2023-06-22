import React from 'react';
import FunnyEmojiHook from './FunnyEmojiHook';
import ClockHook from './ClockHook';

const App = () => {
  return (
    <div>
      <h1>Lustige Emojis</h1>
      <FunnyEmojiHook />
      <ClockHook />
    </div>
  );
};

export default App;