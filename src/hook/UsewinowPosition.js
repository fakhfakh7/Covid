import { useLayoutEffect, useState } from 'react';

function UsewinowPosition(id) {
    const [animation, setAnimation] = useState(false);


    useLayoutEffect(() => {
        function updatePosition() {
            const offetStHeight = window.document.getElementById(id).offsetHeight;
            if (window.pageXOffset > offetStHeight * 0.7) {
                setAnimation(true);
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () =>
            window.removeEventListener('scroll', updatePosition);

    }, [id]);





    return animation;

}

export default UsewinowPosition
