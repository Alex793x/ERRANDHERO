import * as Location from 'expo-location';

export const getCurrentLocation = async () => {
    const getCountryFromCoordinates = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
            );
            const data = await response.json();

            if (data && data.address && data.address.country) {
                console.log("Country:", data.address.country);
                return data.address.country;
            } else {
                console.log("Country not found");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return '';
        }

        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);

        // Call the function to get the country from coordinates
        return await getCountryFromCoordinates(latitude, longitude);
    } catch (error) {
        console.log('Error getting location:', error);
        return '';
    }
};
