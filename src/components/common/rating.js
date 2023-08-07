import * as React from "react";

const Rating = (props) => {
    const { star } = props;

    const arrayRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step);

    return (
        <div className="rate">
            {star && arrayRange(1, star, 1).map((val, ind) => <label key={ind} title="text" className="rate-high highlight"></label>)}
            {star && arrayRange(1, 5 - star, 1).map((val, ind) => <label key={ind} title="text" className="rate-high"></label>)}
        </div>
    )
};

export default Rating;