export const logger = (store) => (next) => (action) => {
  next(action);
}

export const featuring = (store) => (next) => (_action) => {

  const featured = [{ name: 'Juanito' }, ..._action.action.payload]
  const updatedActionInfo = {..._action, action: {..._action.action, payload: [...featured]}};
  next(updatedActionInfo);
};

export const nameUpCase = (store) => (next) => (action) => {
  console.log(action);
  if(action.type !== 'SET_POKEMONS') return

  const upName = [...action.payload];

  const replacedFirstLetter = upName.map(p => ({
    name: `${p.name.at(0).toUpperCase()}${p.name.substring(1, p.length)}`,
    image: p.image,
    types: `${p.types.map(t => ` ${t.at(0).toUpperCase()}${t.substring(1, t.length)}`)}`.trim(),
  }));

  const updatedActionInfo = {...action, payload: [...replacedFirstLetter]};
  next(updatedActionInfo);
};
