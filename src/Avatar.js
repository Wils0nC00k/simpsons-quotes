import React, { Component } from 'react';

const Avatar = ({ image, firstName, lastName}) => (
    <figure>
        <img src={image} alt={firstName} />
        <figcaption>My name is: {`${firstName} ${lastName}`}</figcaption>
    </figure>
);
// with JSX if you want to add JSX tags you need to use parenthesis
// {props.name} dynamic and becomes a template
// return?? 
export default Avatar;


// what is the parent child relationship??
// its a dynamic simple template
// Component is App.js 
// function? - has a return. Don't need to show more
// class? - has a function called render and a return. Can add a copnstructor and a state defined