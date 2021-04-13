const utilFunctions = {
  getETDateString: getETDateString
}

function getETDateString(date, options={}) {
  let epochtime = new Date(date).getTime();
  epochtime += 1000 * 60 * 60 * 5; // Add 5 hours to epoch timestamp
  return new Date(epochtime).toLocaleDateString('en-US', options)
}

export default utilFunctions;