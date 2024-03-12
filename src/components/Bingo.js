import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Bingo = () => {
    const [numbersCalled, setNumbersCalled] = useState([]);
    const [bingoCard, setBingoCard] = useState([]);

    const generateBingoCard = () => {
        const min = 1;
        const max = 25;
        const card = [];    
        const allNumbers = Array.from({ length: max }, (_, i) => i + min);
    
        for (let i = allNumbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
        }
    
        for (let i = 0; i < 5; i++) {
            card.push(allNumbers.slice(i * 5, (i + 1) * 5));
        }    
        setBingoCard(card);
    };

    useEffect(() => {
        generateBingoCard();
    }, []);

    const handleNumberClick = (number) => {
        if (!numbersCalled.includes(number)) {
            setNumbersCalled([...numbersCalled, number]);
            setBingoCard(bingoCard.map(row =>
                row.map(cell => cell === number ? 'X' : cell )
            ));
            }
    };

    const renderBingoCard = () => {
        return (
            <Box sx={{display:"flex", justifyContent:"center"}}>
            <table >
                <tbody style={{textAlign:"center"}}>
                    {bingoCard.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} style={{width: "50px", height: "50px", border: "1px solid black", background: (cell !== 'X') ? "pink":"white"}} onClick={() => handleNumberClick(cell)}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table></Box>
        );
    };

    return (
        <div style={{textAlign:"center"}}>
            <h1>Bingo</h1>
            {renderBingoCard()}
            
        </div>
    );
};

export default Bingo;

