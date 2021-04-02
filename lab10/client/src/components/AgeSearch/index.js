import React from "react";

class AgeSearch extends React.Component{

    readAge(event) {

        event.preventDefault();

        let element = document.querySelector("#age");

        fetch("/ages/" + element.value)
        .then((res) => {
            return res.json();
        })

        .then((processed) => {
            let reporting = document.querySelector("reportingArea");

            if(processed.error){
                reporting.innerHTML = processed.error;
            }
            else{
                reporting.innerHTML = processed.age;
            }
        });
        element.value = "";
    }

    render() {
        return(
        <div>
            <form onSubmit={this.readAge}>
            <input id= "age" type="text"/>
            <button>Submit</button>
        </form>
        </div>
        )
    }

}

export default AgeSearch;