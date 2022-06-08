import React from "react";

const QueryResults = (props) =>{

    function renderCode(){
        //console.log(typeof(props.val))
        //console.log(props.val);
        var places = props.val.places;
        console.log(places[0]);
        return (
            <div>
                {Object.keys(places[0]).map((result, i) =>
                    <div key={i}>{result}: {places[0][result]} </div>
                )}
            </div>
        );
    }

    let content = props.val === ""
        ?<div></div>
        : renderCode();

    return (
        <>
            {content}
        </>
    );
}

export default QueryResults;