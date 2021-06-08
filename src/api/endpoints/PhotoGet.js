import React from 'react'

const PhotoGet = () => {

    const [id, setId] = React.useState('');

    function handleSubmit(event){
        event.preventDefault();
        fetch(`https://dogsapi.origamid.dev/jsob/api/photo/${id}`).then(response => {
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json);
            return json;
        })
    }
    return (
        <form on Submit={handleSubmit}>
            <input
                type="text"
                value={id}
                onChange={({target}) => setId(target.value)}
            />
        </form>
    )
}

export default PhotoGet
