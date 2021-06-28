function scuberGreetingForFeet(feet){
  let result;
  if (feet <= 400) {
    result = 'This one is on me!'
  } else if (feet > 2000 && feet < 2499) {
    result = 'I will gladly take your thirty bucks.'
  } else if (feet > 2500) {
    result = 'No can do.'
  }
  return result;
}

function ternaryCheckCity(city){
  let result;
  result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result;
}

function switchOnCharmFromTip(tip){
  let result;
  switch (tip) {
    case tip = 'generous': result = 'Thank you so much.';
    break;
    case tip = 'not as generous': result = 'Thank you.';
    break;
    default: result = 'Bye.';
  }
  return result;
}