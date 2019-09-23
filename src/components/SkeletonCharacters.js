import React from 'react';

import './SkeletonCharacters.css';
import Skeleton from 'react-loading-skeleton';

function SkeletonCharacters({ tam }) {
    let skeleton = [];
    let children = [];
    for (let i = 0; i < tam; i++) {
        children.push(
            <li key={i} >
                <div className="card-img">
                    <Skeleton count={1} height={300} />
                </div>
                <footer>
                    <Skeleton count={5} />
                </footer>
            </li>
        );
    }
    skeleton.push(<ul>{children}</ul>);
    return (skeleton);
}
export default SkeletonCharacters;