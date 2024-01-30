import {IconButton} from "@mui/material";
import axios from "axios";
import {useEffect} from "react";



const Payphone = () => {

    const jsonData = {
        "amount": 100,
        "amountWithoutTax": 100,
        "currency": "USD",
        "clientTransactionId": "PRUEBAS030",//este siempre se debe incrementar
        "lang": "es",
        "responseUrl": window.location.href,
        "cancellationUrl": window.location.href
    };
    // const {id, clientTransactionId} = useParams();
    // const urlConfirm = `https://pay.payphonetodoesposible.com/api/button/V2/Confirm`;
    const authToken = "zp2hBfw6R8EVypUHlBLOffNZKYFWdTxB8XCvOIAEN0TXqEonb71p14PD5PgNwWka4Rjex_tqteF_LnhvdXW1cz639OQMDQPigu7VQuYdx_PPC06NnsJI4lKp3g5f45zPTYGNvfNJiOCDooY2Lruwa3-oA2eAGatBWuqq0_IETWg_XHkQmCTO1Sx1xgPGqIE_1hDWokkscokCN2RVuarhd1NVO2FZA1WmSsIYXo80mRlGb1vtEQyxwzhCNuyuoG_T2DXTh4j7H0dIW9z3AQ0-jShfFlWFJBTTHZRujiTxj3VsSnMkZ-8JXqALzXdEx4SRyGFONw";
    // const [dataId, setDataId] = useState('');
    // useEffect(() => {
    //     // Obtener parámetros de la URL en React
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const transaccion = urlParams.get('id');
    //     const client = urlParams.get('clientTransactionId');
    //     console.log(transaccion);
    //     console.log(client);
    //     // Preparar el objeto de datos JSON
    //     const data = {
    //         id: parseInt(transaccion, 10),
    //         clientTxId: client,
    //     };
    //     // Realizar la solicitud con axios
    //     axios.post('https://pay.payphonetodoesposible.com/api/button/V2/Confirm', data, {
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`
    //         }
    //     })
    //         .then((response) => {
    //             // Manejar la respuesta aquí, response.data contiene la respuesta JSON
    //             console.log(response.data);
    //             console.log(response.data.transactionStatus);
    //             // setDataId(response.data.transactionStatus);
    //         })
    //         .catch((error) => {
    //             // Manejar errores aquí
    //             console.error('Error en la solicitud:', error);
    //         });
    // }, []); // El array vacío [] asegura que useEffect se ejecute solo una vez al montar el componente


    const onClick = () => {
        const url = `https://pay.payphonetodoesposible.com/api/button/Prepare`;
        console.log("url" + url);
        axios.post(url, jsonData, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then((response) => {
                const payWithCardUrl = response.data.payWithCard;
                window.location.href = payWithCardUrl;
                alert("Boton de pago");
                console.log('Imagen guardada con éxito en el servidor.');

                //si el pago fue exitoso
                const urlParams = new URLSearchParams(window.location.search);
                const transaccion = urlParams.get('id');
                const client = urlParams.get('clientTransactionId');
                console.log(transaccion);
                console.log(client);
                // Preparar el objeto de datos JSON
                const data = {
                    id: parseInt(transaccion, 10),
                    clientTxId: client,
                };
                // Realizar la solicitud con axios
                axios.post('https://pay.payphonetodoesposible.com/api/button/V2/Confirm', data, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                })
                    .then((response) => {
                        // Manejar la respuesta aquí, response.data contiene la respuesta JSON
                        console.log(response.data);
                        console.log(response.data.transactionStatus);
                        // setDataId(response.data.transactionStatus);
                    })
                    .catch((error) => {
                        // Manejar errores aquí
                        console.error('Error en la solicitud:', error);
                    });

            })
            .catch((error) => {
                console.error('Error al guardar la imagen en el servidor.', error);
            });




    }

    return (
        <div>
            <div id="pp-button"></div>
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
