export default (state=null, action) => {
  let {type, payload} = action;
  switch(type) {
  case 'PHOTO_CREATE': return payload;
  case 'PHOTO_READ': return payload;
  case 'PHOTO_UPDATE': return payload;
  case 'PHOTO_DELETE': return payload;
  default: return state;
  }
};
