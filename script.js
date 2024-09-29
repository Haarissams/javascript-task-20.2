// Function to fetch Bitcoin price and market data from CoinLayer API
const access_key = '31a01a960b031eec9bc99d126ca13433'; // Replace this with your valid access key

function fetchBitcoinPrice() {
    // Use correct URL for the CoinLayer API with the access key
    const url = `http://api.coinlayer.com/live?access_key=${access_key}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Check if data was returned successfully
            if (data.success) {
                // Extract Bitcoin (BTC) data from the rates
                const bitcoinData = data.rates.BTC;

                // Format and display the data
                const bitcoinPriceText = `
                    <strong>Bitcoin Price:</strong> $${bitcoinData} <br>
                    <strong>Currency:</strong> ${data.target} <br>
                `;
                document.getElementById('bitcoin-price').innerHTML = bitcoinPriceText;
            } else {
                // Display an error message if API request fails
                document.getElementById('bitcoin-price').innerHTML = 'Failed to fetch data: ' + data.error.info;
            }
        })
        .catch(error => {
            console.error('Error fetching Bitcoin price:', error);
            document.getElementById('bitcoin-price').innerHTML = 'An error occurred while fetching the data.';
        });
}

// Call the function to fetch and display the Bitcoin price
fetchBitcoinPrice();
