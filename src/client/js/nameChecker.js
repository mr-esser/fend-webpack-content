function checkForName(inputText) {
  console.log('::: Running checkForName :::', inputText);
  const names = [
    'Picard',
    'Janeway',
    'Kirk',
    'Archer',
    'Georgiou'
  ];

  if (names.includes(inputText)) {
    alert('Welcome, Captain!');
  }
}

export {checkForName};
