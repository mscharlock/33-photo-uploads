import superagent from 'superagent';

export const photoCreate = photo => ({
  type: 'PHOTO_CREATE',
  payload: photo,
});

export const photoRead = photo => ({
  type: 'PHOTO_READ',
  payload: photo,
});

export const photoUpdate = photo => ({
  type: 'PHOTO_UPDATE',
  payload: photo,
});

export const photoDelete = photo => ({
  type: 'PHOTO_DELETE',
  payload: null,
});


export const photoCreateRequest = photo => (dispatch, getState) => {
  let {auth} = getState();
  //^ Not sure if I need this
  return superagent.post(`${__API_URL__}/profiles`)
  .set('Authorization', `Bearer ${auth}`)
  .field('desc', photo.desc)
  .attach('imageFile', photo.file)
  .then(res => {
    localStorage.userId = res.body._id;
    dispatch(photoCreate(res.body));
    return res;
  });
};
