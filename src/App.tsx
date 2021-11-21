import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Loading from "./components/Loading";
import { CountryType } from "./types";

function App() {
    const [countries, setCountries] = useState<CountryType[]>([]); //Statede countrylerden olusan bir dizi gelecek bize
    const [loading, setLoading] = useState<boolean>(false);
    const getCountries = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get<CountryType[]>(
                "https://restcountries.com/v2/all"
            ); //Countrylerden olusan bir dizi gelecek bize
            setCountries(data);
        } catch {
            console.log("Datalari alirken hata olustu...");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCountries();
    }, []); //useEffect bir fonksiyon birde dependency array alir. Dependency array useEffect icindeki fonksiyonun ne zaman calisacagini belirtir

    console.log(countries);
    return (
        <div>
            <Loading loading={loading}>
                {countries.map((country) => {
                    return <Country key={country.name} country={country} />;
                })}
            </Loading>
        </div>
    );
}
export default App;
