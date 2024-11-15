import { View, Text } from 'react-native';
import React from 'react';

type Props = {
    value: string;
    unit: string;
};

const TemperatureDisplay = ({ value, unit }: Props) => {
    // Afficher une valeur vide ou une valeur par défaut si value est vide ou NaN
    const displayValue = value ? value : '0';

    return (
        <Text style={{ fontSize: 80, fontWeight: 'bold', color: 'white' }}>
            {displayValue} {unit}
        </Text>
    );
};

export default TemperatureDisplay;
