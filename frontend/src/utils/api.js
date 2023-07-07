const urlApi = 'https://mesto.nomoreparties.co/v1/cohort-62'; //адрес сервера где храняться карточки
const tokenApi = '9792b8e2-d3a5-4eb4-90af-3d3354b4d9c2';                // токен пользователя
 class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  getAllCardsData() {
    return this._request(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
  }

  getUserData() {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
  }

  patchUserData(data) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: this._headers,
    })
  }

  postCardData(data) {
    return this._request(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
  }

  changeLikeCardStatus(idImage, isLiked){
if (isLiked) {
  return this.putLike(idImage)
}
else {
  return this.delLike(idImage)
}
  }

  putLike(idImage) {
    return this._request(`${this._url}/cards/${idImage}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
  }

  delLike(idImage) {
    return this._request(`${this._url}/cards/${idImage}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  delCard(idImage) {
    return this._request(`${this._url}/cards/${idImage}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  patchUserAvatar(urlAvatar) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(urlAvatar)
    })
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    else {
      return Promise.reject(`Произошла ошибка: ${res.status}`)
    }
  }
}


const api = new Api({
  url: urlApi,
  headers: {
    'Content-Type': 'application/json',
    authorization: tokenApi,
  }
});

export default api
