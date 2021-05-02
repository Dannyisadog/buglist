import React from 'react';
import $ from 'jquery';
import {Route, Redirect } from 'react-router-dom';

async function logout() {
    const csrfToken = $('meta[name="csrf-token"]')[0].content;
    return fetch('logout', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": csrfToken
      },
    })
    .then(data => data.json())
}

const LogoutButton = () => {

    const handleSubmit = async e => {
        e.preventDefault();
        const result = await logout();
        if (result.status == 'success') {
            localStorage.removeItem('user_token');
            <Route>
                <Redirect to="/login" />
            </Route>
        }
    }

    return (
        <form action="logout" method="post" onSubmit={handleSubmit}>
            <button>
                logout
            </button>
        </form>
    );
}

export default LogoutButton;