import React, { useState } from 'react';

const ColorPicker = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'cyan', 'aqua', 'azure','Coral'] ;
    const [selectedColor, setSelectedColor] = useState('pink'); // Initialize with the default color

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const outerBoxStyle = {
        backgroundColor: 'purple',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column', // Changed to column
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const innerBoxStyle = {
        backgroundColor: selectedColor,
        width: '40rem',
        height: '30rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: `2px solid ${selectedColor}`,
    };

    return (
        <div style={outerBoxStyle}>
            <h1 style={{ fontWeight: 'bold' }}>Color Picker</h1>
            <div style={innerBoxStyle}>
                <div style={{ display: 'flex' }}>
                    {colors.map((color) => (
                        <div
                            key={color}
                            style={{
                                backgroundColor: color,
                                width: '2rem',
                                height: '2rem',
                                marginRight: '0.5rem',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleColorClick(color)}
                        />
                    ))}
                </div>
                <h3>Pick a color </h3>
            </div>
            
        </div>
    );
};

export default ColorPicker;