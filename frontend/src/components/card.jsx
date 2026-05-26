import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react' 
import CardInfo from './cardInfo'

function Card({ searchTerm, setSearchTerm }) {
  

        // logocolor
    const colors=["#eae3fb","#fbe3e3","#caf6e4","#e3fbe9","#e3fbe9","#e3fbe9","#e3fbe9","#e3fbe9","#e3fbe9","#e3fbe9"];
    const textColors=["#6b21a8","#991b1b","#047857","#065f46","#065f46","#065f46","#065f46","#065f46","#065f46","#065f46"];

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const getRandomTextColor = () => {
        const randomIndex = Math.floor(Math.random() * textColors.length);
        return textColors[randomIndex];
    };

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });

    }, []);

    const searchfilter = (data) => {
        if (!data) return [];
        return data.filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) 
            || user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    const filteredData = searchfilter(userData);
    
    return (
        <div className=" mx-auto p-5  gap-5 flex justify-center items-center flex-wrap">
            {filteredData && filteredData.map(user => (
                <CardInfo 
                    key={user.id} 
                    data={user} 
                    logoColor={getRandomColor()} 
                    textColor={getRandomTextColor()} 
                />
            ))}
        </div>
    )
}

export default Card
