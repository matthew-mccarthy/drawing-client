import React, { useState, useEffect } from 'react';

const withAutoResize = <T extends {}>(
    Wrapped: React.FC<T>,
    mapToProps: (height: number, width: number) => object
) => React.forwardRef((props: any, ref: any) => {

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const refreshDimensions = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        refreshDimensions();
        window.addEventListener("resize", refreshDimensions);
    });

    return <Wrapped {...mapToProps(height, width)} {...props} ref={ref} />;
});

export default withAutoResize;
