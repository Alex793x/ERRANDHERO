import { useEffect, useState } from "react";
import * as Font from "expo-font";

export const useMontserratFont = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                MontserratFont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
            });
            setFontLoaded(true);
        }
        loadFont();
    }, []);

    if (fontLoaded) {
        return fontLoaded;
    }
};
