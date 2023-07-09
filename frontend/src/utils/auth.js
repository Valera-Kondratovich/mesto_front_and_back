import React from "react";

const BASE_URL = 'https://api.mesto.kondratovich.nomoredomains.work'

export const register =(password, email )=>{
  return fetch(`${BASE_URL}/signup`,{
    method:'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email })
  })

}

export const login =(password, email )=>{
  return fetch(`${BASE_URL}/signin`,{
    method:'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email })
  })

}

export const getContent =(jwt)=>{
  return fetch(`${BASE_URL}/users/me`,{
    method:'GET',
    headers: {

      "Content-Type": "application/json",
    "Authorization" : `Bearer ${jwt}`
    },
  })


}
