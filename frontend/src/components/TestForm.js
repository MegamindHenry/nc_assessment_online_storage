import React, { useState, useContext } from 'react';
import { AppContext } from './appContext';

function TestForm() {
  const [inputValue, setInputValue] = useState(null);

  // use context
  const context = useContext(AppContext);

  function updateInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    console.log('Your input value is: ' + inputValue);

    const url = `${context.appConfig.backendBaseUrl}/`;
    const data = {
      inputValue: inputValue,
      // localAccountId: this.context.localAccountId
    };
    
    console.log('Your backendBaseUrl is ');
    console.log('===');
    console.log(context.appConfig.backendBaseUrl);
    console.log('===');
    // console.log('Your localAccountId is ');
    // console.log('===');
    // console.log(this.context.localAccountId);
    // console.log('===');
    console.log('Your url is ');
    console.log('===');
    console.log(url);
    console.log('===');
    console.log('Your data is ');
    console.log('===');
    console.log(data);
    console.log('===');

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log('Your response is ');
      console.log('===');
      console.log(response);
      console.log('===');
      return response.json();
    }).then((data) => {
      console.log('Success:', data);
    }).catch((error) => {
      console.error('Error:', error);
    });

  }

  return (
    <div>
      <label>Value</label>
      <input type="text" onChange={updateInput}></input>
      <input type="submit" onClick={handleSubmit} ></input>
    </div>
  );
}


export default TestForm;