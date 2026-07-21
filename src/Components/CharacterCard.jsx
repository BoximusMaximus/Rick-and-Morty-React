import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CharacterCard() {



    const [characterData, setCharacterData] = useState(null)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    async function getCharacterData(characterID=undefined){
        if (!characterID){
            characterID = getRandomInt(826)
        }
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterID}`)
        return response.data
    }
    async function handleClick(){
        const characterData = await getCharacterData()
        setCharacterData(characterData)
    }

    useEffect(()=>{
        console.log(characterData)
    },[characterData])



  return (
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={characterData ? characterData.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzxWyKSwIFu_27w-6ZjbfHFimV274RrSDhoPXVD3h2Q&s=10"}/>
        <Card.Body>
            <Card.Title>{characterData ? characterData.name : "Rick Sanchez"}</Card.Title>
            <Button variant="primary" onClick={handleClick}>Get new Character</Button>
        </Card.Body>
    </Card>
  );
}
