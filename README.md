<h1 align="center">
    Crwn Clothing
</h1>

Crwn Clothing is an **e-commerce** website built with the Flux design architectural pattern.
Customers can register an account, log in and select items(add/remove from cart) whatever they would like and can make payment to purchase items on checkout.

## Technology Stack

**Frontend:** React, Redux, Sass  
**Database:** Firestore

## To-Do

- [ ] Progressive Web App

## Getting Started

### Setting-up the project

- Download and install Node.js v16.13.0
- Download and install Git.
- Fork the Repository.
- Clone the repository to your local machine `$ git clone https://github.com/<your-github-username>/crwn-clothing.git`
- Change directory to crwn-clothing `$ cd crwn-clothing`
- Install dependencies `$ yarn install`  
- Set firebase config **:** Replace the `config` variable in `firebase.utils.js` with your own config object from the firebase dashboard.
- Set stripe publishable key **:** Set the `publishableKey` variable in the `stripe-button.component.jsx` with your own publishable key from the stripe dashboard.
- Run the server `$ yarn start`
