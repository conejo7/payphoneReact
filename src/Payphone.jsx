import {IconButton} from "@mui/material";
import axios from "axios";
import {useState} from "react";
import {useParams} from "react-router-dom";


const Payphone = () => {

    const jsonData = {
        "amount": 100,
        "amountWithoutTax": 100,
        "currency": "USD",
        "clientTransactionId": "PRUEBAS027",//este siempre se debe incrementar
        "lang": "es",
        "responseUrl": window.location.href,
        "cancellationUrl": window.location.href
    };
    // const {id, clientTransactionId} = useParams();
    // const urlConfirm = `https://pay.payphonetodoesposible.com/api/button/V2/Confirm`;
    const authToken = "8dDl8Kac7004pWWn0cgPwyznqOvNZ_fEzdDCWYnXHQZT3bJglNZjqsxmaEovFa1P2rxcjSZH2ydqS8YdjCUg1RgQJsT8YKzGQD9VthPvWEWop3rQZau1U8hAB3gg_OJm88qx3B-BByZIMqnlYY6sfPso4WdWGJ4VVuZfS6MQeiDyMYMfZdNZcX0-YFp3GkNtC-sqKlz5-yOHt2hModyUxh_A7TQjP0bTynN6ryg32OrJM-AheTs6LxB8CM9x0gf3T08Csu2rFe3a3152CZ57ImVIuAKxjAwDt1MWHaZJ06lcK6kuxmQgAUvI1IU7MX8VLEMKFg";

    // const [dataId, setDataId] = useState('');



    const onClick = () => {


        const urlParams = new URLSearchParams(window.location.search);
        const transaccion = urlParams.get('id');
        const client = urlParams.get('clientTransactionId');
        console.log(transaccion);
        console.log(client);

        // Preparar el objeto de datos JSON
        // const data = {
        //     id: parseInt(transaccion, 10),
        //     clientTxId: client,
        // };

        // Realizar la solicitud con axios
        axios.post('https://pay.payphonetodoesposible.com/api/button/V2/Confirm', jsonData, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then((response) => {
                // Manejar la respuesta aquí, response.data contiene la respuesta JSON
                console.log(response.data);
                console.log(response.data.transactionStatus);
                // setDataId(response.data.transactionStatus);
                // dispatch( startNewSubscription() );
            })
            .catch((error) => {
                // Manejar errores aquí
                console.error('Error en la solicitud:', error);
            });


    }

    return (
        <div>
            <IconButton
                onClick={onClick}
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': {backgroundColor: 'error.main', opacity: 0.9},
                    position: 'fixed',
                    right: 350,
                    bottom: 50
                }}
            >
                SUSCRÍBETE
            </IconButton>
        </div>
    );
};

export default Payphone;
