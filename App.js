import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tailwind, { useDeviceContext } from "twrnc";

export default function App() {
  useDeviceContext(tailwind, { withDeviceColorScheme: false });

  const boxData = [
    { color: "bg-purple-800", image: "https://forums.pokemmo.com/uploads/monthly_2023_06/giphy.gif.ea7ff5ef25b78d0ef5bb21050b84e4dd.gif" },
    { color: "bg-red-800", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG9pZm41NWgyMXo2YnRkOHBlaThtajFna3N2YjZ4anlteDYwNzd4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0ILLVvPp8d64Jd6/giphy.gif" },
    { color: "bg-cyan-600 ", image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmZycHJ6eHlwemRtZWpvcTRyeGJwaDJvZ25qeXVhZ2h0cXFhNWR2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WOb8EeFziTQNE02WXs/giphy.gif" },
    {color: "bg-yellow-600", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmp5ZzUycXg4bDNra3d5Znp2MHk0dWh2Y3RhcHNqbGw3eDdmNjZqMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zKRlxWqdP4NTok3Ppl/giphy.gif"},  
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeBoxColor = () => {
    const nextColorIndex = (currentColorIndex + 1) % boxData.length;
    setCurrentColorIndex(nextColorIndex);
  };

  return (
    <View style={tailwind`flex h-full items-center justify-center ${boxData[currentColorIndex].color}`}>
      <Text style={tailwind`text-gray-100 text-5xl font-bold`}>Cambiar Colores</Text>
      <View style={tailwind`border-2 bg-gray-700 border-black rounded-lg p-3 mt-5 shadow-2xl`}>
        <View style={tailwind`border-2 bg-black border-black rounded-lg p-2`}>
          <Image source={{ uri: boxData[currentColorIndex].image }} style={tailwind`w-90 h-90`} />
        </View>
      </View>
      <TouchableOpacity
        style={tailwind`bg-black w-28 h-10 py-3 px-6 rounded mt-6`}
        onPress={changeBoxColor}
      >
        <Text style={tailwind`text-white font-bold`}>Presionalo</Text>
      </TouchableOpacity>
    </View>
  );
}
