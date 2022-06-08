import {React, useState} from 'react';
import QueryResults from '../QueryResults/QueryResults';

const QueryForm = (props) => {
    const countryHandler = (event) => {
        setCountry(event.target.value);
    }

    const stateHandler = (event) => {
        setState(event.target.value);
    }

    const cityHandler = (event) => {
        setCity(event.target.value);
    }

    const pCodeHandler = (event) => {
        setPCode(event.target.value);
    }

    const [country, setCountry] = useState("");
    const [State, setState] = useState("");
    const [City, setCity] = useState("");
    const [PCode, setPCode] = useState("");
    const [query, setQuery] = useState("");

    //move this into Query Results
    function submitHandler(event) {
        event.preventDefault();
        try{
          const options = {
            headers: new Headers({'Access-Control-Request-Method': '*'})
          };
    
          fetch('http://api.zippopotam.us/us/90210', options)
          .then(response => response.json())
          .then(async res =>{ 
            // if(!res.ok){
            //   return res.text().then(text => {throw new Error(text)})
            // }
            console.log(res);
            setQuery(res);
          })
          .catch(err =>{
            console.log(err);   
          });
        }
        catch(error){
          console.log("Error: " + error);
        }
    }

    return (
        <>
            <form>
                Country: <input type="text" onChange={countryHandler}></input>
                State: <input type="text" onChange={stateHandler}></input>
                City: <input type="text" onChange={cityHandler}></input>
                Postal Code: <input type="text" onChange={pCodeHandler}></input>
                <button type="submit" onClick={submitHandler}>Submit</button>
            </form>

            <QueryResults val={query}/>
        </>
    );
};

export default QueryForm;