import React, { Component } from 'react';


class D3Logo extends Component {
    render() {
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="90" height="90" viewBox="-10 -10 116 111">
                <defs>
                    <path id="deethree" d="M0,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75zm36.2510,0h32a27.75,27.75 0 0 1 21.331,45.5a27.75,27.75 0 0 1 -21.331,45.5h-32a53.6895,53.6895 0 0 0 18.7464,-20h13.2526a7.75,7.75 0 1 0 0,-15.5h-7.75a53.6895,53.6895 0 0 0 0,-20h7.75a7.75,7.75 0 1 0 0,-15.5h-13.2526a53.6895,53.6895 0 0 0 -18.7464,-20z"/>
                </defs>
                <use stroke="black" stroke-width="20" fill="none" xlinkHref="#deethree"/>
                <use fill="white" xlinkHref="#deethree"/>
            </svg>
        );
    }
}

export default D3Logo;
