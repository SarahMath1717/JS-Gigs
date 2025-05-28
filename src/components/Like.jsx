import React, { useState } from 'react';

const LikeToggle = ({ liked, onToggle}) => {
    return (
        <button 
            onClick={onToggle} 
            style={{
                fontSize: '2rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
            }}
            aria-label={liked ? "Unlike" : "Like"}
        >
            {liked ? '❤️' : '🖤'}
        </button>
    );
};

export default LikeToggle;