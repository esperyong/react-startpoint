const logger = store => next => action => {
  //console.group(action.type)
  console.info('will dispatch', action)
  let result = next(action)
  console.log('after dispatch',store.getState().toJS() )
  //console.groupEnd(action.type)
  return result
}

export default logger;