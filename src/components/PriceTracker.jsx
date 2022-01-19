import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row, Table } from 'reactstrap';

const Coin = () => {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.error("Error"));
  }, [])

  return (
    <div className="Coin">
      <Container>
        <Row>
          <Col md="12">
            <Table dark hover className="mt-5">
              <thead>
                <tr>
                  <th>Market cap rank</th>
                  <th>Crypto Name</th>
                  <th>Crypto Symbol</th>
                  <th>Current Price</th>
                  <th>Market cap change</th>
                  <th>Last Update</th>

                </tr>
              </thead>
              {coins.map(coin => {
                return (
                  <tbody key={coin.id}>
                    <tr>
                      <td>{coin.market_cap_rank}</td>
                      <td>
                        <img src={coin.image} alt="Coin image" className="coinImg" />
                        {coin.name}
                      </td>
                      <td>{coin.symbol}</td>
                      <td>{coin.current_price}</td>
                      {coin.market_cap_change_percentage_24h < 0 ? (
                        <td className="red">
                          {coin.market_cap_change_percentage_24h.toFixed(2)}%
                        </td>
                      ) : (
                        <td className="green">
                          {coin.market_cap_change_percentage_24h.toFixed(2)}%
                        </td>
                      )}
                      <td>{coin.last_updated}</td>
                    </tr>
                  </tbody>
                )
              })}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Coin;