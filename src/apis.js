import axios from "axios";
import { useState } from "react";

const baseUrl = 'http://127.0.0.1:8000'


export const createUser = ({username, email, password, firstName, lastName}) => {
    axios({
        method: 'post',
        url: `${baseUrl}/create-user/`,
        data: {
            username,
            email,
            password,
            first_name: firstName,
            last_name: lastName,
        }
    })
    .then(response => {
        console.log('CREATE USER HERE!!: ', response)
    })
    .catch(error => console.log('ERROR', error))
}


export const getToken = async ({auth, username, password}) => {
    try {
        const response = await axios.post(`${baseUrl}/token/`, {
            username,
            password
        });
        console.log('GET TOKEN: ', response.data.access);
        BookApi({auth: {accessToken: response.data.access}})
        auth.setAccessToken(response.data.access);
    } catch (error) {
        return console.log('ERROR ', error);
    }
}


export const fetchUser = ({auth}) => {
    axios({
        method: 'get',
        url: `${baseUrl}/profile/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    }).then (response => {
        console.log('FETCH USER: ', response)
    }).catch(error => console.log('ERROR: ', error))
}


export const BookApi = ({auth}) => {
    axios({
        method: 'get',
        url: `${baseUrl}/book/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    }).then (response => {
        console.log('FETCH BOOK : ', response)
    }).catch(error => console.log('ERROR: ', error))
}