export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state')
    if (serializedData === null){
      return undefined 
    }
    return (JSON.parse(serializedData))
  } catch (error) {
    return undefined 
  }
}

export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state)
    localStorage.setItem('state', serializedData)
  } catch (error) {
	console.log("el error es", error);    
  }
}