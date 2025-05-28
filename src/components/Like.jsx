import React, { useState } from 'react';

const LikeToggle = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <button 
                onClick={toggleLike} 
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
        </div>
    );
};

export default LikeToggle;