import React from 'react';
export default function Pet({
    name,
    animal,
    breed
}) {
    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, name),
    //     React.createElement("h2", {}, animal),
    //     React.createElement("h2", {}, breed),
    // ]);

    return (
        <div>
            <h1>{name}</h1>
            <h1>{animal}</h1>
            <h1>{breed}</h1>
        </div>
    );

};